import React from 'react';

const keyFeaturesData = {
    title: "Key Features",
    description: `Online assessments offer several substantial benefits in K-12 education that enhance
    the learning experience for both teachers and students. They provide immediate feedback,
    allowing educators to identify areas of weakness and tailor instruction accordingly for
    improved learning outcomes.`,
    featuresList: [
      "15 Interactive question types",
      "15 Interactive question types",
      "15 Interactive question types",
      "15 Interactive question types",
    ],
    imageUrl: "/Image1.png", // Ensure this path is correct or add the full image path.
};

const KeyFeatures = () => {
  const { title, description, featuresList, imageUrl } = keyFeaturesData;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-4">
          {featuresList.map((feature, index) => (
            <li key={index} className="flex items-center text-lg">
              <span className="text-red-500 mr-2">★</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8"> {/* Added md:ml-8 here to move the image to the right */}
        <img
          src={imageUrl}
          alt="Key Features"
          className="w-full rounded-lg border-4 border-orange-400"
        />
      </div>
    </section>
  );
};

export default KeyFeatures;
