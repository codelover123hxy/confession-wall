function returnBack(){
    window.location.href="../index.html"
}
function gotoLogin(){
    window.location.href="/login/index.html"
}
function gotoRegister(){
    console.log("1");
    window.location.href="/register/index.html"
}
function gotoWall(){
    window.location.href="/wall/index.html"
}
function gotoAdd(){
    var username=window.location.href.split("=")[1];
    window.location.href="/user-manager/add/index.html?username="+ username;
}
function reload(){
 location.reload();   
}
function quit(){
    var isQuit=window.confirm("是否退出登录");
    if (isQuit)
        window.location.href="/index.html";
}