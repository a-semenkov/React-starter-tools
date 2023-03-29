export function cacheFiles() {
  cache = {};
  require
    .context('./assets/img/', false, /\.svg$/)
    .keys()
    .forEach((key) => {
      cache[key] = reqDir(key);
    });
  return cache;
}
