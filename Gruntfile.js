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
                    // vendor
                    'vendor/Sass-Boost/dist/_sass-boost.scss',
                    'vendor/Sass-JSON/dist/_sass-json.scss',
                    // config
                    'src/scss/_config.scss',
                    // utilities
                    'src/scss/utilities/_config.scss',
                    'src/scss/utilities/_enabled.scss',
                    'src/scss/utilities/_module-tree.scss',
                    'src/scss/utilities/_option.scss',
                    'src/scss/utilities/_remove-components.scss',
                    'src/scss/utilities/_remove-modifiers.scss',
                    'src/scss/utilities/_setting.scss',
                    'src/scss/utilities/_this.scss',
                    'src/scss/utilities/_value-enabled.scss',
                    // mixins
                    'src/scss/mixins/_module.scss',
                    'src/scss/mixins/_component.scss',
                    'src/scss/mixins/_modifier.scss',
                    'src/scss/mixins/_overwrite.scss',
                    'src/scss/mixins/_overwrite-component.scss',
                    'src/scss/mixins/_extend.scss',
                    'src/scss/mixins/_context.scss',
                    'src/scss/mixins/_option.scss',
                    'src/scss/mixins/_value.scss'
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

        scsslint: {
            options: {
                configFile: '.scss-lint.yml'
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sassdoc');
    grunt.loadNpmTasks('grunt-scss-lint');

};