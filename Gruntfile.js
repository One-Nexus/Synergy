module.exports = function(grunt) {
    
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),
        
        clean: {
            dist: {
                src: 'dist'
            }
        },
                
        concat: {   
            js: {
                src:[
                    'src/js/_modular.js',
                    'src/js/functions/*.js'
                ],
                dest: 'dist/modular.js',
            }, 
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
                dest: 'dist/_modular.scss',
            }
        },
        
        sass: {
            test: {
                options: {
                    style: 'expanded'
                },
                files: {
                    ['test/test.css']: 'test/test.scss'
                }
            } 
        },
        
        watch: {
            js: {
                files: 'src/js/**/*.js',
                tasks: ['concat:js', 'notify:js'],
                options: {
                    spawn: false
                },
            },
            scss: {
                files: 'src/scss/**/*.scss',
                tasks: ['concat:scss', 'notify:scss'],
                options: {
                    spawn: false
                }
            }
        },
        
        notify: {
            js: {
                options: {
                    title: 'Scripts Compiled',
                    message: 'All scripts have been successfully compiled!'
                }
            },
            scss: {
                options: {
                    title: 'Styles Compiled',
                    message: 'All styles have been successfully compiled!'
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
        'notify:dist'
    ]);
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');

}; // function(grunt)