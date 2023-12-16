var btn =document.getElementsByTagName("button")[0];
var id=document.getElementsByTagName("input")[0];
var password=document.getElementsByTagName("input")[1];
var rgx=/^([1-9]|10|11)$/;
var rgx2=/^[a-zA-Z0-9]{5,10}$/

window,onload=function(){
    id.focus();
}

id.addEventListener("blur",function(){
    if(rgx.test(id.value)==true)
    {
        id.style.backgroundColor="#2EFF2E";

    }
    else
    {
        id.style.backgroundColor="#FF2E2E";
    }
    
})
password.addEventListener("blur",function(){
    if(rgx2.test(password.value)==true)
    {
        password.style.backgroundColor="#2EFF2E";

    }
    else
    {
        password.style.backgroundColor="#FF2E2E";
    }
    
})

btn.addEventListener("click",function(event){
    

    if(rgx.test(id.value)==true &&rgx2.test(password.value))
    {
        localStorage.setItem("id",id.value);

    }
    else{
        event.preventDefault();
    
       var x =document.getElementsByTagName("span")[0].innerHTML="Invalid ID OR password"
        x.style.color="red";
       
    }

})
