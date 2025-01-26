import { Mail, User, Zap } from "lucide-react";
import {
  asanaIcon,
  athonLogo,
  client_1,
  client_2,
  client_3,
  client_4,
  discord,
  dribble,
  dribbleIcon,
  facebook,
  figmaIcon,
  framerIcon,
  graphicDesignIcon,
  instagramIcon,
  linkedInIcon,
  notionIcon,
  pinterest,
  pixelworksLogo,
  project_1,
  project_2,
  project_3,
  project_4,
  seoOptIcon,
  slackIcon,
  snapchat,
  spotify,
  vortexLogo,
  webDesignIcon,
  webDevIcon,
  webflowIcon,
  XLogo,
} from "@/app/assets/assets";
import { Github, Instagram } from 'lucide-react'

import { counterListsType, FAQ, FollowerData, myExperienceTypes, myServicesPlansTypes, myServicesTypes, myShowCasesTypes, myStackTypes, socialBrandsTypes, testimonialsTypes } from "@/types";
import { socialListsTypes } from '@/types'
import { pagesListsType } from "@/types";

export const pagesLists: pagesListsType[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    icon: <User />,
  },
  {
    id: 2,
    title: "Services",
    href: "/services",
    icon: <Zap />,
  },
  {
    id: 3,
    title: "Contact",
    href: "/contact",
    icon: <Mail />,
  },
];

export const socialLists: socialListsTypes[] = [
  {
    id: 1,
    title: 'Instagram',
    icon: <Instagram size={22} />,
    link: 'https://www.instagram.com/'
  },
  {
    id: 2,
    title: 'Github',
    icon: <Github size={22} />,
    link: 'https://www.github.com/psparwez'
  },
  {
    id: 3,
    title: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
      </svg>
    ),
    link: 'https://www.twitter.com/psparwez'
  }
]

export const socialBrands: socialBrandsTypes[] = [
  {
    id: 1,
    name: "Discord",
    icon: discord,
    link: "https://discord.com",
  },
  {
    id: 2,
    name: "Dribbble",
    icon: dribble,
    link: "https://dribbble.com",
  },
  {
    id: 3,
    name: "Facebook",
    icon: facebook,
    link: "https://facebook.com",
  },
  {
    id: 4,
    name: "Pinterest",
    icon: pinterest,
    link: "https://pinterest.com",
  },
  {
    id: 5,
    name: "SnapChat",
    icon: snapchat,
    link: "https://snapchat.com",
  },
  {
    id: 6,
    name: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com",
  },
];

export const counterLists: counterListsType[] = [
  {
    id: 1,
    title: "Happy Clients",
    value: 45,
  },
  {
    id: 2,
    title: "Year of Experience",
    value: 2,
  },
  {
    id: 3,
    title: "Completed Tasks",
    value: 40,
  },
  {
    id: 4,
    title: "Awards Received",
    value: 6,
  },
];

export const myExperience: myExperienceTypes[] = [
  {
    id: 1,
    year: "2023 - Present",
    title: "Product Designer",
    company: "Vortex",
    label: 'Tech Firm',
    description: "Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.",
    link: "vortex.com",
    logo: vortexLogo
  },
  {
    id: 2,
    year: "2022 - 2023",
    title: "Senior UI/UX Designer",
    company: "PixelWorks",
    label: 'Design Studio',
    description: "Provided leadership in UI/UX design, mentored junior designers, and collaborated with cross-functional teams for product excellence.",
    link: "pixelworks.io",
    logo: pixelworksLogo
  },
  {
    id: 3,
    year: "2020 - 2022",
    title: "UI/UX Designer",
    company: "Athon",
    label: 'Tech Start-up',
    description: "Led UI/UX design projects from concept to delivery, conducted user testing, and iterated designs for optimal user experience.",
    link: "athon.com",
    logo: athonLogo
  }
]

export const myStack: myStackTypes[] = [
  {
    id: 1,
    title: "Figma",
    description: "Interface Design Tool",
    logo: figmaIcon,
    link: "https://www.figma.com",
  },
  {
    id: 2,
    title: "Notion",
    description: "Productivity Tool",
    logo: notionIcon,
    link: "https://www.notion.so",
  },
  {
    id: 3,
    title: "Webflow",
    description: "No Code Design Tool",
    logo: webflowIcon,
    link: "https://www.webflow.com",
  },
  {
    id: 4,
    title: "Framer",
    description: "No Code Design Tool",
    logo: framerIcon,
    link: "https://www.framer.com",
  },
  {
    id: 5,
    title: "Slack",
    description: "Productivity Tool",
    logo: slackIcon,
    link: "https://slack.com",
  },
  {
    id: 6,
    title: "Asana",
    description: "Productivity Tool",
    logo: asanaIcon,
    link: "https://www.asana.com",
  }
]

export const myServices: myServicesTypes[] = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    icon: webDesignIcon,
    link: '/services'
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    icon: webDevIcon,
    link: '/services'
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    icon: graphicDesignIcon,
    link: '/services'
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    icon: seoOptIcon,
    link: '/services'
  }
]

export const myShowCases: myShowCasesTypes[] = [
  {
    id: 1,
    title: 'Devcraft',
    description: 'Showcasing expertise, passion, and innovation in the realm of development.',
    link: 'vortex.com',
    type: 'Portfolio',
    theme: 'Dark',
    pages: 4,
    image: project_1,
  },
  {
    id: 2,
    title: 'Zenith Gym',
    description: 'Empowering fitness enthusiasts with an immersive online experience.',
    link: 'zenith.com',
    type: 'Fitness',
    theme: 'Light',
    pages: 5,
    image: project_2,
  },
  {
    id: 3,
    title: 'Novus Agency',
    description: 'Transforming ideas into digital realities with creativity and expertise.',
    link: 'novus.com',
    type: 'Business',
    theme: 'Dark',
    pages: 6,
    image: project_3,
  },
  {
    id: 4,
    title: 'Apex Agency',
    description: 'Setting the pinnacle of digital excellence with cutting-edge solutions and creativity.',
    link: 'apex.com',
    type: 'Business',
    theme: 'Light',
    pages: 6,
    image: project_4,
  }
]

export const testimonials: testimonialsTypes[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    description: 'I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...',
    location: 'New York City, USA.',
    avatar: client_1,
  },
  {
    id: 2,
    name: 'John Anderson',
    description: 'Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.',
    location: 'Sydney, Australia.',
    avatar: client_2,
  },
  {
    id: 3,
    name: 'Mark Davis',
    description: 'Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.',
    location: 'London, UK.',
    avatar: client_3,
  },
  {
    id: 4,
    name: 'Laura Adams',
    description: 'Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.',
    location: 'Madrid, Spain.',
    avatar: client_4,
  }
]

export const myServicesPlans: myServicesPlansTypes[] = [
  {
    id: 1,
    service: 'Web Design',
    price: '$50',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    completedWorks: '25+',
    experience: '5+',
    totalHoursWorked: '500 hours',
    icon: webDesignIcon,
  },
  {
    id: 2,
    service: 'Web Dev',
    price: '$60',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    completedWorks: '30+',
    experience: '6+',
    totalHoursWorked: '420 hours',
    icon: webDevIcon,
  },
  {
    id: 3,
    service: 'Graphic Design',
    price: '$40',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    completedWorks: '40+',
    experience: '8+',
    totalHoursWorked: '328 hours',
    icon: graphicDesignIcon,
  },
  {
    id: 4,
    service: 'SEO',
    price: '$70',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    completedWorks: '20+',
    experience: '4+',
    totalHoursWorked: '223 hours',
    icon: seoOptIcon,
  }
];

export const faqData: FAQ[] = [
  {
    question: "Can you work with clients remotely?",
    answer: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.",
  },
  {
    question: "Can you integrate third-party tools into my website?",
    answer: "Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.",
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.",
  },
  {
    question: "How do you handle website revisions?",
    answer: "I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.",
  },
  {
    question: "Can you optimize my website?",
    answer: "Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.",
  },
  {
    question: "What are your payment terms?",
    answer: "Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.",
  },
];

export const followerData: FollowerData[] = [
  {
    platform: "twitter",
    followers: "12.6K",
    url: "https://twitter.com/",
    icon: XLogo,
  },
  {
    platform: "Instagram",
    followers: "8.3K",
    url: "https://www.instagram.com/",
    icon: instagramIcon,
  },
  {
    platform: "LinkedIn",
    followers: "2.5K",
    url: "https://www.linkedin.com/",
    icon: linkedInIcon,
  },
  {
    platform: "Dribbble",
    followers: "3.2K",
    url: "https://dribbble.com/",
    icon: dribbleIcon,
  },
];