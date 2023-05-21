import React from 'react'
import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'

const Gallery = () => {
    const galleryLength = 15,
        images = []

    for (let i = 1; i <= galleryLength; i++) {
        images.push(require(`../../images/gallery${i}`))
    }

    return (
        <>
            <Header title="Our Gallery" image={HeaderImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis magni nulla vel unde optio laborum animi repudiandae totam, cum obcaecati.
            </Header>
        </>
    )
}

export default Gallery