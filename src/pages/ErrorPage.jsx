import Page from '../components/Page';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Lottie from 'lottie-react';
import error from '../assets/404.json';
export default function ErrorPage() {
    return (
        <Page>
            <Section className={'prose max-w-none py-0 h-screen'}>
                <div className="flex flex-col items-center justify-center h-screen">
                    <Lottie animationData={error} loop={true} />
                    <p className="text-lg mb-3 mt-0">
                        Sorry, the page you are looking for does not exist.
                    </p>
                    <Link to="/" className="underline">
                        Go back to Home
                    </Link>
                </div>

                <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[70px] ]">
                <div
                    style={{
                        clipPath:
                            'polygon(2.43% 12.75%, 8.29% 38%, 25.26% 16.48%, 19.61% 46.21%, 23.25% 46.21%, 61.49% 85.05%, 91.47% 90.75%, 79.42% 58.71%, 93.26% 65.83%, 79.42% 95.28%, 71.02% 73.43%, 62.13% 86.27%, 23.62% 46.21%, 19.56% 20.74%, 14.93% 43.88%, 13.86% 25%)',
                    }}
                    className="relative  aspect-video w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  "
                />
            </div>
            </Section>
        </Page>
    );
}
