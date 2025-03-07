
import { useState, useEffect, useRef } from "react"
import { assets } from "../../assets/assets"
import "./Carousel.css"

const testimonials = [
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
]

const Sliders = () => {
    const [current, setCurrent] = useState(0)
    const carouselRef = useRef(null)

    const goToSlide = (index) => {
        setCurrent(index)
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth
            const itemWidth = scrollWidth / testimonials.length
            carouselRef.current.scrollTo({
                left: itemWidth * index,
                behavior: "smooth",
            })
        }
    }

    const goToPrevious = () => {
        const newIndex = current === 0 ? testimonials.length - 1 : current - 1
        goToSlide(newIndex)
    }

    const goToNext = () => {
        const newIndex = current === testimonials.length - 1 ? 0 : current + 1
        goToSlide(newIndex)
    }

    // Handle scroll snap detection
    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const scrollLeft = carouselRef.current.scrollLeft
                const itemWidth = carouselRef.current.scrollWidth / testimonials.length
                const index = Math.round(scrollLeft / itemWidth)
                if (index !== current) {
                    setCurrent(index)
                }
            }
        }

        const carouselElement = carouselRef.current
        if (carouselElement) {
            carouselElement.addEventListener("scroll", handleScroll)
            return () => carouselElement.removeEventListener("scroll", handleScroll)
        }
    }, [current])

    return (
        <div className="testimonials-container">
            <div className="testimonials-wrapper">
                {/* Top striped pattern */}
                <div className="striped-pattern top-pattern">
                    <h2 className="testimonials-title">Testimonials block</h2>
                </div>

                <div className="carousel-container">
                    <div className="carousel-content" ref={carouselRef}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="carousel-item">
                                <div className="testimonial-card">
                                    <p className="testimonial-quote">"{testimonial.quote}"</p>
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
                            <img src={assets.SkipLeft} />
                        </button>

                        <div className="carousel-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`carousel-dot ${current === index ? "active" : ""}`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button className="carousel-button next-button" onClick={goToNext}>
                            <img src={assets.SkipRight} />
                        </button>
                    </div>
                </div>

                {/* Bottom striped pattern */}
                <div className="striped-pattern bottom-pattern"></div>
            </div>
        </div>
    )
}

export default Sliders

