
module.exports = function(grunt) {
	grunt.initConfig({
		systemjs: {
					options: {
						sfx: true,
						baseURL: "./target",
						configFile: "./target/config.js",
						minify: true,
						build: {
						  mangle: false
						}
					},
					dist: {
						files: [{
							"src":  "./target/src/init.js",
							"dest": "./target/bundles/app.min.js"
						}]
					}
				}
	});
};