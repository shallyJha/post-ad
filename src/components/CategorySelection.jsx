"use client"

import {
  ChevronRight,
  Car,
  Home,
  Smartphone,
  Briefcase,
  Bike,
  Monitor,
  Truck,
  Sofa,
  Shirt,
  Book,
  Heart,
  Wrench,
} from "lucide-react"

const CategorySelection = ({ onCategorySelect }) => {
  const categories = [
    { id: "cars", name: "Cars", icon: Car },
    { id: "properties", name: "Properties", icon: Home },
    { id: "mobiles", name: "Mobiles", icon: Smartphone },
    { id: "jobs", name: "Jobs", icon: Briefcase },
    { id: "bikes", name: "Bikes", icon: Bike },
    { id: "electronics", name: "Electronics & Appliances", icon: Monitor },
    { id: "commercial", name: "Commercial Vehicles & Spares", icon: Truck },
    { id: "furniture", name: "Furniture", icon: Sofa },
    { id: "fashion", name: "Fashion", icon: Shirt },
    { id: "books", name: "Books, Sports & Hobbies", icon: Book },
    { id: "pets", name: "Pets", icon: Heart },
    { id: "services", name: "Services", icon: Wrench },
  ]

  const subcategories = {
    properties: [
      "For Sale: Houses & Apartments",
      "For Rent: Houses & Apartments",
      "Lands & Plots",
      "For Rent: Shops & Offices",
      "For Sale: Shops & Offices",
      "PG & Guest Houses",
    ],
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">POST YOUR AD</h1>

      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
          <h2 className="font-semibold text-gray-800">CHOOSE A CATEGORY</h2>
        </div>

        <div className="flex">
          {/* Left Categories */}
          <div className="w-1/2 border-r border-gray-300">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <div
                  key={category.id}
                  className={`flex items-center justify-between px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                    category.id === "properties" ? "bg-gray-200" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">{category.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              )
            })}
          </div>

          {/* Right Subcategories */}
          <div className="w-1/2">
            {subcategories.properties?.map((subcategory, index) => (
              <div
                key={index}
                className={`px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${
                  index === 1 ? "bg-gray-200" : ""
                }`}
                onClick={() => onCategorySelect("properties", subcategory)}
              >
                <span className="text-gray-700">{subcategory}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;