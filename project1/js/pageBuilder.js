let currentPage;

function loadData(tag) {
    /* Loads Random Words */
    $.ajax({
        dataType: "json",
        url: "./../data/randomWords.json",
        method: "GET",
        success: (data) => {
            spawnWords(tag, data.randomWords);
        }
    })
    // $.getJSON("./../data/randomWords.json",
    //     function (data, textStatus, jqXHR) {
    //         console.log(data.randomWords);
    //         randomWords = data.randomWords;
    //     }
    // );
}

/**
 *  Building a Page based on the state
 *  The pageName field is mainly for aesthetic purposes
 *  The state is for defining page routes
 * 
 * @param {String} pageName 
 * @param {Number} state 
 */
function buildPage(pageName, state) {
    // Set the page title dynamically
    $('title')[0].innerHTML = $('title').innerText = pageName;

    // Set the currentPage to whatever the "state" was passed in
    currentPage = state;

    createInteractive("#intro");

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
        case 9:
        case 10:
        case 11:
            eventManagement(pageName, state);
            break;
        default:
            menu(pageName);
    }
}

function createInteractive(tag, p = '#pageHeader_Content') {
    // Add Interactive Element at the end of the paragraph...
    const interactive = 
    `<div id="interactive">
        <input type="button" value="Click here to continue..."  />
    </div>`
    $(tag).append(interactive);

    $('#interactive input').click(function() {
        const parent = $(p);
        i += 1;
        let arrIndex = currentPage >= arr.length ? Math.floor(Math.random()*arr.length) : currentPage;
        renderText(arr[arrIndex], i, parent);
    });
}

let i = -1;
/* TODO: Put all the text and dialogues into a JSON
    - Save it in localstorage (might have to use JSON.stringify) or local file system (raw .json)
    - Import it with a load function and parse the JSON
 */
const arr = [
    [
        "Where did I go wrong?",
        "I was sure that this is way out.",
        "I shouldn't have trusted that Psychic.",
        "I am in too deep.",
        "The only way is forward..."
    ],
    [
        "But to be honest,",
        "I don't know if I deserve this...",
    ],
    [
        "It was on the left this entire time...",
        "This is the last time.",
        "After this, this is game over...",
        ""
    ]
];

let randomWords = [];

function menu(pageName) {
    if (Math.floor(Math.random()*100) < 30)
    {
        $('body').last().addClass('_breatheBg');
        $('#intro').last().addClass('_breathe');
    }
    // TODO: The variable 'sane' is for the sane level that the player has. Lower the number, the more unstable the character is
    const sane = 80;
    if (Math.floor(Math.random()*100) < sane && currentPage != -1) {
        // spawnWords($('#intro'));
        loadData($('#intro'));
    }
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

function eventManagement(pageName, state) {
    const event = $('#event');
    loadData(event);
    if (state == 11) {

    }
}

function spawnWords(tag, randomWords, fill = false) {
    const poolLength = Math.floor(Math.random() * randomWords.length);
    const randomButton = Math.floor(Math.random() * poolLength);
    const randomEvent = Math.floor(Math.random() * 4) + 1;
    // console.log(poolLength);
    for (let i = 0 ; i < poolLength; i++) {
        /* Create Buttons that represent leaking "thoughts" */
        // Define a random position on screen
        var posX = Math.floor(Math.random() * 101);
        var posY = Math.floor(Math.random() * 101);
        // console.log("POSX: " + posX + ", POSY: " + posY);
        const button = `<input 
            type='button'
            style= 
                '
                    transform: rotate(${-1 * Math.floor(Math.random()*91)}deg);
                    left: ${posX}%;
                    top: ${posY}%;
                '
            class='thoughtButton'
            onclick="${i === randomButton ? ("location.href=\'" + './event' + randomEvent + '.html\'') : "location.reload()\""}
            value="${randomWords[Math.floor(Math.random()*randomWords.length)]}" />`;
        tag.prepend(button);
        // console.log(tag);}
    }
}