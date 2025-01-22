import { StaticImageData } from "next/image";

export interface pagesListsType {
  id: number;
  title: string;
  href: string;
  icon: React.ReactNode;
}

export interface socialListsTypes {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
}

export interface socialBrandsTypes {
  id: number;
  name: string;
  icon: string;
  link: string;
}

export interface counterListsType {
  id: number;
  title: string;
  value: number;
}

export interface myExperienceTypes {
  id: number;
  year: string;
  title: string;
  company: string;
  label: string;
  description: string;
  link: string;
  logo: string;
}

export interface myStackTypes {
  id: number;
  title: string;
  description: string;
  logo: string;
  link: string;
}

export interface myServicesTypes {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}
export interface myShowCasesTypes {
  id: number;
  title: string;
  description: string;
  link: string;
  type: string;
  theme: string;
  pages: number;
  image: StaticImageData | string;
}

export interface testimonialsTypes {
  id: number;
  name: string;
  description: string;
  location: string;
  avatar: StaticImageData | string;
}

export interface myServicesPlansTypes {
  id: number;
  service: string;
  price: string;
  description: string;
  completedWorks: string;
  experience: string;
  totalHoursWorked: string;
  icon: string;
}

export type FAQ = {
  question: string;
  answer: string;
};

export interface FollowerData {
  platform: string;
  followers: string;
  url: string;
  icon: string;
}
