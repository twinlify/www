module.exports = {
  esbuild: {
    loader: {
      '.js': 'jsx',
      '.md': 'text'
    }
  },
  sitemap: {
    publicPath: './public',
    hostname: 'https://twinlify.com',
    links: [{url: '/', lastmod: new Date()}]
  }
};
