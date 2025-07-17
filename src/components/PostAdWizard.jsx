import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaCar, FaHome, FaMobileAlt, FaBriefcase, FaMotorcycle, FaTv, FaTruck, FaCouch, FaTshirt, FaBook, FaDog, FaServicestack } from "react-icons/fa";
import "./PostAdWizard.css";

const iconMap = {
  "Cars": <FaCar className="cat-icon" />,
  "Properties": <FaHome className="cat-icon" />,
  "Mobiles": <FaMobileAlt className="cat-icon" />,
  "Jobs": <FaBriefcase className="cat-icon" />,
  "Bikes": <FaMotorcycle className="cat-icon" />,
  "Electronics & Appliances": <FaTv className="cat-icon" />,
  "Commercial Vehicles & Spares": <FaTruck className="cat-icon" />,
  "Furniture": <FaCouch className="cat-icon" />,
  "Fashion": <FaTshirt className="cat-icon" />,
  "Books, Sports & Hobbies": <FaBook className="cat-icon" />,
  "Pets": <FaDog className="cat-icon" />,
  "Services": <FaServicestack className="cat-icon" />,
};

const PostAdWizard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const categories = [
    { name: "Cars", sub: ["For Sale: Houses & Apartments"] },
    {
      name: "Properties",
      sub: [
        "For Sale: Houses & Apartments",
        "For Rent: Houses & Apartments",
        "Lands & Plots",
        "For Rent: Shops & Offices",
        "For Sale: Shops & Offices",
        "PG & Guest Houses",
      ],
    },
    { name: "Mobiles" },
    { name: "Jobs" },
    { name: "Bikes" },
    { name: "Electronics & Appliances" },
    { name: "Commercial Vehicles & Spares" },
    { name: "Furniture" },
    { name: "Fashion" },
    { name: "Books, Sports & Hobbies" },
    { name: "Pets" },
    { name: "Services" },
  ];

  return (
    <div className="container">
      <h2>POST YOUR AD</h2>
      <div className="category-container">
        <div className="left-panel">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`category-item ${selectedCategory === cat.name ? "active" : ""}`}
              onClick={() =>
                setSelectedCategory(selectedCategory === cat.name ? null : cat.name)
              }
            >
              {iconMap[cat.name]} {/* Icon */}
              <span className="cat-label">{cat.name}</span>
            </div>
          ))}
        </div>
        <div className="right-panel">
          {categories
            .find((cat) => cat.name === selectedCategory)
            ?.sub?.map((subItem, index) => {
              if (subItem === "For Rent: Houses & Apartments") {
                return (
                  <Link
                    to="/Secondpage"
                    className="subcategory-item"
                    key={index}
                  >
                    <FaHome className="subcat-icon" /> {/* Example icon */}
                    <span className="subcat-label">{subItem}</span>
                  </Link>
                );
              }
              return (
                <div className="subcategory-item" key={index}>
                  <FaHome className="subcat-icon" /> {/* Example icon */}
                  <span className="subcat-label">{subItem}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostAdWizard;