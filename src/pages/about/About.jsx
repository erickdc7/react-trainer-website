import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'

const About = () => {
    return (
        <>
            <Header
                title="About Us"
                image={HeaderImage}
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe distinctio consectetur eos facilis odio dicta sit non consequuntur harum sapiente.
            </Header>
        </>
    )
}

export default About