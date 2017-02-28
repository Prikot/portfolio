'use strict';

module.exports = function() {
	$.gulp.task('copy_fonts', function() {
		return $.gulp.src(['source/fonts/**/*', './bower/font-awesome/fonts/*'], { since: $.gulp.lastRun('copy_fonts') })
			.pipe($.gulp.dest($.config.root + '/assets/fonts'))
			.pipe($.gulp.dest($.config.root_php + '/assets/fonts'));
	});
};