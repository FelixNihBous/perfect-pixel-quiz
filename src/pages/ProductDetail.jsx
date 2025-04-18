import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/ProductDetail.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/swiper.css';
import { Pagination, Navigation } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

function ProductDetail() {
    const swiperRef = useRef(null);
    const headerRef = useRef(null);
    const wrapperRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                pin: true,
                start: "top top", // Changed from "bottom bottom"
                end: "auto",
                scrub: 1,
                markers: true,
                pinSpacer: 0,
            },
        });
    
        tl.set(headerRef.current, {
            y: -50,
            opacity: 0,
        });
        tl.set(swiperRef.current, {
            x: 100,
            opacity: 0,
        });
    
        tl.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
        });
    
        tl.to(swiperRef.current, { // Target the Swiper container
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
        });
    }, []);

    return (
        <div className='product-detail-container'>
            <div className='wrapper' ref={wrapperRef}>
                <h1 ref={headerRef}>Kenali iPhone lebih dalam.</h1>

                <div ref={swiperRef} style={{ overflow: 'hidden' }}> {/* Apply ref to the container */}
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        centeredSlides={false}
                        // getSwiper={(swiper) => (swiperRef.current = swiper)} // Older way, not needed with useRef
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="text-overlay">
                                <h3>Kamera Canggih</h3>
                                <p>Ambil foto dan video <br /> seindah bayangan Anda.</p>
                            </div>
                            <img src="/Swiper1.jpg" alt="Slide 1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-overlay">
                                <h3>Chip dan Kekuatan Baterai</h3>
                                <p>Kencang. <br /> yang bertahan lama.</p>
                            </div>
                            <img src="/Swiper2.jpg" alt="Slide 2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-overlay black">
                                <h3>Inovasi</h3>
                                <p>Didesain indah <br />dan tangguh.</p>
                            </div>
                            <img src="/Swiper3.jpg" alt="Slide 3" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-overlay">
                                <h3>Apple Intelligence</h3>
                                <p>Kemungkinan yang <br />menakjubkan.</p>
                            </div>
                            <img src="/Swiper4.jpg" alt="Slide 4" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-overlay black">
                                <h3>Lingkungan</h3>
                                <p>Daur ulang. <br />Gunakan kembali. Ulangi.</p>
                            </div>
                            <img src="/Swiper5.jpg" alt="Slide 5" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-overlay">
                                <h3>Privasi</h3>
                                <p>Data Anda. <br /> Di tempat yang <br /> Anda inginkan.</p>
                            </div>
                            <img src="/Swiper6.jpg" alt="Slide 6" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-overlay">
                                <h3>Kamera Canggih</h3>
                                <p>Ambil foto dan video <br /> seindah bayangan Anda.</p>
                            </div>
                            <img src="/Swiper1.jpg" alt="Slide 7" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-overlay">
                                <h3>Chip dan Kekuatan Baterai</h3>
                                <p>Kencang. <br /> yang bertahan lama.</p>
                            </div>
                            <img src="/Swiper2.jpg" alt="Slide 8" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;