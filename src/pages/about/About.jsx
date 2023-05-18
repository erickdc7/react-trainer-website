import React from 'react'
import './about.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe distinctio consectetur eos facilis odio dicta sit non consequuntur harum sapiente.
            </Header>

            <section className="about__story">
                <div className="container about__story-container">
                    <div className="about__section-image">
                        <img src={StoryImage} alt="our story" />
                    </div>

                    <div className="about__section-content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque dolor cumque tempore quibusdam repellendus ut ab facere incidunt beatae maxime et ipsam harum esse quod deserunt voluptatem quae numquam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore minima accusantium doloribus corporis? Doloremque, sed nostrum. At cupiditate repellat harum rerum vero amet facilis!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum recusandae, dignissimos magni similique magnam.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about__vision">
                <div className="container about__vision-container">
                    <div className="about__section-content">
                        <h1>Our Vision</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque dolor cumque tempore quibusdam repellendus ut ab facere incidunt beatae maxime et ipsam harum esse quod deserunt voluptatem quae numquam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore minima accusantium doloribus corporis? Doloremque, sed nostrum. At cupiditate repellat harum rerum vero amet facilis!
                        </p>
                    </div>

                    <div className="about__section-image">
                        <img src={VisionImage} alt="our vision" />
                    </div>
                </div>
            </section>

            <section className="about__mission">
                <div className="container about__mission-container">
                    <div className="about__section-image">
                        <img src={MissionImage} alt="our mission" />
                    </div>

                    <div className="about__section-content">
                        <h1>Our Mission</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, doloremque dolor cumque tempore quibusdam repellendus ut ab facere incidunt beatae maxime et ipsam harum esse quod deserunt voluptatem quae numquam.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore minima accusantium doloribus corporis? Doloremque, sed nostrum. At cupiditate repellat harum rerum vero amet facilis!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum recusandae, dignissimos magni similique magnam.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About