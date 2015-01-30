module.exports = function(grunt) {
    grunt.initConfig({    
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
              sourcemap: true
            },
            dist: {
                files: {
                    "css/main.css": "css/sass/styles.scss"
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['css/sass/*.scss'],
                tasks: ['sass'],
                sourceComments: 'normal'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);
};