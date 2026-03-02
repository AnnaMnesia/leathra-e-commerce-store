import catalogData from "./catalog.json";

const mapImage = (url) => ({
  data: {
    attributes: {
      url,
    },
  },
});

const products = catalogData.products.map((item) => ({
  id: item.id,
  attributes: {
    title: item.title,
    desc: item.desc,
    price: item.price,
    oldPrice: item.oldPrice,
    isNew: item.isNew,
    type: item.type,
    categories: { data: item.categoryIds.map((id) => ({ id })) },
    sub_categories: { data: item.subCategoryIds.map((id) => ({ id })) },
    img: mapImage(item.img),
    img2: mapImage(item.img2),
  },
}));

const subCategories = catalogData.subCategories.map((item) => ({
  id: item.id,
  attributes: {
    title: item.title,
    categories: { data: item.categoryIds.map((id) => ({ id })) },
  },
}));

const extractNumber = (url, pattern) => {
  const match = url.match(pattern);
  return match ? Number(match[1]) : null;
};

const extractManyNumbers = (url, pattern) =>
  Array.from(url.matchAll(pattern)).map((match) => Number(match[1]));

export const mockFetch = async (url) => {
  if (url.startsWith("/sub-categories")) {
    const categoryId = extractNumber(url, /\[filters]\[categories]\[id]\[\$eq]=(\d+)/);
    const data = categoryId
      ? subCategories.filter((item) =>
          item.attributes.categories.data.some((category) => category.id === categoryId)
        )
      : subCategories;

    return { data };
  }

  if (url.startsWith("/products/")) {
    const productId = extractNumber(url, /\/products\/(\d+)/);
    const data = products.find((item) => item.id === productId) || null;
    return { data };
  }

  if (url.startsWith("/products")) {
    const typeMatch = url.match(/\[filters]\[type]\[\$eq]=([^&]+)/);
    const categoryId = extractNumber(url, /\[filters]\[categories]\[id](?:\[\$eq])?=(\d+)/);
    const subCategoryIds = extractManyNumbers(url, /\[filters]\[sub_categories]\[id]\[\$eq]=(\d+)/g);
    const maxPrice = extractNumber(url, /\[filters]\[price]\[\$lte]=(\d+)/);
    const sortMatch = url.match(/sort=price:(asc|desc)/);

    let filtered = [...products];

    if (typeMatch) {
      filtered = filtered.filter((item) => item.attributes.type === decodeURIComponent(typeMatch[1]));
    }

    if (categoryId) {
      filtered = filtered.filter((item) =>
        item.attributes.categories.data.some((category) => category.id === categoryId)
      );
    }

    if (subCategoryIds.length > 0) {
      filtered = filtered.filter((item) =>
        subCategoryIds.some((subCategoryId) =>
          item.attributes.sub_categories.data.some((subCategory) => subCategory.id === subCategoryId)
        )
      );
    }

    if (maxPrice !== null) {
      filtered = filtered.filter((item) => item.attributes.price <= maxPrice);
    }

    if (sortMatch?.[1] === "asc") {
      filtered.sort((a, b) => a.attributes.price - b.attributes.price);
    } else if (sortMatch?.[1] === "desc") {
      filtered.sort((a, b) => b.attributes.price - a.attributes.price);
    }

    return { data: filtered };
  }

  return { data: null };
};
