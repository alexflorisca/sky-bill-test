module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Lint all javascript files
		jshint: {
		  // define the files to lint
		  files: ['gruntfile.js', 'js/**/*.js'],
		  // configure JSHint (documented at http://www.jshint.com/docs/)
		  options: {
		      // more options here if you want to override JSHint defaults
		    globals: {
		      jQuery: true,
		      console: true,
		      module: true,
		      angular: true
		    }
		  }
		},

		/* Compile SASS files */
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},

		// Uglify js file
		uglify: {
			js: {
				files: {
					'js/main.min.js': ['js/main.js %>']
				}
			},
		},

		cssmin: {
			css: {
				files: {
					'css/style.min.css': ['css/style.css']
				}
			}
		},


		// Watch
		watch: {
		  	files: ['js/**/*.js', 'scss/**/*.scss'],
		  	tasks: ['sass', 'cssmin', 'jshint', 'uglify']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'cssmin', 'jshint', 'uglify', 'watch']);
};