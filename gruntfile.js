module.exports = function(grunt) {
	
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	
	/* Grunt Sass----------------------------------
	DOC:https://www.npmjs.com/package/grunt-sass */
	sass:{
		options:{
			sourceMap: false
		},//option
		dist:{
			files:{
				'css/styles.css' : 'assets/scss/styles.scss' 
			}//files	 
		}//dist
	},//sass
	
	/* Grunt Contrib Watch----------------------------------
	DOC:https://www.npmjs.com/package/grunt-contrib-watch */
	watch:{
		sass:{
			files:[
				'assets/scss/**/*.scss'
			],//files
			tasks:[
				'sass'
			]//tasks
		},//sass
		scripts:{
			files:[
				'assets/js/*.js'
			],//files
			tasks:[
				'uglify'
			]//tasks
		},//scripts
	},//watch
	
	/* Grunt Contrib Uglify----------------------------------
	DOC:https://www.npmjs.com/package/grunt-contrib-uglify */
	
	uglify:{
		my_target:{
				files:{
					'js/scripts.js' : ['node_modules/jquery/dist/jquery.js','assets/js/scripts.js']
			}
		}//my target
	}//uglify
});	
	//Loading Grunt plugins and task
	
	/* when you don't have load-grunt-tasks
	grunt.loadNpmTasks('grunt');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	*/
	require('load-grunt-tasks')(grunt);
	//Custom tasks
	grunt.registerTask('default', ['watch']);
	
};