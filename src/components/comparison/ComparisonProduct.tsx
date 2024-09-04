import React from 'react';

const productComparison = [
    {
        title: "General",
        items: [
            {
                label: "Sales Package",
                values: ["1 sectional sofa", "1 Three Seater, 2 Single Seater"]
            },
            {
                label: "Model Number",
                values: ["TFCBLIGRBL6SRHS", "DTUBLIGRBL568"]
            },
            {
                label: "Secondary Material",
                values: ["Solid Wood", "Solid Wood"]
            },
            {
                label: "Configuration",
                values: ["L-shaped", "L-shaped"]
            },
            {
                label: "Upholstery Material",
                values: ["Fabric + Cotton", "Fabric + Cotton"]
            },
            {
                label: "Upholstery Color",
                values: ["Bright Grey & Lion", "Bright Grey & Lion"]
            }
        ]
    },
    {
        title: "Product",
        items: [
            {
                label: "Filling Material",
                values: ["Foam", "Matte"]
            },
            {
                label: "Finish Type",
                values: ["Bright Grey & Lion", "Bright Grey & Lion"]
            },
            {
                label: "Adjustable Headrest",
                values: ["No", "Yes"]
            },
            {
                label: "Maximum Load Capacity",
                values: ["280 KG", "300 KG"]
            },
            {
                label: "Origin of Manufacture",
                values: ["India", "India"]
            }
        ]
    },
    {
        title: "Dimensions",
        items: [
            {
                label: "Width",
                values: ["265.32 cm", "265.32 cm"]
            },
            {
                label: "Height",
                values: ["76 cm", "76 cm"]
            },
            {
                label: "Depth",
                values: ["167.76 cm", "167.76 cm"]
            },
            {
                label: "Weight",
                values: ["45 KG", "65 KG"]
            },
            {
                label: "Seat Height",
                values: ["41.52 cm", "41.52 cm"]
            },
            {
                label: "Leg Height",
                values: ["5.46 cm", "5.46 cm"]
            }
        ]
    },
    {
        title: "Warranty",
        items: [
            {
                label: "Warranty Summary",
                values: ["1 Year Manufacturing Warranty", "1.2 Year Manufacturing Warranty"]
            },
            {
                label: "Warranty Service Type",
                values: ["For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com", "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"]
            },
            {
                label: "Covered in Warranty",
                values: ["Warranty Against Manufacturing Defect", "Warranty of the product is limited to manufacturing defects only"]
            },
            {
                label: "Not Covered in Warranty",
                values: ["The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.", "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."]
            },
            {
                label: "Domestic Warranty",
                values: ["1 Year", "3 Months"]
            }
        ]
    }
];

const ComparisonProduct = () => {
    return (
        <div className="p-4">
            {productComparison.map((comparison, comparisonIndex) => (
                <div key={comparisonIndex} className="flex flex-col mb-8">
                    
                    <div>
                        <h1 className="font-semibold text-lg mb-4">{comparison.title}</h1>
                    </div>

                    <div className="flex">
                       
                        <div className="w-1/3 space-y-2">
                            {comparison.items.map((item, index) => (
                                <div key={index}>
                                    <p className="font-medium text-gray-700">{item.label}</p>
                                </div>
                            ))}
                        </div>

                       
                        <div className="flex w-2/3">
                            {comparison.items[0].values.map((_, colIndex) => (
                                <div key={colIndex} className="w-1/2 space-y-2">
                                    {comparison.items.map((item, itemIndex) => (
                                        <div key={itemIndex}>
                                            <p className="text-gray-600">{item.values[colIndex]}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ComparisonProduct;
