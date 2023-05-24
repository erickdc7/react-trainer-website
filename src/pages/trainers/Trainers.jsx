import React from 'react'
import './trainers.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Trainers = () => {
    return (
        <>
            <Header title="Our Trainers" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio accusamus cum nihil quasi dolores molestias nisi veritatis adipisci fuga corrupti!
            </Header>
        </>
    )
}

export default Trainers