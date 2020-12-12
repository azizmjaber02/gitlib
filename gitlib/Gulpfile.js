/*
 Programming By: AzizJaber
 GITHUB PAGE: https://github.com/azizmjaber02
 Discord: AzizJaber.#5414
 GITLIB V1.0.0
 All Rights Reserved.
*/
var gulp=require("gulp"),uglify=require("gulp-uglify"),minifyCss=require("gulp-minify-css");gulp.task("css",function(){return gulp.src("*.css").pipe(minifyCss({compatibility:"ie8"})).pipe(gulp.dest("dist"))}),gulp.task("js",function(){return gulp.src("*.js").pipe(uglify()).pipe(gulp.dest("dist"))}),gulp.task("default",["js","css"]);