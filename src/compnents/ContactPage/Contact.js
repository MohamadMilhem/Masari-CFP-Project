import React from 'react';
import './ContactCSS.css';

function ContactPage() {
  return (
    <div>
        <div className="team-section">
		<h1>Ubout Us</h1>
		<span className="border"></span>
		<div className="ps">
			<a href="#p1"><img src="p1.jpg" alt="p1"></img></a>
			<a href="#p2"><img src="p2.jpg" alt='p2'></img></a>
		    <a href="#p3"><img src="p3.jpg" alt ='p3'></img></a>
			<a href="#p4"><img src="p4.jpg" alt ='p4'></img></a>
	    </div>
	    <div className ="section" id="p1">
		<span className="name">Omar</span>
		<span className="border"></span>
		<p>
		 fskl lk ksdj sd vadpk vald vkav,smkprblsb;alevnpo wvp vpev;k wrb lsbp epbv evoe vk eqpv eq vpqv;lwq vpa v wv q vbpoq b;ke be b 
		</p>
        </div>
        <br></br>
        <br></br>
  <div className ="section" id="p2">
    <span className="name">Sireen</span>
    <span className="border"></span>
    <p>
     fskl lk ksdj sd vadpk vald vkav,smkprblsb;alevnpo wvp vpev;k wrb lsbp epbv evoe vk eqpv eq vpqv;lwq vpa v wv q vbpoq b;ke be b 
 
     .
    </p>
</div>
<br></br>
<br/>
  <div className ="section" id="p3">
    <span className="name">Abdallah</span>
    <span className="border"></span>
    <p>
     fskl lk ksdj sd vadpk vald vkav,smkprblsb;alevnpo wvp vpev;k wrb lsbp epbv evoe vk eqpv eq vpqv;lwq vpa v wv q vbpoq b;ke be b 
 
     .
    </p>
</div>
<br/>
<br/>
  <div className ="section" id="p4">
    <span className="name">Mej7esh</span>
    <span className="border"></span>
            <p>
                fskl lk ksdj sd vadpk vald vkav,smkprblsb;alevnpo wvp vpev;k wrb lsbp epbv evoe vk eqpv eq vpqv;lwq vpa v wv q vbpoq b;ke be b .
            </p>
        </div>
    </div>
    </div>
  );
}

export default ContactPage;
