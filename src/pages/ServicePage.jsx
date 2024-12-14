import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdFlight, MdAirplaneTicket, MdPlace, MdPublic } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import Page from '../components/Page';
import Section from '../components/Section';
import bannerBg from '../assets/services-bg.png';

export default function ServicePage() {
    const [services, setServices] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // Fetch the services data from the public folder
        fetch('/services.json')
            .then(response => response.json())
            .then(data => {
                setServices(data);
                const initialTab = searchParams.get('tab') || data[0]?.id; // Set the first tab as default
                setActiveTab(Number(initialTab));
            });
    }, [searchParams]);

    const handleTabClick = id => {
        setActiveTab(id);
        setSearchParams({ tab: id });
    };

    const activeService = services.find(service => service.id === activeTab);
    const gradientColors = [
        'bg-gradient-to-l from-pink-400 to-red-500',
        'bg-gradient-to-l from-green-400 to-teal-500',
        'bg-gradient-to-l from-yellow-400 to-orange-500',
        'bg-gradient-to-l from-purple-400 to-pink-500',
    ];

    // Map icons to React Icons components
    const iconMap = {
        MdFlight: <MdFlight />,
        FaGraduationCap: <FaGraduationCap />,
        MdAirplaneTicket: <MdAirplaneTicket />,
        MdPlace: <MdPlace />,
        MdPublic: <MdPublic />,
    };

    return (
        <Page>
            <Section className={'relative'}>
                <div>
                    <img
                        className="h-[30vh] w-full object-cover rounded-2xl"
                        src={bannerBg}
                        alt="Service Banner"
                    />
                </div>
            </Section>
            <Section>
                <div className="flex flex-col md:flex-row my-6">
                    {/* Tabs */}
                    <aside className="w-full md:w-1/4">
                        <ul className="space-y-4 list-none mobile-lg:flex mobile-lg:gap-2 mobile-lg:space-y-0 mobile-lg:my-5 mobile-lg:justify-between">
                            {services?.map((service, index) => (
                                <motion.li
                                    key={service.id}
                                    className={`cursor-pointer p-4 rounded-lg flex items-center mobile-lg:w-full mobile-lg:flex mobile-lg:justify-center gap-2 ${
                                        activeTab === service.id
                                            ? `${
                                                  gradientColors[index % gradientColors.length]
                                              } text-white`
                                            : 'bg-base-300'
                                    }`}
                                    onClick={() => handleTabClick(service.id)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="text-2xl">{iconMap[service.icon]} </span>{' '}
                                    <span className="mobile-lg:hidden"> {service.title}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </aside>

                    {/* Active Tab Content */}
                    <main className="w-full md:w-3/4 md:ml-6 relative">
                        <AnimatePresence mode="wait">
                            {activeService && (
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-6 bg-base-200 rounded-xl shadow-md border-2 border-base-300"
                                >
                                    <h2 className="text-xl font-semibold">{activeService.title}</h2>
                                    <p className="mt-4">{activeService.description}</p>
                                    <div className="mt-6">
                                        <h3 className="text-lg font-bold">Overview</h3>
                                        <p>{activeService.detailsResources.overview}</p>

                                        <h3 className="text-lg font-bold mt-4">Steps</h3>
                                        <ul className="list-disc pl-6">
                                            {activeService.detailsResources.steps.map(
                                                (step, index) => (
                                                    <li key={index}>{step}</li>
                                                )
                                            )}
                                        </ul>

                                        <h3 className="text-lg font-bold mt-4">
                                            Required Documents
                                        </h3>
                                        <ul className="list-disc pl-6">
                                            {activeService.detailsResources.requiredDocuments.map(
                                                (doc, index) => (
                                                    <li key={index}>{doc}</li>
                                                )
                                            )}
                                        </ul>

                                        <h3 className="text-lg font-bold mt-4">
                                            Additional Resources
                                        </h3>
                                        <ul className="list-disc pl-6">
                                            {activeService.detailsResources.additionalResources.map(
                                                (resource, index) => (
                                                    <li key={index}>{resource}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                            <div className="absolute inset-0 z-0 transform-gpu overflow-hidden blur-[95px] ]">
                                <div
                                    style={{
                                        clipPath:
                                            'polygon(97.88% 97.88%, 79.5% 55.5%, 89.5% 55.5%, 89.5% 19.75%, 53.98% 23.8%, 71.25% 7.28%, 80.88% 17.34%, 89.5% 3.28%, 97.9% 11.51%, 89.5% 19.75%, 89.5% 55.5%, 100% 70.5%, 37.75% 87.75%, 37.75% 70.5%, 65.5% 55.5%)',
                                    }}
                                    className="relative  aspect-video w-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  "
                                />
                            </div>
                        </AnimatePresence>
                    </main>
                </div>

                <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-[85px] flex justify-start items-end">
                    <div
                        style={{
                            clipPath:
                                'polygon(0% 35.25%, 24.17% 36.24%, 37.28% 29.97%, 82.61% 8.31%, 100% 11%, 66.05% 26.5%, 7.5% 69.09%, 40.75% 88.5%, 80.11% 69.09%, 72.3% 53.25%, 100% 29.97%, 59.43% 43.8%, 59.43% 64.06%, 0% 88.5%, 7.5% 69.09%, 66.05% 26.5%, 48.8% 30.79%, 7.5% 58.25%)',
                        }}
                        className="relative  inset-0  aspect-video w-[50vw] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30  translate-y-11"
                    />
                </div>
            </Section>
        </Page>
    );
}
