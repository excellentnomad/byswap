var gulp = require('gulp');

gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('app/temp/fonts'));
})
