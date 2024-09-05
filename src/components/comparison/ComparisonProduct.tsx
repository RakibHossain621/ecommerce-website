import React from 'react';

const productComparison = [
    {
        title: "General",
        items: [
            {
                label: "Attribute",
                values: ["Sales Package", "Model Number", "Secondary Material", "Configuration", "Upholstery Material", "Upholstery Color"]
            },
            {
                label: "Product 1",
                values: ["1 sectional sofa", "TFCBLIGRBL6SRHS", "Solid Wood", "L-shaped", "Fabric + Cotton", "Bright Grey & Lion"]
            },
            {
                label: "Product 2",
                values: ["1 Three Seater, 2 Single Seater", "DTUBLIGRBL568", "Solid Wood", "L-shaped", "Fabric + Cotton", "Bright Grey & Lion"]
            },
        ]
    },
    {
        title: "Product",
        items: [
            {
                label: "Attribute",
                values: ["Filling Material", "Finish Type", "Adjustable Headrest", "Maximum Load Capacity", "Origin of Manufacture"]
            },
            {
                label: "Product 1",
                values: ["Foam", "Bright Grey & Lion", "No", "280 KG", "India"]
            },
            {
                label: "Product 2",
                values: ["Matte", "Bright Grey & Lion", "Yes", "300 KG", "India"]
            },
        ]
    },
    {
        title: "Dimensions",
        items: [
            {
                label: "Attribute",
                values: ["Width", "Height", "Depth", "Weight", "Seat Height", "Leg Height"]
            },
            {
                label: "Product 1",
                values: ["265.32 cm", "76 cm", "167.76 cm", "45 KG", "41.52 cm", "5.46 cm"]
            },
            {
                label: "Product 2",
                values: ["265.32 cm", "76 cm", "167.76 cm", "65 KG", "41.52 cm", "5.46 cm"]
            },
        ]
    },
    {
        title: "Warranty",
        items: [
            {
                label: "Attribute",
                values: ["Warranty Summary", "Warranty Service Type", "Covered in Warranty", "Not Covered in Warranty", "Domestic Warranty"]
            },
            {
                label: "Product 1",
                values: ["1 Year Manufacturing Warranty", "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurnitu re.com", "Warranty Against Manufacturing Defect", "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.", "1 Year"]
            },
            {
                label: "Product 2",
                values: ["1.2 Year Manufacturing Warranty", "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com", "Warranty of the product is limited to manufacturing defects only.", "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product  Usage.", "3 Months"]
            },
        ]
    }
];

  



const ComparisonProduct = () => {
    return (
        <div className="p-8">
            {productComparison.map((comparison, comparisonIndex) => (
                <div key={comparisonIndex} className="mb-8">
                    <div>
                        <h1 className="font-semibold text-[28px] text-black mb-4">{comparison.title}</h1>
                    </div>
                    <div className="grid lg:grid-rows-4 md:grid-rows-2 ">
                        {comparison.items[0].values.map((_, colIndex) => (
                            <div key={colIndex} className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mt-4">
                                {comparison.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className='border-r border-gray-300'>
                                        <p className="text-[20px] font-normal text-black">{item.values[colIndex]}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='flex justify-center gap-3 mb-4'>
                <button className='px-5 py-2 bg-[#B88E2F] rounded-sm text-[20px] font-normal text-[#FFFFFF]'>add to Cart</button>
                <button className='px-5 py-2 bg-[#B88E2F] rounded-sm text-[20px] font-normal text-[#FFFFFF]'>add to Cart</button>
            </div>
        </div>
    );
};

export default ComparisonProduct;
