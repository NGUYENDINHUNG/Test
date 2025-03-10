import { useState } from "react";

import "./Carousel.css";

import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [

    {
        content:
            "We've seen a significant increase in online traffic and sales thanks to Positivus. The team is professional, responsive, and truly cares about our success.",
        author: "John Smith",
        position: "Marketing Director at XYZ Corp",

    },
    {
        content:
            "Positivus helped us grow our online presence effectively. Their team is dedicated and results-driven.",
        author: "Hung Hung",
        position: "Marketing Director at XYZ Corp",
    },
    {
        content:
            "Fantastic experience with Positivus! Our business has thrived thanks to their marketing strategies.",
        author: "Nga Nguyen",
        position: "Marketing Director at XYZ Corp",
    },
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="carousel_container">
            <button className="carousel_button prev" onClick={prevSlide}>
                <ArrowLeft />
            </button>
            <div className="carousel_content">
                <div className="carousel_card">
                    <p className="card_carousel_content">{testimonials[currentSlide].content}</p>
                    <div className="card_author">
                        <h4>{testimonials[currentSlide].author}</h4>
                        <p>{testimonials[currentSlide].position}</p>
                    </div>
                </div>
            </div>
            <button className="carousel_button next" onClick={nextSlide}>
                <ArrowRight />
            </button>
            <div className="carousel_dots">
                {testimonials.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentSlide === index ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>


    );

};

export default Carousel;