import ProductPanorama from '@/components/layout/ProductPanorama'
import HeroSection from '@/components/layout/HeroSection'
import FeaturesSection from '@/components/layout/FeaturesSection'
import CTASection from '@/components/layout/CTASection'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <ProductPanorama />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
