/*
 * grunt-combine-files
 * https://github.com/varunsridharan/grunt-combine-files
 *
 * Copyright (c) 2018 Varun Sridharan
 * Licensed under the GPL license.
 */

'use strict';

module.exports = function ( grunt ) {

	// Project configuration.
	grunt.initConfig( {
		jshint: {
			all: [ 'Gruntfile.js', 'tasks/*.js' ],
			options: { jshintrc: '.jshintrc', reporterOutput: '' }
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: [ 'tmp' ]
		},

		// Configuration to be run (and then tested).
		combine_files: {
			append_test: {
				options: {},
				files: {
					'tmp/append_test.js': [ 'test/fixtures/append.js' ]
				}
			},

			prepend_test: {
				options: {},
				files: {
					'tmp/prepend_test.js': [ 'test/fixtures/prepend.js' ]
				}
			},
			inline_test: {
				options: {},
				files: {
					'tmp/inline_test.js': [ 'test/fixtures/inline.js' ]
				}
			},
			nested_test: {
				options: {},
				files: {
					'tmp/nested_test.js': [ 'test/fixtures/nested.js' ]
				}
			},
			all_test: {
				options: {},
				files: {
					'tmp/all_test.js': [ 'test/fixtures/append.js', 'test/fixtures/inline.js', 'test/fixtures/prepend.js', 'test/fixtures/nested.js' ]
				}
			},
			all: {
				files: {
					'tmp/all.js': [ 'test/fixtures/*.js' ],
				}
			}
		},

	} );

	// Actually load this plugin's task(s).
	grunt.loadTasks( 'tasks' );

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-nodeunit' );

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask( 'test', [ 'clean', 'combine_files' ] );

	// By default, lint and run all tests.
	grunt.registerTask( 'default', [ 'jshint', 'test' ] );

};
