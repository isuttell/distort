/**
 * Minify JS
 *
 * ---------------------------------------------------------------
 *
 * Minifies distory.js and then creates a fancy banner on the top
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');

  grunt.config.set('uglify', {
    distort: {
      options: {
        banner: '/*!\n<%= asciify_title %> ' + pkg.name + ' ' + pkg.version + ' <' + pkg.homepage + '>\n Contributor(s): ' + pkg.contributors + '\n Last Build: ' + grunt.template.today("yyyy-mm-dd") + '\n*/\n',
        report: 'min',
        mangle: {
          except: ['Distort']
        }
      },
      files: {
        'distort.min.js': ['distort.js']
      }
    }
  });

};
