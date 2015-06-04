var gulp = require('gulp')
var html2js = require('../index')
    
gulp.task('html2js', function(){
    return gulp.src('templates/**/*.html')
        .pipe(html2js())
})

gulp.task('watch', ['html2js'], function(){
    gulp.watch('templates/**/*.html', ['html2js'])
})
