import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { formatPrice } from '@/data/mockData';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-600 hover:-translate-y-3 relative">
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-gold-400/0 via-transparent to-gold-400/0 group-hover:from-gold-400/50 group-hover:to-gold-400/50 transition-all duration-500 pointer-events-none z-10"></div>

            <div className="relative bg-white rounded-3xl overflow-hidden">
                {/* Image Container */}
                <div className="relative h-60 md:h-72 overflow-hidden bg-gray-50">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                    />

                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                    {/* Badges */}
                    <div className="absolute top-5 left-5 flex flex-col gap-2">
                        {product.discount > 0 && (
                            <span className="badge-sale animate-pulse">{product.discount}%</span>
                        )}
                        {product.isNew && (
                            <span className="badge-new">Mới</span>
                        )}
                    </div>

                    {/* Quick Actions */}
                    <div className="absolute top-5 right-5 flex flex-col gap-3 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400">
                        <button
                            className="w-11 h-11 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110"
                            title="Thêm vào yêu thích"
                        >
                            <Heart size={20} />
                        </button>
                        <button
                            className="w-11 h-11 bg-white rounded-xl shadow-lg flex items-center justify-center hover:bg-gold-500 hover:text-white transition-all duration-300 hover:scale-110"
                            title="Xem nhanh"
                        >
                            <Eye size={20} />
                        </button>
                    </div>

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                        <button className="w-full py-4 bg-navy-600 hover:bg-navy-700 text-white font-semibold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl">
                            <ShoppingCart size={20} />
                            Thêm vào giỏ
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                    {/* Category */}
                    <span className="text-xs text-gold-600 font-bold uppercase tracking-wider">
                        {product.category}
                    </span>

                    {/* Title */}
                    <Link to={`/san-pham/${product.slug}`}>
                        <h3 className="font-bold text-navy-600 mt-2 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors text-lg leading-snug">
                            {product.name}
                        </h3>
                    </Link>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className={`${i < Math.floor(product.rating)
                                        ? 'fill-gold-400 text-gold-400'
                                        : 'fill-gray-200 text-gray-200'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">
                            ({product.reviews})
                        </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-navy-600">
                            {formatPrice(product.price)}
                        </span>
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-400 line-through">
                                {formatPrice(product.originalPrice)}
                            </span>
                        )}
                    </div>

                    {/* Stock Status */}
                    {product.inStock ? (
                        <div className="mt-4 flex items-center gap-2">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </span>
                            <span className="text-xs text-green-600 font-semibold">Còn hàng</span>
                        </div>
                    ) : (
                        <div className="mt-4 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                            <span className="text-xs text-red-600 font-semibold">Hết hàng</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
