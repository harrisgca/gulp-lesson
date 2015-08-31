//npm install -g gulp INSTALL GLOBALLY for CLI
// npm install --save-dev gulp INSTALL LOCALLY
//create gulpfile.js


//************************
//write a default task

// var gulp = require('gulp');
// gulp.task('default', function(){
//   console.log('hello world');
// })

//*****************************

//http://gulpjs.com/plugins/ GULP PLUGINS
//npm install --save-dev gulp-uglify
//create a random front-end folder
//run 'gulp minify' to show you can specify a task name

// var gulp = require('gulp');
// var uglify = require('gulp-uglify')

// gulp.task('minify', function(){
//     gulp.src('./front-end/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('public/javascripts'));
// });

//********************

//running multiple tasks
//create a second task
//pass the list of tasks as an array

// var gulp = require('gulp');
// var uglify = require('gulp-uglify')

// gulp.task('minify', function(){
//     gulp.src('./front-end/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('public/javascripts'));
// });

// gulp.task('example', function(){
//   console.log('This is an example');
// })

// gulp.task('default',['minify', 'example']);

//********************
//gulp watch
//show them the individual task first then add to default
// var gulp = require('gulp');
// var uglify = require('gulp-uglify')

// gulp.task('minify', function(){
//     gulp.src('./front-end/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('public/javascripts'));
// });

// gulp.task('example', function(){
//   console.log('This is an example');
// });

// gulp.task('watch', function(){
//   gulp.watch(['./front-end/*.js'], ['minify'])
// })

// // gulp.task('default',['minify', 'example']);
// gulp.task('default',['minify', 'example','watch']);


//*******************************************
//ADDING SASS

// var gulp = require('gulp');

// var uglify = require('gulp-uglify')
// var sass = require('gulp-sass');

// gulp.task('minify', function(){
//     gulp.src('./front-end/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('public/javascripts'));
// });

// gulp.task('example', function(){
//   console.log('This is an example');
// })

// gulp.task('sass', function () {
//   gulp.src('./front-end/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./public/stylesheets'));
// });


// gulp.task('watch', function(){
//   gulp.watch(['./front-end/*.js', './front-end/*.scss'], ['minify', 'sass'])
// })

// // gulp.task('default',['minify', 'example']);
// gulp.task('default',['minify', 'example', 'sass','watch']);

//**************************
var gulp = require('gulp');
var uglify = require('gulp-uglify')
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');


gulp.task('minify', function(){
    gulp.src('./front-end/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts'));
});

gulp.task('example', function(){
  console.log('This is an example');
})

gulp.task('jshint', function(){
  gulp.src('./front-end/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

gulp.task('sass', function () {
  gulp.src('./front-end/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('watch', function(){
  gulp.watch(['./front-end/*.js', './front-end/*.scss'], ['jshint', 'minify', 'sass'])
})

// gulp.task('default',['minify', 'example']);
gulp.task('default',['jshint','minify', 'example', 'sass','watch']);