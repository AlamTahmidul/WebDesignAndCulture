// import MenuYeet from './pages/menu.js';

let currentPage;
// The variable 'sanity' is for the sane level that the player has. Lower the number, the more unstable the character is
let inventory = [], sanity, defaultSanity = 30;

// Level Stuff
let sanityDecayPerLevel = 0.9;
let incorrectSanityDecay = 0.3;

// function test() {
//     alert("onload...");
//     const my = new MenuYeet("YES", 47);
//     my.foo();
// }
// // document.onload = test();
// document.onload = buildPage();

function loadData(tag) {
    /* Loads Random Words */
    $.ajax({
        dataType: "json",
        url: "./../data/randomWords.json",
        method: "GET",
        success: (data) => {
            spawnWords(tag, data.randomWords);
        }
    });

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

    // Sanity Stuff
    if (currentPage == -1)
        localStorage.removeItem('sanity');
    sanity = localStorage.getItem('sanity');
    if (sanity)
        sanity = Number(sanity);
    else sanity = defaultSanity;

    // Check endgame
    if (sanity < 3) {
        currentPage = state = 100;
    }
    if (currentPage < 100)
        createInteractive("#intro");
    switch (state) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            menu(pageName);
            break;
        case 8:
        case 9:
        case 10:
        case 11:
            eventManagement(pageName, state);
            break;
        case 100:
            end();
            break;
        default:
            menu(pageName);
    }
}

function createInteractive(tag, p = '#pageHeader_Content', a = arr) {
    // Add Interactive Element at the end of the paragraph...
    const interactive = 
    `<div id="interactive">
        <input 
            type="button" /
            style="animation: breatheInv ${(sanity / 100) * 3}s ease-in-out 0s infinite alternate-reverse;"
            value="Click here to continue..."  />
    </div>`
    $(tag).append(interactive);

    $('#interactive input').click(function() {
        const parent = $(p);
        i += 1;
        let arrIndex = currentPage >= a.length ? Math.floor(Math.random()*a.length) : currentPage;
        if (currentPage >= 100) {
            renderText(a, i, parent);
        } else {
            renderText(a[arrIndex], i, parent);
        }
    });
}

let i = -1;
/* Feature (optional): Put all the text and dialogues into a JSON
    - Save it in localstorage (might have to use JSON.stringify) or local file system (raw .json)
    - Import it with a load function and parse the JSON
 */
const arr = [
    [
        "Where did I go wrong?",
        "I was sure that this is way out.",
        "I shouldn't have trusted that Psychic.",
        "I am in too deep.",
        "The only way is forward? ",
        "..."
    ],
    [
        "The lefts and rights are my only options...",
        "... Wait ...",
        "...",
        "These texts...",
        "...",
        "Maybe I can click on them?...",
        "..."
    ],
    [
        "But to be honest,",
        "I don't know if I deserve this...",
        "I have escaped once",
        "Maybe once more?",
        "..."
    ],
    [
        "This-",
        "-is-",
        "-the last time...",
        "...",
        "After this...",
        "... game over...",
    ],
    [
        "Being on the same wavelength as others,",
        "I am the only one",
        "Leering into the strength of brothers",
        "I can only learn..."
    ],
];

const endNoEscape = [
    "...", "...", "...",
    "This-",
    "Can't...",
    "...be-",
    "...happening-",
    "...",
    "\n\nYou died from paranoia"
]

let randomWords = [];

function menu(pageName) {
    if (Math.floor(Math.random()*100) < 100 - sanity || currentPage === -1)
    {
        $('body').last().addClass('_breatheBg');
        $('#intro').last().addClass('_breathe');
        $('#intro').css(`animation-duration: ${(sanity/100)*3}s`)
    }
    if (currentPage != -1) {
        loadData($('#intro'));
    }
}

function renderText(arr, index, parent) {
    if (currentPage == -1) {
        contDiv();
        return;
    }
    if (index < arr.length || index >= 100) {
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
        href = "./endNoEscape.html";
    } else if (currentPage === 100) {
        href = "./../index.html";
    }

    /* Normal Routing to narratives/index */
    // On-click Redirect
    $('#interactive input').click(function() {
        window.location.href = href;
        localStorage.setItem('sanity', String(sanity*0.9)); // Save Sanity Level for Future Requests
    });
    // Change Text
    $('#interactive input')[0].value = currentPage === 100 ? "Start Over?" : 'Next ->';
}

function eventManagement(pageName, state) {
    const event = $('#event');
    loadData(event);
    
}

function spawnWords(tag, randomWords) {
    let poolLength = Math.max(Math.floor(Math.random() * randomWords.length), 2);
    console.log(poolLength);
    const randomButton = Math.floor(Math.random() * poolLength);
    console.log(randomButton);
    const randomEvent = Math.floor(Math.random() * 4) + 1;
    // console.log(poolLength);
    console.log(randomWords)
    for (let j = 0 ; j <= poolLength; j++) {
        /* Create Buttons that represent leaking "thoughts" */
        // Define a random position on screen
        const posX = Math.floor(Math.random() * 101);
        const posY = Math.floor(Math.random() * 101);
        const value = randomWords[Math.floor(Math.random()*(randomWords.length))];
        console.log(j === randomButton);
        // console.log("POSX: " + posX + ", POSY: " + posY);
        const button = `
        <input 
            class="r_button"
            type='button'
            value="${value}"
            style= 
                '
                    position: absolute;
                    transform: rotate(${-1 * Math.floor(Math.random()*361)}deg);
                    left: ${posX}%;
                    top: ${posY}%;
                '
            class='thoughtButton'
            onclick="${j === randomButton ? ("location.href=\'" + './event' + randomEvent + '.html\'\"') : "location.reload()\""}
             \/>`;
        tag.prepend(button);
        if (j !== randomButton)
        {
            localStorage.setItem('sanity', String(sanity * sanityDecayPerLevel));
        }
        // console.log(tag);}
    }
    $('input[type=button] .thoughtButton').draggable({cancel:false});
}

function end() {
    endNoEsc();
}

function endNoEsc() {
    createInteractive("#intro", "#pageHeader_Content", endNoEscape);
    // console.log(endNoEscape);
}