import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { heroSlides } from '@/data/mockData';

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timerRef = useRef(null);

    // Auto slide every 5 seconds
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 4000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    };

    const goToSlide = (index) => {
        if (index === currentSlide) return;
        setCurrentSlide(index);
    };

    return (
        <section className="relative h-[550px] md:h-[650px] lg:h-[750px] overflow-hidden">
            {/* Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${index === currentSlide
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-110'
                        }`}
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
                        }}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/80 to-navy-700/40"></div>
                    </div>

                    {/* Content */}
                    <div className="container-custom relative h-full flex items-center">
                        <div
                            className={`max-w-2xl transition-all duration-1000 delay-300 ${index === currentSlide
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-16'
                                }`}
                        >
                            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-md border border-gold-500/20">
                                <Sparkles size={16} className="animate-pulse" />
                                {slide.subtitle}
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                                {slide.title}
                            </h2>
                            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                                {slide.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to={slide.buttonLink}
                                    className="btn-gold text-lg px-8 py-4"
                                >
                                    {slide.buttonText}
                                </Link>
                                <Link
                                    to="/san-pham"
                                    className="btn-outline border-white/30 text-white hover:bg-white hover:text-navy-800 text-lg px-8 py-4 backdrop-blur-sm"
                                >
                                    Xem tất cả
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute right-0 bottom-0 w-2/3 h-full pointer-events-none overflow-hidden hidden lg:block">
                        <div className="absolute right-10 bottom-20 w-80 h-80 bg-gold-500/15 rounded-full blur-[100px] floating"></div>
                        <div className="absolute right-40 top-32 w-64 h-64 bg-navy-400/25 rounded-full blur-[80px] floating-slow"></div>
                        <div className="absolute right-[30%] bottom-[30%] w-48 h-48 bg-gold-400/10 rounded-full blur-[60px] floating-delayed"></div>

                        {/* Geometric shapes */}
                        <div className="absolute right-20 top-1/4 w-20 h-20 border-2 border-gold-400/20 rounded-2xl rotate-12 floating"></div>
                        <div className="absolute right-[35%] bottom-1/4 w-12 h-12 border-2 border-white/10 rounded-full floating-slow"></div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-400 group border border-white/10 hover:border-white/30"
                aria-label="Previous slide"
            >
                <ChevronLeft size={28} className="text-white group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 w-14 h-14 md:w-16 md:h-16 bg-white/10 hover:bg-white/25 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-400 group border border-white/10 hover:border-white/30"
                aria-label="Next slide"
            >
                <ChevronRight size={28} className="text-white group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
                {heroSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-500 rounded-full ${index === currentSlide
                            ? 'w-12 h-3 bg-gradient-to-r from-gold-400 to-gold-500'
                            : 'w-3 h-3 bg-white/40 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-3 text-white/60">
                <span className="text-xs tracking-[0.3em] rotate-90 origin-center translate-x-10 font-medium">SCROLL</span>
                <div className="w-px h-20 bg-gradient-to-b from-white/60 to-transparent relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-b from-gold-400 to-gold-500 animate-bounce"></div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
        </section>
    );
};

export default HeroBanner;
