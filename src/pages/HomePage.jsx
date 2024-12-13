import InfinityFlagSlider from '../components/InfinityFlagSlider';
import Services from '../components/Services';
import Slider from '../components/Slider';
import Employees from '../components/Employees';
import Testimonial from '../components/Testimonial';
import WhyChooseUs from '../components/WhyChooseUs';
import Page from '../components/Page';
export default function HomePage() {
    return (
        <Page>
            <Slider />
            <InfinityFlagSlider />
            <Services />
            <Employees />
            <Testimonial />
            <WhyChooseUs />
        </Page>
    );
}
