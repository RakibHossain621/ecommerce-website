import React from 'react';
import { hero } from "../seaction/hero";
import BrowsTheRang from '../components/home/BrowsTheRang';
import Product from '../components/home/Product';
import Room from '../components/home/Room';
import Funiro from '../components/home/Funiro';
import Footer from '../components/home/Footer';


const Home = () => {
  return (
    <>
      <section className="bg-[url('/hero.png')] bg-center bg-cover  flex justify-center items-center">
        <div className="container mx-auto flex justify-end items-center">
          <div className='mt-4 pt-[100px] pb-[100px]'>
          <div className='px-16 py-8 bg-[#FFF3E3] rounded-md max-w-md '>
            <h2 className="text-[16px] font-semibold text-[#333333]   mb-2">
              {hero.subtittle}
            </h2>
            <h1 className="text-4xl font-bold text-[#B88E2F] leading-tight  mb-4">
              {hero.title}
            </h1>
            <p className="text-base text-gray-600 mb-6">
              {hero.desc}
            </p>
            <button className="bg-[#B88E2F] text-white font-semibold py-3 px-6 rounded">
              {hero.btntext}
            </button>
          </div>
          </div>
        </div>
      </section>
      <BrowsTheRang/>
      <Product/>
      <Room/>
      <Funiro/>
      <Footer/>
    </>
  );
}

export default Home;
