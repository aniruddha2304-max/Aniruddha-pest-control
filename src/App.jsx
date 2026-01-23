import Navbar from "./Components/navbar/Navbar"
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <script>
function toggleChat(){
  let box=document.getElementById("chatBox");
  box.style.display = box.style.display==="flex" ? "none" : "flex";
}

function sendMsg(e){
  if(e.key==="Enter"){
    let body=document.getElementById("chatBody");
    body.innerHTML += `<div className="user-msg">${e.target.value}</div>`;
    e.target.value="";
    body.innerHTML += `<div className="bot-msg">Thank you! Our team will contact you shortly.</div>`;
    body.scrollTop=body.scrollHeight;
  }
}
</script> */}
    </>
  )
}

export default App
