let sendMessageForm = document.forms.sendMessageForm;
sendMessageForm.send.addEventListener("click", function(){
    setInfo(sendMessageForm.name.value, sendMessageForm.phone.value, sendMessageForm.message.value )
})


function setInfo(name, phone, message){
    let postInfo = new XMLHttpRequest();

    postInfo.open("GET", `https://api.telegram.org/bot1371367465:AAH9ohtMAoaXVJ6PMAP61kc-mxDe2eNv574/sendMessage?text=name:${name}\n phone: ${phone} \n message: ${message}&chat_id=-438067797`, false);

    postInfo.send();
}
