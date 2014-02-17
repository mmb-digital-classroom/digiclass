module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'source/static/styles/app.css': 'scss/app.scss'
        }        
      }
    },

	concat: {
		options: {
			separator: ';',
		},
		dist: {
			src: [
				'bower_components/jquery/jquery.js',
				'bower_components/foundation/js/foundation.js',
				'js/app.js'],
			dest: 'source/static/scripts/app.js'
		}
	},

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      },

	  html: {
	  	files: 'source/**/*.html',
		options: {
			livereload: true
		}
	  },

	  js: {
	  	files: 'js/**/*.js',
		tasks: ['concat'],
		options: {
			livereload: true
		}
	  }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('build', ['sass', 'concat']);
  grunt.registerTask('default', ['build','watch']);
}
