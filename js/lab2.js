// task 1
document.querySelector('#z-header').addEventListener("click", function () {
    let zHeader = document.querySelector('.z-header')
    let aHeader = document.querySelector('.a-header')

    swap(zHeader, aHeader);
})

document.querySelector('.a-header').addEventListener("click", function () {
    let zHeader = document.querySelector('.z-header')
    let aHeader = document.querySelector('.a-header')

    swap(zHeader, aHeader)
})

function swap(zh, ah) {
    let temp = zh.innerHTML
    zh.innerHTML = ah.innerHTML
    ah.innerHTML = temp
}
// task 2
WIGHT = 10
HIGHT = 12

document.getElementById('p2-output')
    .append("Paralelogram square is: " + (WIGHT * HIGHT))

// task 3
let number = getCookie('number')
if(number !=null&&number!=""){
    console.log(number)
    notify_about_cookies
    ()
    reload_page()
}

let numbers = document.getElementsByClassName('numbers')[0]
let btn = document.getElementById('send-btn')

let greatNum = document.getElementById('biggest')

var max = 0;
function searchMax() {
    for (let i = 0; i < numbers.value.length; i++) {
        if (+numbers.value[i] > max) {
            max = +numbers.value[i];
        }
        greatNum.innerHTML = max;
    }
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name+'=;';
}

function setCookie(c_name,value) {
    document.cookie = c_name + "=" +escape(value);
}


function notify_about_cookies() {
    let confirm = window.confirm("The greatest value from the previous time is: " + getCookie('number') +
        ". Do you want to delete the cookie")
    if (confirm === true) {
        eraseCookie('number')
    }
    else {
        alert("The cookie from the previous execution is still exists, " +
            "so the page should be updated! The cookie will be removed!")
    }
}

function reload_page() {
    let confirm = window.confirm("do you want to reload page?")
    if (confirm === true) {
        window.location.reload()
    }
}

btn.addEventListener('click', function (event) {
        searchMax()
        setCookie('number', max,{})
    }
)

//4
const radioBtn = document.getElementById('radioBtn')

radioBtn.onclick = function () {
    if (document.getElementById("choice-2").checked) {
        localStorage.setItem("rb", 2);
    }
    if (document.getElementById("choice-4").checked) {
        localStorage.setItem("rb", 4);
    }
    if (document.getElementById("choice-5").checked) {
        localStorage.setItem("rb", 5);
    }
};

const left = document.getElementById('left')
left.addEventListener("mouseout", function( event ) {
    let v = localStorage.getItem("rb");
    if(parseInt(v)==2){
        left.classList.add("right-my-class");
    }
}, false);

const right_top = document.getElementById('right-top')
right_top.addEventListener("mouseout", function( event ) {
    let v = localStorage.getItem("rb");
    if(parseInt(v)==4){
        right_top.classList.add("right-my-class");
    }
}, false);

const main = document.getElementById('main')
main.addEventListener("mouseout", function( event ) {
    let v = localStorage.getItem("rb");
    if(parseInt(v)==5){
        main.classList.add("right-my-class");
    }
}, false);

//5

const listListNames = ["header-list","left-list","right-top-list","right-bottom-list","main-center-list","Footer-list"]
const listTextAreaNames = ["x-header","left-area","right-top-area","right-bottom-area","main-center-area","Footer-area"]
for (let i = 0; i < listListNames.length; i++) {
    let listName = listListNames[i]
    let textAreaName = listTextAreaNames[i]
    let input = document.querySelector('#'+textAreaName);
    input.addEventListener('select', function (event) {
        const list = document.getElementById(listName);
        const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
        let oldItems = Array.prototype.slice.call( document.getElementById(listName).getElementsByTagName("li"), 0 );
        let result = [];
        for (let i = 0; i < oldItems.length; i++) {
            result.push(oldItems[i].outerHTML)
        }
        result.push("<li>" + selection + "</li>");
        let listData = result
        result.push("<button id=\""+listName+"save_btn\" type=\"button\" style=\"width: auto;\">save</button>\n")
        list.innerHTML = result.join('');
        const saveBtn = document.getElementById(listName+'save_btn')
        saveBtn.addEventListener("click", function (){
            localStorage.setItem("data", listData)
        })
    });
}
