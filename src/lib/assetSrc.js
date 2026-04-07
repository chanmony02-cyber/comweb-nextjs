export function assetSrc(asset) {
  if (typeof asset === "string") return asset;
  return asset?.src || asset?.default || "";
}
