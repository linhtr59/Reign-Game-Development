window.onload= loadfunction();
var promptlist;
// makes x button on popup work
function show(str)
{
    var x = document.getElementById(str);
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.width="70%";
      x.style.height="60%";
    } else {
       x.style.display = "none";
       x.style.width="0";
       x.style.height="0";
    }
}
//calls for info from  backend
function loadfunction()
{
    document.querySelector('h1').innerHTML="Prompts for "+getCookie("username");
    //$.get([link],callback,"json");
}
// puts info on page
function callback(data)
{
    var prompt =document.getElementById("prompt");
    var options  =  document.getElementById("option");
    promptlist=data.prompts;
    prompt.innerHTML=promptlist[0].prompt;
    options.childNodes[0].innerHTML= promptlist[0].option[0];
    options.childNodes[1].innerHTML= promptlist[0].option[1];
}