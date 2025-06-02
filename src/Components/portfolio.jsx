import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "../Reusable/Carousel";
import { Card, CardContent } from "../Reusable/Card";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Identity Design",
    description: "Complete brand identity redesign for a tech startup",
    image:
      "https://images.unsplash.com/photo-1747171232839-a5fea879ca59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Branding",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with seamless user experience",
    image:
      "https://images.unsplash.com/photo-1747171232839-a5fea879ca59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Mobile App Design",
    description: "Intuitive mobile application for fitness tracking",
    image:
      "https://images.unsplash.com/photo-1747171232839-a5fea879ca59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Mobile Design",
  },
  {
    id: 4,
    title: "Corporate Website",
    description: "Professional website for a consulting firm",
    image:
      "https://images.unsplash.com/photo-1747171232839-a5fea879ca59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Web Design",
  },
  {
    id: 5,
    title: "Marketing Campaign",
    description: "Comprehensive digital marketing strategy and execution",
    image:
      "https://images.unsplash.com/photo-1747171232839-a5fea879ca59?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Marketing",
  },
];

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="relative w-full overflow-hidden bg-white rounded-t-4xl py-6 sm:py-10 px-6 sm:px-10"
    >
      <div className="text-center mb-4 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
          Portfolio
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Take a look at some of our past projects to discover how our creative
          agency works and what we can do for you.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {portfolioItems.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="border-0 shadow-none bg-transparent group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="pt-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full uppercase">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-black mb-1 group-hover:text-gray-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
