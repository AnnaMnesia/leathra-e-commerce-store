'use strict';

const catalogData = require("../../client/src/data/catalog.json");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const actionsToEnable = [
      "api::product.product.find",
      "api::product.product.findOne",
      "api::category.category.find",
      "api::category.category.findOne",
      "api::sub-category.sub-category.find",
      "api::sub-category.sub-category.findOne",
    ];

    const publicRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({ where: { type: "public" } });

    if (!publicRole) {
      return;
    }

    const knex = strapi.db.connection;

    for (const action of actionsToEnable) {
      let permission = await knex("up_permissions").where({ action }).first();

      if (!permission) {
        const insertResult = await knex("up_permissions").insert({
          action,
          created_at: new Date(),
          updated_at: new Date(),
        });

        const permissionId = Array.isArray(insertResult)
          ? insertResult[0]
          : insertResult;

        permission = { id: permissionId, action };
      }

      const roleLink = await knex("up_permissions_role_links")
        .where({
          permission_id: permission.id,
          role_id: publicRole.id,
        })
        .first();

      if (!roleLink) {
        await knex("up_permissions_role_links").insert({
          permission_id: permission.id,
          role_id: publicRole.id,
          permission_order: 1,
        });
      }
    }

    const productCount = await strapi.entityService.count("api::product.product");

    if (productCount > 0) {
      return;
    }

    const categorySeed = [
      { key: 1, title: "Women", desc: "Women's leather pieces, from jackets to statement layers." },
      { key: 2, title: "Men", desc: "Men's leather essentials designed for everyday performance." },
      { key: 3, title: "Extras", desc: "Accessories and utility leather goods." },
      { key: 4, title: "Shoes", desc: "Leather boots and footwear with durable construction." },
    ];

    const categoryIdMap = {};

    for (const category of categorySeed) {
      const created = await strapi.entityService.create("api::category.category", {
        data: {
          title: category.title,
          desc: category.desc,
          publishedAt: new Date(),
        },
      });

      categoryIdMap[category.key] = created.id;
    }

    const subCategoryIdMap = {};

    for (const subCategory of catalogData.subCategories) {
      const created = await strapi.entityService.create("api::sub-category.sub-category", {
        data: {
          title: subCategory.title,
          categories: subCategory.categoryIds.map((id) => categoryIdMap[id]),
          publishedAt: new Date(),
        },
      });

      subCategoryIdMap[subCategory.id] = created.id;
    }

    for (const product of catalogData.products) {
      await strapi.entityService.create("api::product.product", {
        data: {
          title: product.title,
          desc: product.desc,
          price: product.price,
          oldPrice: product.oldPrice,
          isNew: product.isNew,
          type: product.type,
          categories: product.categoryIds.map((id) => categoryIdMap[id]),
          sub_categories: product.subCategoryIds.map((id) => subCategoryIdMap[id]),
          publishedAt: new Date(),
        },
      });
    }
  },
};
