module.exports = function(grunt) {
    
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            default: {
                src: 'dist'
            },
            dist: {
                src: 'dist/synergy.js'
            }
        },
                
        concat: {
            scss: {
                src: [
                    // vendor
                    'node_modules/Sass-Boost/dist/_sass-boost.scss',
                    // config
                    'src/scss/_config.scss',
                    // utilities
                    'src/scss/utilities/_config.scss',
                    'src/scss/utilities/_css-properties.scss',
                    'src/scss/utilities/_enabled.scss',
                    'src/scss/utilities/_get-styles.scss',
                    'src/scss/utilities/_module-tree.scss',
                    'src/scss/utilities/_option.scss',
                    'src/scss/utilities/_remove-components.scss',
                    'src/scss/utilities/_remove-modifiers.scss',
                    'src/scss/utilities/_selector.scss',
                    'src/scss/utilities/_setting.scss',
                    'src/scss/utilities/_strip-glue.scss',
                    'src/scss/utilities/_this.scss',
                    'src/scss/utilities/_value-enabled.scss',
                    // mixins
                    'src/scss/mixins/_module.scss',
                    'src/scss/mixins/_component.scss',
                    'src/scss/mixins/_modifier.scss',
                    'src/scss/mixins/_extend.scss',
                    'src/scss/mixins/_context.scss',
                    'src/scss/mixins/_option.scss',
                    'src/scss/mixins/_value.scss'
                ],
                dest: 'dist/_synergy.scss',
            }
        },

        scsslint: {
            options: {
                configFile: '.scss-lint.yml'
            },
            dist: [
                'src/scss/**/*.scss'
            ]
        },

        browserify: {
            options: {
                transform: [['babelify', {presets: ['es2015']}]]
            },
            dist: {
                src: 'src/js/_synergy.js',
                dest: 'dist/synergy.js'
            }
        },

        uglify: {
            dist: {
                src: 'dist/synergy.js',
                dest: 'dist/synergy.min.js'
            }
        },

        jshint: {
            options: {
                esversion: 6
            },
            dist: [
                'Gruntfile.js', 
                'src/js/**/*.js', 
                'unit-testing/js/**/*.js'
            ]
        },

        mochaTest: {
            options: {
                reporter: 'spec'
            },
            scss: {
                src: ['unit-testing/scss/tests.js']
            },
            js: {
                options: {
                    require: ['babel-core/register']
                },
                src: ['unit-testing/js/tests.js']
            }
        },

        sassdoc: {
            dist: {
                src: 'src/scss',
                options: {
                    dest: 'docs/sass'
                }
            },
        },

        jsdoc: {
            dist : {
                src: ['src/js/**/*.js'],
                options: {
                    destination: 'docs/js'
                }
            }
        },
        
        watch: {
            scss: {
                files: 'src/scss/**/*.scss',
                tasks: [
                    'scsslint',
                    'mochaTest:scss',
                    'concat:scss',
                    'sassdoc', 
                    'notify:scss'
                ],
                options: {
                    spawn: false
                }
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: [
                    'jshint',
                    'mochaTest:js',
                    'browserify',
                    'uglify',
                    'jsdoc',
                    'clean:dist',
                    'notify:js'
                ],
                options: {
                    spawn: false
                },
            }
        },
        
        notify: {
            scss: {
                options: {
                    title: 'Styles Compiled',
                    message: 'All styles have been successfully compiled!'
                }
            },
            js: {
                options: {
                    title: 'Scripts Compiled',
                    message: 'All scripts have been successfully compiled!'
                }
            },
            dist: {
                options: {
                    title: 'App Built',
                    message: 'Your app has been successfully built!'
                }
            }
        }

    });
    
    //Default
    grunt.registerTask('default', [
        'compile',
        'watch',
    ]);
        
    // Compile
    grunt.registerTask('compile', [
        'clean:default',
        'lint',
        'test',
        'browserify',
        'uglify',
        'concat',
        'docs',
        'clean:dist',
        'notify:dist'
    ]);
        
    // Lint
    grunt.registerTask('lint', [
        'scsslint',
        'jshint'
    ]);
        
    // Test
    grunt.registerTask('test', [
        'mochaTest'
    ]);
        
    // Docs
    grunt.registerTask('docs', [
        'sassdoc',
        'jsdoc'
    ]);

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');

};