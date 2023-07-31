import React, {useState} from 'react'
import "./Accordion.css"

const Accordion = ({data, data2}) => {
    const [curOpen, setCurOpen] = useState(null);

    return (
        <div className='accordion-container'>
            <h2>FAQs</h2>
            <div className='accordion-box accordion-box__first'>
                 <div>
                     <h3>How it Works</h3>
                 </div>
                <div className='accordion-content' >
                 
                {data.map((el, i)=> (
                <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={el.title}key={el.title} >
                    {el.text}
                </AccordionItem>
            ))}
            </div>
        </div>
            <div className='accordion-box'>
                <div>
                    <h3>Safe driving</h3>
                </div>
                    <div className='accordion-content'>
                    {data2.map((el, i)=> (
                     <AccordionItem curOpen={curOpen} onOpen={setCurOpen} title={el.title}key={el.title} >
                    {el.text}
                    </AccordionItem>
                    ))}                      
                </div>
            </div>
        </div>
    )
}

function AccordionItem({title,curOpen,onOpen, children}) {
    const isOpen = title === curOpen;
    function handleToggle() {
        onOpen(isOpen ? null : title);
    }
    return (
        
        <div className='accordion-content__box' onClick={handleToggle} >
                
                    <div className='ac-heading'>
                        <h4>{title}</h4>
                        {isOpen ? <img src='assets/icons/close.svg' alt="close" /> :
                        <img src='assets/icons/chevron.svg' alt='down arrow' /> }
                    </div>
                    {isOpen &&
                    <p>{children}</p>}
                </div>       
    )
}

export default Accordion