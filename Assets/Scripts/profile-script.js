
var user_name;
var user_email;
var user_pic;

var postTitle;
var postBody;



var xhr = new XMLHttpRequest();

// var i= document.querySelector("input").value;
var user_id = localStorage.getItem("id");

xhr.open("GET", "https://reqres.in/api/users/"+user_id);

xhr.send();

var userData;

xhr.addEventListener("load", function(){

    userData = JSON.parse(xhr.response).data;

    user_name = userData.first_name +" "+userData.last_name;
    user_email = userData.email;
    user_pic =  userData.avatar;

    document.querySelector(".profile-user-info-style>img").src = user_pic;
    document.querySelector(".profile-user-info-style>h2").textContent = user_name;
    document.querySelector(".profile-user-info-style>p").textContent = user_email;

    showTweets(user_id);
});




function showTweets(user_id){

    var xhr2 = new XMLHttpRequest();

    xhr2.open("GET", "https://jsonplaceholder.typicode.com/posts?userId="+user_id);

    xhr2.send();

    var userData2;

    xhr2.addEventListener("load", function(){

        userData2 = JSON.parse(xhr2.response);

        var postsDiv = document.getElementById("add-post");

        for (i in userData2) {

            postTitle = userData2[i].title;
            postBody = userData2[i].body;

            postsDiv.innerHTML += "<div class=\"profile-posts-style\"><img src="+user_pic+" width=\"60\" height=\"60\"><span><h3>"+user_name+"</h3><p>"+user_email+"</p></span> <div style=\"clear: left;\"></div> <h4>"+postTitle+"</h4> <p>"+postBody+"</p> </div>"
            
        }

    });
    
}
