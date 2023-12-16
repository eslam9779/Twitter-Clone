
var user_name;
var user_email;
var user_pic;

var postTitle;
var postBody;

var userData;


function search(){

    var user_id = document.getElementById("search").value;

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://reqres.in/api/users/"+user_id);

    xhr.send();

    xhr.addEventListener("load", function(){

        userData = JSON.parse(xhr.response).data;

        user_name = userData.first_name +" "+userData.last_name;
        user_email = userData.email;
        user_pic =  userData.avatar;

        var postsDiv = document.getElementById("search-continer");

        postsDiv.innerHTML = "<div class=\"search-profile-style\"><img src="+user_pic+" width=\"60\" height=\"60\"><span><h3>"+user_name+"</h3><p>"+user_email+"</p></span></div>"


    });
}
