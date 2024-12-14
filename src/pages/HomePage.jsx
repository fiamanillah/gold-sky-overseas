import InfinityFlagSlider from '../components/InfinityFlagSlider';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Employees from '../components/Employees';
import Testimonial from '../components/Testimonial';
import WhyChooseUs from '../components/WhyChooseUs';
import Page from '../components/Page';
import FAQ from '../components/FAQ';
import Stats from '../components/Stats';
import SuccessStory from '../components/SuccessStory';
export default function HomePage() {
    return (
        <Page>
            <Slider />
            <InfinityFlagSlider />
            <Services />
            <Stats />
            <Employees />
            <SuccessStory />
            <Testimonial />
            <WhyChooseUs />
            <FAQ />
        </Page>
    );
}
