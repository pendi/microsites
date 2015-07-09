var path = require('path'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    gulpWatch = require('gulp-watch');

gulp.task('js', function() {

    var js = [
        "./vendor/jquery/dist/jquery.js",
        "./vendor/owl/owl.carousel.js",
        "./themes/js/main.js"
    ];

    gulp.src(js)
        .pipe(concat('js.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/themes/js'));

});

gulp.task('css', function() {

    var css = [
        "./vendor/normalize.css/normalize.css",
        "./vendor/lato/css/lato.css",
        "./vendor/owl/owl-carousel/owl.carousel.css",
        "./themes/css/main.css"
    ];

    var font = [
        "./vendor/lato/font/*",
    ];

    var img = [
        "./vendor/owl/owl-carousel/*.gif",
        "./vendor/owl/owl-carousel/*.png"
    ];

    gulp.src(css)
        .pipe(concat('css.min.css'))
        .pipe(minifyCSS({keepBreaks: false}))
        .pipe(gulp.dest('./dist/themes/css'));

    gulp.src(font)
        .pipe(gulp.dest('./dist/themes/font'));

    gulp.src(img)
        .pipe(gulp.dest('./dist/themes/css'));

});

gulp.task('img', function() {

    var img = [
        "./themes/img/**/*.jpg",
        "./themes/img/**/*.jpeg",
        "./themes/img/**/*.png",
        "./themes/img/**/*.gif",
    ];

    gulp.src(img)
        .pipe(gulp.dest('./dist/themes/img'));

});

gulp.task('src', function() {

    var src = [
        "./*.png",
        "./*.ico",
        "./*.txt"
    ];

    gulp.src(src)
        .pipe(gulp.dest('./dist'));

});

gulp.task('html', function() {

    var html = [
        "./*.html"
    ];

    gulp.src(html)
        // .pipe(minifyHTML({cdata: true, conditionals: true}))
        .pipe(gulp.dest('./dist'));

});

gulp.task('default', ['js', 'css', 'img', 'src', 'html']);

gulp.task('watch', ['default'], function() {
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch('vendor/**/*.js', ['js']);
    gulp.watch('css/**/*.css', ['css']);
});