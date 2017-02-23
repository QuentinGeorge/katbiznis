/* QuentinGeorge/katbiznis
/
/  /gulpfile.js - Gulp tasks
/  coded by Quentin
/  started at 09/02/2017
*/

var gulp = require( "gulp" ),
    image = require( "gulp-imagemin" ),
    sass = require( "gulp-sass" ),
    autoprefixer = require( "gulp-autoprefixer" ),
    csso = require( "gulp-csso" ),
    pug = require( "gulp-pug" ),
    babel = require( "gulp-babel" ),
    livereload = require( "gulp-livereload" );

// --- Task for images

gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) )
        .pipe( livereload( { start: true } ) );
} );

// --- Task for styles

gulp.task( "css", function() {
    gulp.src( "src/sass/**/*.scss" )
        .pipe( sass().on( "error", sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( csso() )
        .pipe( gulp.dest( "assets/css" ) )
        .pipe( livereload( { start: true } ) );
} );

// --- Task for pug

gulp.task( "html", function() {
    gulp.src( "src/pug/**/*.pug" )
        .pipe( pug( {
            "data": require( "./src/data.json" ),
        } ) )
        .pipe( gulp.dest( "." ) )
        .pipe( livereload( { start: true } ) );
} );

// --- Task for js

gulp.task( "js", function() {
    gulp.src( "src/js/**/*.js" )
        .pipe( babel() )
        .pipe( gulp.dest( "assets/js" ) )
        .pipe( livereload( { start: true } ) );
} );

// --- Watch tasks

gulp.task( "watch", function() {
    livereload.listen();
    gulp.watch( "src/images/**", [ "images" ] );
    gulp.watch( "src/sass/**/*.scss", [ "css" ] );
    gulp.watch( "src/pug/**/*.pug", [ "html" ] );
    gulp.watch( "src/js/**/*.js", [ "js" ] );
} );

// --- Aliases

gulp.task( "default", [ "images", "css", "html", "js" ] );
gulp.task( "work", [ "default", "watch" ] );
