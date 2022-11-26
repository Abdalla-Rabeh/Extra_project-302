const gulp = require('gulp')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require ('sass'))
const livereload = require('gulp-livereload')
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')
const notify = require('gulp-notify')
const zip = require('gulp-zip')
gulp.task('html', async () => {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
    .pipe(notify("End Task File HTML"));
})
gulp.task('css' , async () => {
    return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
    .pipe(notify("End Task File CSS"));
})
gulp.task('js', async () =>{
    return gulp.src('src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
    .pipe(notify("End Task File JavaScript"));
})
gulp.task('zip',async () => {
    return gulp.src('dist/**/*.*')
    .pipe(zip('website.zip'))
	.pipe(gulp.dest('.'))
    .pipe(notify("End Task Website.zip"));
})
gulp.task('watch', async () => {
    livereload.listen();
    gulp.watch('src/**/*.html',gulp.series('html'))
    gulp.watch('src/scss/**/*.scss', gulp.series('css'))
    gulp.watch('src/js/*.js', gulp.series('js'))
    gulp.watch('dist/**/*.*', gulp.series('zip'))
})