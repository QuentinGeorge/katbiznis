/* QuentinGeorge/katbiznis
/
/  /src/js/script.js - Main scripts
/  coded by Quentin
/  started at 09/02/2017
*/

const $main = document.querySelector( "main" );

document.querySelector( "nav a" ).addEventListener( "click", function( oEvent )  {
    oEvent.preventDefault();
    $main.classList.toggle( "flipped" );
} );
