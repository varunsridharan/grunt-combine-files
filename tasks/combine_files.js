/*
 * grunt-combine-files
 * https://github.com/varunsridharan/grunt-combine-files
 *
 * Copyright (c) 2018 Varun Sridharan
 * Licensed under the GPL license.
 */

'use strict';

module.exports = function ( grunt ) {
	grunt.registerMultiTask( 'combine_files', 'Combine Files', function () {
		var options        = this.options( {
				append: 'grunt-append',
				prepend: 'grunt-prepend',
				inline: 'grunt-inline',
			} ),
			path           = require( 'path' );
		this.append_regex  = ( false !== options[ 'append' ] ) ? new RegExp( '(\\/\\/@(?:' + options[ 'append' ] + ')? (.*?)(.*))', 'g' ) : false;
		this.prepend_regex = ( false !== options[ 'append' ] ) ? new RegExp( '(\\/\\/@(?:' + options[ 'prepend' ] + ')? (.*?)(.*))', 'g' ) : false;
		this.inline        = ( false !== options[ 'append' ] ) ? new RegExp( '(\\/\\/@(?:' + options[ 'inline' ] + ')? (.*?)(.*))', 'g' ) : false;
		var $this          = this,
			combine_helper = {
				append: function ( file_source, return_file, $abs ) {
					if ( false !== $this.append_regex ) {
						var $m;
						var $append = '';
						var $regex  = new RegExp( $this.append_regex );
						while ( ( $m = $regex.exec( file_source ) ) !== null ) {
							if ( $m.index === $regex.lastIndex ) {
								$regex.lastIndex++;
							}
							if ( typeof $m[ 3 ] !== "undefined" ) {
								try {
									var $file_content = grunt.file.read( $abs + '/' + $m[ 3 ] );
									$file_content     = combine_helper.append( $file_content, $file_content, path.dirname( $abs + '/' + $m[ 3 ] ) );
									$file_content     = combine_helper.inline( $file_content, $file_content, path.dirname( $abs + '/' + $m[ 3 ] ) );
									$file_content     = combine_helper.prepend( $file_content, $file_content, path.dirname( $abs + '/' + $m[ 3 ] ) );
									$append           = ( $append === '' ) ? $file_content : $append + '\r' + $file_content;
									//return_file       = return_file.replace( $m[ 1 ], '' );
								} catch ( e ) {
									grunt.log.warn( 'File ' + JSON.stringify( $m ) + ' Not Found' );
								}
							}
						}
						return $append + '\r' + return_file;
					}
					return return_file;
				},
				prepend: function ( file_source, return_file, $abs ) {
					if ( false !== $this.prepend_regex ) {
						var $m;
						var $prepend = ' ';
						var $regex   = new RegExp( $this.prepend_regex );
						while ( ( $m = $regex.exec( file_source ) ) !== null ) {
							if ( $m.index === $regex.lastIndex ) {
								$regex.lastIndex++;
							}
							if ( typeof $m[ 3 ] !== "undefined" ) {
								try {
									var $file_content = grunt.file.read( $abs + '/' + $m[ 3 ] );
									$file_content     = combine_helper.append( $file_content, $file_content, path.dirname( $abs + '/' + $m[ 3 ] ) );
									$file_content     = combine_helper.inline( $file_content, $file_content, path.dirname( $abs + '/' + $m[ 3 ] ) );
									$file_content     = combine_helper.prepend( $file_content, $file_content, path.dirname( $abs + '/' + $m[ 3 ] ) );
									$prepend          = ( '' === $prepend ) ? $file_content : $prepend + '\r' + $file_content;
									//return_file       = return_file.replace( $m[ 1 ], '' );
								} catch ( e ) {
									grunt.log.warn( 'File ' + JSON.stringify( $m ) + ' Not Found' );
								}
							}
						}
						return return_file + $prepend;
					}
					return return_file;
				},
				inline: function ( file_source, return_file, $abs ) {
					if ( false !== $this.inline ) {
						var m;
						var $regex = new RegExp( $this.inline );
						while ( ( m = $regex.exec( file_source ) ) !== null ) {
							if ( typeof m[ 3 ] !== "undefined" ) {
								try {
									var $file_content = grunt.file.read( $abs + '/' + m[ 3 ] );
									$file_content     = combine_helper.append( $file_content, $file_content, path.dirname( $abs + '/' + m[ 3 ] ) );
									$file_content     = combine_helper.inline( $file_content, $file_content, path.dirname( $abs + '/' + m[ 3 ] ) );
									$file_content     = combine_helper.prepend( $file_content, $file_content, path.dirname( $abs + '/' + m[ 3 ] ) );
									return_file       = return_file.replace( m[ 1 ], $file_content );
								} catch ( e ) {
									grunt.log.warn( 'File ' + m[ 3 ] + '  | "' + m[ 0 ] + '" Not Found' );
								}
							}
						}
					}
					return return_file;
				},
				array_filter: function ( arr, func ) {
					var retObj = {},
						k;
					func       = func || function ( v ) {
						return v;
					};

					if ( Object.prototype.toString.call( arr ) === '[object Array]' ) {
						retObj = [];
					}

					for ( k in arr ) {
						if ( func( arr[ k ] ) ) {
							retObj[ k ] = arr[ k ];
						}
					}

					return retObj;
				},
				filter_help: function ( el ) {
					if ( el.length === 0 ) {
						return false;
					}
					return true;
				}
			};

		this.files.forEach( function ( Mfile ) {
			if ( Mfile.src.length === 0 ) {
				grunt.log.error( 'File Source Not Found ' + JSON.stringify( Mfile ) );
				return false;
			}
			var src = Mfile.src.filter( function ( filepath ) {
				if ( !grunt.file.exists( filepath ) ) {
					grunt.log.warn( 'Source File"' + filepath + '" not found' );
					return false;
				}
				return true;
			} ).map( function ( filepath, i ) {
				if ( grunt.file.isDir( filepath ) ) {
					return;
				}
				var file_source = grunt.file.read( filepath ),
					return_file = file_source,
					$abs        = path.dirname( filepath );
				return_file     = combine_helper.inline( file_source, return_file, $abs );
				return_file     = combine_helper.append( file_source, return_file, $abs );
				return_file     = combine_helper.prepend( file_source, return_file, $abs );
				return return_file;
			} );

			grunt.file.write( Mfile.dest, combine_helper.array_filter( src, combine_helper.filter_help ) );
		} );
	} );
};
