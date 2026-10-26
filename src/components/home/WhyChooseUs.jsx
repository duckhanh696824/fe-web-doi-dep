import { Shield, Truck, RotateCcw, Headphones } from 'lucide-react';
import { whyChooseUs } from '@/data/mockData';

const iconMap = {
    Shield: Shield,
    Truck: Truck,
    RotateCcw: RotateCcw,
    Headphones: Headphones
};

const WhyChooseUs = () => {
    return (
        <section className="section-padding bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[150px] floating"></div>
                <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gold-400/10 rounded-full blur-[120px] floating-slow"></div>

                {/* Circular decorations */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"></div>

                {/* Floating shapes */}
                <div className="absolute top-20 right-20 w-16 h-16 border-2 border-gold-400/20 rounded-2xl rotate-12 floating"></div>
                <div className="absolute bottom-32 left-32 w-12 h-12 border-2 border-white/10 rounded-full floating-slow"></div>
                <div className="absolute top-1/3 left-20 w-8 h-8 bg-gold-500/20 rounded-lg rotate-45 floating-delayed"></div>
            </div>

            <div className="container-custom relative">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="inline-block px-5 py-2.5 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-5 backdrop-blur-sm border border-gold-500/20">
                        Tại sao chọn chúng tôi
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Cam kết <span className="gradient-text-animated">chất lượng</span>
                    </h2>
                    <p className="text-xl text-navy-200 max-w-2xl mx-auto leading-relaxed">
                        DOIDEP cam kết mang đến trải nghiệm mua sắm tốt nhất với sản phẩm chính hãng và dịch vụ chuyên nghiệp
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                    {whyChooseUs.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon];
                        return (
                            <div
                                key={feature.id}
                                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-9 hover:bg-white/10 transition-all duration-600 hover:-translate-y-4 animate-fade-up"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                {/* Icon */}
                                <div className="w-18 h-18 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-gold-500/30">
                                    {IconComponent && (
                                        <IconComponent size={36} className="text-white" />
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-navy-200 leading-relaxed text-base">
                                    {feature.description}
                                </p>

                                {/* Hover Line */}
                                <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                {/* Corner glow */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: '50K+', label: 'Khách hàng hài lòng' },
                        { value: '10K+', label: 'Sản phẩm' },
                        { value: '99%', label: 'Đánh giá tích cực' },
                        { value: '24/7', label: 'Hỗ trợ khách hàng' }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-400 group animate-fade-up"
                            style={{
                                animationDelay: `${600 + index * 100}ms`,
                                animationFillMode: 'both'
                            }}
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-text-animated mb-3 group-hover:scale-110 transition-transform">
                                {stat.value}
                            </div>
                            <div className="text-navy-200 text-base">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
