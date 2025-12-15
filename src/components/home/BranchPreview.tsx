import { Link } from "react-router-dom";
import { useRegion } from "@/context/RegionContext";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const BranchPreview = () => {
  const { currentBranch, selectedRegion } = useRegion();

  if (!currentBranch) return null;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Nearest Branch
          </h2>
          <p className="text-muted-foreground">
            Based on your selected region:{" "}
            <span className="text-primary font-medium">
              {selectedRegion.name}
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto bakery-card overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src={currentBranch.image}
                alt={currentBranch.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent md:bg-gradient-to-r" />
              <div className="absolute bottom-4 left-4 md:hidden">
                <h3 className="font-display text-xl font-semibold text-cream">
                  {currentBranch.name}
                </h3>
              </div>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <h3 className="hidden md:block font-display text-2xl font-semibold text-foreground mb-4">
                {currentBranch.name}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground">{currentBranch.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div className="text-muted-foreground">
                    {currentBranch.phone.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <p className="text-muted-foreground whitespace-pre-line">
                    {currentBranch.hours}
                  </p>
                </div>
              </div>
              <Link
                to="/branches"
                className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:gap-3 transition-all"
              >
                View All Branches
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchPreview;
