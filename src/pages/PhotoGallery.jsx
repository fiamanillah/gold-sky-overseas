import { motion } from 'framer-motion';
import Page from '../components/Page';
import Section from '../components/Section';

const PhotoGallery = () => {
    const photos = [
        {
            id: 1,
            src: '/gallery/1.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 2,
            src: '/gallery/2.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 3,
            src: '/gallery/3.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 4,
            src: '/gallery/4.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 5,
            src: '/gallery/5.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 6,
            src: '/gallery/6.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 7,
            src: '/gallery/7.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 8,
            src: '/gallery/8.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 9,
            src: '/gallery/9.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 10,
            src: '/gallery/10.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 11,
            src: '/gallery/11.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
        {
            id: 12,
            src: '/gallery/12.jpg',
            title: 'Gold Sky Overseas',
            description: 'We turn your vision into globally.',
        },
    ];
    

    return (
        <Page>
            <Section className={'relative'}>
                <div className="max-w-6xl mx-auto py-10 px-4">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-bold ">Photo Gallery</h1>
                        <p className=" mt-2">Explore our collection of stunning photos.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {photos.map(photo => (
                            <motion.div
                                key={photo.id}
                                className="relative overflow-hidden rounded-lg shadow-md"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-64 object-cover"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0"
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h2 className="text-lg font-semibold text-white">
                                        {photo.title}
                                    </h2>
                                    <p className="text-sm text-gray-300 mt-2">
                                        {photo.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[90px] flex justify-end items-start">
                    <div
                        style={{
                            clipPath:
                                'polygon(0% 58%, 100% 67%, 100% 18%, 75% 76.5%, 75% 12.88%, 35.5% 82.5%, 35.5% 7.5%)',
                        }}
                        className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                    />
                </div>

                <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[90px] flex justify-start items-center">
                    <div
                        style={{
                            clipPath:
                                'polygon(0% 58%, 100% 67%, 100% 18%, 75% 76.5%, 75% 12.88%, 35.5% 82.5%, 35.5% 7.5%)',
                        }}
                        className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                    />
                </div>
            </Section>
        </Page>
    );
};

export default PhotoGallery;
