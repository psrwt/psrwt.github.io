import type { NextPage } from 'next';
import Image from 'next/image';

const Hero: NextPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 bg-white rounded-lg">
            <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">

                <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-lg overflow-hidden shadow-lg mx-auto md:mx-0">
                    <Image
                        src="/me.jpg"
                        alt="Profile picture of Praveen"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="flex-grow">
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
                        Praveen Singh Rawat
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 mt-2 text-center md:text-left">
                        Full-Stack AI developer building and scaling full-stack applications powered by generative models to solve real business problems.
                    </p>
                    <div className="flex items-center justify-center md:justify-start space-x-4 mt-4 sm:mt-6 text-gray-500">
                        <a href="mailto:praveensingh.connect@gmail.com" aria-label="Email" className="hover:text-gray-900">
                            <img src="/gmail.png" alt="Email Icon" className="object-cover w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="https://github.com/psrwt" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub Icon" className="object-cover w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 hover:scale-110" />
                        </a>
                        <a href="https://linkedin.com/in/praveensinghrawat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-900">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn Icon" className="object-cover w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 hover:scale-110" />
                        </a>
                        {/* <a href="https://leetcode.com/u/praveensinghrawat" target="_blank" rel="noopener noreferrer" aria-label="Leetcode" className="hover:text-gray-900">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" alt="Leetcode Icon" className="object-cover w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200 hover:scale-110" />
                        </a> */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View CV (opens in a new tab)"
                            className="flex gap-1 text-sm items-center border border-gray-300 px-1 sm:px-2 py-1 rounded-lg text-gray-700 hover:text-gray-900 cursor-pointer transition-transform duration-200 hover:scale-105 shadow-sm hover:shadow-md"
                        >
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                                <path d="M16.3891 8.11096L8.61091 15.8891" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.3891 8.11096L16.7426 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M16.3891 8.11096L12.5 7.75741" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 sm:mt-14">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About</h2>
                <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    Building solutions that work at scale, with a focus on AI-powered and data-driven platforms.
                    Exploring how automation and smart workflows can make user experiences smoother and more impactful.
                    Continuously improving architectures, strengthening system reliability, and refining user journeys. Always aiming to connect technology with real user needs and create solutions that get smarter and more effective over time.
                </p>
                
            </div>
        </div>
    );
};

export default Hero;
