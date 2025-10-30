import AboutSmiBanner from './Sections/AboutSmiBannner';
import OurMissionSection from './Sections/OurMission';
import OurCommitmentSection from './Sections/OurCommitment';
import GrowBeyondSection from '../../CommonSections/GrowBeyond';
import OurFounderSection from './Sections/OurFounder';

export default function AboutUs() {
    return (
        <>
            <AboutSmiBanner />
            <OurMissionSection />
            <OurCommitmentSection />
            <OurFounderSection />
            <GrowBeyondSection />
        </>
    );
}
