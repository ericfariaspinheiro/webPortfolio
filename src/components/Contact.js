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
                    className="formFields"
                    placeholder="Enter your first and last name"
                    name="name"
                    onChange={props.nameOnChange} 
                />
                <label htmlFor="">Email<span>*</span></label>  
                <input 
                    type="text"
                    id="mailField"
                    className="formFields"
                    placeholder="Enter your Email adress"
                    name="email"
                    onChange={props.emailOnChange}
                />
                <label htmlFor="">Subject<span>*</span></label>
                <input 
                    type="text"
                    id="subjectField" 
                    className="formFields"
                    placeholder="Enter the subjetct of your message"
                    name="subject"
                    onChange={props.subjectOnChange}
                />
                <label htmlFor="">Message</label>
                <textarea 
                    name="message"
                    className="formFields"
                />
                <input type="submit" value="SUBMIT" className="submitButton" />
            </form>
        </div>
    )
}