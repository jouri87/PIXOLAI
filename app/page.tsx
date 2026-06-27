import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedTools } from "@/components/home/FeaturedTools";
import { PopularTools } from "@/components/home/PopularTools";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { LatestBlogSection } from "@/components/home/LatestBlogSection";
import { StatsSection } from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturedTools />
      <BenefitsSection />
      <PopularTools />
      <LatestBlogSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
