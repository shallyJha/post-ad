"use client"

import { useState } from "react"
import { Camera, ArrowLeft } from "lucide-react"

// const AdDetails = ({ onNext, onBack }) => {
const AdDetails = ({ onBack }) => {
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [activeTab, setActiveTab] = useState("LIST")
  const [state, setState] = useState("")

  const photoSlots = Array(20).fill(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back button */}
      <div className="bg-gray-100 p-4 w-full">
        <div className="max-w-4xl mx-auto flex justify-start">
          <ArrowLeft 
            className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" 
            onClick={onBack}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-8">POST YOUR AD</h1>

        <div className="bg-white border border-gray-300 rounded-lg overflow-hidden mx-auto">
        <div className="p-6 space-y-8">
          {/* Description */}
          <div className="pb-6 border-b border-gray-200">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-24"
              placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="text-xs text-gray-500 mt-1">
              Include condition, features and reason for selling
              <span className="float-right">0 / 4096</span>
            </div>
          </div>

          {/* Set a Price */}
          <div className="pb-6 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">SET A PRICE</h3>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
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

          {/* Upload Photos */}
          <div className="pb-6 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-4">UPLOAD UP TO 20 PHOTOS</h3>
            <div className="grid grid-cols-4 gap-2 max-w-70">
              {photoSlots.map((_, index) => (
                <div
                  key={index}
                  className="w-16 h-16 border-1 border-gray-600 flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
                >
                  {index === 0 ? (
                    <div className="text-center">
                      <Camera className="w-4 h-4 text-gray-400 mx-auto mb-1" />
                      <div className="text-xs text-gray-500">Add Photo</div>
                    </div>
                  ) : (
                    <Camera className="w-4 h-4 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
            <div className="text-xs text-orange-500 mt-2">This field is mandatory</div>
          </div>

          {/* Confirm Location */}
          <div className="pb-6 border-b border-gray-200">
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

          {/* Review Your Details */}
          <div className="pb-6">
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
          <button className="w-full bg-green-600 text-white py-3 px-4 rounded font-medium hover:bg-green-700 transition-colors">
            POST NOW
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AdDetails;