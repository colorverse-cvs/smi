import ServiceBanner from './Sections/ServiceBanner';
import CoreExpertiseSection from './Sections/CoreExpertise';
import GrowBeyondSection from '../../CommonSections/GrowBeyond';
import ScrollableProductCardSection from './Sections/ScrollableProductCard'
export default function Service() {
    return (
        <>
            <ServiceBanner />
            <CoreExpertiseSection />
            <ScrollableProductCardSection />
            <GrowBeyondSection />
        </>
    );
}
