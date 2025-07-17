"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

// Custom Camera Icon Component
const CameraIcon = ({ className }) => (
  <svg 
    width="36px" 
    height="36px" 
    viewBox="0 0 1024 1024" 
    className={className}
    fillRule="evenodd"
  >
    <path 
      className="rui-i1ika" 
      d="M861.099 667.008v78.080h77.568v77.653h-77.568v77.141h-77.568v-77.184h-77.611v-77.611h77.611v-78.080h77.568zM617.515 124.16l38.784 116.437h165.973l38.827 38.827v271.659l-38.827 38.357-38.741-38.4v-232.832h-183.125l-38.784-116.48h-176.853l-38.784 116.48h-183.083v426.923h426.667l38.784 38.357-38.784 39.253h-465.493l-38.741-38.869v-504.491l38.784-38.827h165.973l38.827-116.437h288.597zM473.216 318.208c106.837 0 193.92 86.955 193.92 194.048 0 106.923-87.040 194.091-193.92 194.091s-193.963-87.168-193.963-194.091c0-107.093 87.083-194.048 193.963-194.048zM473.216 395.861c-64.213 0-116.352 52.181-116.352 116.395 0 64.256 52.139 116.437 116.352 116.437 64.171 0 116.352-52.181 116.352-116.437 0-64.213-52.181-116.437-116.352-116.437z"
      fill="currentColor"
    />
  </svg>
)

const PropertyDetails = ({ onNext, onBack }) => {
  const [price, setPrice] = useState("")
  const [activeTab, setActiveTab] = useState("LIST")
  const [state, setState] = useState("")

  const photoSlots = Array(20).fill(null)

  const [formData, setFormData] = useState({
    type: "Independent / Builder Floors", // Pre-selected as shown in image
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
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="bg-gray-100 p-4 w-fulL">
        <div className="max-w-4xl mx-auto">
          <ArrowLeft
            className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800 justify-start"
            onClick={onBack}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-8">POST YOUR AD</h1>

        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mx-auto">
          {/* Selected Category */}
          <div className="px-6 py-4 border-b border-gray-300">
            <h2 className="font-bold text-lg text-gray-800 mb-2">SELECTED CATEGORY</h2>
            <div className="text-sm text-gray-600">
              Properties / For Sale: Houses & Apartments{" "}
              <span className="text-blue-600 underline cursor-pointer ml-4">Change</span>
            </div>
          </div>

          {/* Include Some Details */}
          <div className="px-6 py-6">
            <h3 className="font-bold text-lg text-gray-800 mb-6">INCLUDE SOME DETAILS</h3>

            {/* Type */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Type *</label>
              <div className="flex flex-wrap gap-3">
                {["Flats / Apartments", "Independent / Builder Floors", "Farm House", "House & Villa"].map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-2 text-sm border rounded-md transition-colors ${formData.type === type
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                      }`}
                    onClick={() => handleInputChange("type", type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* BHK */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">BHK</label>
              <div className="flex gap-3">
                {["1", "2", "3", "4", "4+"].map((bhk) => (
                  <button
                    key={bhk}
                    className={`px-4 py-2 text-sm border rounded-md min-w-[50px] transition-colors ${formData.bhk === bhk
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                      }`}
                    onClick={() => handleInputChange("bhk", bhk)}
                  >
                    {bhk}
                  </button>
                ))}
              </div>
            </div>

            {/* Bathrooms */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Bathrooms</label>
              <div className="flex gap-3">
                {["1", "2", "3", "4", "4+"].map((bathroom) => (
                  <button
                    key={bathroom}
                    className={`px-4 py-2 text-sm border rounded-md min-w-[50px] transition-colors ${formData.bathrooms === bathroom
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                      }`}
                    onClick={() => handleInputChange("bathrooms", bathroom)}
                  >
                    {bathroom}
                  </button>
                ))}
              </div>
            </div>

            {/* Furnishing */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">Furnishing</label>
              <div className="flex gap-3">
                {["Furnished", "Semi-Furnished", "Unfurnished"].map((furnishing) => (
                  <button
                    key={furnishing}
                    className={`px-4 py-2 text-sm border rounded-md transition-colors ${formData.furnishing === furnishing
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                      }`}
                    onClick={() => handleInputChange("furnishing", furnishing)}
                  >
                    {furnishing}
                  </button>
                ))}
              </div>
            </div>

            {/* Separator */}
            <hr className="border-gray-300 my-8" />

            {/* Continue with rest of form fields... */}
            {/* Listed By */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Listed By</label>
              <div className="flex gap-2">
                {["Builder", "Dealer", "Owner"].map((listedBy) => (
                  <button
                    key={listedBy}
                    className={`px-3 py-1 text-sm border rounded ${formData.listedBy === listedBy ? "bg-blue-100 border-blue-500" : "border-gray-300"
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
                    className={`px-3 py-1 text-sm border rounded ${formData.bachelorsAllowed === option ? "bg-blue-100 border-blue-500" : "border-gray-300"
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
                    className={`px-3 py-1 text-sm border rounded ${formData.carParking === parking ? "bg-blue-100 border-blue-500" : "border-gray-300"
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

            {/* Separator */}
            <hr className="border-gray-300 my-8" />

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

            {/* Separator */}
            <hr className="border-gray-300 my-8" />

            {/* Set a Price */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">SET A PRICE</h3>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-gray-500">₹</span>
                  <input
                    type="text"
                    className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <hr className="border-gray-300 my-8" />

            {/* Upload Photos */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">UPLOAD UP TO 20 PHOTOS</h3>
              <div className="grid grid-cols-4 gap-2 max-w-70">
                {photoSlots.map((_, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 border-1 border-gray-600 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    {index === 0 ? (
                      <div className="text-center">
                        <CameraIcon className="w-6 h-6 text-gray-600 mx-auto mb-1" />
                        <div className="text-xs text-gray-600">Add Photo</div>
                      </div>
                    ) : (
                      <CameraIcon className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-xs text-orange-500 mt-2">This field is mandatory</div>
            </div>

            {/* Separator */}
            <hr className="border-gray-300 my-8" />

            {/* Confirm Location */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">CONFIRM YOUR LOCATION</h3>

              {/* Tabs */}
              <div className="flex border-b border-gray-300 mb-4">
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "LIST" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("LIST")}
                >
                  LIST
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === "CURRENT LOCATION" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("CURRENT LOCATION")}
                >
                  CURRENT LOCATION
                </button>
              </div>

              {/* State Dropdown */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Select State</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                </select>
                <div className="text-xs text-orange-500 mt-1">This field is mandatory</div>
              </div>
            </div>

            {/* Separator */}
            <hr className="border-gray-300 my-8" />

            {/* Review Your Details */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-black mb-4">REVIEW YOUR DETAILS</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  V
                </div>
                <div>
                  <div className="font-medium text-black">Vinit gangwar</div>
                  <div className="text-sm text-gray-500">Member since Mar 2023</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-700">Your phone number</span>
                <span className="text-sm text-gray-900">+91 9953247911</span>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              className="w-full bg-green-600 text-white py-3 px-4 rounded font-medium hover:bg-green-700 transition-colors"
              onClick={() => onNext && onNext()}
            >
              POST NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails