import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ChevronRight,
    Trash2,
    Plus,
    Minus,
    ShoppingBag,
    ArrowRight,
    Tag
} from 'lucide-react';
import { products, formatPrice } from '@/data/mockData';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { ...products[0], quantity: 1 },
        { ...products[3], quantity: 2 },
        { ...products[5], quantity: 1 }
    ]);
    const [couponCode, setCouponCode] = useState('');

    const updateQuantity = (id, delta) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 500000 ? 0 : 30000;
    const total = subtotal + shipping;

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
                        <span className="text-navy-600 font-medium">Giỏ hàng</span>
                    </nav>
                </div>
            </div>

            <div className="container-custom py-8">
                <h1 className="text-3xl font-bold text-navy-600 mb-8 flex items-center gap-3">
                    <ShoppingBag size={32} className="text-gold-500" />
                    Giỏ hàng của bạn
                    <span className="text-lg font-normal text-gray-500">
                        ({cartItems.length} sản phẩm)
                    </span>
                </h1>

                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-4"
                                >
                                    {/* Image */}
                                    <Link
                                        to={`/san-pham/${item.slug}`}
                                        className="w-full md:w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform"
                                        />
                                    </Link>

                                    {/* Details */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <span className="text-xs text-gold-600 font-medium uppercase">
                                                    {item.category}
                                                </span>
                                                <Link
                                                    to={`/san-pham/${item.slug}`}
                                                    className="block font-bold text-navy-600 hover:text-gold-600 transition-colors"
                                                >
                                                    {item.name}
                                                </Link>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Xóa sản phẩm"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>

                                        <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                                            {/* Quantity */}
                                            <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white transition-colors"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="w-10 text-center font-semibold">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="text-lg font-bold text-navy-600">
                                                    {formatPrice(item.price * item.quantity)}
                                                </p>
                                                {item.quantity > 1 && (
                                                    <p className="text-sm text-gray-500">
                                                        {formatPrice(item.price)} / sản phẩm
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Continue Shopping */}
                            <Link
                                to="/san-pham"
                                className="inline-flex items-center gap-2 text-navy-600 hover:text-gold-600 font-medium transition-colors mt-4"
                            >
                                <ArrowRight size={18} className="rotate-180" />
                                Tiếp tục mua sắm
                            </Link>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-32">
                                <h2 className="text-xl font-bold text-navy-600 mb-6">
                                    Tóm tắt đơn hàng
                                </h2>

                                {/* Coupon */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mã giảm giá
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Tag size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="text"
                                                value={couponCode}
                                                onChange={(e) => setCouponCode(e.target.value)}
                                                placeholder="Nhập mã..."
                                                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gold-400 focus:outline-none"
                                            />
                                        </div>
                                        <button className="px-4 py-3 bg-navy-600 text-white font-semibold rounded-xl hover:bg-navy-700 transition-colors">
                                            Áp dụng
                                        </button>
                                    </div>
                                </div>

                                {/* Summary */}
                                <div className="space-y-4 py-4 border-t border-b border-gray-200">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tạm tính</span>
                                        <span className="font-medium">{formatPrice(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Phí vận chuyển</span>
                                        <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                                            {shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}
                                        </span>
                                    </div>
                                    {shipping === 0 && (
                                        <p className="text-xs text-green-600 bg-green-50 px-3 py-2 rounded-lg">
                                            🎉 Bạn được miễn phí vận chuyển cho đơn từ 500.000đ
                                        </p>
                                    )}
                                </div>

                                <div className="flex justify-between items-center py-4">
                                    <span className="text-lg font-bold text-navy-600">Tổng cộng</span>
                                    <span className="text-2xl font-bold text-gold-600">
                                        {formatPrice(total)}
                                    </span>
                                </div>

                                <button className="w-full btn-gold text-lg py-4 justify-center">
                                    Tiến hành thanh toán
                                    <ArrowRight size={20} />
                                </button>

                                {/* Payment Methods */}
                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 text-center mb-3">
                                        Phương thức thanh toán
                                    </p>
                                    <div className="flex justify-center gap-3">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                                            alt="Visa"
                                            className="h-6 opacity-60"
                                        />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                            alt="Mastercard"
                                            className="h-6 opacity-60"
                                        />
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
                                            alt="MoMo"
                                            className="h-6 opacity-60"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Empty Cart
                    <div className="text-center py-20">
                        <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <ShoppingBag size={48} className="text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-navy-600 mb-2">
                            Giỏ hàng trống
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Hãy khám phá các sản phẩm tuyệt vời của chúng tôi
                        </p>
                        <Link to="/san-pham" className="btn-primary">
                            Bắt đầu mua sắm
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
