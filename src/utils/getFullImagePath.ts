export const getFullImagePath = (path: string | undefined) => new URL(`/src/assets/${path}`, import.meta.url).href;
