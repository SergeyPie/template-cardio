const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const pngquant = require('imagemin-pngquant');
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');
const gulpif = require('gulp-if'); //фильтрует подключенные фаилы к index.html
const uglify = require('gulp-uglify'); //минифицирует js
const minifyCss = require('gulp-minify-css'); //минифицирует css
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const concat = require('gulp-concat');



// STYLES
gulp.task("scss", function () {
  return gulp.src([
    './node_modules/flexboxgrid/dist/flexboxgrid.min.css',
    './src/scss/**/*.scss'
  ])
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(cssnano())
    // .pipe(rename({ suffix: '.min' }))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(browserSync.stream());
});


// SCRIPTS
gulp.task('scripts', function () {
  return gulp.src([
    'src/js/**/*.js'
  ])
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task complete' }))
    .pipe(browserSync.stream());
});


// IMAGES
gulp.task('images', function () {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(browserSync.stream());
});


gulp.task('server', ['scss', 'scripts', 'images'], function () {
  browserSync.init({
    server: {
      baseDir: "./"
    },
    port: 1234,
    ui: {
      port: 1235
    }
  });
  gulp.watch('src/scss/**/*.scss', ['scss']);
  gulp.watch('src/js/**/*.js', ['scripts']);
  gulp.watch('src/img/**/*', ['images']);
  gulp.watch("*.html").on('change', browserSync.reload);
});



// BUILD TASKS

gulp.task('clean', function () {
  return gulp.src('dist', { read: false })
    .pipe(clean())
    .pipe(notify({ message: 'Clean task complete' }))
});

gulp.task('build', ['clean'], function () {
  return gulp.src('src/*.html')
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});


// gulp.task('default', function(done) {
//   console.log('Test Default Task');
//   done();
// });