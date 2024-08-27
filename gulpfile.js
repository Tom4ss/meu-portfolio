import gulp from 'gulp';
import cssnano from 'gulp-cssnano';
import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';
import htmlmin from 'gulp-htmlmin';

export const minifyHTML = () => {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
      .pipe(gulp.dest('dist'));
  };

export const minifyCSS = () => {
  return gulp.src('src/styles/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/src/styles/css'));
};

export const optimizeImages = () => {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/src/images'));
};

export const minifyJS = () => {
  return gulp.src('src/scripts/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/src/scripts.js'));
};

export default gulp.series(minifyCSS, optimizeImages, minifyJS, minifyHTML);