import HomeIntroBanner from './Sections/HomeIntroBanner';
import GrowBeyondSection from '../../CommonSections/GrowBeyond';
import HomeAboutUsSection from './Sections/AboutUs';

export default function Home() {
    return (
        <>
          <HomeIntroBanner /> 
          <HomeAboutUsSection />
          <GrowBeyondSection /> 
        </>
    );
}
