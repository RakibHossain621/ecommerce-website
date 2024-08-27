import React from "react";
import FilterIcon from "../components/shop/filterIcon";
import CircleIcon from "../components/shop/circleIcon";
import DrividerIcon from "../components/shop/drividerIcon";

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
      inputText2: 'Short by'
    }
 };

