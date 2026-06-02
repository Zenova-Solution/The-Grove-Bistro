const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '/The-Grove-Bistro'
const basePath = rawBasePath.endsWith('/') && rawBasePath !== '/' ? rawBasePath.slice(0, -1) : rawBasePath

export const withBasePath = (path: string) => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
