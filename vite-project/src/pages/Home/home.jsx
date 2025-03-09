import ButtonAccordions from "../../components/ButtonAccordions/ButtonAccordions"
import CardList from "../../components/Card/CardList"
import CardGroup from "../../components/CardGroup/CardGroup"
import CardService from "../../components/CardSevice/CardSevice"
// import Sliders from "../../components/Carousel/Carousel"
// import Carousel from "../../components/Carousel/Carousel"
// import CardSlider from "../../components/Carousel/sliders"
// import TestimonialCarousel from "../../components/Carousel/sliders"
import CaseStudies from "../../components/CaseStudies/CaseStudies"
import ExportCompany from "../../components/ExportCompanyMenu/ExportCompany"
import Form from "../../components/Form/Form"
import Header from "../../components/header/header"
import Heading from "../../components/Heading/Heading"


const HomePage = () => {
    return (
        <div>
            <Header />
            <ExportCompany />
            <Heading
                title={"Service"}
                content={"At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"}
            />
            <CardList />
            <CardService />
            <Heading
                title={"Case Studies"}
                content={"Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"}
            />
            <CaseStudies />
            <Heading
                title={"Our Working Process "}
                content={"Step-by-Step Guide to Achieving Your Business Goals"}
            />
            <ButtonAccordions />
            <Heading
                title={"Team "}
                content={"Meet the skilled and experienced team behind our successful digital marketing strategies"}
            />
            <CardGroup />
            <Heading
                title={"Testimonials "}
                content={"Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"}
            />
            {/* <Sliders/> */}
            <Heading
                title={"Contact Us"}
                content={"Connect with Us: Let's Discuss Your Digital Marketing Needs"}
            />
            <Form />
        </div>
    )
}
export default HomePage