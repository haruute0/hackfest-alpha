
module.exports = function (grunt) {

  const sass = require('node-sass');

require('load-grunt-tasks')(grunt);


    const mozjpeg = require('imagemin-mozjpeg');

    grunt.initConfig({
        uncss: {
            dist: {
                files: [
                    { src: 'index.html', dest: 'css/hackathon.css' }
                ]
            }
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'css/hackathon.css', dest: 'css/hackathon.css' }
                ]
            }
        ,
    },
    watch: {
      files: 'scss/*.scss',
      tasks: ['sass']
    },
    sass: {
        options: {
          implementation: sass,
          sourceMap: true
        },
        dist: {
          files: {
            'css/hackathon.css': 'scss/hackathon.scss'
          }
      }
    },
    browserSync: {
      dev: {      
        bsFiles: {
        src : [
          'css/*.css',
          '*.html'
        ]
      },
      options: {
        watchTask: true,
        server: './'
      }
      }
    },
    imagemin: {
        png: {
          options: {
            optimizationLevel: 7
          },
          files: [
            {
              expand: true,
              cwd: 'images-raw/', // cwd is 'current working directory'
              src: ['**/*.png'],
              dest: 'images/',
              ext: '.png'
            }
          ]
        },
        jpg: {
          options: {
            progressive: true
          },
          files: [
            {
              expand: true, // tell Grunt where to find our images and where to export them to.
              cwd: 'images-raw/',
              src: ['**/*.jpg'],
              dest: 'images/',
              ext: '.jpg'
            }
          ]
        }
      }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks.
    grunt.registerTask('default', ['browserSync', 'watch']);

};