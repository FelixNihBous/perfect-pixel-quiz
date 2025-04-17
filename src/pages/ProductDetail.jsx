import React, { useRef } from 'react';
import '../css/ProductDetail.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/swiper.css';
import { Pagination, Navigation } from 'swiper/modules'; // Import Navigation module

function ProductDetail() {
    const swiperRef = useRef(null);

    return (
        <div className='product-detail-container'>
            <div className='wrapper'>
                <h1>Kenali iPhone lebih dalam.</h1>

                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
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
                        <img src="/Swiper3.jpg" alt="Slide 1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-overlay">
                            <h3>Apple Intelligence</h3>
                            <p>Kemungkinan yang <br />menakjubkan.</p>
                        </div>
                        <img src="/Swiper4.jpg" alt="Slide 2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-overlay black">
                            <h3>Lingkungan</h3>
                            <p>Daur ulang. <br />Gunakan kembali. Ulangi.</p>
                        </div>
                        <img src="/Swiper5.jpg" alt="Slide 3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="text-overlay">
                            <h3>Privasi</h3>
                            <p>Data Anda. <br /> Di tempat yang <br /> Anda inginkan.</p>
                        </div>
                        <img src="/Swiper6.jpg" alt="Slide 4" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ProductDetail;