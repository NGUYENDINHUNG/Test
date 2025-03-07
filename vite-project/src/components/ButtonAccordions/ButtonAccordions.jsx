import React, { useState } from 'react';
import './ButtonAccordions.css';
import { assets } from '../../assets/assets';

const contentDefault = "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.";

const tabData = [
    { title: "Consultation", number: '01', content: contentDefault },
    { title: "Research and Strategy Development", number: "02", content: contentDefault },
    { title: "Implementation", number: '03', content: contentDefault },
    { title: "Reporting and Communication", number: "04", content: contentDefault },
    { title: "Continual Improvement", number: "05", content: contentDefault }
];

const ButtonAccordions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className='tab'>
            {tabData.map((item, index) => (
                <TabItem
                    key={index}
                    title={item.title}
                    number={item.number}
                    content={item.content}
                    isActive={activeIndex === index}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}

export default ButtonAccordions;

const TabItem = ({ title, content, number, isActive, onClick }) => {
    return (
        <div className={`tab__item ${isActive ? 'open' : ''}`} onClick={onClick}>
            <div className="tab__header">
                <div className="number">{number}</div>
                <div className={`tab__title ${isActive ? 'tab__title--active' : ''}`}>{title}</div>
                <div className="tab__icon">{isActive ? <img src={assets.icon1} /> : <img src={assets.icon2} />}</div>
            </div>
            <div className="tab__content-wrapper">
                <div className="tab__content">{content}</div>
            </div>
        </div>
    );
}
