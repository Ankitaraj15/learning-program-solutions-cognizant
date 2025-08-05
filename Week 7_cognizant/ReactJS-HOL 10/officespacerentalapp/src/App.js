import React from "react";

const officeList = [
  { Name: "DBS", Rent: 50000, Address: "Chennai" },
  { Name: "Regus", Rent: 70000, Address: "Bangalore" },
  { Name: "SmartWorks", Rent: 65000, Address: "Mumbai" }
];

function App() {
  return (
    <div>
      <h1>Office Space at Affordable Range</h1>
      {/* ✅ Load image from public folder */}
      <img src="/office.jpg" width="25%" height="25%" alt="Office Space" />
      
      {officeList.map((office, index) => {
        const rentColor = office.Rent <= 60000 ? "red" : "green";
        return (
          <div key={index}>
            <h2>Name: {office.Name}</h2>
            <h3 style={{ color: rentColor }}>Rent: Rs. {office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
