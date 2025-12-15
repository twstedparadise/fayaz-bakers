import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { products, categories } from "@/data/products";
import { useRegion } from "@/context/RegionContext";
import { Search, Grid, List } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const { selectedRegion } = useRegion();

  const activeCategory = searchParams.get("category") || "all";

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", categoryId);
    }
    setSearchParams(searchParams);
  };

  return (
    <>
      <Helmet>
        <title>Products & Price List | Fayaz Bakers Limited</title>
        <meta
          name="description"
          content="Browse our complete range of freshly baked products with prices. Breads, cakes, pastries, cookies, and special orders available."
        />
      </Helmet>
      <Layout>
        {/* Header */}
        <section className="bg-secondary/50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Our Products
            </h1>
            <p className="text-muted-foreground">
              Prices shown for{" "}
              <span className="text-primary font-medium">
                {selectedRegion.name}
              </span>{" "}
              region
            </p>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              {/* Category Pills */}
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === "all"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {category.icon} {category.name}
                  </button>
                ))}
              </div>

              {/* View Toggle */}
              <div className="flex gap-2 ml-auto">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${
                    viewMode === "grid"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg ${
                    viewMode === "list"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    : "flex flex-col gap-4"
                }
              >
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className={`bakery-card overflow-hidden animate-fade-in ${
                      viewMode === "list" ? "flex flex-row" : ""
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "h-48"
                      }`}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className={`p-4 ${viewMode === "list" ? "flex-1 flex items-center justify-between" : ""}`}>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {product.description}
                        </p>
                      </div>
                      <div
                        className={`${
                          viewMode === "list" ? "text-right" : "flex justify-between items-center"
                        }`}
                      >
                        <span className="text-xs text-muted-foreground capitalize">
                          {product.category}
                        </span>
                        <span className="text-lg font-bold text-primary">
                          KSh {product.prices[selectedRegion.id]}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
