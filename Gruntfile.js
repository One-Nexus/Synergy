module.exports = function(grunt) {
    
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            dist: {
                src: 'dist'
            }
        },
                
        concat: {
            scss: {
                src: [
                    'src/scss/_config.scss',
                    'src/scss/mixins/_module.scss',
                    'src/scss/mixins/_component.scss',
                    'src/scss/mixins/_modifier.scss',
                    'src/scss/mixins/_overwrite.scss',
                    'src/scss/mixins/_overwrite-component.scss',
                    'src/scss/mixins/_extend.scss',
                    'src/scss/mixins/_context.scss',
                    'src/scss/mixins/_option.scss',
                    'src/scss/mixins/_value.scss',
                    'src/scss/functions/_config.scss',
                    'src/scss/functions/_map-keys.scss',
                    'src/scss/functions/_map-set.scss',
                    'src/scss/functions/_map-set-deep.scss',
                    'src/scss/functions/_map-merge-deep.scss',
                    'src/scss/functions/_option.scss',
                    'src/scss/functions/_setting.scss',
                    'src/scss/functions/_this.scss',
                ],
                dest: 'dist/_synergy.scss',
            },
            js: {
                src:[
                    'src/js/synergy.js',
                    'src/js/functions/*.js'
                ],
                dest: 'dist/synergy.js',
            }
        },
        
        sass: {
            test: {
                files: {
                    'unit-testing/scss/tests.css': 'unit-testing/scss/tests.scss'
                },
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                }
            } 
        },

        scsslint: {
            options: {
                configFile: '.scss-lint.yml',
                //bundleExec: true
            },
            target: [
                'src/scss/**/*.scss'
            ]
        },

        jshint: {
            all: [
                'Gruntfile.js', 
                'src/js/**/*.js', 
                'unit-testing/js/**/*.js'
            ]
        },

        mochacli: {
            scss: ['unit-testing/scss/tests.js']
        },

        sassdoc: {
            default: {
                src: 'src/scss',
                options: {
                    dest: 'docs/sass'
                }
            },
        },

        jsdoc: {
            dist : {
                src: 'src/js',
                options: {
                    destination: 'docs/js'
                }
            }
        },
        
        watch: {
            scss: {
                files: 'src/scss/**/*.scss',
                tasks: [
                    'concat:scss',
                    'scsslint',
                    'mochacli:scss',
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
                    'concat:js', 
                    'jshint',
                    'jsdoc',
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
        'clean',
        'concat',
        'sass',
        'lint',
        'test',
        'docs',
        'notify:dist'
    ]);
        
    // Lint
    grunt.registerTask('lint', [
        'scsslint',
        'jshint'
    ]);
        
    // Test
    grunt.registerTask('test', [
        'mochacli:scss'
    ]);
        
    // Docs
    grunt.registerTask('docs', [
        'sassdoc',
        'jsdoc'
    ]);
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');

};