/**
 *  Building a Page based on the state
 *  The pageName field is mainly for aesthetic purposes
 * 
 * @param {String} pageName 
 * @param {Number} state 
 */
function buildPage(pageName, state) {
    // Set the page title dynamically
    $('title')[0].innerHTML = $('title').innerText = pageName;

    switch (state) {
        case 0:
            break;
        case 1:
            break;
        default:
            mainScreen(pageName);
    }
}

function mainScreen(pageName) {
    // $('body').last().addClass('_breatheBg');
    // $('#intro').last().addClass('_breathe');
}