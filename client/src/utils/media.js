export const resolveMediaUrl = (url) => {
  if (!url) {
    return "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=1000&q=80";
  }
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const uploadUrl = process.env.REACT_APP_UPLOAD_URL || "";
  return `${uploadUrl}${url}`;
};
