import "./contact.css";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

export default function Contact() {
    return (
        <div className="contact">
            <div className="contactItem">
                <span className="contactTitle mt-4">CONTACT WITH ME</span>
            
                <img
                    src="https://media-exp1.licdn.com/dms/image/C5103AQHI6p8E8J-pyw/profile-displayphoto-shrink_200_200/0/1567059412900?e=1648080000&v=beta&t=GBZztxZ0Fb4yJyUwLyBlVj8oWJ8IacW9pDN_tvxcDVU"
                    alt=""
                />
                <p>Hello!!
                    I'm Afsana Akter Eva. I'm a React Developer. I have graduated B.Sc focused on Computer Science & Engineering from
                    Southeast University. I am a
                    hard-working, self-learner, and passionate about solving problems
                    while working in a team.
                </p>

                <span>Mobile: 01948949636</span>
                <span>Email: afsanaeva05@gmail.com</span>
                <span> Address: Uttara, Dhaka</span>
                
            </div>
            {/* <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58373.85930282704!2d90.34326844825617!3d23.8766296388549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1644323273656!5m2!1sen!2sbd" width="400" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div> */}

     
            <div className="contactItem mt-4">
                <span className="contactTitle">FOLLOW ME</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
            </div>
       
    );
}
