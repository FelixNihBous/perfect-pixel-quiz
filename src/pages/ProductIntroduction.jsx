import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../css/PageIntroduction.css';

function ProductIntroduction() {
    const entranceElementsRef = useRef([]);
    const videoTab = useRef()

    useEffect(() => {
        const tl = gsap.timeline()
        tl.set(entranceElementsRef.current, {
            y: 50,
            opacity: 0,
        });
        tl.set(videoTab.current, {
            y: 50,
            opacity: 0,
        })

        tl.to(entranceElementsRef.current, {
            y: 0,
            duration: 1,
            opacity: 1,
            ease: 'power1.out',
        });

        
        tl.to(videoTab.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
        })
    }, []);

    return (
        <div className='container'>
            <div className='introduction-header'>
                <h1 ref={(el) => (entranceElementsRef.current[0] = el)}>iPhone</h1>
                <p ref={(el) => (entranceElementsRef.current[1] = el)}>Didesain untuk dicintai</p>
            </div>
            <video
                className="rounded-video"
                ref={videoTab}
                autoPlay
                loop
            >
                <source src="/phone_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default ProductIntroduction;