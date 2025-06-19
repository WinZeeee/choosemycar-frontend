import React from "react";

interface CarListingIslandProps {
  vehicleId?: string;
  dealerId?: string;
}

const CarListingIsland: React.FC<CarListingIslandProps> = ({
  vehicleId,
  dealerId,
}) => {
  return (
    <div className="car-listing-island">
      <h1>Car Listing Detail</h1>
      <p>Vehicle ID: {vehicleId || "N/A"}</p>
      <p>Dealer ID: {dealerId || "N/A"}</p>
    </div>
  );
};

export default CarListingIsland;
