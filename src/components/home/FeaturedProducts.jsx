import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Flame, Zap } from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { flashSaleProducts, products } from '@/data/mockData';

const FeaturedProducts = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59
    });
    const scrollRef = useRef(null);

    // Countdown timer
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return { hours: 23, minutes: 59, seconds: 59 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const formatTime = (num) => String(num).padStart(2, '0');

    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold-100/30 rounded-full blur-[100px] -translate-y-1/2"></div>

            <div className="container-custom">
                {/* Flash Sale Section */}
                <div className="mb-20">
                    <div className="relative bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500 rounded-full blur-[100px] floating"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-400 rounded-full blur-[80px] floating-slow"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pattern-dots opacity-30"></div>
                        </div>

                        <div className="relative">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
                                <div className="flex items-center gap-5">
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg shadow-gold-500/30">
                                            <Flame size={32} className="text-white" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                                            <Zap size={12} className="text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                            Flash Sale
                                        </h2>
                                        <p className="text-gold-300 text-lg">Giảm sốc trong hôm nay!</p>
                                    </div>
                                </div>

                                {/* Countdown */}
                                <div className="flex items-center gap-4">
                                    <span className="text-white font-medium hidden sm:block text-lg">Kết thúc sau:</span>
                                    <div className="flex gap-3">
                                        {[
                                            { value: timeLeft.hours, label: 'Giờ' },
                                            { value: timeLeft.minutes, label: 'Phút' },
                                            { value: timeLeft.seconds, label: 'Giây' }
                                        ].map((item, index) => (
                                            <div key={index} className="text-center">
                                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden group">
                                                    <span className="text-2xl md:text-3xl font-bold text-navy-600 relative z-10">
                                                        {formatTime(item.value)}
                                                    </span>
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gold-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                </div>
                                                <span className="text-xs text-gold-300 mt-2 block font-medium">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Products Carousel */}
                            <div className="relative">
                                <button
                                    onClick={() => scroll('left')}
                                    className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronLeft size={26} />
                                </button>
                                <button
                                    onClick={() => scroll('right')}
                                    className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110"
                                >
                                    <ChevronRight size={26} />
                                </button>

                                <div
                                    ref={scrollRef}
                                    className="flex gap-7 overflow-x-auto pb-6 scrollbar-hide scroll-smooth px-2"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    {flashSaleProducts.map((product) => (
                                        <div key={product.id} className="flex-shrink-0 w-80">
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Featured Products Grid */}
                <div>
                    <div className="text-center mb-14">
                        <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-navy-100 to-navy-50 text-navy-700 rounded-full text-sm font-semibold mb-5">
                            Bán chạy nhất
                        </span>
                        <h2 className="section-title">Sản phẩm nổi bật</h2>
                        <p className="section-subtitle">
                            Những sản phẩm được khách hàng yêu thích nhất
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                        {products.slice(0, 8).map((product, index) => (
                            <div
                                key={product.id}
                                className="animate-fade-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-14">
                        <Link to="/san-pham" className="btn-primary text-lg px-10 py-4">
                            Xem thêm sản phẩm
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
