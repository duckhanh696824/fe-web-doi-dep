import { Link } from 'react-router-dom';
import {
    Smartphone,
    Laptop,
    Tablet,
    Headphones,
    Coffee,
    Leaf,
    ArrowRight
} from 'lucide-react';
import { categories } from '@/data/mockData';

const iconMap = {
    Smartphone: Smartphone,
    Laptop: Laptop,
    Tablet: Tablet,
    Headphones: Headphones,
    Coffee: Coffee,
    Leaf: Leaf
};

const CategoryGrid = () => {
    return (
        <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-100/50 rounded-full blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-100/40 rounded-full blur-[100px] translate-y-1/2"></div>

            <div className="container-custom relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-gold-100 to-gold-50 text-gold-700 rounded-full text-sm font-semibold mb-5">
                        Khám phá
                    </span>
                    <h2 className="section-title">Danh mục sản phẩm</h2>
                    <p className="section-subtitle">
                        Đa dạng sản phẩm từ công nghệ đến đồ uống cao cấp
                    </p>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-7">
                    {categories.map((category, index) => {
                        const IconComponent = iconMap[category.icon];
                        return (
                            <Link
                                key={category.id}
                                to={`/san-pham/${category.slug}`}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-600 hover:-translate-y-3 animate-fade-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                {/* Image */}
                                <div className="relative h-44 md:h-52 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/50 to-transparent transition-opacity duration-400"></div>

                                    {/* Icon */}
                                    <div className="absolute top-5 left-5 w-14 h-14 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-white/20">
                                        {IconComponent && (
                                            <IconComponent size={26} className="text-white" />
                                        )}
                                    </div>

                                    {/* Product Count */}
                                    <div className="absolute top-5 right-5 px-4 py-1.5 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full text-xs font-bold text-navy-800 shadow-lg shadow-gold-500/30">
                                        {category.count}+
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-bold text-navy-600 group-hover:text-gold-600 transition-colors flex items-center justify-between text-lg">
                                        {category.name}
                                        <ArrowRight
                                            size={20}
                                            className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 text-gold-500"
                                        />
                                    </h3>
                                </div>

                                {/* Hover Glow Border */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gold-400/50 transition-colors duration-400 pointer-events-none"></div>

                                {/* Bottom glow line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gold-400 to-gold-500 group-hover:w-full transition-all duration-600"></div>
                            </Link>
                        );
                    })}
                </div>

                {/* View All Link */}
                <div className="text-center mt-14">
                    <Link
                        to="/san-pham"
                        className="inline-flex items-center gap-3 text-navy-600 hover:text-gold-600 font-semibold transition-all duration-300 group text-lg"
                    >
                        Xem tất cả sản phẩm
                        <span className="w-10 h-10 rounded-full bg-navy-100 group-hover:bg-gold-100 flex items-center justify-center transition-all duration-300">
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-1 transition-transform text-navy-600 group-hover:text-gold-600"
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CategoryGrid;
