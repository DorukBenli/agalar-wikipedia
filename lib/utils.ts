export const getAssetPath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/agalar-wikipedia' : '';
  return `${basePath}${path}`;
};
