const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: ["quasar"],

	pluginOptions: {
		quasar: {
			importStrategy: "kebab",
			rtlSupport: false,
		},
	},
	chainWebpack: (config) => {
		config.plugin("html").tap((args) => {
			args[0].title = "纯电动车、太阳能和清洁能源 | 特斯拉中国";
			return args;
		});
	},
});
