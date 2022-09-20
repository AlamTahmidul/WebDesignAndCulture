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
    // Set the page title dynamically
    $('title')[0].innerHTML = $('title').innerText = pageName;
    currentPage = state;
    console.log(currentPage);
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
        "It was on the left this entire time..."
    ],
    [
        "This is the last time.",
        "After this, this is game over..."
    ],
    [
        "But to be honest,",
        "I don't know if I deserve this...",
    ]
];

function menu(pageName) {
    if (Math.floor(Math.random()*100) < 30)
    {
        $('body').last().addClass('_breatheBg');
        $('#intro').last().addClass('_breathe');
    }

    $('#interactive_text').click(function() {
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
        // let newP = '<p>' + arr[index] + '</p>';
        // console.log($(id));
        // $(id).last().innerHTML.append(newP);

        parent.append('<br/>' + arr[index]);
    } else {
        contDiv();
    }
}

function contDiv() {
    console.log(currentPage);
    if (currentPage == 7) {
        $('#interactive_text')[0].innerHTML = 
        `
        <a href="../index.html">
            Next ->
        </a>
        `;
    } else {
        $('#interactive_text')[0].innerHTML = 
            `
            <a href="${currentPage < 0 ? "./html/" : "./"}chapter${currentPage < 0 ? 1 : (currentPage + 2)}.html">
                Next ->
            </a>
            `;
    }
}