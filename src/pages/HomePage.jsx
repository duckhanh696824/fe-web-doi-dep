import HeroBanner from '@/components/home/HeroBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import LatestNews from '@/components/home/LatestNews';

const HomePage = () => {
    return (
        <div className="overflow-hidden">
            <HeroBanner />
            <CategoryGrid />
            <FeaturedProducts />
            <WhyChooseUs />
            <LatestNews />
        </div>
    );
};

export default HomePage;
