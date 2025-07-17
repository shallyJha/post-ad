"use client"

import { useState } from "react"
import CategorySelection from "./components/CategorySelection"
import PropertyDetails from "./components/PropertyDetails"
import AdDetails from "./components/AdDetails"

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedSubcategory, setSelectedSubcategory] = useState("")

  const handleCategorySelect = (category, subcategory) => {
    setSelectedCategory(category)
    setSelectedSubcategory(subcategory)
    setCurrentStep(2)
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentStep === 1 && <CategorySelection onCategorySelect={handleCategorySelect} />}
      {currentStep === 2 && (
        <PropertyDetails
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
          onNext={handleNextStep}
          onBack={handlePrevStep}
        />
      )}
      {currentStep === 3 && <AdDetails onNext={handleNextStep} onBack={handlePrevStep} />}
    </div>
  );
};

export default App;