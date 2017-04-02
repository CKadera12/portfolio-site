var gulp = require("gulp"),
	watch = require("gulp-watch");

gulp.task("default", function(){
	console.log("hooray");
});

gulp.task("html", function() {
	console.log("image something useful here");
});
gulp.task("styles", function() {
	return gulp.src("./app/assets/styles/styles.css")
	.pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function() {
	watch("./app/index.html", function() {
		gulp.start("html");
	});
	
	watch("./app/assets/styles/**/*.css", function() {
		gulp.start("styles");
	});
});
   
