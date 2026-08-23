import { ICONS } from '@/components/icons';
import { Mail, User, Zap } from 'lucide-react';

export const SITE_CONFIG = {
  profile: {
    name: 'Pragadesh',
    displayName: 'Pragadesh V',
    username: 'psparwez',
    avatar: '/images/profile.png',
    description:
      'Experienced web developer from Kerala, India, with a passion for crafting seamless digital experiences and a proven track record.',
    jobTitle: 'Frontend Developer',
  },
  // Storing Cal.com booking preferences safely in one place
  booking: {
    calUsername: 'psparwez',
    namespace: '15min',
    defaultLayout: 'month_view', // "month_view" | "week_view" | "column_view"
  },

  SITE_INFO: {
    title: 'PS Parwez • Developer Portfolio',
    description:
      'The personal portfolio of PS Parwez — Front-end developer specializing in building fast, accessible, and visually appealing web experiences with React, Next.js, and modern UI design.',
    url: process.env.SITE_URL || 'https://dark-portfolio-site.vercel.app',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const MAIN_MENU = [
  {
    title: 'Home',
    href: '/',
    icon: <User />,
  },
  {
    title: 'Services',
    href: '/services',
    icon: <Zap />,
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <Mail />,
  },
];

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    icon: ICONS.socials.instagram,
    link: 'https://www.instagram.com/',
  },
  {
    label: 'Github',
    icon: ICONS.socials.github,
    link: 'https://github.com/psparwez/portfolio',
  },
  {
    label: 'Twitter',
    icon: ICONS.socials.x,
    link: 'https://www.twitter.com/psparwez',
  },
];

export const LOGOS_CAROUSEL = [
  {
    name: 'Discord',
    link: 'https://discord.com',
    icon: ICONS.logosCarousel.discord,
  },
  {
    name: 'Dribbble',
    link: 'https://dribbble.com',
    icon: ICONS.logosCarousel.dribbble,
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com',
    icon: ICONS.logosCarousel.facebook,
  },
  {
    name: 'Pinterest',
    link: 'https://pinterest.com',
    icon: ICONS.logosCarousel.pinterest,
  },
  {
    name: 'SnapChat',
    link: 'https://snapchat.com',
    icon: ICONS.logosCarousel.snapchat,
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com',
    icon: ICONS.logosCarousel.spotify,
  },
];

export const COUNTER_LISTS = [
  {
    id: 1,
    title: 'Happy Clients',
    value: 45,
  },
  {
    id: 2,
    title: 'Year of Experience',
    value: 2,
  },
  {
    id: 3,
    title: 'Completed Tasks',
    value: 40,
  },
  {
    id: 4,
    title: 'Awards Received',
    value: 6,
  },
];

export const EXPERIENCE_LISTS = [
  {
    id: 1,
    year: '2023 - Present',
    title: 'Product Designer',
    company: 'Vortex',
    label: 'Tech Firm',
    description:
      'Headed product design initiatives, defined design strategy, and ensured alignment with business objectives for market-leading products.',
    link: 'vortex.com',
    logo: ICONS.experienceCompaniesLogos.Vortex,
  },
  {
    id: 2,
    year: '2022 - 2023',
    title: 'Senior UI/UX Designer',
    company: 'PixelWorks',
    label: 'Design Studio',
    description:
      'Provided leadership in UI/UX design, mentored junior designers, and collaborated with cross-functional teams for product excellence.',
    link: 'pixelworks.io',
    logo: ICONS.experienceCompaniesLogos.PixelWorks,
  },
  {
    id: 3,
    year: '2020 - 2022',
    title: 'UI/UX Designer',
    company: 'Athon',
    label: 'Tech Start-up',
    description:
      'Led UI/UX design projects from concept to delivery, conducted user testing, and iterated designs for optimal user experience.',
    link: 'athon.com',
    logo: ICONS.experienceCompaniesLogos.Athon,
  },
];

export const STACK_LISTS = [
  {
    id: 1,
    title: 'Figma',
    description: 'Interface Design Tool',
    logo: ICONS.stackLists.figma,
    link: 'https://www.figma.com',
  },
  {
    id: 2,
    title: 'Notion',
    description: 'Productivity Tool',
    logo: ICONS.stackLists.notion,
    link: 'https://www.notion.so',
  },
  {
    id: 3,
    title: 'Webflow',
    description: 'No Code Design Tool',
    logo: ICONS.stackLists.webflow,
    link: 'https://www.webflow.com',
  },
  {
    id: 4,
    title: 'Framer',
    description: 'No Code Design Tool',
    logo: ICONS.stackLists.framer,
    link: 'https://www.framer.com',
  },
  {
    id: 5,
    title: 'Slack',
    description: 'Productivity Tool',
    logo: ICONS.stackLists.slack,
    link: 'https://slack.com',
  },
  {
    id: 6,
    title: 'Asana',
    description: 'Productivity Tool',
    logo: ICONS.stackLists.asana,
    link: 'https://www.asana.com',
  },
];

export const SERVICES = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    icon: ICONS.services.webDesign,
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    icon: ICONS.services.webdev,
  },
  {
    id: 3,
    title: 'Graphic Design',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    icon: ICONS.services.graphicDesign,
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    icon: ICONS.services.seo,
  },
];

export const SHOW_CASE_PROJECTS = [
  {
    id: 1,
    title: 'Devcraft',
    description: 'Showcasing expertise, passion, and innovation in the realm of development.',
    link: 'vortex.com',
    type: 'Portfolio',
    theme: 'Dark',
    pages: 4,
    image: '/images/projects/project-1.webp',
  },
  {
    id: 2,
    title: 'Zenith Gym',
    description: 'Empowering fitness enthusiasts with an immersive online experience.',
    link: 'zenith.com',
    type: 'Fitness',
    theme: 'Light',
    pages: 5,
    image: '/images/projects/project-2.webp',
  },
  {
    id: 3,
    title: 'Novus Agency',
    description: 'Transforming ideas into digital realities with creativity and expertise.',
    link: 'novus.com',
    type: 'Business',
    theme: 'Dark',
    pages: 6,
    image: '/images/projects/project-3.webp',
  },
  {
    id: 4,
    title: 'Apex Agency',
    description:
      'Setting the pinnacle of digital excellence with cutting-edge solutions and creativity.',
    link: 'apex.com',
    type: 'Business',
    theme: 'Light',
    pages: 6,
    image: '/images/projects/project-4.webp',
  },
];

export const TESTINOMIALS = [
  {
    id: 1,
    name: 'Sarah Thompson',
    description:
      'I am thrilled with the website for my business. His ability to translate my vision into a visually stunning...',
    location: 'New York City, USA.',
    avatar: '/images/clients/client-1.webp',
  },
  {
    id: 2,
    name: 'John Anderson',
    description:
      'Working with Pragadesh was a game-changer for my online business. His web design skills are exceptional.',
    location: 'Sydney, Australia.',
    avatar: '/images/clients/client-2.webp',
  },
  {
    id: 3,
    name: 'Mark Davis',
    description:
      'Pragadesh’s creativity and technical expertise transformed our website into a visually stunning platform.',
    location: 'London, UK.',
    avatar: '/images/clients/client-3.webp',
  },
  {
    id: 4,
    name: 'Laura Adams',
    description:
      'Pragadesh is a artist when it comes to website. He transformed my outdated website into a modern masterpiece.',
    location: 'Madrid, Spain.',
    avatar: '/images/clients/client-4.webp',
  },
];

export const SERVICES_PLANS = [
  {
    id: 1,
    service: 'Web Design',
    price: '$50',
    description: 'Crafting visually captivating and user-friendly websites for online success.',
    completedWorks: '25+',
    experience: '5+',
    totalHoursWorked: '500 hours',
    icon: ICONS.services.webDesign,
  },
  {
    id: 2,
    service: 'Web Dev',
    price: '$60',
    description: 'Bringing ideas to life with robust and scalable web solutions.',
    completedWorks: '30+',
    experience: '6+',
    totalHoursWorked: '420 hours',
    icon: ICONS.services.webdev,
  },
  {
    id: 3,
    service: 'Graphic Design',
    price: '$40',
    description: 'Creating visually stunning designs that captivate and engage audiences.',
    completedWorks: '40+',
    experience: '8+',
    totalHoursWorked: '328 hours',
    icon: ICONS.services.graphicDesign,
  },
  {
    id: 4,
    service: 'SEO',
    price: '$70',
    description: 'Elevating online visibility and driving organic traffic through strategies.',
    completedWorks: '20+',
    experience: '4+',
    totalHoursWorked: '223 hours',
    icon: ICONS.services.seo,
  },
];

export const FAQs = [
  {
    question: 'Can you work with clients remotely?',
    answer:
      'Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      "Absolutely! Mobile responsiveness is a top priority in today's digital landscape. I design and develop websites that are fully responsive and adaptable to various devices and screen sizes. Your website will provide an optimal user experience whether accessed via desktops, smartphones, or tablets.",
  },
  {
    question: 'How long does it typically take to complete a project?',
    answer:
      'The timeline for each project varies depending on its scope and complexity. Factors such as the number of pages, functionalities, and the client feedback process can impact the timeline. Upon discussing your project requirements, I will provide you with a realistic timeline and keep you updated throughout the process.',
  },
  {
    question: 'Can you integrate third-party tools into my website?',
    answer:
      'Yes, I have experience integrating various third-party tools, plugins, and platforms into websites. Whether you need to integrate e-commerce functionalities, social media integration, email marketing services, or anything else, I can recommend and help ensure smooth integration.',
  },
  {
    question: 'Do you offer website maintenance?',
    answer:
      'Yes, I offer website maintenance services to ensure your website remains up to date, secure, and optimized. From performance updates to adding new features and content, I can provide ongoing support to keep your website running smoothly.',
  },
  {
    question: 'How do you handle website revisions?',
    answer:
      'I value your input and collaboration throughout the design process. Upon completing an initial design, I encourage you to provide feedback. I incorporate your suggestions and revisions to ensure the final product aligns with your vision.',
  },
  {
    question: 'Can you optimize my website?',
    answer:
      'Certainly! I incorporate search engine optimization (SEO) best practices into my development process. This includes using relevant keywords, optimizing meta tags, creating search-engine-friendly URLs, and ensuring your website has a solid foundation for better search engine visibility.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'Payment terms may vary depending on the project scope and duration. Generally, I request an initial deposit before commencing work.',
  },
];

export const FOLLOWERS_DATA = [
  {
    platform: 'twitter',
    followers: '12.6K',
    url: 'https://twitter.com/',
    icon: ICONS.socials.x,
  },
  {
    platform: 'Instagram',
    followers: '8.3K',
    url: 'https://www.instagram.com/',
    icon: ICONS.socials.instagram,
  },
  {
    platform: 'LinkedIn',
    followers: '2.5K',
    url: 'https://www.linkedin.com/',
    icon: ICONS.socials.x,
  },
  {
    platform: 'Dribbble',
    followers: '3.2K',
    url: 'https://dribbble.com/',
    icon: ICONS.socials.instagram,
  },
];
