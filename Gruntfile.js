module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	watch: {
	    gruntfile: {
		files: "Gruntfile.js",
		tasks: ["default"]
	    },
	    src: {
		files: "src/*.js",
		tasks: ["babel"],
	    },
	},
	babel: {
	    options: {
		sourceMap: true,
		presets: ["@babel/preset-env", "@babel/preset-react"],
		plugins: ["@babel/plugin-transform-regenerator"],
	    },
	    dist: {
		files: {
		    'lib/docs.js': 'src/docs.js'
		},
	    },
	},
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    // Default task(s).
    grunt.registerTask('default', ['babel']);

};
