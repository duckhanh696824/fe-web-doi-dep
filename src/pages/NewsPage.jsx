import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ChevronRight, Search, Tag } from 'lucide-react';
import { news, categories } from '@/data/mockData';

const NewsPage = () => {
    const newsCategories = ['Tất cả', 'Công nghệ', 'Đánh giá', 'Ẩm thực', 'Khuyến mãi'];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container-custom py-4">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-gray-500 hover:text-gold-600 transition-colors">
                            Trang chủ
                        </Link>
                        <ChevronRight size={16} className="text-gray-400" />
                        <span className="text-navy-600 font-medium">Tin tức</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-navy-600 to-navy-700 py-16">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Tin tức & Blog
                    </h1>
                    <p className="text-navy-200 text-lg max-w-2xl mx-auto mb-8">
                        Cập nhật những tin tức mới nhất về công nghệ, đánh giá sản phẩm và ẩm thực
                    </p>

                    {/* Search */}
                    <div className="max-w-xl mx-auto relative">
                        <input
                            type="text"
                            placeholder="Tìm kiếm bài viết..."
                            className="w-full px-6 py-4 pr-14 rounded-2xl border-0 focus:outline-none focus:ring-4 focus:ring-gold-400/30 shadow-xl"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold-500 rounded-xl flex items-center justify-center hover:bg-gold-600 transition-colors">
                            <Search size={20} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center">
                    {newsCategories.map((cat, index) => (
                        <button
                            key={cat}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${index === 0
                                    ? 'bg-navy-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gold-100 hover:text-gold-700 shadow-sm'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Featured Article */}
                        <Link
                            to={`/tin-tuc/${news[0].slug}`}
                            className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 mb-8"
                        >
                            <div className="relative h-72 md:h-96 overflow-hidden">
                                <img
                                    src={news[0].image}
                                    alt={news[0].title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-800/40 to-transparent"></div>
                                <span className="absolute top-6 left-6 px-4 py-2 bg-gold-500 text-navy-800 font-bold text-sm rounded-full">
                                    {news[0].category}
                                </span>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                                        {news[0].title}
                                    </h2>
                                    <p className="text-gray-300 mb-4 line-clamp-2">
                                        {news[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-6 text-white/80 text-sm">
                                        <span className="flex items-center gap-2">
                                            <User size={16} />
                                            {news[0].author}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Calendar size={16} />
                                            {news[0].date}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {news.map((article) => (
                                <Link
                                    key={article.id}
                                    to={`/tin-tuc/${article.slug}`}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover-lift"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-navy-600 font-medium text-xs rounded-full">
                                            {article.category}
                                        </span>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-navy-600 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {article.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={14} />
                                                {article.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="text-center mt-10">
                            <button className="btn-outline">
                                Xem thêm bài viết
                            </button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Popular Tags */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold text-navy-600 mb-4 flex items-center gap-2">
                                <Tag size={20} className="text-gold-500" />
                                Thẻ phổ biến
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['iPhone', 'MacBook', 'Samsung', 'Laptop', 'Cà phê', 'Đánh giá', 'Khuyến mãi', 'Tips'].map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-sm hover:bg-gold-100 hover:text-gold-700 cursor-pointer transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm">
                            <h3 className="font-bold text-navy-600 mb-4">Bài viết mới nhất</h3>
                            <div className="space-y-4">
                                {news.slice(0, 4).map((article) => (
                                    <Link
                                        key={article.id}
                                        to={`/tin-tuc/${article.slug}`}
                                        className="flex gap-3 group"
                                    >
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                        />
                                        <div>
                                            <h4 className="text-sm font-medium text-navy-600 line-clamp-2 group-hover:text-gold-600 transition-colors">
                                                {article.title}
                                            </h4>
                                            <span className="text-xs text-gray-400">{article.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-gradient-to-br from-navy-600 to-navy-700 rounded-2xl p-6 text-white">
                            <h3 className="font-bold mb-2">Đăng ký nhận tin</h3>
                            <p className="text-navy-200 text-sm mb-4">
                                Nhận thông báo bài viết mới qua email
                            </p>
                            <input
                                type="email"
                                placeholder="Email của bạn"
                                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-gold-500 mb-3"
                            />
                            <button className="w-full btn-gold">Đăng ký</button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
