import { Shield, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Top Reason to Book
          </h2>
          
          <div className="bg-success-light border border-success/20 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <div className="bg-success text-white rounded-lg p-2">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-success mb-1">
                  PAY LATER AVAILABLE
                </h3>
                <p className="text-sm text-neutral-700">
                  Prepayment isn't required when you pick a Pay Later room
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            About this Hotel
          </h2>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            Jol Torongo is a 4-star property located in Cox's Bazar. Guests at the hotel can 
            enjoy a buffet breakfast. Cox's Bazar Sea Beach is a few steps from Jol Torongo. 
            Cox's Bazar Airport is 12 miles away.
          </p>

          <div className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-ocean" />
              <span className="font-semibold text-foreground">
                Our Best Price. GUARANTEED.
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Exclusively for Priceline members{" "}
              <a href="#" className="text-ocean hover:underline">
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;