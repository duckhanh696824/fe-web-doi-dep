import { Link } from 'react-router-dom';
import {
    Target,
    Eye,
    Heart,
    Lightbulb,
    Users,
    Award,
    ChevronRight,
    Star
} from 'lucide-react';

const AboutPage = () => {
    const coreValues = [
        {
            icon: Heart,
            title: 'Tận tâm',
            desc: 'Đặt khách hàng làm trung tâm trong mọi hoạt động'
        },
        {
            icon: Award,
            title: 'Chất lượng',
            desc: 'Cam kết sản phẩm chính hãng, dịch vụ chuyên nghiệp'
        },
        {
            icon: Lightbulb,
            title: 'Sáng tạo',
            desc: 'Không ngừng đổi mới để phục vụ khách hàng tốt hơn'
        },
        {
            icon: Users,
            title: 'Đoàn kết',
            desc: 'Xây dựng đội ngũ vững mạnh, đồng lòng phát triển'
        }
    ];

    const milestones = [
        { year: '2015', event: 'Thành lập DOIDEP với cửa hàng đầu tiên tại Quận 1' },
        { year: '2017', event: 'Mở rộng ra 5 chi nhánh trên toàn quốc' },
        { year: '2019', event: 'Ra mắt website thương mại điện tử' },
        { year: '2021', event: 'Đạt 100.000 khách hàng thân thiết' },
        { year: '2023', event: 'Trở thành đối tác vàng của các thương hiệu lớn' },
        { year: '2024', event: 'Mục tiêu 200.000 khách hàng và 20 chi nhánh' }
    ];

    const team = [
        {
            name: 'Nguyễn Văn An',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
        },
        {
            name: 'Trần Thị Bình',
            role: 'COO',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
        },
        {
            name: 'Lê Hoàng Cường',
            role: 'CTO',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
        },
        {
            name: 'Phạm Thu Dung',
            role: 'CMO',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]"></div>
                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gold-400/10 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full"></div>
                </div>

                <div className="container-custom relative">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-navy-200 mb-10">
                        <Link to="/" className="hover:text-gold-400 transition-colors">Trang chủ</Link>
                        <ChevronRight size={16} />
                        <span className="text-gold-400 font-medium">Giới thiệu</span>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-5 py-2.5 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-gold-500/20">
                            Về chúng tôi
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Câu chuyện <span className="gradient-text-animated">DOIDEP</span>
                        </h1>
                        <p className="text-xl text-navy-200 leading-relaxed max-w-3xl mx-auto">
                            Hơn 9 năm hình thành và phát triển, DOIDEP tự hào là điểm đến tin cậy
                            cho hàng triệu khách hàng
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Vision */}
                        <div className="group p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-600 hover:-translate-y-3 border border-gray-100">
                            <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                                <Eye size={40} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-navy-600 mb-6">Tầm nhìn</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Trở thành hệ thống bán lẻ hàng đầu Việt Nam về công nghệ và đồ uống cao cấp,
                                mang đến trải nghiệm mua sắm xuất sắc cho mọi khách hàng.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="group p-10 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-600 hover:-translate-y-3 border border-gray-100">
                            <div className="w-20 h-20 bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-navy-500/20 group-hover:scale-110 transition-transform">
                                <Target size={40} className="text-white" />
                            </div>
                            <h2 className="text-3xl font-bold text-navy-600 mb-6">Sứ mệnh</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Cung cấp sản phẩm chính hãng với giá tốt nhất, dịch vụ chuyên nghiệp
                                và hậu mãi tận tâm, góp phần nâng cao chất lượng cuộc sống.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-72 h-72 bg-gold-100/50 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-navy-100/50 rounded-full blur-[100px]"></div>

                <div className="container-custom relative">
                    <div className="text-center mb-16">
                        <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-navy-100 to-navy-50 text-navy-700 rounded-full text-sm font-semibold mb-5">
                            Giá trị cốt lõi
                        </span>
                        <h2 className="section-title">Nền tảng phát triển</h2>
                        <p className="section-subtitle">
                            4 giá trị cốt lõi định hình văn hóa và hướng đi của DOIDEP
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div
                                key={index}
                                className="group text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-600 hover:-translate-y-4 border border-gray-100 animate-fade-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-gold-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <value.icon size={36} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-600 mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Milestones */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-gold-100 to-gold-50 text-gold-700 rounded-full text-sm font-semibold mb-5">
                            Hành trình phát triển
                        </span>
                        <h2 className="section-title">Cột mốc quan trọng</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-400 via-navy-400 to-gold-400 -translate-x-1/2 rounded-full hidden md:block"></div>

                        <div className="space-y-8 md:space-y-0">
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-fade-up`}
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2">
                                            <span className="inline-block px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-800 font-bold rounded-xl mb-4 shadow-lg shadow-gold-500/20">
                                                {milestone.year}
                                            </span>
                                            <p className="text-gray-700 text-lg">{milestone.event}</p>
                                        </div>
                                    </div>
                                    {/* Dot */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white border-4 border-gold-500 rounded-full hidden md:block shadow-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold-400/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="container-custom relative">
                    <div className="text-center mb-16">
                        <span className="inline-block px-5 py-2.5 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-5">
                            Đội ngũ lãnh đạo
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Những người <span className="gradient-text-animated">dẫn dắt</span>
                        </h2>
                        <p className="text-xl text-navy-200 max-w-2xl mx-auto">
                            Đội ngũ giàu kinh nghiệm, đầy nhiệt huyết cùng chung tầm nhìn
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group text-center animate-fade-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <div className="relative overflow-hidden rounded-3xl mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Social links placeholder */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                        <span className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                                            <Star size={18} className="text-white" />
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <p className="text-gold-400 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '9+', label: 'Năm kinh nghiệm' },
                            { value: '20+', label: 'Chi nhánh' },
                            { value: '100K+', label: 'Khách hàng' },
                            { value: '50K+', label: 'Sản phẩm' }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 animate-fade-up"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both'
                                }}
                            >
                                <div className="text-4xl md:text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
