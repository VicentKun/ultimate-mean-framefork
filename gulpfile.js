var gulp         = require('gulp'),
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss    = require('gulp-minify-css'),
    imagemin     = require('gulp-imagemin'),
    livereload   = require('gulp-livereload'),
    rename       = require('gulp-rename');

gulp.task('styles', function() {
        return sass('public/css/*.scss', { style: 'expanded' })
                .pipe(autoprefixer('last 2 version'))
                .pipe(gulp.dest('public/css'))
                .pipe(rename({suffix: '.min'}))
                .pipe(minifycss())
                .pipe(gulp.dest('public/css'));
                //.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('images', function() {
        return gulp.src('public/img/**/*')
                .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
                .pipe(gulp.dest('public/img'));
                /*.pipe(notify({ message: 'Images task complete' }))*/
});

gulp.task('default', function() {
        gulp.start('styles', 'images');
});

gulp.task('watch', function() {

	// Watch .scss files
        gulp.watch('public/css/*.scss', ['styles']);
	
	// Watch image files
        gulp.watch('public/img/**/*', ['images']);
        
        //To LiveReload listen.
        livereload.listen();
        
        // Watch any files in dist/, reload on change
        gulp.watch(['public/**']).on('change', livereload.changed);
        gulp.watch(['views/**']).on('change', livereload.changed);
	
});