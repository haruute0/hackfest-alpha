module.exports = function(grunt) {
    const sass = require('node-sass')
    require('load-grunt-tasks')(grunt)

    grunt.initConfig({
        uncss: {
            dist: {
                options : {
                    ignore : ['canvas', '.background']
                },
                files: [
                    { src: 'index.html', dest: 'css/hackathon.css' },
                    { src: 'login.html', dest: 'css/login.css' },
                    { src: 'area-peserta.html', dest: 'css/area-peserta.css' },
                    { src: 'pendaftaran.html', dest: 'css/join.css' }
                ]
            },
        },
        cssmin: {
            dist: {
                files: [
                    { src: 'css/hackathon.css', dest: 'css/hackathon.css' },
                    { src: 'css/join.css', dest: 'css/join.css' },
                    { src: 'css/login.css', dest: 'css/login.css' },
                    { src: 'css/area-peserta.css', dest: 'css/area-peserta.css' },
                ],
            },
        },
        watch: {
            files: 'scss/*.scss',
            tasks: ['sass'],
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
            },
            dist: {
                files: {
                    'css/hackathon.css': 'scss/hackathon.scss',
                    'css/join.css': 'scss/join.scss',
                    'css/login.css': 'scss/login.scss',
                    'css/area-peserta.css': 'scss/area-peserta.scss'
                },
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['css/*.css', '*.html'],
                },
                options: {
                    watchTask: true,
                    server: './',
                },
            },
        },
    })

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss')
    grunt.loadNpmTasks('grunt-contrib-cssmin')
    grunt.loadNpmTasks('grunt-browser-sync')
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')

    // Default tasks.
    grunt.registerTask('default', ['browserSync', 'watch'])
    grunt.registerTask('build', ['sass', 'uncss', 'cssmin'])
}
