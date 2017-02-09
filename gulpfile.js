/* QuentinGeorge/katbiznis
/
/  /gulpfile.js - Gulp tasks
/  coded by Quentin
/  started at 09/02/2017
*/

var gulp = require( "gulp" ),
    image = require( "gulp-imagemin" );

// --- Task for images

gulp.task( "images", function() {
    gulp.src( "src/images/**" )
        .pipe( image() )
        .pipe( gulp.dest( "assets/images" ) );
} );

// --- Task for styles

// --- Task for pug

// --- Task for js

// --- Watch tasks

// --- Aliases
