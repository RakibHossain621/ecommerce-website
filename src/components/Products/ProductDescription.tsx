import React, { useState } from 'react';

const description = {
  heading: ['Description', 'Additional Information', 'Reviews [5]'],
  subtitle: 'Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.',
  subtitle1: 'Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.',
  additionalInfo: 'Additional information about the product...',
  reviews: 'User reviews will be displayed here...',
  img: [
    {
      descriptionImg: '/description.png'
    },
    {
      descriptionImg: '/description.png'
    },
  ]
};

const ProductDescription = () => {
  const [activeHeading, setActiveHeading] = useState(0);

  const handleHeadingClick = (index) => {
    setActiveHeading(index);
  };

  return (
    <div className="sec_padding border-t border-[#D9D9D9] mt-14">
      <div className="container">
        <div className="flex justify-center gap-4 border-gray-300 mb-6">
          {description.heading.map((heading, index) => (
            <span
              key={index}
              className={`md:text-[24px] text-[12px] font-semibold py-2 cursor-pointer ${
                activeHeading === index ? 'text-black' : 'text-gray-500'
              }`}
              onClick={() => handleHeadingClick(index)}
            >
              {heading}
            </span>
          ))}
        </div>

        <div className="content">
          {activeHeading === 0 && (
            <>
              <p className="mb-4 text-[16px] font-normal text-[#9F9F9F] lg:px-[210px] px-0">
                {description.subtitle}
              </p>
              <p className="mb-8 text-[16px] font-normal text-[#9F9F9F] lg:px-[210px] px-0">
                {description.subtitle1}
              </p>
              <div className="flex gap-4">
                {description.img.map((image, index) => (
                  <div key={index} className="w-1/2">
                    <img
                      src={image.descriptionImg}
                      alt={`Product description ${index + 1}`}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeHeading === 1 && (
            <p className="mb-8 text-[16px] font-normal text-[#9F9F9F] lg:px-[210px] px-0">
              {description.additionalInfo}
            </p>
          )}

          {activeHeading === 2 && (
            <p className="mb-8 text-[16px] font-normal text-[#9F9F9F] lg:px-[210px] px-0">
              {description.reviews}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
