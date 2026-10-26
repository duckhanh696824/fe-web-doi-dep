import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    List,
    Filter,
    ChevronDown,
    ChevronRight,
    Star,
    X,
    SlidersHorizontal
} from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/mockData';

const ProductsPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('popular');
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 50000000]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedRating, setSelectedRating] = useState(0);

    const toggleCategory = (categoryId) => {
        setSelectedCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const clearFilters = () => {
        setSelectedCategories([]);
        setSelectedRating(0);
        setPriceRange([0, 50000000]);
    };

    const activeFiltersCount = selectedCategories.length + (selectedRating > 0 ? 1 : 0);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold-400/10 rounded-full blur-[80px]"></div>
                </div>

                <div className="container-custom relative">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-navy-200 mb-8">
                        <Link to="/" className="hover:text-gold-400 transition-colors">Trang chủ</Link>
                        <ChevronRight size={16} />
                        <span className="text-gold-400 font-medium">Sản phẩm</span>
                    </nav>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Tất cả <span className="gradient-text-animated">sản phẩm</span>
                        </h1>
                        <p className="text-xl text-navy-200 leading-relaxed">
                            Khám phá bộ sưu tập đa dạng với hơn 10,000+ sản phẩm chính hãng
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-10">
                        {/* Filter Sidebar */}
                        <aside className={`lg:w-80 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sticky top-32">
                                <div className="flex items-center justify-between mb-8">
                                    <h3 className="text-xl font-bold text-navy-600 flex items-center gap-3">
                                        <SlidersHorizontal size={22} className="text-gold-500" />
                                        Bộ lọc
                                    </h3>
                                    {activeFiltersCount > 0 && (
                                        <button
                                            onClick={clearFilters}
                                            className="text-sm text-red-500 hover:text-red-600 font-medium transition-colors flex items-center gap-1"
                                        >
                                            <X size={16} />
                                            Xóa ({activeFiltersCount})
                                        </button>
                                    )}
                                </div>

                                {/* Categories */}
                                <div className="mb-8">
                                    <h4 className="font-bold text-navy-600 mb-5">Danh mục</h4>
                                    <div className="space-y-3">
                                        {categories.map(cat => (
                                            <label
                                                key={cat.id}
                                                className="flex items-center gap-3 cursor-pointer group"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(cat.id)}
                                                    onChange={() => toggleCategory(cat.id)}
                                                    className="w-5 h-5 rounded-md border-2 border-gray-300 text-gold-500 focus:ring-gold-500 focus:ring-offset-0 transition-all"
                                                />
                                                <span className="text-gray-600 group-hover:text-navy-600 transition-colors">
                                                    {cat.name}
                                                </span>
                                                <span className="ml-auto text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">
                                                    {cat.count}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range */}
                                <div className="mb-8">
                                    <h4 className="font-bold text-navy-600 mb-5">Khoảng giá</h4>
                                    <div className="space-y-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="50000000"
                                            step="1000000"
                                            value={priceRange[1]}
                                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold-500"
                                        />
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 p-3 bg-gray-50 rounded-xl text-center font-medium text-navy-600 text-sm">
                                                {(priceRange[0] / 1000000).toFixed(0)}M
                                            </div>
                                            <span className="text-gray-400">-</span>
                                            <div className="flex-1 p-3 bg-gray-50 rounded-xl text-center font-medium text-navy-600 text-sm">
                                                {(priceRange[1] / 1000000).toFixed(0)}M
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div>
                                    <h4 className="font-bold text-navy-600 mb-5">Đánh giá</h4>
                                    <div className="space-y-3">
                                        {[5, 4, 3, 2, 1].map(rating => (
                                            <button
                                                key={rating}
                                                onClick={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                                                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${selectedRating === rating
                                                        ? 'bg-gold-50 border-2 border-gold-400'
                                                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-0.5">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={16}
                                                            className={i < rating ? 'fill-gold-400 text-gold-400' : 'fill-gray-200 text-gray-200'}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-600 font-medium">
                                                    từ {rating} sao
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Products */}
                        <div className="flex-1">
                            {/* Toolbar */}
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-8 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    {/* Mobile Filter Toggle */}
                                    <button
                                        onClick={() => setShowFilters(!showFilters)}
                                        className="lg:hidden flex items-center gap-2 px-5 py-3 bg-gray-100 rounded-xl font-semibold text-navy-600 hover:bg-gray-200 transition-colors"
                                    >
                                        <Filter size={20} />
                                        Lọc {activeFiltersCount > 0 && `(${activeFiltersCount})`}
                                    </button>

                                    {/* Results Count */}
                                    <p className="text-gray-600 hidden sm:block">
                                        Hiển thị <span className="font-bold text-navy-600">{products.length}</span> sản phẩm
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    {/* Sort */}
                                    <div className="relative">
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="appearance-none pl-4 pr-12 py-3 bg-gray-50 border-2 border-gray-100 rounded-xl font-medium text-navy-600 focus:outline-none focus:border-gold-400 cursor-pointer transition-colors"
                                        >
                                            <option value="popular">Phổ biến</option>
                                            <option value="newest">Mới nhất</option>
                                            <option value="price-asc">Giá tăng dần</option>
                                            <option value="price-desc">Giá giảm dần</option>
                                            <option value="rating">Đánh giá cao</option>
                                        </select>
                                        <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>

                                    {/* View Mode */}
                                    <div className="hidden sm:flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2.5 rounded-lg transition-all duration-300 ${viewMode === 'grid'
                                                    ? 'bg-white text-navy-600 shadow-sm'
                                                    : 'text-gray-400 hover:text-gray-600'
                                                }`}
                                        >
                                            <Grid size={20} />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2.5 rounded-lg transition-all duration-300 ${viewMode === 'list'
                                                    ? 'bg-white text-navy-600 shadow-sm'
                                                    : 'text-gray-400 hover:text-gray-600'
                                                }`}
                                        >
                                            <List size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className={`grid gap-7 ${viewMode === 'grid'
                                    ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                                    : 'grid-cols-1'
                                }`}>
                                {products.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className="animate-fade-up"
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                            animationFillMode: 'both'
                                        }}
                                    >
                                        <ProductCard product={product} />
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-14 flex justify-center">
                                <div className="flex items-center gap-2">
                                    <button className="w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300">
                                        <ChevronRight size={20} className="rotate-180 mx-auto text-gray-600" />
                                    </button>
                                    {[1, 2, 3, '...', 10].map((page, i) => (
                                        <button
                                            key={i}
                                            className={`w-12 h-12 rounded-xl font-semibold transition-all duration-300 ${page === 1
                                                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-800 shadow-lg shadow-gold-500/30'
                                                    : 'border-2 border-gray-200 hover:border-gold-400 hover:bg-gold-50 text-gray-600'
                                                }`}
                                            disabled={page === '...'}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    <button className="w-12 h-12 rounded-xl border-2 border-gray-200 hover:border-gold-400 hover:bg-gold-50 transition-all duration-300">
                                        <ChevronRight size={20} className="mx-auto text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
