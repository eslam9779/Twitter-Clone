var xnhrid = new XMLHttpRequest();
xnhrid.open("get", "https://reqres.in/api/users/")
xnhrid.send();

var data = []
var idarr = [];
var avatararr = [];
xnhrid.addEventListener("load", function () {
    var response = JSON.parse(xnhrid.response);
    data = response.data;

    for (i = 0; i < data.length; i++) {
        idarr[i] = data[i].id

    }
    for (i = 0; i < data.length; i++) {
        avatararr[i] = data[i].avatar

    }


})
var xnhruserid = new XMLHttpRequest();
xnhruserid.open("get", "https://jsonplaceholder.typicode.com/posts")
xnhruserid.send();

var data = [];
var titlearr = []
var bodyarr = []

xnhruserid.addEventListener("load", first)


var ELEMENT1 = document.querySelector('#tweet1')
var ELEMENT2 = document.querySelector('#tweet2')
var ELEMENT3 = document.querySelector('#tweet3')
var ELEMENT4 = document.querySelector('#tweet4')

var element = [ELEMENT1, ELEMENT2, ELEMENT3, ELEMENT4]

function first() {

    var response = JSON.parse(xnhruserid.response);
    data = response;
    for (x = 0; x < data.length; x++) { titlearr[x] = data[x].title }
    for (x = 0; x < data.length; x++) { bodyarr[x] = data[x].body }

    var img1 = document.createElement('img')
    var div1 = document.createElement('div')
    var img2 = document.createElement('img')
    var div2 = document.createElement('div')
    var img3 = document.createElement('img')
    var div3 = document.createElement('div')
    var img4 = document.createElement('img')
    var div4 = document.createElement('div')



    var arr = [img1, img2, img3, img4]
    var div = [div1, div2, div3, div4]

    for (i = 0; i < element.length; i++) {
        div[i].setAttribute("class", "postdiv")
        arr[i].setAttribute('class', "postimg")

        arr[i].setAttribute('src', avatararr[i])
        element[i].appendChild(arr[i])

        div[i].innerHTML = date+"<br><br>"+"this is title<br>" + titlearr[i] + "<br>" + bodyarr[i]
        element[i].appendChild(div[i])


    }

}






var img5 = document.createElement('img')
var div5 = document.createElement('div')
var img6 = document.createElement('img')
var div6 = document.createElement('div')
var img7 = document.createElement('img')
var div7 = document.createElement('div')
var img8 = document.createElement('img')
var div8 = document.createElement('div')


var arr2 = [img5, img6,img7,img8]
var div2 = [div5, div6,div7,div8]

var maindiv1 = document.createElement('div')
var maindiv2 = document.createElement('div')
var maindiv3 = document.createElement('div')
var maindiv4 = document.createElement('div')
var feeddiv = [maindiv1, maindiv2,maindiv3,maindiv4]
feeddiv.forEach(function (el) {
    el.setAttribute('class', 'post-style')
})

var date = new Date().toLocaleString();

function second() {

    document.getElementById("refresh").style.display="none"
    document.getElementById('mother-div').insertBefore(maindiv1, element[0])
    document.getElementById('mother-div').insertBefore(maindiv2, element[0])
    document.getElementById('mother-div').insertBefore(maindiv3, element[0])
    document.getElementById('mother-div').insertBefore(maindiv4, element[0])

    for (i = 4; i < 8; i++) {
        if(i>5){
            div2[i - 4].setAttribute("class", "postdiv")
            arr2[i - 4].setAttribute('class', "postimg")
            arr2[i - 4].setAttribute('src', avatararr[i-3])
            feeddiv[i - 4].appendChild(arr2[i - 4])
            div2[i-4].innerHTML = date+"<br><br>"+"this is title<br>" + titlearr[i] + "<br>" + bodyarr[i]
            feeddiv[i - 4].appendChild(div2[i - 4])
        }else{
        div2[i - 4].setAttribute("class", "postdiv")
        arr2[i - 4].setAttribute('class', "postimg")
        
        arr2[i - 4].setAttribute('src', avatararr[i])
        feeddiv[i - 4].appendChild(arr2[i - 4])
           
        div2[i-4].innerHTML = date+"<br><br>"+"this is title<br>" + titlearr[i] + "<br>" + bodyarr[i]
        feeddiv[i - 4].appendChild(div2[i - 4])
    }
    
}}







