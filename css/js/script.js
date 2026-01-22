function sendMsg(e){
  if(e.key === 'Enter'){
    let input = document.getElementById('chatInput');
    let body = document.getElementById('chatBody');

    body.innerHTML += "<div>You: " + input.value + "</div>";
    body.innerHTML += "<div>Agent: We will contact you soon.</div>";

    input.value = "";
  }
}
