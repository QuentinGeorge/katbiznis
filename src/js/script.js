/* QuentinGeorge/katbiznis
/
/  /src/js/script.js - Main scripts
/  coded by Quentin
/  started at 09/02/2017
*/

let oFlipFront = document.querySelector( ".flip-front" ),
    oFlipBack = document.querySelector( ".flip-back" ),
    oCard = document.querySelector( ".container" );

oFlipFront.addEventListener( "click", () => {
    oCard.classList.add( "flip" );
} );

oFlipBack.addEventListener( "click", () => {
    oCard.classList.remove( "flip" );
} );
