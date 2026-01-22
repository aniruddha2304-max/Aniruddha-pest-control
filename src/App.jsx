import Navbar from "./Components/navbar/Navbar"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      {/* <!-- HERO --> */}
      <section className="hero">
        <div>
          <h1>Complete Pest Control Solution</h1>
          <p>Protect Your Home & Business From Harmful Pests</p>
          <a href="services.html" className="btn-primary">View Services</a>
          <a href="booking.html" className="btn-outline">Get Free Inspection</a>
        </div>
      </section>


      {/* <!-- SERVICES --> */}
      <section className="section">
        <h2>Our Popular Services</h2>
        <div className="services">

          <div className="card">
            <img src="https://tse1.mm.bing.net/th/id/OIP.JMCuAkI-dYwHdUAnU7SmugHaE7" alt="" />
              <h3>Cockroach Control</h3>
              <p>Eliminate harmful cockroaches permanently.</p>
              <a href="booking.html?service=Cockroach Control">Book Now</a>
          </div>

          <div className="card">
            <img src="https://tse2.mm.bing.net/th/id/OIP.tVInq_LoS7N6im_sfR8QXQHaE7" alt="" />
              <h3>Termite Control</h3>
              <p>Protect your property from termites.</p>
              <a href="booking.html?service=Termite Control">Book Now</a>
          </div>

          <div className="card">
            <img src="https://www.pepcopp.co.in/images/pest-control/pest-innerpage/wood-borer-control.jpg" alt="" />
              <h3>Woodborer Control</h3>
              <p>Save wooden furniture & structures.</p>
              <a href="booking.html?service=Woodborer Control">Book Now</a>
          </div>

          <div className="card">
            <img src="https://tse4.mm.bing.net/th/id/OIP.MU5GIRJNGtNP5vvNoG38XAHaEL?pid=Api&P=0&h=180" alt="" />
              <h3>Commercial Pest Control</h3>
              <p>Customized pest solutions for businesses.</p>
              <a href="booking.html?service=Commercial Pest Control">Book Now</a>
          </div>

        </div>
      </section>

      {/* <!-- BOOKING CTA --> */}
      <section className="section" style={{background:"#f9f9f9",textAlign:"center"}}>
        <h2>Book a Service Now</h2>
        <p>Fast response | Affordable price | Expert technicians</p>

        <a href="booking.html" className="btn-book">Book Appointment</a>
      </section>

      {/* <!-- FLOATING BUTTONS --> */}
      <a href="https://wa.me/917045420139" className="float-btn whatsapp">💬 WhatsApp</a>
      <a href="tel:7045420139" className="float-btn call">📞 Call Now</a>

      {/* <!-- LIVE CHAT --> */}
      <div className="chat-launcher" onclick="toggleChat()">💬 Live Chat</div>

      <div className="chatbox" id="chatBox">
        <div className="chat-header">
          Live Support
          <span onclick="toggleChat()">✖</span>
        </div>

        <div className="chat-body" id="chatBody">
          <div className="bot-msg">Hello 👋 How can we help you?</div>
        </div>
        <input type="text" placeholder="Type message..." onkeydown="sendMsg(event)"/>
      </div>

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
