import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin, FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="footer logo" />
                    </Link>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam reiciendis sapiente tenetur repellendus aliquid, modi maxime suscipit doloribus optio.
                    </p>
                </article>
            </div>
        </footer>
    )
}

export default Footer