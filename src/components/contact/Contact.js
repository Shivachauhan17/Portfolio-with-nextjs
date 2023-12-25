import Link from 'next/link'
import data from '../../data/data.json'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { MdEmail } from "react-icons/md";


const Contact=()=>{
    const contacts=data.contacts
    return(
        <div>
            <ul>
                <li>
                    <FaGithub />
                    <Link href={contacts.Github}>Tweeter</Link>
                </li>
                <li>
                    <FaLinkedin />
                    <Link href={contacts.Linked_in}>Linked in</Link>
                </li>
                <li>
                    <TiSocialTwitter />
                    <Link href={contacts.Tweeter}>Tweeter</Link>
                </li>
                <li>
                    <MdEmail />
                    <p>Email : {contacts.Email}</p>
                </li>
            </ul>
        </div>
    )
}

export default Contact;