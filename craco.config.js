const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      // 约定：使用@sass表示全局SASS样式所在路径
      // 在sass中使用
      '@scss': path.resolve(__dirname, 'src/styles')
    }
  }
}
