export default function contact (props) {

    return (
        <div id="contact">
            <h2>CONTACT</h2>
            <h3>Let's connect!</h3>
            <form onSubmit={props.validateEmailContent} className="contactForm">
                <label htmlFor="">Name<span>*</span></label>
                <input 
                    type="text" 
                    id="nameField"
                    placeholder="Enter your first and last name"
                    name="name"
                    onChange={props.nameOnChange} 
                />
                <label htmlFor="">Email<span>*</span></label>  
                <input 
                    type="text"
                    id="mailField"
                    placeholder="Enter your Email adress"
                    name="email"
                    onChange={props.emailOnChange}
                />
                <label htmlFor="">Subject<span>*</span></label>
                <input 
                    type="text"
                    id="subjectField" 
                    placeholder="Enter the subjetct of your message"
                    name="subject"
                    onChange={props.subjectOnChange}
                />
                <label htmlFor="">Message</label>
                <textarea 
                    name="message"
                    onChange={props.messageOnChange} 
                />
                <input type="submit" value="SUBMIT" className="submitButton" />
            </form>
        </div>
    )
}