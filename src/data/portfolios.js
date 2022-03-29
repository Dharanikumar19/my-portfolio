import blog from '../img/portImages/blog.jpg';
import shop from '../img/portImages/shop.jpg';
import social from '../img/portImages/social.png';
import zen from '../img/portImages/zen.png';
const portfolios = [
    {
        id: 1,
        category: 'MERN',
        image: zen,
        link1: 'https://github.com/Dharanikumar19/ZenClass-Ticketing-System-Frontend',
        link2: 'https://github.com/Dharanikumar19/ZenClass-Ticketing-System-Backend',
        link3: 'https://zen-class-ticketing-system.netlify.app',
        title: 'Zen Class Ticketing System',
        text: `zen class ticketing system for query solving is a full stack web application with 
               react-redux for state management, and fully responsive design with student and mentor pannel`
    },
    {
        id: 2,
        category: 'MERN',
        image: shop,
        link1: 'https://github.com/Dharanikumar19/e-commerce-frontend',
        link2: 'https://github.com/Dharanikumar19/e-commerce-backend',
        link3: 'https://dk-e-commerce.netlify.app',
        title: 'Shoppers World',
        text: `An e-commerce shopping website is a responsive full stack web application, with paypal payment gateway,
         which includes both user and admin pannel, admin email Id =  admin@gmail.com, password = admin`
    },
    {
        id: 3,
        category: 'MERN',
        image: blog,
        link1: 'https://github.com/Dharanikumar19/Blog-Website-FrontEnd',
        link2: 'https://github.com/Dharanikumar19/Blog-Website-Backend',
        link3: 'https://dk-blog-website.netlify.app',
        title: 'Bloggers Arena',
        text: `Bloggers Arena is an responsive full stack blog application, made by MD Bootstarp with google login,
               where user can create, read, update and delete blogs.`
    },
    {
        id: 4,
        category: 'MERN',
        image: social,
        link1: 'https://github.com/Dharanikumar19/Social-Media-Frontend',
        link2: 'https://github.com/Dharanikumar19/Social-Media-Backend',
        link3: 'https://dk-social-media-app.netlify.app',
        title: 'Mingle Media',
        text: `mingle media is an full stack social media application, where user can create post,
               follow and unfollow friends and also chat with their friends.`
    },
]

export default portfolios;