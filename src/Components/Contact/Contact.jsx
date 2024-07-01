import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "63d1710f-36d1-4225-9aa4-955dec792e14");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Fill the form and send us your quieries, messages and we will gladly reach out to you back
            our goal is to improve ourselfs for the better and your suggestions will grealty 
            benefit us in fulfilling this goal of ours.</p>
            <ul>
                <li><img src={mail_icon} alt="" />dynamicuniversity.in</li>
                <li><img src={phone_icon} alt="" />+2-368-364-7048</li>
                <li><img src={location_icon} alt="" />64 Kentucky Ave, Cambridge<br/>MA 01489, United States</li>

            </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Your number</label>
            <input type='tel' name='number' placeholder='Enter your mobile number' required/>
            <label>Write your message</label>
            <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit &#8594;</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
