var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  return gulp.src('unoptimized_images/*')
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest('app/assets/images'));
});

gulp.task('default', gulp.series('images'));
