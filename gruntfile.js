module.exports = function (grunt) {

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
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default tasks.
    grunt.registerTask('default', ['uncss', 'cssmin']);

};