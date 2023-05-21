import React from 'react'
import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

const Gallery = () => {
    const galleryLength = 15,
        images = []

    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}.jpg`))
    }

    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis magni nulla vel unde optio laborum animi repudiandae totam, cum obcaecati.
            </Header>

            <section className="gallery">
                <div className="container gallery__container">
                    {
                        images.map((image, index) => {
                            return (
                                <article key={index}>
                                    <img src={image} alt={`gallery img ${index + 1}`} />
                                </article>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Gallery