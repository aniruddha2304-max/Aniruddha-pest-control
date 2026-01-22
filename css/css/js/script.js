function sendMsg(e){
  if(e.key === "Enter"){
    let input = document.getElementById("chatInput");
    let body = document.getElementById("chatBody");

    body.innerHTML += "<div><b>You:</b> " + input.value + "</div>";
    body.innerHTML += "<div className='bot'><b>Agent:</b> We will contact you shortly.</div>";

    input.value = "";
    body.scrollTop = body.scrollHeight;
  }
}
