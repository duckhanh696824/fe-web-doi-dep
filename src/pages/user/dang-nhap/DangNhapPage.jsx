import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Lock,
    Eye,
    EyeOff,
    User,
    AlertCircle,
    ArrowRight,
    Sparkles,
    CheckCircle2
} from 'lucide-react';

const DangNhapPage = () => {
    const [formData, setFormData] = useState({
        identifier: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.identifier.trim()) {
            newErrors.identifier = 'Vui lòng nhập thông tin đăng nhập';
        }
        if (!formData.password) {
            newErrors.password = 'Vui lòng nhập mật khẩu';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
                {/* Animated Gradient Orbs */}
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
                <div className="orb orb-4"></div>

                {/* Moving Lines */}
                <div className="absolute inset-0 overflow-hidden opacity-20">
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </div>

                {/* Floating Particles */}
                <div className="particles">
                    {[...Array(25)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>

                {/* Wave Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden opacity-10">
                    <div className="wave wave-1"></div>
                    <div className="wave wave-2"></div>
                </div>
            </div>

            {/* Main Card */}
            <div className="relative w-full max-w-6xl">
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-gold-400/40 via-gold-500/30 to-gold-400/40 rounded-[2rem] blur-2xl opacity-70 animate-pulse-slow"></div>

                {/* Card Container */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                    {/* Left Side - Branding */}
                    <div className="lg:w-[45%] bg-gradient-to-br from-navy-600 via-navy-700 to-navy-800 p-8 lg:p-12 text-white relative overflow-hidden">
                        {/* Animated Background */}
                        <div className="absolute inset-0">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-400/20 rounded-full blur-3xl animate-float"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-300/15 rounded-full blur-2xl animate-float-delay"></div>
                        </div>

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            {/* Logo */}
                            <Link to="/" className="inline-flex items-center gap-3 group">
                                <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 group-hover:rotate-3 transition-all">
                                    <span className="text-navy-800 font-bold text-2xl">D</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold block">DOIDEP</span>
                                    <span className="text-gold-400 text-sm">Không thể thiếu nhau</span>
                                </div>
                            </Link>

                            {/* Main Content */}
                            <div className="my-8">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                    Chào mừng
                                    <span className="block text-gold-400">trở lại!</span>
                                </h2>
                                <p className="text-navy-200 text-lg mb-8 leading-relaxed">
                                    Đăng nhập để khám phá hàng ngàn sản phẩm chất lượng với nhiều ưu đãi hấp dẫn dành riêng cho bạn.
                                </p>

                                {/* Stats - Modern badges */}
                                <div className="flex flex-wrap gap-3">
                                    {[
                                        { num: '1000+', label: 'Sản phẩm' },
                                        { num: '50K+', label: 'Khách hàng' },
                                        { num: '99%', label: 'Hài lòng' }
                                    ].map((stat, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:bg-white/15 transition-all cursor-default"
                                        >
                                            <div className="text-gold-400 font-bold text-lg">{stat.num}</div>
                                            <div className="text-navy-200 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center gap-2 text-navy-300 text-sm">
                                <Sparkles className="w-4 h-4 text-gold-400" />
                                <span>Mua sắm thông minh, sống phong cách</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-[55%] p-8 lg:p-12 flex flex-col justify-center">
                        {/* Form Header */}
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-navy-700 mb-2">Đăng nhập</h3>
                            <p className="text-gray-500">Nhập thông tin tài khoản của bạn để tiếp tục</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Identifier */}
                            <div>
                                <label className="block text-sm font-semibold text-navy-700 mb-2">
                                    Số điện thoại / Email / Tên đăng nhập <span className="text-rose-500">*</span>
                                </label>
                                <div className="relative">
                                    <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'identifier' ? 'text-gold-500' : 'text-gray-400'}`} />
                                    <input
                                        type="text"
                                        name="identifier"
                                        value={formData.identifier}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('identifier')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Nhập thông tin đăng nhập của bạn"
                                        className={`w-full pl-12 pr-4 py-4 rounded-xl border-2 transition-all bg-gray-50/50 focus:bg-white outline-none ${errors.identifier ? 'border-red-400' : 'border-gray-200 focus:border-gold-400 hover:border-gold-300'}`}
                                    />
                                </div>
                                {errors.identifier && (
                                    <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.identifier}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-semibold text-navy-700 mb-2">
                                    Mật khẩu <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'password' ? 'text-gold-500' : 'text-gray-400'}`} />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('password')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                                        className={`w-full pl-12 pr-12 py-4 rounded-xl border-2 transition-all bg-gray-50/50 focus:bg-white outline-none ${errors.password ? 'border-red-400' : 'border-gray-200 focus:border-gold-400 hover:border-gold-300'}`}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gold-500 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="flex items-center gap-1.5 mt-2 text-sm text-red-500">
                                        <AlertCircle className="w-4 h-4" />
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <Link to="/quen-mat-khau" className="text-gold-600 hover:text-gold-700 font-medium hover:underline transition-colors">
                                    Quên mật khẩu?
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white font-semibold text-lg cursor-pointer transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-navy-500/30 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Đang xử lý...
                                    </>
                                ) : (
                                    <>
                                        Đăng nhập
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            {/* Divider */}
                            <div className="flex items-center gap-4 my-2">
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                                <span className="text-gray-400 text-sm font-medium">hoặc</span>
                                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            </div>

                            {/* Google Button */}
                            <button
                                type="button"
                                className="w-full py-4 rounded-xl border-2 border-gray-200 hover:border-gold-400 bg-white hover:bg-gold-50/50 font-semibold cursor-pointer transition-all flex items-center justify-center gap-3 hover:shadow-xl group"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                <span className="text-gray-700 group-hover:text-navy-700">Đăng nhập với Google</span>
                            </button>
                        </form>

                        {/* Register */}
                        <p className="text-center mt-8 text-gray-600">
                            Chưa có tài khoản?{' '}
                            <Link to="/dang-ky" className="text-gold-600 hover:text-gold-700 font-semibold hover:underline">
                                Đăng ký ngay
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                /* Animated Orbs */
                .orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                }
                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: linear-gradient(135deg, rgba(201, 169, 98, 0.3), rgba(229, 212, 161, 0.2));
                    top: -100px;
                    left: -100px;
                    animation: orbMove1 15s ease-in-out infinite;
                }
                .orb-2 {
                    width: 350px;
                    height: 350px;
                    background: linear-gradient(135deg, rgba(201, 169, 98, 0.2), rgba(30, 58, 95, 0.3));
                    bottom: -50px;
                    right: -50px;
                    animation: orbMove2 18s ease-in-out infinite;
                }
                .orb-3 {
                    width: 250px;
                    height: 250px;
                    background: linear-gradient(135deg, rgba(30, 58, 95, 0.4), rgba(201, 169, 98, 0.2));
                    top: 40%;
                    right: 20%;
                    animation: orbMove3 12s ease-in-out infinite;
                }
                .orb-4 {
                    width: 200px;
                    height: 200px;
                    background: linear-gradient(135deg, rgba(201, 169, 98, 0.25), transparent);
                    bottom: 30%;
                    left: 10%;
                    animation: orbMove4 20s ease-in-out infinite;
                }

                @keyframes orbMove1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    25% { transform: translate(100px, 50px) scale(1.1); }
                    50% { transform: translate(50px, 100px) scale(0.9); }
                    75% { transform: translate(-50px, 50px) scale(1.05); }
                }
                @keyframes orbMove2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(-80px, -60px) scale(1.15); }
                    66% { transform: translate(-40px, 40px) scale(0.85); }
                }
                @keyframes orbMove3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-60px, 80px); }
                }
                @keyframes orbMove4 {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    50% { transform: translate(80px, -40px) rotate(180deg); }
                }

                /* Moving Lines */
                .line {
                    position: absolute;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.5), transparent);
                    animation: lineMove 8s linear infinite;
                }
                .line-1 { top: 20%; width: 30%; left: -30%; animation-delay: 0s; }
                .line-2 { top: 50%; width: 40%; left: -40%; animation-delay: 3s; }
                .line-3 { top: 80%; width: 25%; left: -25%; animation-delay: 6s; }

                @keyframes lineMove {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(100vw + 100%)); }
                }

                /* Floating Particles */
                .particles { position: absolute; inset: 0; overflow: hidden; }
                .particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(201, 169, 98, 0.6);
                    border-radius: 50%;
                    animation: particleFloat 5s ease-in-out infinite;
                }
                @keyframes particleFloat {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-30px) scale(1.5); opacity: 1; }
                }

                /* Wave Effect */
                .wave {
                    position: absolute;
                    width: 200%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.3), transparent);
                    animation: waveMove 10s linear infinite;
                }
                .wave-1 { bottom: 0; left: -100%; }
                .wave-2 { bottom: 20px; left: -100%; animation-delay: -5s; opacity: 0.5; }
                @keyframes waveMove {
                    0% { transform: translateX(0) skewY(-2deg); }
                    100% { transform: translateX(50%) skewY(-2deg); }
                }

                /* Utility Animations */
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                .animate-float-delay {
                    animation: float 6s ease-in-out infinite;
                    animation-delay: 2s;
                }
                .animate-pulse-slow {
                    animation: pulse 4s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.7; }
                    50% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default DangNhapPage;
