import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    Search,
    ShoppingCart,
    User,
    Phone,
    Mail,
    ChevronDown,
    ChevronRight,
    Facebook,
    Instagram,
    Youtube,
    Clock,
    MapPin
} from 'lucide-react';
import { menuItems } from '@/data/mockData';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const [cartCount] = useState(3);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, [location]);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg' : ''}`}>
            {/* Top Bar */}
            <div className={`bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700 text-white transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-2'}`}>
                <div className="container-custom">
                    <div className="flex items-center justify-between text-sm">
                        {/* Left - Contact Info */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="tel:19001234" className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
                                <span className="p-1.5 bg-white/20 rounded-full group-hover:bg-gold-500/30 transition-colors">
                                    <Phone className="w-3 h-3" />
                                </span>
                                <span className="font-medium">Hotline: 1900 1234</span>
                            </a>
                            <a href="mailto:info@doidep.vn" className="flex items-center gap-2 hover:text-gold-400 transition-colors group">
                                <span className="p-1.5 bg-white/20 rounded-full group-hover:bg-gold-500/30 transition-colors">
                                    <Mail className="w-3 h-3" />
                                </span>
                                <span>info@doidep.vn</span>
                            </a>
                        </div>

                        {/* Center - Working Hours */}
                        <div className="hidden lg:flex items-center gap-2 text-navy-200">
                            <Clock className="w-4 h-4 text-gold-400" />
                            <span>Thứ 2 - Chủ nhật: 8:00 - 22:00</span>
                        </div>

                        {/* Right - Social & Promo */}
                        <div className="flex items-center space-x-4">
                            <div className="hidden sm:flex items-center gap-2 text-gold-400">
                                <span>🎁</span>
                                <span className="text-xs font-medium">Miễn phí vận chuyển từ 500K</span>
                            </div>
                            <div className="flex items-center gap-2">
                                {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="p-1.5 bg-white/10 rounded-full hover:bg-gold-500 hover:text-navy-800 transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className={`glass transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
                <div className="container-custom">
                    <div className="flex items-center justify-between gap-8">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105">
                                    <span className="text-navy-800 font-bold text-xl">D</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-navy-500 rounded-full flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-navy-700">DOIDEP</h1>
                                <p className="text-[10px] text-gold-600 tracking-wider uppercase">Không thể thiếu nhau</p>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center flex-1 justify-center">
                            {menuItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="menu-trigger relative"
                                    onMouseEnter={() => item.children.length > 0 && setActiveDropdown(item.id)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <Link
                                        to={item.path}
                                        className={`menu-item flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap ${location.pathname === item.path
                                            ? 'text-gold-600'
                                            : 'text-gray-700 hover:text-gold-600'
                                            }`}
                                    >
                                        <span>{item.label}</span>
                                        {item.children.length > 0 && (
                                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} />
                                        )}
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    {item.children.length > 0 && (
                                        <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${activeDropdown === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                            <div className="glass-card rounded-xl p-6 min-w-[500px] shadow-2xl">
                                                <div className="grid grid-cols-2 gap-6">
                                                    {item.children.map((group) => (
                                                        <div key={group.id}>
                                                            <h3 className="text-sm font-bold text-navy-700 mb-3 pb-2 border-b border-gold-200">
                                                                {group.label}
                                                            </h3>
                                                            <ul className="space-y-1">
                                                                {group.children.map((subItem) => (
                                                                    <li key={subItem.id}>
                                                                        <Link
                                                                            to={subItem.path}
                                                                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gold-50 hover:text-gold-600 transition-all group"
                                                                        >
                                                                            <ChevronRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500" />
                                                                            <span className="text-sm">{subItem.label}</span>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* Featured Banner */}
                                                <div className="mt-5 p-4 bg-gradient-to-r from-navy-600 to-navy-700 rounded-xl text-white">
                                                    <p className="text-sm text-gold-400 font-medium">Khuyến mãi đặc biệt</p>
                                                    <p className="font-bold">Giảm đến 30% các sản phẩm Apple</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-2">
                            {/* Search */}
                            <div className="relative">
                                <button
                                    onClick={() => setSearchOpen(!searchOpen)}
                                    className="p-2.5 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gold-600 transition-all"
                                >
                                    <Search className="w-5 h-5" />
                                </button>

                                {/* Search Dropdown */}
                                <div className={`absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 p-5 transition-all duration-300 ${searchOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Tìm kiếm sản phẩm..."
                                            className="w-full pl-4 pr-10 py-3 border-2 border-gray-200 rounded-lg focus:border-gold-400 focus:outline-none transition-colors bg-gray-50 focus:bg-white"
                                        />
                                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                    <div className="mt-4 text-sm">
                                        <p className="mb-2 font-medium text-navy-700">Tìm kiếm phổ biến:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['iPhone', 'MacBook', 'Cà phê'].map((term) => (
                                                <span
                                                    key={term}
                                                    className="px-3 py-1.5 bg-gray-100 rounded-full hover:bg-gold-100 hover:text-gold-700 cursor-pointer transition-colors text-gray-600"
                                                >
                                                    {term}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cart */}
                            <Link
                                to="/gio-hang"
                                className="relative p-2.5 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gold-600 transition-all"
                            >
                                <ShoppingCart className="w-5 h-5" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-800 text-[10px] rounded-full flex items-center justify-center font-bold">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>

                            {/* User - Desktop only */}
                            <Link
                                to="/tai-khoan"
                                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-navy-600 to-navy-700 text-white hover:from-gold-500 hover:to-gold-600 hover:text-navy-800 transition-all text-sm font-medium shadow-md"
                            >
                                <User className="w-4 h-4" />
                                <span>Tài khoản</span>
                            </Link>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-2.5 rounded-lg hover:bg-gray-100 text-gray-600 transition-all"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-2 rounded-2xl overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0 max-h-[80vh]' : 'opacity-0 invisible -translate-y-4 max-h-0'}`}>
                    <div className="p-4 max-h-[70vh] overflow-y-auto">
                        {menuItems.map((item) => (
                            <div key={item.id} className="mb-2">
                                {item.children.length > 0 ? (
                                    <details className="group">
                                        <summary className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gold-50 cursor-pointer list-none font-medium">
                                            <span className="flex-1">{item.label}</span>
                                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                                        </summary>
                                        <div className="pl-4 pr-4 pb-2 space-y-2">
                                            {item.children.map((group) => (
                                                <div key={group.id} className="pt-2">
                                                    <p className="text-xs font-bold text-gold-600 mb-2">{group.label}</p>
                                                    {group.children.map((subItem) => (
                                                        <Link
                                                            key={subItem.id}
                                                            to={subItem.path}
                                                            className="block py-2 pl-3 text-sm text-gray-600 hover:text-gold-600 transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </details>
                                ) : (
                                    <Link
                                        to={item.path}
                                        className="flex items-center px-4 py-3 rounded-xl text-gray-700 hover:bg-gold-50 font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile Login Button */}
                        <div className="pt-4 border-t border-gray-100">
                            <Link
                                to="/tai-khoan"
                                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-navy-600 to-navy-700 text-white font-medium"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <User className="w-5 h-5" />
                                <span>Tài khoản</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay for Search */}
            {searchOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
                    onClick={() => setSearchOpen(false)}
                />
            )}
        </header>
    );
};

export default Header;
