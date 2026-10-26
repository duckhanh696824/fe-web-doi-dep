import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    ChevronRight,
    ChevronDown,
    MessageCircle,
    User,
    Building
} from 'lucide-react';
import { branches } from '@/data/mockData';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [activeBranch, setActiveBranch] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    const faqs = [
        {
            question: 'Thời gian giao hàng là bao lâu?',
            answer: 'Đơn hàng nội thành TP.HCM được giao trong 2-4 giờ. Đơn hàng tỉnh thành khác từ 2-5 ngày tùy khu vực.'
        },
        {
            question: 'Chính sách đổi trả như thế nào?',
            answer: 'Sản phẩm được đổi trả trong vòng 7 ngày nếu còn nguyên tem, hộp và chưa qua sử dụng. Sản phẩm lỗi do nhà sản xuất được bảo hành theo chính sách của hãng.'
        },
        {
            question: 'Các hình thức thanh toán?',
            answer: 'Chúng tôi chấp nhận thanh toán COD, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, và các ví điện tử phổ biến như MoMo, ZaloPay, VNPay.'
        },
        {
            question: 'Làm sao để kiểm tra hàng chính hãng?',
            answer: 'Tất cả sản phẩm đều có tem chống hàng giả, mã QR kiểm tra và đầy đủ giấy tờ chứng nhận nguồn gốc từ nhà phân phối chính thức.'
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
                </div>

                <div className="container-custom relative">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-sm text-navy-200 mb-10">
                        <Link to="/" className="hover:text-gold-400 transition-colors">Trang chủ</Link>
                        <ChevronRight size={16} />
                        <span className="text-gold-400 font-medium">Liên hệ</span>
                    </nav>

                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-5 py-2.5 bg-gold-500/20 text-gold-400 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-gold-500/20">
                            Liên hệ với chúng tôi
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                            Chúng tôi sẵn sàng <span className="gradient-text-animated">hỗ trợ</span>
                        </h1>
                        <p className="text-xl text-navy-200 leading-relaxed max-w-3xl mx-auto">
                            Mọi thắc mắc đều được giải đáp nhanh chóng. Hãy liên hệ qua các kênh dưới đây!
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                                <h2 className="text-3xl font-bold text-navy-600 mb-3">Gửi tin nhắn</h2>
                                <p className="text-gray-600 mb-10">
                                    Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại trong vòng 24 giờ
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-navy-600 mb-3">
                                                Họ và tên <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="input-custom pl-12"
                                                    placeholder="Nhập họ và tên"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-navy-600 mb-3">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="input-custom pl-12"
                                                    placeholder="example@email.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-navy-600 mb-3">
                                                Số điện thoại
                                            </label>
                                            <div className="relative">
                                                <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="input-custom pl-12"
                                                    placeholder="0912 345 678"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-navy-600 mb-3">
                                                Chủ đề
                                            </label>
                                            <div className="relative">
                                                <Building size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                                <select
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="input-custom pl-12 appearance-none cursor-pointer"
                                                >
                                                    <option value="">Chọn chủ đề</option>
                                                    <option value="order">Đơn hàng</option>
                                                    <option value="warranty">Bảo hành</option>
                                                    <option value="complaint">Khiếu nại</option>
                                                    <option value="other">Khác</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-navy-600 mb-3">
                                            Nội dung <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <MessageCircle size={20} className="absolute left-4 top-5 text-gray-400" />
                                            <textarea
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                rows={5}
                                                className="input-custom pl-12 resize-none"
                                                placeholder="Nhập nội dung tin nhắn..."
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-gold text-lg px-10 py-5 w-full md:w-auto"
                                    >
                                        <Send size={20} />
                                        Gửi tin nhắn
                                    </button>
                                </form>
                            </div>

                            {/* FAQ Section */}
                            <div className="mt-12">
                                <h2 className="text-3xl font-bold text-navy-600 mb-8">Câu hỏi thường gặp</h2>
                                <div className="space-y-4">
                                    {faqs.map((faq, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-400"
                                        >
                                            <button
                                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                                className="w-full flex items-center justify-between p-6 text-left"
                                            >
                                                <span className="font-semibold text-navy-600 text-lg pr-4">
                                                    {faq.question}
                                                </span>
                                                <ChevronDown
                                                    size={24}
                                                    className={`flex-shrink-0 text-gold-500 transition-transform duration-400 ${activeFaq === index ? 'rotate-180' : ''}`}
                                                />
                                            </button>
                                            <div className={`overflow-hidden transition-all duration-400 ${activeFaq === index ? 'max-h-60' : 'max-h-0'}`}>
                                                <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Contact Info Card */}
                            <div className="bg-gradient-to-br from-navy-600 to-navy-800 rounded-3xl p-8 text-white relative overflow-hidden">
                                <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/20 rounded-full blur-[60px]"></div>

                                <div className="relative">
                                    <h3 className="text-2xl font-bold mb-8">Thông tin liên hệ</h3>

                                    <div className="space-y-6">
                                        <a href="tel:19001234" className="flex items-center gap-4 hover:text-gold-400 transition-colors group">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-navy-200">Hotline</p>
                                                <p className="font-bold text-lg">1900 1234</p>
                                            </div>
                                        </a>

                                        <a href="mailto:info@doidep.vn" className="flex items-center gap-4 hover:text-gold-400 transition-colors group">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-navy-200">Email</p>
                                                <p className="font-bold">info@doidep.vn</p>
                                            </div>
                                        </a>

                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                                                <Clock size={24} />
                                            </div>
                                            <div>
                                                <p className="text-sm text-navy-200">Giờ làm việc</p>
                                                <p className="font-bold">8:00 - 22:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Branch Selector */}
                            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-navy-600 mb-6">Cửa hàng gần bạn</h3>

                                <div className="flex gap-2 mb-6 flex-wrap">
                                    {branches.map((branch, index) => (
                                        <button
                                            key={branch.id}
                                            onClick={() => setActiveBranch(index)}
                                            className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-400 ${activeBranch === index
                                                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-navy-800 shadow-lg shadow-gold-500/20'
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {branch.name.replace('Chi nhánh ', '')}
                                        </button>
                                    ))}
                                </div>

                                <div className="space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <MapPin size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-600 leading-relaxed">{branches[activeBranch].address}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone size={20} className="text-gold-500 flex-shrink-0" />
                                        <span className="text-gray-600">{branches[activeBranch].phone}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock size={20} className="text-gold-500 flex-shrink-0" />
                                        <span className="text-gray-600">{branches[activeBranch].hours}</span>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="mt-6 rounded-2xl overflow-hidden border border-gray-200">
                                    <iframe
                                        src={branches[activeBranch].mapUrl}
                                        width="100%"
                                        height="200"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title={`Bản đồ ${branches[activeBranch].name}`}
                                        className="grayscale hover:grayscale-0 transition-all duration-500"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
