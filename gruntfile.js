module.exports = function(grunt) {
	
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json')
	
});	
	//Loading Grunt plugins and task
	
	/* when you don't have load-grunt-tasks
	grunt.loadNpmTasks('grunt');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	*/
	require('load-grunt-tasks')(grunt);
	//Custom tasks
	grunt.registerTask('default', []);
	
};