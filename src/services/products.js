import { products } from "@/data/products/products";

export function getProducts() {
  return [...products];
}

export function getProductById(id) {
  const productId = Number(id);
  if (Number.isNaN(productId)) return null;

  return products.find((product) => product.id === productId) ?? null;
}

export function getProductsByCategory(category) {
  if (!category || category === "all") {
    return getProducts();
  }

  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts(ids = []) {
  if (!ids.length) return [];

  return products.filter((product) => ids.includes(product.id));
}

export function getRelatedProducts(category, currentId, limit = 4) {
  if (!category) return [];

  return products
    .filter((product) => product.category === category && product.id !== currentId)
    .slice(0, limit);
}
