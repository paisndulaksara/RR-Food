import FoodBanner from '@/components/home/FoodBanner';
import HeroSlider from '@/components/home/HeroSlider';
import ProductSection from '@/components/home/ProductSection';
import RRSmallDescription from '@/components/home/RRSmallDescription';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import VendingMachine from '@/components/home/VendingMachine';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <ProductSection/>
      <VendingMachine />
      <FoodBanner/>
      <RRSmallDescription/>
      <TestimonialSlider/>
    </main>
  );
}
