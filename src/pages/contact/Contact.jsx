import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nihil blanditiis facere iste pariatur voluptate praesentium? Hic aliquid delectus repellat.
            </Header>
        </>
    )
}

export default Contact