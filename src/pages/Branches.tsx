import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { branches, regions } from "@/data/branches";
import { useRegion } from "@/context/RegionContext";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react";

const Branches = () => {
  const { selectedRegion, currentBranch } = useRegion();

  const getRegionsForBranch = (branchId: string) => {
    return regions.filter((r) => r.branchId === branchId);
  };

  return (
    <>
      <Helmet>
        <title>Our Branches | Fayaz Bakers Limited</title>
        <meta
          name="description"
          content="Find Fayaz Bakers near you. Visit our Lebanon or Bamburi shops in Mombasa for the freshest bakery products."
        />
      </Helmet>
      <Layout>
        {/* Header */}
        <section className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Our Branches
            </h1>
            <p className="text-muted-foreground">
              Find the nearest Fayaz Bakers shop in your area
            </p>
          </div>
        </section>

        {/* Current Branch Highlight */}
        {currentBranch && (
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium text-foreground">
                    Based on your selected region ({selectedRegion.name})
                  </span>
                </div>
                <p className="text-muted-foreground">
                  Your nearest branch is{" "}
                  <span className="text-primary font-semibold">
                    {currentBranch.name}
                  </span>
                </p>
              </div>
            </div>
          </section>
        )}

        {/* All Branches */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {branches.map((branch, index) => {
                const branchRegions = getRegionsForBranch(branch.id);
                const isCurrentBranch = currentBranch?.id === branch.id;

                return (
                  <div
                    key={branch.id}
                    className={`bakery-card overflow-hidden animate-fade-in-up ${
                      isCurrentBranch ? "ring-2 ring-accent" : ""
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Image */}
                    <div className="relative h-56">
                      <img
                        src={branch.image}
                        alt={branch.name}
                        className="w-full h-full object-cover"
                      />
                      {isCurrentBranch && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                          Your Nearest Branch
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                        {branch.name}
                      </h2>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground">{branch.address}</p>
                        </div>

                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="text-muted-foreground">
                            {branch.phone.map((p, i) => (
                              <a
                                key={i}
                                href={`tel:${p.replace(/\s/g, "")}`}
                                className="block hover:text-primary transition-colors"
                              >
                                {p}
                              </a>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <a
                            href={`mailto:${branch.email}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {branch.email}
                          </a>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-muted-foreground whitespace-pre-line">
                            {branch.hours}
                          </p>
                        </div>
                      </div>

                      {/* Regions Served */}
                      <div className="mt-6 pt-4 border-t border-border">
                        <p className="text-sm font-medium text-foreground mb-2">
                          Regions Served:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {branchRegions.map((region) => (
                            <span
                              key={region.id}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                selectedRegion.id === region.id
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-secondary text-secondary-foreground"
                              }`}
                            >
                              {region.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/${branch.whatsapp.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-[#fff] font-semibold rounded-lg hover:opacity-90 transition-all"
                      >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Order
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Branches;
