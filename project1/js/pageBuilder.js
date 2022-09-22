let currentPage;
/**
 *  Building a Page based on the state
 *  The pageName field is mainly for aesthetic purposes
 *  The state is for defining page routes
 * 
 * @param {String} pageName 
 * @param {Number} state 
 */
function buildPage(pageName, state) {
    // Load Data
    loadData();

    // Set the page title dynamically
    $('title')[0].innerHTML = $('title').innerText = pageName;

    // Set the currentPage to whatever the "state" was passed in
    currentPage = state;

    // Add Interactive Element at the end of the paragraph...
    const interactive = 
        `<div id="interactive">
            <input type="button" value="Click here to continue..."  />
        </div>`
    $('#intro').append(interactive);

    // console.log($('body'));
    // if ($(this).css('background-color') === 'white') {
    //     $(this).css('color', 'black');
    // }
    // console.log(currentPage);
    switch (state) {
        case 1:
            menu(pageName);
            break;
        case 2:
            menu(pageName);
            break;
        case 3:
            menu(pageName);
            break;
        case 4:
            menu(pageName);
            break;
        case 5:
            menu(pageName);
            break;
        case 6:
            menu(pageName);
            break;
        case 7:
            menu(pageName);
            break;
        case 8:
            eventManagement(pageName);
            break;
        default:
            menu(pageName);
    }
}

let i = -1;
/* TODO: Put all the text and dialogues into a JSON
    - Save it in localstorage (might have to use JSON.stringify) or local file system (raw .json)
    - Import it with a load function and parse the JSON
 */
const arr = [
    [
        "Where did I go wrong?",
        ""
    ],
    [
        "It was on the left this entire time...",
        "This is the last time.",
        "After this, this is game over..."
    ],
    [
        "But to be honest,",
        "I don't know if I deserve this...",
    ]
];

let randomWords = [];

function loadData() {
    /* Loads Random Words */
    $.getJSON("./../data/randomWords.json", randomWords,
        function (data, textStatus, jqXHR) {
            randomWords = data.randomWords;
        }
    );
}

function menu(pageName) {
    if (Math.floor(Math.random()*100) < 30)
    {
        $('body').last().addClass('_breatheBg');
        $('#intro').last().addClass('_breathe');
    }

    $('#interactive input').click(function() {
        const parent = $('#pageHeader_Content');
        i += 1;
        let arrIndex = currentPage >= arr.length ? Math.floor(Math.random()*arr.length) : currentPage;
        renderText(arr[arrIndex], i, parent);
    });
}

function renderText(arr, index, parent) {
    if (currentPage == -1) {
        contDiv();
        return;
    }
    if (index < arr.length) {
        parent.append(arr[index] + '</br>');
    } else {
        contDiv();
    }
}

/**
 *  This is the continue to next "Page" function
 *  It essentially replaces the "Click here to continue"
 *  To "Next ->"
 */
function contDiv() {
    /* TODO: Ending Screen. But For Testing Purposes Wrap around to index? */

    /* Logic is this: Put ./html/ if the current Page is index.html otherwise, go the corresponding "chapter" */
    let href = `${currentPage < 0 ? "./html/" : "./"}chapter${currentPage < 0 ? 1 : (currentPage + 2)}.html`;
    if (currentPage == 7) {
        href = "../index.html";
    }

    /* Normal Routing to narratives/index */
    // On-click Redirect
    $('#interactive input').click(function() {
        window.location.href = href;
    });
    // Change Text
    $('#interactive input')[0].value = 'Next ->';
}

function eventManagement(pageName) {
    const event = $('#event');
}