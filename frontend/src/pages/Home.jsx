import React from "react";
import Card from "../components/Card"; 
import Hero from "../components/Hero";

const Home = () => {
  const cards = [
    {
      title: "Education for All",
      description: "Support education initiatives worldwide.",
      image: "/assets/ed.jpg",  // <-- Image path for this card
    },
    {
      title: "Healthcare Support",
      description: "Provide medical assistance to those in need.",
      image: "/assets/health.png",  // <-- Image path for this card
    },
    {
      title: "Disaster Relief",
      description: "Help communities recover from natural disasters.",
      image: "/assets/disaster.jpg",  // <-- Image path for this card
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to Charity Connect</h1>
          <p className="text-lg text-gray-700">Empowering change, one donation at a time.</p>
        </div>
      </section>

      {/* Render each Card */}
      <section className="bg-white py-10">
        <div className="container mx-auto px-6 md:px-16">  {/* Add padding left and right */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  {/* Increase the gap between the cards */}
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}  // Pass the image here
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
