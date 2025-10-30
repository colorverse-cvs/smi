import HomeIntroBanner from './Sections/HomeIntroBanner';
import GrowBeyondSection from '../../CommonSections/GrowBeyond';
import HomeAboutUsSection from './Sections/AboutUs';
import CustomerFeedbackSection from './Sections/CustomerFeedbackSection';
import ProductCategoriesSection from './Sections/ProductCategoriesSection';

export default function Home() {
    const feedbackData = [
    {
      text: "Sai Maulty International has been our most trusted export partner. Their timely delivery and transparency make global trade effortless.",
      name: "Rajesh Kumar",
      company: "Managing Director, AgriCore India",
      image: "/icons/feedback-card-icon-1.png",
      rating: 5,
    },
    {
      text: "We’ve worked with Sai Maulty for over five years, and they’ve consistently exceeded expectations in product quality and reliability.",
      name: "Dr. Lina Chen",
      company: "Global Pharma Supplier",
       image: "/icons/feedback-card-icon-2.png",
      rating: 5,
    },
    {
      text: "Their professionalism and communication are world-class. A partner we can always rely on for seamless trade.",
      name: "Thomas Lee",
      company: "BrightWorld Imports",
       image: "/icons/feedback-card-icon-1.png",
      rating: 5,
    }, {
      text: "We’ve worked with Sai Maulty for over five years, and they’ve consistently exceeded expectations in product quality and reliability.",
      name: "Dr. Lina Chen",
      company: "Global Pharma Supplier",
       image: "/icons/feedback-card-icon-2.png",
      rating: 5,
    },
    {
      text: "Their professionalism and communication are world-class. A partner we can always rely on for seamless trade.",
      name: "Thomas Lee",
      company: "BrightWorld Imports",
       image: "/icons/feedback-card-icon-1.png",
      rating: 5,
    }
]
    return (
        <>
          <HomeIntroBanner /> 
          <HomeAboutUsSection />
          <CustomerFeedbackSection feedbacks={feedbackData}/>
          <ProductCategoriesSection />
          <GrowBeyondSection /> 
        </>
    );
}
