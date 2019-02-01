module.exports = function (grunt) {
  
  const sass = require('node-sass');
  require('load-grunt-tasks')(grunt);
  
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
                    { src: 'css/hackathon.css', dest: 'css/hackathon.css' },
                    { src: 'css/join.css', dest: 'css/join.css' }
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
            'css/hackathon.css': 'scss/hackathon.scss',
            'css/join.css': 'scss/join.scss'
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
    }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default tasks.
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', ['sass', 'uncss', 'cssmin'])

};