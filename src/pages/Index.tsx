import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroCarousel from "@/components/home/HeroCarousel";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BranchPreview from "@/components/home/BranchPreview";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Fayaz Bakers Limited | Fresh Bakery & Confectionery in Mombasa</title>
        <meta
          name="description"
          content="Experience the finest freshly baked goods at Fayaz Bakers Limited. Quality breads, cakes, pastries, and confections in Lebanon and Bamburi, Mombasa."
        />
      </Helmet>
      <Layout>
        <HeroCarousel />
        <CategorySection />
        <FeaturedProducts />
        <BranchPreview />
        <CallToAction />
      </Layout>
    </>
  );
};

export default Index;
