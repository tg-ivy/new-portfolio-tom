import { useState } from "react"

export default function Contact() {

    const [display, setDisplay] = useState()

    function handleSubmit() {
        setDisplay("")
    }

    return (<>
    <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-text">If you need to get into contact with me, do so here!</p>
        <ul className="contact-list">
            <li className="contact-list-item"><b>Email: </b>thomaspg@live.co.uk</li>
            <li className="contact-list-item"><b>Phone: </b>07804 466170</li>
            <li className="contact-list-item"><a href="https://tom-gledhill-jan-2024.tiiny.site/">My CV</a></li>
            <li className="contact-list-item"><a href="https://github.com/tg-ivy">GitHub</a></li>
            <li className="contact-list-item"><a href="https://www.linkedin.com/in/thomas-gledhill-a11a24164/">LinkedIn</a></li>
        </ul>
        <div className="form-container">
            <p className="contact-text">If you'd like to receive an email from me, leave your email down below and I'll get back to you!</p>
            <form action="">
                <input type="text" placeholder="Enter email here..." value={display} className="form-input"/>
                <input type="submit" onClick={() => handleSubmit()} className="form-submit"/>
            </form>
        </div>
    </div>
    </>
    )
}