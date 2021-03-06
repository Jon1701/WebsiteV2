"use strict";

////////////////////////////////////////////////////////////////////////////////
// Gulp modules.
////////////////////////////////////////////////////////////////////////////////
var gulp = require("gulp");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");
var webpack = require('webpack-stream');

////////////////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////////////////
var srcPath = "./source/";
var destPath = "./build/";
var modulesPath = "./node_modules/";

////////////////////////////////////////////////////////////////////////////////
// Tasks
////////////////////////////////////////////////////////////////////////////////

gulp.task('webpack', function() {

  gulp.src(srcPath + 'javascript/index.js')
    .pipe(webpack({
      watch: true,
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(gulp.dest(destPath + 'javascript/'));
  });

// Move CNAME.
gulp.task("cname", function() {
  gulp.src("assets/CNAME")
    .pipe(gulp.dest(destPath));
})

// Move fonts.
gulp.task("fonts", function() {
  gulp.src(srcPath + "fonts/**/*")
    .pipe(gulp.dest(destPath + "fonts/"));
})

// Move images.
gulp.task("images", function() {
  gulp.src(srcPath + "images/**/*")
    .pipe(gulp.dest(destPath + "images/"));
});

// Move portfolio.
gulp.task("portfolio", function() {
  gulp.src(srcPath + "portfolio/**/*")
    .pipe(gulp.dest(destPath + "portfolio/"));
});

// Compile and move stylesheets.
gulp.task("stylesheets", function() {
  gulp.src(srcPath + "stylesheets/**/*")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destPath + "stylesheets/"));
});

gulp.task("templates", function() {
  gulp.src(srcPath + "templates/**/*")
    .pipe(gulp.dest(destPath + "templates/"));
});

// Move HTML files.
gulp.task("html", function() {
  gulp.src(srcPath + "*.html")
    .pipe(gulp.dest(destPath));
});

// Move Components.
gulp.task("components", function() {

  // Bootstrap.
  gulp.src(srcPath + "components/bootstrap/css/bootstrap.css")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destPath + "components/bootstrap/css/"));

  // Font-Awesome
  gulp.src(modulesPath + "font-awesome/css/font-awesome.css")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destPath + "components/font-awesome/css/"));
  gulp.src(modulesPath + "font-awesome/fonts/*")
    .pipe(gulp.dest(destPath + "components/font-awesome/fonts/"));

  // Dev Icons
  gulp.src(modulesPath + "devicons/css/devicons.css")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(destPath + "components/devicons/css/"));
    gulp.src(modulesPath + "devicons/fonts/*")
      .pipe(gulp.dest(destPath + "components/devicons/fonts/"));
});

// Webserver.
gulp.task("webserver", function() {
  gulp.src(destPath)
    .pipe(webserver({
      fallback: "index.html",
      livereload: true,
      directoryListing: false,
      open: false
    }));
});

////////////////////////////////////////////////////////////////////////////////
// Watch Tasks.
////////////////////////////////////////////////////////////////////////////////

// Watch task
gulp.task("watch", function() {
  gulp.watch(srcPath + "fonts/**/*", ["fonts"]); // Fonts.
  gulp.watch(srcPath + "images/**/*", ["images"]); // Images.
  gulp.watch(srcPath + "portfolio/**/*", ["portfolio"]); // JavaScript.
  gulp.watch(srcPath + "stylesheets/**/*.scss", ["stylesheets"]); // SASS Main.
  gulp.watch(srcPath + "stylesheets/**/_*.scss", ["stylesheets"]); // SASS Partials.
  gulp.watch(srcPath + "templates/**/*", ["templates"]); // SASS Partials.
  gulp.watch(srcPath + "*.html", ["html"]); // HTML files.
});

////////////////////////////////////////////////////////////////////////////////
// Default Task.
////////////////////////////////////////////////////////////////////////////////
gulp.task("default", ["cname", 'webpack', "fonts", "images", "portfolio", "stylesheets", "templates", "html", "components", "watch", "webserver"]);
