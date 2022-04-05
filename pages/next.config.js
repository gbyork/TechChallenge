module.exports = {
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
  
      return config
    }
 
  }
  module.exports = {
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}