'use client';

import { FC, useState } from 'react';
import Image from 'next/image';

interface Experience {
  logo: string;
  company: string;
  role: string;
  date: string;
  summary: string;
  bullets: string[];
  techStack: string;
  link?: string;
}


const experiencesData: Experience[] = [
  {
    logo: "/cwxai_logo.png",
    company: "CWxAI (Startup Venture)",
    role: "Full-Stack AI Developer",
    date: "Jan 2025 – Jul 2025",
    link: "https://cwxai.vercel.app/",
    summary:
      "AI-powered startup validation platform using Retrieval-Augmented Generation (RAG) and real-time external data to automate market and idea analysis.",
    bullets: [
      "Shipped an end-to-end AI system combining LLM-driven insights with structured data pipelines.",
      "Built backend APIs to transform AI outputs into structured JSON for frontend consumption.",
      "Developed a production-ready Next.js frontend with interactive dashboards and visual reports.",
      "Integrated Razorpay for secure payment processing.",
      "Enabled early adoption with 100+ users across 12 countries, generating 230+ automated reports.",
    ],
    techStack:
      "Next.js, Flask, RAG, LLMs, MongoDB, Razorpay",
  },
  {
    logo: "/nic_logo.png",
    company: "National Informatics Center (NIC)",
    role: "Full-Stack Developer Intern",
    date: "June 2024 – July 2024",
    summary:
      "Worked on a government project inspector tracking system (ITS), focused on security, data integrity, and real-time operations.",
    bullets: [
      "Modernized the Inspector Tracking System (ITS) using Laravel, MySQL, JavaScript, and HTML/CSS",
      "Implemented secure authentication and role-based access control for sensitive government data",
      "Designed intuitive dashboards for inspectors and administrators, improving usability and workflow efficiency",
      "Built document upload and access-controlled storage for official records",
    ],
    techStack: "Laravel, MySQL, JavaScript, HTML/CSS",
  },
];


interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

const ExperienceItem: FC<{ experience: Experience; isLast: boolean }> = ({
  experience,
  isLast,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="relative w-10 h-10 border border-gray-200 rounded-full bg-white shadow">
          <Image
            src={experience.logo}
            alt={`${experience.company} logo`}
            fill
            className="rounded-full object-contain p-1"
          />
        </div>
        {!isLast && <div className="w-px flex-grow bg-gray-200" />}
      </div>

      <div className="w-full pb-6">
        <div className="border-2 border-gray-100 rounded-lg p-4 hover:border-gray-200 transition">
          <div
            className="flex justify-between items-start cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div>
              <h3 className="font-bold text-gray-800 flex items-center gap-2">
                {experience.company}

                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="
  inline-flex items-center gap-1
  rounded-full border border-gray-300
  px-3 py-1
  text-xs font-medium text-gray-700
  hover:bg-gray-100 hover:border-gray-400
  transition
"


                  >
                    visit <span className="text-xs">↗</span>
                  </a>
                )}

              </h3>

              <p className="text-sm text-gray-700">{experience.role}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                {experience.date}
              </span>
              <span
                className={`transform transition-transform ${isOpen ? "rotate-90" : ""
                  }`}
              >
                ▶
              </span>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            {experience.summary}
          </p>

          <div
            className={`transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[600px] mt-4" : "max-h-0"
              }`}
          >
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              {experience.bullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p className="mt-4 text-sm">
              <span className="font-semibold text-gray-700">
                Tech Stack:
              </span>{" "}
              <span className="text-gray-600">
                {experience.techStack}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const TechnicalExperience: FC = () => {
  return (
    <div className="bg-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-8 sm:mt-0">
      <h2 className="text-2xl sm:text-3xl text-gray-900 font-bold mb-6 sm:mb-8">Technical Experience</h2>
      <div>
        {experiencesData.map((exp, index) => (
          <ExperienceItem
            key={index}
            experience={exp}
            isLast={index === experiencesData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalExperience;
