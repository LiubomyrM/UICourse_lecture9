//building a custom event
function sendMessage(e) {
    e.preventDefault();
    var msg = document.getElementById("msg"), event;
    msg = msg.value;
    if (msg && window.CustomEvent) {
        event = new CustomEvent('newMessage', {
            detail: {
                msg: msg,
                date: new Date()
            },
            bubbles: true,
            cancelable: true
        });
        e.currentTarget.dispatchEvent(event);
    }
}
var msgbox = document.getElementById("msgbox");
msgbox.addEventListener('submit', sendMessage, false);
document.addEventListener('newMessage', newFunc, false);
function newFunc(e) {
    alert('Details: message ' + e.detail.msg + ' date ' + e.detail.date);
}
document.getElementById("menu").onclick = function(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    //if the user missed the li element on click
    if(target.nodeName != 'A'){
        return;
    }
    var href = target.href;
    alert(href.substring(href.lastIndexOf("/")+1));
    return false;
}