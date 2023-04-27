import './ContactUs.css';

export default function ContactUs () {
    return(
        <div className="homepage-container">
            <div className='contactus-container'>
                <h1 className='contactus-heading'>Contact Us</h1>
                <form className='contactus-form'>
                    <input className="contactus-input" type="text" placeholder="First Name" required />
                    <input className="contactus-input" type="text" placeholder="Last Name" required />
                    <textarea placeholder="Write your message here" required />
                    <button className='contactus-button' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}