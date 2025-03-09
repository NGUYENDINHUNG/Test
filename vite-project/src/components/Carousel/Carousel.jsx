import { useState, useEffect, useRef } from "react"; // Import các hook cần thiết từ React
import { assets } from "../../assets/assets"; // Import các assets (hình ảnh)
import "./Carousel.css"; // Import file CSS để định dạng giao diện

const testimonials = [ // Mảng chứa dữ liệu các testimonial
    {
        quote:
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        author: "John Smith",
        position: "Marketing Director",
        company: "XYZ Corp",
    },
    {
        quote:
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        author: "Jane Doe",
        position: "CEO",
        company: "ABC Inc",
    },
    {
        quote:
            "Positivus for the past year has led to a significant increase in website traffic and leads. The team is professional and truly cares about the success of our business. We highly recommend Positivus for their online presence.",
        author: "Robert Johnson",
        position: "Sales Director",
        company: "123 Industries",
    },
];

const Sliders = () => { // Component chính của carousel
    const [current, setCurrent] = useState(0); // State để theo dõi index của testimonial hiện tại
    const carouselRef = useRef(null); // Ref để tham chiếu đến DOM element của carousel container

    const goToSlide = (index) => { // Hàm để chuyển đến slide có index được chỉ định
        setCurrent(index); // Cập nhật state current
        if (carouselRef.current) { // Kiểm tra nếu carouselRef đã được gán
            const itemWidth = carouselRef.current.scrollWidth / testimonials.length; // Tính toán chiều rộng của mỗi item
            carouselRef.current.scrollTo({ // Cuộn đến item được chỉ định
                left: itemWidth * index,
                behavior: "smooth",
            });
        }
    };

    const goToPrevious = () => { // Hàm để chuyển đến slide trước đó
        goToSlide(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const goToNext = () => { // Hàm để chuyển đến slide tiếp theo
        goToSlide(current === testimonials.length - 1 ? 0 : current + 1);
    };

    useEffect(() => { // useEffect để xử lý sự kiện scroll
        const handleScroll = () => { // Hàm xử lý sự kiện scroll
            if (carouselRef.current) {
                const itemWidth = carouselRef.current.scrollWidth / testimonials.length;
                const index = Math.round(carouselRef.current.scrollLeft / itemWidth);
                if (index !== current) {
                    setCurrent(index);
                }
            }
        };

        const carouselElement = carouselRef.current;
        if (carouselElement) {
            carouselElement.addEventListener("scroll", handleScroll); // Thêm event listener cho sự kiện scroll
            return () => carouselElement.removeEventListener("scroll", handleScroll); // Xóa event listener khi component unmount
        }
    }, [current]); // useEffect chỉ chạy khi current thay đổi

    return (

        <div className="carousel-container">
            <div className="carousel-content" ref={carouselRef}>
                {testimonials.map((testimonial, index) => ( // Map qua mảng testimonials để render các item
                    <div key={index} className="carousel-item">
                        <div className="testimonial-card">
                            <div className="testimonial-quote"><p>{testimonial.quote}</p></div>
                            <div className="testimonial-author">
                                <p className="author-name">{testimonial.author}</p>
                                <p className="author-position">
                                    {testimonial.position} at {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="carousel-controls">
                <button className="carousel-button prev-button" onClick={goToPrevious}>
                    <img src={assets.SkipLeft} alt="Previous" />
                </button>

                <div className="carousel-dots">
                    {testimonials.map((_, index) => ( // Render các dot để điều hướng slide
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`carousel-dot ${current === index ? "active" : ""}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button className="carousel-button next-button" onClick={goToNext}>
                    <img src={assets.SkipRight} alt="Next" />
                </button>
            </div>


            <div className="striped-pattern bottom-pattern"></div>
        </div>

    );
};

export default Sliders;













