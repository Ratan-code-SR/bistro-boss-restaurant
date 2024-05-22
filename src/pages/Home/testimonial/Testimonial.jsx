import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="py-20">
            <SectionTitle
                heading={'What Our Client Say'}
                subHeading={'testimonial'}
            >
            </SectionTitle>

            <div className=" px-20 text-center py-10">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div>
                        {
                            reviews.map(review =>
                                    <SwiperSlide key={review._id}>

                                        <div className="text-center px-20">
                                            <p className="text-center">{review.details}</p>
                                            <h3>{review.name}</h3>
                                        </div>

                                    </SwiperSlide>
                            )
                        }
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;