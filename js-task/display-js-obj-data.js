

var cards = document.getElementsByClassName("card");
var arr;

addInnerContent();
function addInnerContent() {
    for(let ind=0; ind<cards.length; ind++){
        cards[ind].innerHTML = `<div class="category"></div> 
                                <div class="description">
                                </div> <div class="status">
                                </div> <div class="id">id: </div>`;
    }
}

const TODOS = [
    {
        id: "1",
        description: "To complete work item 1",
        category: "Management",
        isCompleted: true
    },
    {
        id: "2",
        description: "To complete work item 2",
        category: "Sales",
        isCompleted: false
    },
    {
        id: "3",
        description: "To complete work item 3",
        category: "Operations",
        isCompleted: false
    },
    {
        id: "4",
        description: "To complete work item 4",
        category: "Marketing",
        isCompleted: true
    },
    {
        id: "5",
        description: "To complete work item 5",
        category: "Human Resources",
        isCompleted: true
    },
    {
        id: "6",
        description: "To complete work item 6",
        category: "Finance",
        isCompleted: false
    },
    {
        id: "7",
        description: "To complete work item 7",
        category: "Human Resources",
        isCompleted: true
    },
    {
        id: "8",
        description: "To complete work item 8",
        category: "Finance",
        isCompleted: true
    },
    {
        id: "9",
        description: "To complete work item 9",
        category: "Finance",
        isCompleted: false
    },
    {
        id: "10",
        description: "To complete work item 10",
        category: "Human Resources",
        isCompleted: true
    },
    {
        id: "11",
        description: "To complete work item 11",
        category: "Finance",
        isCompleted: true
    },
    {
        id: "12",
        description: "To complete work item 12",
        category: "Finance",
        isCompleted: true
    }
]

refreshColors();
displayData();


function displayData() {
    for(let ind=0; ind<cards.length; ind++) {
        // cards[ind].firstElementChild.innerHTML =  TODOS[ind]['category'];
        cards[ind].children[0].innerHTML =  TODOS[ind]['category'];
        cards[ind].children[1].innerHTML =  TODOS[ind]['description'];
        cards[ind].children[2].innerHTML =  TODOS[ind]['isCompleted'] ? '✔' : '✖';
        let color = TODOS[ind]['isCompleted'] ? 'green':'red';
        cards[ind].children[2].style = `background-color:${color}`;

        cards[ind].children[3].innerHTML +=  TODOS[ind]['id'];

    }
}

function refreshColors() {

    arr = [1,2,3,4,5,6,7,8,9,10,11,12].map(getHexadecimalCode);
    for(let i=0; i<cards.length; i++){
        changeBackgroundColor(i, arr[i]);
    }

    function changeBackgroundColor(ind, value) {
        cards[ind].style.borderColor = `${value}`;
        
        let tra = value + '26';
        console.log(value, tra);
        cards[ind].firstElementChild.style = `background-color:${tra} ;color: ${value};`;

        // cards[ind].firstElementChild.style.backgroundColor = `${value}`;
    }

    function getHexadecimalCode() {
    var letters = "0123456789ABCDEF";
    // html color code starts with #
    var color = '#';
    // generating 6 times
    for (let i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))];

    return color;
    }
}
