import React, { useState } from "react";
import "./SecondPage.css";

const SecondPage = () => {
  const [photos, setPhotos] = useState(Array(20).fill(null));
  const [state, setState] = useState("");

  const handlePhotoUpload = (index, event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newPhotos = [...photos];
      newPhotos[index] = URL.createObjectURL(files[0]);
      setPhotos(newPhotos);
    }
  };

  return (
    <div className="form-container">
      <h2>POST YOUR AD</h2>

      <div className="section">
        <div className="selected-category">
          <strong>SELECTED CATEGORY</strong>
          <p>Properties / For Rent: Houses & Apartments <span className="change-link">Change</span></p>
        </div>
      </div>

      <div className="section">
        <h3>INCLUDE SOME DETAILS</h3>

        <label>Type *</label>
        <div className="button-group">
          <button>Flat / Apartments</button>
          <button>Independent / Builder Floors</button>
          <button>Individual House / Villa</button>
        </div>

        <label>BHK</label>
        <div className="button-group">{[1, 2, 3, 4, "4+"].map((n) => <button key={n}>{n}</button>)}</div>

        <label>Bathrooms</label>
        <div className="button-group">{[1, 2, 3, 4, "4+"].map((n) => <button key={n}>{n}</button>)}</div>

        <label>Furnishing</label>
        <div className="button-group">
          <button>Furnished</button>
          <button>Semi-Furnished</button>
          <button>Unfurnished</button>
        </div>

        <label>Listed by</label>
        <div className="button-group">
          <button>Builder</button>
          <button>Dealer</button>
          <button>Owner</button>
        </div>

        <input type="text" placeholder="Super Builtup area sqft *" />
        <input type="text" placeholder="Carpet Area sqft *" />

        <label>Bachelors Allowed</label>
        <div className="button-group">
          <button>No</button>
          <button>Yes</button>
        </div>

        <input type="text" placeholder="Maintenance (Monthly)" />
        <input type="text" placeholder="Total Floors" />
        <input type="text" placeholder="Floor No" />

        <label>Car Parking</label>
        <div className="button-group">{[0, 1, 2, 3, "3+"].map((n) => <button key={n}>{n}</button>)}</div>

        <label>Facing</label>
        <select>
          <option value="">Select Facing</option>
          <option>East</option>
          <option>West</option>
          <option>North</option>
          <option>South</option>
        </select>

        <input type="text" placeholder="Project Name" />
        <input type="text" placeholder="Ad Title *" maxLength={70} />
        <textarea placeholder="Description *" maxLength={4500} />
      </div>

      <div className="section">
        <h3>SET A PRICE</h3>
        <input type="text" placeholder="Price *" />
      </div>

      <div className="section">
        <h3>UPLOAD UP TO 20 PHOTOS</h3>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <label key={index} className="photo-box">
              {photo ? <img src={photo} alt="uploaded" /> : <span>📷<br />Add Photo</span>}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handlePhotoUpload(index, e)}
              />
            </label>
          ))}
        </div>
        <small className="mandatory">This field is mandatory</small>
      </div>

      <div className="section">
        <h3>CONFIRM YOUR LOCATION</h3>
        <div className="tab-group">
          <span className="active-tab">LIST</span>
          <span className="inactive-tab">CURRENT LOCATION</span>
        </div>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select State *</option>
          <option>Uttar Pradesh</option>
          <option>Maharashtra</option>
          <option>Delhi</option>
        </select>
        {state === "" && <small className="mandatory">This field is mandatory</small>}
      </div>

      <div className="section">
        <h3>REVIEW YOUR DETAILS</h3>
        <div className="user-details">
          <img src="https://via.placeholder.com/50" alt="avatar" className="avatar" />
          <div>
            <input type="text" value="#" maxLength={30} />
            <p>Your phone number: <strong>#</strong></p>
          </div>
        </div>
      </div>

      <div className="section">
        <button className="post-btn" disabled>Post now</button>
      </div>
    </div>
  );
};

export default SecondPage;