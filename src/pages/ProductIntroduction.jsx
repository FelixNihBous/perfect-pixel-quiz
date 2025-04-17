import React from 'react'
import '../css/PageIntroduction.css'

function ProductIntroduction() {
    return (
        <div className='container'>
            <div className='introduction-header'>
                <h1>iPhone</h1>
                <p>Didesain untuk dicintai</p>
            </div>
            <video class="rounded-video"
                autoPlay
            >
                <source src="/phone_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default ProductIntroduction 
