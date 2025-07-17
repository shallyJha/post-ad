"use client"

import { useState } from "react"

const PropertyDetails = ({ selectedCategory, selectedSubcategory, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    listedBy: "",
    superBuiltArea: "",
    carpetArea: "",
    bachelorsAllowed: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName: "",
    adTitle: "",
    description: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">POST YOUR AD</h1>

      <div className="bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Selected Category */}
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-300">
          <h2 className="font-semibold text-gray-800">SELECTED CATEGORY</h2>
          <div className="text-sm text-gray-600 mt-1">
            Properties / For Rent: Houses & Apartments /{" "}
            <span className="text-blue-600 underline cursor-pointer">Change</span>
          </div>
        </div>

        {/* Include Some Details */}
        <div className="p-6">
          <h3 className="font-semibold text-gray-800 mb-4">INCLUDE SOME DETAILS</h3>

          {/* Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Type *</label>
            <div className="flex flex-wrap gap-2">
              {["Flat / Apartment", "Independent / Builder Floors", "Individual House / Villa"].map((type) => (
                <button
                  key={type}
                  className={`px-3 py-1 text-sm border rounded ${
                    formData.type === type ? "bg-blue-100 border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => handleInputChange("type", type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* BHK */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">BHK</label>
            <div className="flex gap-2">
              {["1", "2", "3", "4", "4+"].map((bhk) => (
                <button
                  key={bhk}
                  className={`px-3 py-1 text-sm border rounded ${
                    formData.bhk === bhk ? "bg-blue-100 border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => handleInputChange("bhk", bhk)}
                >
                  {bhk}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
            <div className="flex gap-2">
              {["1", "2", "3", "4", "4+"].map((bathroom) => (
                <button
                  key={bathroom}
                  className={`px-3 py-1 text-sm border rounded ${
                    formData.bathrooms === bathroom ? "bg-blue-100 border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => handleInputChange("bathrooms", bathroom)}
                >
                  {bathroom}
                </button>
              ))}
            </div>
          </div>

          {/* Furnishing */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Furnishing</label>
            <div className="flex gap-2">
              {["Furnished", "Semi-furnished", "Unfurnished"].map((furnishing) => (
                <button
                  key={furnishing}
                  className={`px-3 py-1 text-sm border rounded ${
                    formData.furnishing === furnishing ? "bg-blue-100 border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => handleInputChange("furnishing", furnishing)}
                >
                  {furnishing}
                </button>
              ))}
            </div>
          </div>

          {/* Listed By */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Listed By</label>
            <div className="flex gap-2">
              {["Builder", "Dealer", "Owner"].map((listedBy) => (
                <button
                  key={listedBy}
                  className={`px-3 py-1 text-sm border rounded ${
                    formData.listedBy === listedBy ? "bg-blue-100 border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => handleInputChange("listedBy", listedBy)}
                >
                  {listedBy}
                </button>
              ))}
            </div>
          </div>

          {/* Super Built-up area */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Super Built-up area (sq ft) *</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.superBuiltArea}
              onChange={(e) => handleInputChange("superBuiltArea", e.target.value)}
            />
          </div>

          {/* Carpet Area */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Carpet Area (sq ft) *</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.carpetArea}
              onChange={(e) => handleInputChange("carpetArea", e.target.value)}
            />
          </div>

          {/* Bachelors Allowed */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Bachelors Allowed</label>
            <div className="flex gap-2">
              {["No", "Yes"].map((option) => (
                <button
                  key={option}
                  className={`px-3 py-1 text-sm border rounded ${
                    formData.bachelorsAllowed === option ? "bg-blue-100 border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => handleInputChange("bachelorsAllowed", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Maintenance */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Maintenance (Monthly)</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.maintenance}
              onChange={(e) => handleInputChange("maintenance", e.target.value)}
            />
          </div>

          {/* Total Floors */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Floors</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.totalFloors}
              onChange={(e) => handleInputChange("totalFloors", e.target.value)}
            />
          </div>

          {/* Floor No */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Floor No</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.floorNo}
              onChange={(e) => handleInputChange("floorNo", e.target.value)}
            />
          </div>

          {/* Car Parking */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Car Parking</label>
            <div className="flex gap-2">
              {["0", "1", "2", "3", "3+"].map((parking) => (
                <button
                  key={parking}
                  className={`px-3 py-1 text-sm border rounded ${
                    formData.carParking === parking ? "bg-blue-100 border-blue-500" : "border-gray-300"
                  }`}
                  onClick={() => handleInputChange("carParking", parking)}
                >
                  {parking}
                </button>
              ))}
            </div>
          </div>

          {/* Facing */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Facing</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.facing}
              onChange={(e) => handleInputChange("facing", e.target.value)}
            >
              <option value="">Select</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North-East">North-East</option>
              <option value="North-West">North-West</option>
              <option value="South-East">South-East</option>
              <option value="South-West">South-West</option>
            </select>
          </div>

          {/* Project Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              value={formData.projectName}
              onChange={(e) => handleInputChange("projectName", e.target.value)}
            />
            <div className="text-xs text-gray-500 mt-1">0 / 70</div>
          </div>

          {/* Ad Title */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Ad Title *</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
              value={formData.adTitle}
              onChange={(e) => handleInputChange("adTitle", e.target.value)}
            />
            <div className="text-xs text-gray-500 mt-1">0 / 70</div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24"
              placeholder="Include condition, features and reason for selling"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
            <div className="text-xs text-gray-500 mt-1">0 / 4096</div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;