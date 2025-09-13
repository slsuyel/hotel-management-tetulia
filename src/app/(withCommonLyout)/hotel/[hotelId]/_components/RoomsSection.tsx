
import RoomCard from "./RoomCard";

const RoomsSection = () => {
  const rooms = [
    {
      title: "Economy Double Room",
      sleeps: "Sleeps 2",
      size: "250 sq ft",
      bedType: "1 Double Bed",
      
      amenities: ["Breakfast Included", "Free Parking"],
      price: "$47",
    },
    {
      title: "Standard Double Room", 
      sleeps: "Sleeps 2",
      size: "280 sq ft",
      bedType: "1 Double Bed",
   
      amenities: ["Breakfast Included", "Free Parking"],
      price: "$62",
    },
    {
      title: "Superior Double Room",
      sleeps: "Sleeps 2", 
      size: "320 sq ft",
      bedType: "1 Double Bed",
     
      amenities: ["Breakfast Included", "Free Parking"],
      price: "$89",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Room Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;