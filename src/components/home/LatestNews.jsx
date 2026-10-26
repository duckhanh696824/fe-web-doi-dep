import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { news } from '@/data/mockData';

const LatestNews = () => {
    return (
        <section className="section-padding bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-100/40 rounded-full blur-[120px]"></div>

            <div className="container-custom relative">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-gold-100 to-gold-50 text-gold-700 rounded-full text-sm font-semibold mb-5">
                        Tin tức & Blog
                    </span>
                    <h2 className="section-title">Bài viết mới nhất</h2>
                    <p className="section-subtitle">
                        Cập nhật tin tức công nghệ và ẩm thực mới nhất
                    </p>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured Article */}
                    <div className="lg:col-span-2 group animate-fade-up" style={{ animationFillMode: 'both' }}>
                        <Link
                            to={`/tin-tuc/${news[0].slug}`}
                            className="block bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-600 h-full card-premium"
                        >
                            <div className="relative h-72 md:h-96 overflow-hidden">
                                <img
                                    src={news[0].image}
                                    alt={news[0].title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-800/60 to-transparent"></div>

                                {/* Category Badge */}
                                <span className="absolute top-6 left-6 px-5 py-2.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-800 font-bold text-sm rounded-full shadow-lg shadow-gold-500/30">
                                    {news[0].category}
                                </span>

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors leading-tight">
                                        {news[0].title}
                                    </h3>
                                    <p className="text-gray-300 mb-5 line-clamp-2 text-lg">
                                        {news[0].excerpt}
                                    </p>
                                    <div className="flex items-center gap-8 text-white/80 text-sm">
                                        <span className="flex items-center gap-2">
                                            <User size={18} />
                                            {news[0].author}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Calendar size={18} />
                                            {news[0].date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock size={18} />
                                            {news[0].readTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Side Articles */}
                    <div className="flex flex-col gap-6">
                        {news.slice(1).map((article, index) => (
                            <Link
                                key={article.id}
                                to={`/tin-tuc/${article.slug}`}
                                className="group flex gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                                style={{
                                    animationDelay: `${(index + 1) * 150}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                {/* Image */}
                                <div className="relative w-32 h-32 md:w-36 md:h-36 flex-shrink-0 rounded-xl overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/0 transition-colors"></div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col justify-center flex-1 min-w-0">
                                    <span className="text-xs font-bold text-gold-600 mb-2 uppercase tracking-wider">
                                        {article.category}
                                    </span>
                                    <h4 className="font-bold text-navy-600 group-hover:text-gold-600 transition-colors line-clamp-2 mb-3 text-base leading-snug">
                                        {article.title}
                                    </h4>
                                    <div className="flex items-center gap-4 text-gray-500 text-xs">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {article.date}
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} />
                                            {article.readTime}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* View All Link */}
                <div className="text-center mt-14">
                    <Link
                        to="/tin-tuc"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-navy-600 text-navy-600 font-semibold rounded-2xl hover:bg-navy-600 hover:text-white transition-all duration-400 group text-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        Xem tất cả bài viết
                        <ArrowRight
                            size={22}
                            className="group-hover:translate-x-2 transition-transform"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
