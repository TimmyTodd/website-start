module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          '../javascript/*.js'
        ],
        dest: '../public/js/main.min.js'
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          '../public/js/main.min.js': ['../public/js/main.min.js']
        }
      }
    },
    sass: {
      style: {
        files: {
          "../public/css/main.css": "../sass/styles.scss"
        }
      }
    },
    watch: {
      js: {
        files: ['../javascript/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['../sass/*.scss'],
        tasks: ['sass:style'],
        options: {
          livereload: true,
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
 
};
