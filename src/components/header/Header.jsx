import Link from 'next/link'
const Header=()=>{

    return(
        <nav className="nav">
            <ul className="menu-nav">
                <li className="menu-nav__item active">
                    <Link href='/' passHref> Home</Link>
                </li>
                <li className="menu-nav__item">
                    <Link href='/contact' passHref> Contact Me</Link>
                        
                </li>
                <li className="menu-nav__item">
                    <Link href='/my-projects' passHref> My Projects</Link>
                </li>
                <li className="menu-nav__item">
                    <Link href='/experience' passHref> Experience</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;