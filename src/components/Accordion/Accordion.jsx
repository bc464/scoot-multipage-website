import React, {useState} from 'react'
import "./Accordion.css"

const faqs = [
    {
        title: "How do I download the app?",
        text: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
    },
    {
        title: "Can I find a nearby Scoots?",
        text: "Definitely! Simply open up the app and allow us to find your location while using it. We'll show you all of the closest Scoots and some extra useful information. "
    },
    {
        title: "Do I need a license to ride?",
        text: "Yup! We provide information inside the app regarding local laws and the license you need to be able to ride our Scoots."
    },
    {
        title: "Should I wear a helmet?",
        text: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
    },
    {
        title: "How about the rules & regulations?",
        text: "Now is not the time to be a rule breaker. Be sure you're complying with all local laws and regulations. Also, just be a good human being. Be sure not to park your Scoot where it can block access to buildings or get in people's way."
    },
    {
        title: "What if I damage my Scoot?",
        text: "Be sure to read our terms and conditions carefully. Not the most fun job we know but we make it as clear as possible. There's an option to add insurance for each trip, or you can sign up for annual insurance if you're a regular Scooter."
    },
    ];

const Accordion = () => {
    const [curOpen, setCurOPen] = useState(null);

  return (
    <div className='accordion-container'>
        <h2>FAQs</h2>
        <div className='accordion-box accordion-box__first'>
            <div>
                <h3>How it Works</h3>
            </div>
            <div className='accordion-content' >
                <div className='accordion-content__box'>
                    <div className='ac-heading'>
                        <h4>How do I download the app?</h4>
                        <img src='assets/icons/chevron.svg' alt='down arrow' />
                    </div>
                    <p>To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. 
                    An even simpler way to do it would be to click the relevant link at the bottom of this 
                    page and you’ll be re-directed to the correct page.</p>
                </div>
                <div className='accordion-content__box'>
                    <div className='ac-heading'>
                        <h4>Can I find a nearby Scoots?</h4>
                        <img src='assets/icons/chevron.svg' alt='down arrow' />
                    </div>
                    <p>Definitely! Simply open up the app and allow us to find your location while using it. We'll 
                    show you all of the closest Scoots and some extra useful information.</p>
                </div>
                <div className='accordion-content__box'>
                    <div className='ac-heading'>
                        <h4>Do I need a license to ride?</h4>
                        <img src='assets/icons/chevron.svg' alt='down arrow' />
                    </div>
                    <p>Yup! We provide information inside the app regarding local laws and the license you need to be 
                    able to ride our Scoots.</p>
                </div>
            </div>            
        </div>
        
        <div className='accordion-box'>
            <div>
                <h3>Safe driving</h3>
            </div>
            <div className='accordion-content'>
                <div className='accordion-content__box'>
                    <div className='ac-heading'>
                        <h4>Should I wear a helmet?</h4>
                        <img src='assets/icons/chevron.svg' alt='down arrow' />
                    </div>
                    <p>Yes, please do! All cities have different laws. But we strongly strongly strongly recommend 
                    always wearing a helmet regardless of the local laws. We like you and we want you to be as 
                    safe as possible while Scooting.</p>
                </div>
                <div className='accordion-content__box'>
                    <div className='ac-heading'>
                        <h4>How about the rules & regulations?</h4>
                        <img src='assets/icons/chevron.svg' alt='down arrow' />
                    </div>
                    <p>Now is not the time to be a rule breaker. Be sure you're complying with all local laws and 
                    regulations. Also, just be a good human being. Be sure not to park your Scoot where it can 
                    block access to buildings or get in people's way.</p>
                </div>
                <div className='accordion-content__box'>
                    <div className='ac-heading'>
                        <h4>What if I damage my Scoot?</h4>
                        <img src='assets/icons/chevron.svg' alt='down arrow' />
                    </div>
                    <p>Be sure to read our terms and conditions carefully. Not the most fun job we know but we make 
                    it as clear as possible. There's an option to add insurance for each trip, or you can sign 
                    up for annual insurance if you're a regular Scooter.</p>
                </div>       
            </div>  
        </div>
    </div>
  )
}

export default Accordion