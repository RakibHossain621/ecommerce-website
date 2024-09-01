import React from "react";
import FilterIcon from "../components/shop/FilterIcon";
import CircleIcon from "../components/shop/CircleIcon";
import DrividerIcon from "../components/shop/DrividerIcon";
import { TrophyIcon } from "../components/shop/TrophyIcon";
import {WarrntyIcon} from  "../components/shop/WarrntyIcon"
import {ShippingIcon} from  "../components/shop/ShippingIcon"
import {CustomerSupportIcon} from "../components/shop/CustomerSupportIcon"
import LocationIcon from "../components/contact/LocationIcon";
import CallIcon from  '../components/contact/CallIcon'
import ClockIcon from  '../components/contact/ClockIcon'
import UserIcon from "../components/navbarIcon/UserIcon";
import SearchIcon from "../components/navbarIcon/SearchIcon";
import HeartIcon from "../components/navbarIcon/HeartIcon";
import CartIcon from "../components/navbarIcon/CartIcon";
import UserIcon1 from  '../components/blog/UserIcon1'
import DateIcon from '../components/blog/DateIcon'
import WoodIcon from '../components/blog/WoodIcon'

export const roomData = {
   title: '50+ Beautiful rooms inspiration',
   subtitile: 'Our designer already made a lot of beautiful prototipe of rooms that inspire you',
   btnText: 'Explore More',
 
   right: [
     {
       img: './Room.png'
     },
     {
       img: './Room1.png'
     },
   ],
   funtiro:{
    title: 'Share your setup with',
    subtitle: '#FuniroFurniture'
   },
   
    footer:{
    title: 'Funiro.',
    subtitle: '400 University Drive Suite 200 Coral Gables,FL 33134 US',
     footerLeft:['Links','Home','Shop','About','Contact'],
     footerRight:['Help','Payment Options','Returns','Privacy Policies'],
     inputtext:{
      title: 'Newsletter',
      inputText: 'Enter Your Email Address',
      btnText: 'SUBSCRIBE'
     }

   },
    shop:{
      title: 'Shop',
      subtitle: 'Home',
      subtitle1: 'Shop'
    },
    filter: {
      filterIcon: <FilterIcon/>,
      filterText: 'Filter',
      circleIcon: <CircleIcon/>,
      drividerIcon: <DrividerIcon/>,
      spanText: 'Showing 1–16 of 32 results',
      inputText: 'Show',
      inputText2: 'Short by',
    },
    shopCard:[
      {
        productName: 'Slytherine',
        subtitle : 'Stylish cafe chair',
        productImage: './product.png',
        discount: 30,
        isNew: false,
        price: '2.500.000',
        oldPrice: '3.500.000',
      },
      {
        productName: 'Leviosa',
        subtitle : 'Stylish cafe chair',
        productImage: './product1.png',
        discount: null,
        isNew: false,
        oldPrice: null,
        price: '2.500.000',
      },
      {
          productName: 'Lolito',
          subtitle : 'Luxury big sofa',
          productImage: './product3.png',
          discount: 30,
          isNew: false,
          price: '2.500.000',
          oldPrice: '3.500.000',
        },
        {
          productName: 'Respira',
          subtitle : 'Outdoor bar table and stool',
          productImage: './product.png',
          discount: null,
          isNew: true,
          oldPrice: null,
          price: '500.000',
        },
        {
          productName: 'Grifo',
          subtitle : 'Night lamp',
          productImage: './product4.png',
          discount: null,
          isNew: false,
          oldPrice: null,
          price: '1.500.000.000',
        },
        {
          productName: 'Muggo',
          subtitle : 'Small mug',
          productImage: './product5.png',
          discount: null,
          isNew: false,
          oldPrice: null,
          price: '150.000',
        },
        {
          productName: 'Pingky',
          subtitle : 'Cute bed set',
          productImage: './product6.png',
          discount: 30,
          isNew: false,
          price: '7.000.000',
          oldPrice: '14.000.000',
        },
        {
          productName: 'Potty',
          subtitle : 'Minimalist flower pot',
          productImage: './product.png',
          discount: 30,
          isNew: false,
          price: '2.500.000',
          oldPrice: 'Rp 500.000',
        },
        {
          productName: 'Slytherine',
          subtitle : 'Stylish cafe chair',
          productImage: './product.png',
          discount: 30,
          isNew: false,
          price: '2.500.000',
          oldPrice: '3.500.000',
        },
        {
          productName: 'Leviosa',
          subtitle : 'Stylish cafe chair',
          productImage: './product1.png',
          discount: null,
          isNew: false,
          oldPrice: null,
          price: '2.500.000',
        },
        {
            productName: 'Lolito',
            subtitle : 'Luxury big sofa',
            productImage: './product3.png',
            discount: 30,
            isNew: false,
            price: '2.500.000',
            oldPrice: '3.500.000',
          },
          {
            productName: 'Respira',
            subtitle : 'Outdoor bar table and stool',
            productImage: './product.png',
            discount: null,
            isNew: true,
            oldPrice: null,
            price: '500.000',
          },
          {
            productName: 'Grifo',
            subtitle : 'Night lamp',
            productImage: './product4.png',
            discount: null,
            isNew: false,
            oldPrice: null,
            price: '1.500.000.000',
          },
          {
            productName: 'Muggo',
            subtitle : 'Small mug',
            productImage: './product5.png',
            discount: null,
            isNew: false,
            oldPrice: null,
            price: '150.000',
          },
          {
            productName: 'Pingky',
            subtitle : 'Cute bed set',
            productImage: './product6.png',
            discount: 30,
            isNew: false,
            price: '7.000.000',
            oldPrice: '14.000.000',
          },
          {
            productName: 'Potty',
            subtitle : 'Minimalist flower pot',
            productImage: './product.png',
            discount: 30,
            isNew: false,
            price: '2.500.000',
            oldPrice: 'Rp 500.000',
          },
      
    ],
    pagention:["1","2","3","Next"],
    support:[
      {
        trophyIcon: <TrophyIcon/>,
        title: 'High Quality',
        subtitle: 'crafted from top materials'
      },
      {
        warrntyIcon: <WarrntyIcon/>,
        title: 'Warranty Protection',
        subtitle: 'Over 2 years'
      },
      {
        shippingIcon: <ShippingIcon/>,
        title: 'Free Shipping',
        subtitle: 'Order over 150 $'
      },
      {
        CustomerSupportIcon: <CustomerSupportIcon/>,
        title: '24 / 7 Support',
        subtitle: 'Dedicated support'
      }
    ],

   contact:{
    img: '/Meubel house.png',
    title: 'Contact',
    subtitle: 'Home',
    subtitle1: 'Contact'
  },
   contactus:{
    title: 'Get In Touch With Us',
    subtittle: 'For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!',
    
    contactUsLeft:[
      {
        LocationIcon: <LocationIcon/>,
        title: 'Address',
        subtitle: '236 5th SE Avenue, New York NY10000, United States'
      },
      {
        CallIcon: <CallIcon/>,
        title: 'Phone',
        subtitle: 'Mobile: +(84) 546-6789',
        subtitle1: 'Hotline: +(84) 456-6789'
      },
      {
        clockIcon: <ClockIcon/>,
        title: 'Working Time',
        subtitle: 'Monday-Friday: 9:00 - 22:00',
        subtitle1: 'Saturday-Sunday: 9:00 - 21:00'
      },
    ],
     contactright:['Your name','Email address','Subject','Message']
   },
   navbarIcon:[
    {
      userIcon: <UserIcon/>
    },
    {
      serachIcon: <SearchIcon/>
    },
    {
      heartIcon: <HeartIcon/>
    },
    {
      cartIcon: <CartIcon/>
    },
   ],
   blogleft:[
     {
      img: '/blogImage1.png',
      submenu:[
        {
          icon: <UserIcon1/>,
          title: 'Admin'
        },
        {
          icon: <DateIcon/>,
          title: '14 Oct 2022'
        },
        {
          icon: <WoodIcon/>,
          title: 'Wood'
        },
      ],
      title: 'Going all-in with millennial design',
       subtitle:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
       btn: 'Read more'
     },
     {
      img: '/blogImage2.png',
      submenu:[
        {
          icon: <UserIcon1/>,
          title: 'Admin'
        },
        {
          icon: <DateIcon/>,
          title: '14 Oct 2022'
        },
        {
          icon: <WoodIcon/>,
          title: 'Wood'
        },
      ],
      title: 'Exploring new ways of decorating',
       subtitle:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        btn: 'Read more'
     },
     {
      img: '/blogImage3.png',
      submenu:[
        {
          icon: <UserIcon1/>,
          title: 'Admin'
        },
        {
          icon: <DateIcon/>,
          title: '14 Oct 2022'
        },
        {
          icon: <WoodIcon/>,
          title: 'Wood'
        },
      ],
      title: 'Handmade pieces that took time to make',
       subtitle:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.',
        btn: 'Read more'
     },
   ],
   rightBlog:{
    serachIcon: <SearchIcon/>,
    Categories:{
      title: 'Categories',
      catagorislist:[
        {
          subtitle: 'Crafts',
           number: 2
        },
        {
          subtitle: 'Design',
           number: 8
        },
        {
          subtitle: 'Handmade',
           number: 7
        },
        {
          subtitle: 'Interior',
           number: 1
        },
        {
          subtitle: 'Wood',
           number: 6
        },
      ] 
    },


    reacntPost:{
      title: 'Recent Posts',
      blogpost:[
        {
          image: '/recentposts.png',
          title: 'Going all-in with millennial design',
          subtitle: '03 Aug 2022'
        },
        {
          image: '/recentposts1.png',
          title: 'Exploring new ways of decorating',
          subtitle: '03 Aug 2022'
        },
        {
          image: '/recentposts2.png',
          title: 'Handmade pieces that took time to make',
          subtitle: '03 Aug 2022'
        },
        {
          image: '/recentposts3.png',
          title: 'Modern home in Milan',
          subtitle: '03 Aug 2022'
        },
        {
          image: '/recentposts4.png',
          title: 'Colorful office redesign',
          subtitle: '03 Aug 2022'
        }
      ]
    }
   },
   blog:{
    img: '/Meubel house.png',
    title: 'Blog',
    subtitle: 'Home',
    subtitle1: 'Blog'
  }, 
 };

