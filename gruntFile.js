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


		sass: {
			dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'auto'
                },
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['style.scss'],
					dest: 'static/css',
					ext: '.css'
				}]
			},

            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['style.scss'],
                    dest: 'static/css',
                    ext: '.css'
                }]
            }
		},


        browserify: {
            dev: {
                options: {
                    // Add source maps
                    transform: ["babelify"],
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: [
                    'js/**/*.js'
                ],
                dest: 'static/js/build.js'
            },
            prod: {
                options: {
                    browserifyOptions: {
                        debug: false
                    }
                },
                src: '<%= browserify.dev.src %>',
                dest:'static/js/build.js'
            }
        },

        clean: ["js/es5/"],

        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['modules/*.js', 'main.js'],
                    dest: 'js/es5',
                    ext: '.js'
                }]
            }
        },


		uglify: {
			js: {
                options: {
                    sourceMap: true
                },
				files: {
					'static/js/build.min.js': ['<%= browserify.prod.dest %>']
				}
			}
		},


		cssmin: {
			css: {
				files: {
					'css/style.min.css': ['css/style.css']
				}
			}
		},


		watch: {
            css: {
                files: ['scss/**/*.scss', 'gruntFile.js'],
                tasks: ['sass']
            },

            js: {
                files: ['js/main.js', 'js/modules/*.js', 'gruntFile.js'],
                tasks: ['clean', 'browserify']
            }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', ['sass:dev', 'clean', 'browserify:dev', 'watch']);
    grunt.registerTask('build', ['sass', 'cssmin', 'clean', 'browserify', 'uglify', 'watch']);
};