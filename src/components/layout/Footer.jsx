import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    ChevronUp,
    Send,
    CreditCard,
    Truck,
    Shield,
    Headphones
} from 'lucide-react';
import { branches } from '@/data/mockData';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [activeBranch, setActiveBranch] = useState(0);

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        alert(`Đăng ký thành công với email: ${email}`);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { label: 'Về chúng tôi', path: '/gioi-thieu' },
        { label: 'Chính sách bảo hành', path: '/chinh-sach-bao-hanh' },
        { label: 'Chính sách đổi trả', path: '/chinh-sach-doi-tra' },
        { label: 'Chính sách vận chuyển', path: '/chinh-sach-van-chuyen' },
        { label: 'Hướng dẫn mua hàng', path: '/huong-dan-mua-hang' },
        { label: 'Câu hỏi thường gặp', path: '/faq' }
    ];

    const categories = [
        { label: 'Điện thoại', path: '/san-pham/dien-thoai' },
        { label: 'Laptop & Máy tính', path: '/san-pham/laptop-may-tinh' },
        { label: 'Tablet', path: '/san-pham/tablet' },
        { label: 'Phụ kiện', path: '/san-pham/phu-kien' },
        { label: 'Cà phê', path: '/san-pham/ca-phe' },
        { label: 'Trà', path: '/san-pham/tra' }
    ];

    return (
        <footer className="relative">
            {/* Features Bar */}
            <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 py-10 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-100/50 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-navy-100/50 rounded-full blur-[80px]"></div>

                <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 relative">
                    {[
                        { icon: Truck, title: 'Miễn phí vận chuyển', desc: 'Đơn hàng từ 500K' },
                        { icon: Shield, title: 'Bảo hành chính hãng', desc: 'Đầy đủ giấy tờ' },
                        { icon: CreditCard, title: 'Thanh toán đa dạng', desc: 'COD, chuyển khoản, ví điện tử' },
                        { icon: Headphones, title: 'Hỗ trợ 24/7', desc: 'Luôn sẵn sàng' }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-5 p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-default group border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                                <feature.icon size={28} className="text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-navy-600 text-base">{feature.title}</h4>
                                <p className="text-sm text-gray-500">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-navy-600 via-navy-700 to-navy-600 py-14 relative overflow-hidden">
                {/* Pattern overlay */}
                <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]"></div>

                <div className="container-custom relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-3xl font-bold text-white mb-3">
                                Đăng ký nhận tin khuyến mãi
                            </h3>
                            <p className="text-navy-200 text-lg">
                                Nhận ngay voucher <span className="text-gold-400 font-bold">100.000đ</span> cho đơn hàng đầu tiên
                            </p>
                        </div>
                        <form onSubmit={handleNewsletterSubmit} className="flex w-full md:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Nhập email của bạn"
                                className="flex-1 md:w-96 px-6 py-5 rounded-l-2xl border-0 focus:outline-none focus:ring-2 focus:ring-gold-400 text-lg"
                                required
                            />
                            <button
                                type="submit"
                                className="px-8 py-5 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-800 font-bold rounded-r-2xl transition-all duration-400 flex items-center gap-3 shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-500/40"
                            >
                                <Send size={20} />
                                <span className="hidden sm:inline">Đăng ký</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="bg-gradient-to-b from-navy-800 to-navy-900 text-white py-20 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>

                <div className="container-custom relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Company Info */}
                        <div>
                            <Link to="/" className="flex items-center gap-4 mb-8 group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/30 group-hover:scale-110 transition-transform">
                                    <span className="text-navy-600 font-bold text-2xl">D</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">DOIDEP</h2>
                                    <p className="text-sm text-gold-400 italic">Không thể thiếu nhau</p>
                                </div>
                            </Link>
                            <p className="text-navy-200 mb-8 leading-relaxed">
                                DOIDEP - Điểm đến tin cậy cho các sản phẩm công nghệ chính hãng và đồ uống cao cấp. Cam kết chất lượng, uy tín và dịch vụ tận tâm.
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { icon: Facebook, href: '#' },
                                    { icon: Twitter, href: '#' },
                                    { icon: Instagram, href: '#' },
                                    { icon: Youtube, href: '#' }
                                ].map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="w-12 h-12 bg-navy-700 hover:bg-gold-500 hover:text-navy-800 rounded-xl flex items-center justify-center transition-all duration-400 hover:scale-110 hover:-translate-y-1"
                                    >
                                        <social.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded"></span>
                                Liên kết nhanh
                            </h3>
                            <ul className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.path}
                                            className="text-navy-200 hover:text-gold-400 transition-all duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-3 h-0.5 bg-gold-500 transition-all duration-300 rounded"></span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded"></span>
                                Danh mục sản phẩm
                            </h3>
                            <ul className="space-y-4">
                                {categories.map((cat, index) => (
                                    <li key={index}>
                                        <Link
                                            to={cat.path}
                                            className="text-navy-200 hover:text-gold-400 transition-all duration-300 flex items-center gap-2 group"
                                        >
                                            <span className="w-0 group-hover:w-3 h-0.5 bg-gold-500 transition-all duration-300 rounded"></span>
                                            {cat.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Branches */}
                        <div>
                            <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
                                <span className="w-10 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded"></span>
                                Hệ thống cửa hàng
                            </h3>

                            {/* Branch Tabs */}
                            <div className="flex gap-2 mb-6 flex-wrap">
                                {branches.map((branch, index) => (
                                    <button
                                        key={branch.id}
                                        onClick={() => setActiveBranch(index)}
                                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-400 ${activeBranch === index
                                            ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-800 shadow-lg shadow-gold-500/30'
                                            : 'bg-navy-700 text-navy-200 hover:bg-navy-600'
                                            }`}
                                    >
                                        {branch.name.replace('Chi nhánh ', '')}
                                    </button>
                                ))}
                            </div>

                            {/* Active Branch Info */}
                            <div className="space-y-4 text-navy-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin size={18} className="text-gold-500" />
                                    </div>
                                    <span className="text-sm leading-relaxed">{branches[activeBranch].address}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone size={18} className="text-gold-500" />
                                    </div>
                                    <a
                                        href={`tel:${branches[activeBranch].phone.replace(/\s/g, '')}`}
                                        className="hover:text-gold-400 transition-colors"
                                    >
                                        {branches[activeBranch].phone}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail size={18} className="text-gold-500" />
                                    </div>
                                    <a
                                        href={`mailto:${branches[activeBranch].email}`}
                                        className="hover:text-gold-400 transition-colors"
                                    >
                                        {branches[activeBranch].email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-9 h-9 bg-navy-700 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock size={18} className="text-gold-500" />
                                    </div>
                                    <span>{branches[activeBranch].hours}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="mt-16 rounded-3xl overflow-hidden border-2 border-navy-600 shadow-2xl">
                        <iframe
                            src={branches[activeBranch].mapUrl}
                            width="100%"
                            height="320"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Bản đồ ${branches[activeBranch].name}`}
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-navy-900 py-8 border-t border-navy-700">
                <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-navy-400 text-sm text-center md:text-left">
                        © 2024 DOIDEP. Tất cả quyền được bảo lưu.
                    </p>
                    <div className="flex items-center gap-5">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                            className="h-7 opacity-50 hover:opacity-100 transition-opacity duration-300"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            alt="Mastercard"
                            className="h-7 opacity-50 hover:opacity-100 transition-opacity duration-300"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                            alt="MoMo"
                            className="h-7 opacity-50 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-600 hover:to-gold-500 text-navy-800 rounded-2xl shadow-xl shadow-gold-500/30 flex items-center justify-center transition-all duration-400 hover:scale-110 hover:-translate-y-1 z-40"
                aria-label="Về đầu trang"
            >
                <ChevronUp size={28} />
            </button>
        </footer>
    );
};

export default Footer;
