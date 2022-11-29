const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  configureWebpack:{
		plugins: [
			AutoImport({
			  resolvers: [ElementPlusResolver()],
			}),
			Components({
			  resolvers: [ElementPlusResolver()],
			}),
		  ],
    },
  transpileDependencies: true,
  publicPath:'./',
	lintOnSave:false,
	css: {
    // 全局配置 utils.scs，详细配置参考 vue-cli 官网
    loaderOptions: {
      sass: {
        // prependData: `@import "@/styles/utils.scss";`,
        additionalData: `@use "@/styles/utils.scss" as * ;`
      },
    },
  }
})
