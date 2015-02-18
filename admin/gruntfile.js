module.exports = function(grunt) {

  grunt.registerTask('default', [ 'concat:js', 'uglify:js', 'sass:style', 'cssmin:css' ]);
  grunt.registerTask('watch', [ 'watch' ]);
  grunt.registerTask('test', ['jshint']);
 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          '../javascript/*.js'
        ],
        dest: '../public/js/<%= pkg.name %>.min.js'
      },
    },
    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("mm-dd-yyyy") %> */\n'
      },
      js: {
        files: {
          '../public/js/<%= pkg.name %>.min.js': ['../public/js/<%= pkg.name %>.min.js']
        }
      }
    },
    jshint: {
      files: ['gruntfile.js', '../public/js/<%= pkg.name %>.min.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    sass: {
      style: {
        files: {
          "../public/css/style.css": "../sass/styles.scss"
        }
      }
    },
    cssmin : {
      css:{
        src: '../public/css/style.css',
        dest: '../public/css/style.min.css'
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
        tasks: ['sass:style', 'cssmin:css'],
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
 
};
