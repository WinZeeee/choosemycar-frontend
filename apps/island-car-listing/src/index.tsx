import { createRoot } from "react-dom/client";
import CarListingIsland from "./components/CarListingIsland.js";

const mountCarListing = () => {
  const container = document.getElementById("island-car-listing");

  if (!container) {
    console.warn("Car listing island mount point not found");
    return;
  }

  try {
    const propsData = container.getAttribute("data-props");
    const props = propsData ? JSON.parse(propsData) : {};

    container.innerHTML = "";

    const root = createRoot(container);
    root.render(<CarListingIsland {...props} />);
  } catch (error) {
    console.error("Failed to mount car listing island:", error);
    container.innerHTML = "<p>Error loading car listing</p>";
  }
};

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountCarListing);
  } else {
    mountCarListing();
  }
}

export { mountCarListing };
export default CarListingIsland;
