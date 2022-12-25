//  icons
import {
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FaResolving, FaFacebook, FaHandshake } from 'react-icons/fa'
// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png'
import UpworkBrandIcon from './assets/img/brands/upwork.png'
import FiverBrandIcon from './assets/img/brands/fiverr.png'
import BehanceBrandIcon from './assets/img/brands/behance.png'
import DribbbleBrandIcon from './assets/img/brands/dribbble.png'

// projects images
import ContactTest from './assets/img/projects/contactMemorizer.png'
import RtkQuery from './assets/img/projects/rtk-query-crud.png'
import MusicApp from './assets/img/projects/music_app.png'
// import houseMarketPlaceApp from './assets/img/projects/houseMarketPlace.png'
import NetflixApp from './assets/img/projects/NetflixApp.png'
import ImageFinder from './assets/img/projects/imageFinder.png'
import random_gif from './assets/img/projects/randomGif.png'
import TemperatureHot from './assets/img/projects/temparature.png'
import BookArchive from './assets/img/projects/BookArchive.png'
import MacPro from './assets/img/projects/macPro.png'
import ProShop from './assets/img/projects/shopIt.png'
import DroneWebsite from './assets/img/projects/drone.png'
import Home from './assets/img/projects/Home.png'

// skills images
import SkillImg1 from './assets/img/skills/html5.png'
import SkillImg2 from './assets/img/skills/css3.png'
import SkillImg3 from './assets/img/skills/js.png'
import SkillImg4 from './assets/img/skills/reactjs.png'
import SkillImg5 from './assets/img/skills/nextjs.png'
import SkillImg6 from './assets/img/skills/nodejs.png'
import SkillImg7 from './assets/img/skills/git.png'


// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp'
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp'
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp'

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
]

// social
export const social = [
  {
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/profile.php?id=100007513814577',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Noormohammad011',
  },
  {
    icon: <AiOutlineLinkedin />,
    href: 'https://www.linkedin.com/in/noor-mohammad-a39415218/',
  },
]

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
]
// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'react',
  },
  {
    name: 'javascript',
  },
  {
    name: 'mern',
  },
  {
    name: 'django',
  },
]

// projects
export const projectsData = [
  {
    id: '1',
    image: ImageFinder,
    name: 'Image Finder',
    category: 'react',
    liveLInk: 'https://tailwindimagefinder.netlify.app/',
    description:
      'This is a simple image finder app using unsplash api and tailwind css',
  },
  // {
  //   id: '2',
  //   image: houseMarketPlaceApp,
  //   name: 'House Market Place',
  //   category: 'react',
  //   liveLInk: 'https://house-marketplace-app-d26ad.web.app/',
  //   githubLink: 'https://github.com/Noormohammad011/houseMarketPlace',
  //   description:
  //     'House Market Place app using react js, tailwind css , firebase',
  // },
  {
    id: '3',
    image: ContactTest,
    name: 'Contact Memorizer',
    category: 'react',
    liveLInk: 'https://react-redux-contact-test.netlify.app/',
    githubLink: 'https://github.com/Noormohammad011/react-redux-crud',
    description:
      'This is a simple contact memorizer app using react js with redux',
  },
  {
    id: '4',
    image: RtkQuery,
    name: 'RTK Query Crud',
    category: 'react',
    liveLInk: 'https://rtk-query-crud.onrender.com/',
    BackendLink: 'https://github.com/Noormohammad011/rtk-query-server',
    githubLink: 'https://github.com/Noormohammad011/rtk-query',
    description: 'Rtk query crud app using react js with redux toolkit',
  },
  {
    id: '5',
    image: MusicApp,
    name: 'Music App',
    category: 'react',
    liveLInk: 'https://reactmusicmania.netlify.app/',
    githubLink: 'https://github.com/Noormohammad011/React_music_player',
    description: 'Music app using react js where you can search for songs',
  },
  {
    id: '6',
    image: NetflixApp,
    name: 'Netflix App',
    category: 'react',
    liveLInk: 'https://netflixclonewithreactjs.netlify.app/',
    githubLink: '',
    description: 'Netflix app using react with integrated external api',
  },
  {
    id: '7',
    image: random_gif,
    name: 'Random Gif Generator',
    category: 'react',
    liveLInk: 'https://blissful-thompson-12c9f6.netlify.app/',
    githubLink: '',
    description: 'Random gif generator using react js',
  },
  {
    id: '8',
    image: TemperatureHot,
    name: 'weather app',
    category: 'javascript',
    liveLInk: 'https://weathersecret.netlify.app/',
    githubLink: 'https://github.com/Noormohammad011/weatherAppJs',
    description: 'Weather app using javascript',
  },
  {
    id: '9',
    image: BookArchive,
    name: 'Book Archieve',
    category: 'javascript',
    liveLInk: 'https://bookarchiveme.netlify.app/',
    githubLink: 'https://github.com/Noormohammad011/book-archive-js-with--api',
    description: 'Book archieve app using javascript with integrated api',
  },
  {
    id: '10',
    image: MacPro,
    name: 'Mac Pro',
    category: 'javascript',
    liveLInk: 'https://hiphiphurrahmacpro.netlify.app/',
    githubLink: 'https://github.com/Noormohammad011/mac-book-pro-js',
    description: 'Mac pro app using javascript with simple calculations',
  },
  {
    id: '11',
    image: ProShop,
    name: 'Shop It',
    category: 'mern',
    liveLInk: 'https://shopit-frontend.onrender.com/',
    githubLink: 'https://github.com/Noormohammad011/ShopIt-Frontend',
    BackendLink: 'https://github.com/Noormohammad011/ShopIT-Backend',
    description:
      'Shop it app using mern stack with redux and redux thunk and jwt authentication',
  },
  {
    id: '12',
    image: DroneWebsite,
    name: 'Drone Ecommerce',
    category: 'mern',
    liveLInk: 'https://drone-website-frontend.onrender.com/',
    githubLink: 'https://github.com/Noormohammad011/droneWebsiteFrontend',
    BackendLink: 'https://github.com/Noormohammad011/droneWebsiteBackend',
    description: 'Drone ecommerce app using mern with jwt authentication',
  },
  {
    id: '13',
    image: Home,
    name: 'Django Ecommerce',
    category: 'django',
    liveLInk: 'https://web-production-a372.up.railway.app/',
    githubLink: 'https://github.com/Noormohammad011/djangoEcommerce',
    description: 'Ecommerce app using django with sripe payment',
  },
]



// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
]

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'My goal is to always build websites that are visually appealing and easy to use. I also make sure that the websites are responsive and work on all devices.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'With a strong background in web development, I can build a fast and responsive website for your business. I also make sure that the website is secure and SEO friendly.',
  },
  {
    icon: <FaResolving />,
    name: 'Solving Problems',
    description:
      'I am a problem solver. I can help you solve any problem you are facing with your website. I can also help you with any other technical problem you are facing.',
  },
  {
    icon: <FaHandshake />,
    name: 'Support',
    description:
      'I provide 24/7 support. I am always available to help you with any problem you are facing with your website. I can also help you with any other technical problem you are facing.',
  },
]

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
]

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'Please feel free to contact me',
    description: 'Email me at noormohammad.net1503011@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Khilkhet, Dhaka, Bangladesh',
    description: 'Please feel free to contact me whenever you want',
  },
]
