// Mock data for DOIDEP E-commerce

// Categories
export const categories = [
    {
        id: 1,
        name: 'Điện thoại',
        slug: 'dien-thoai',
        icon: 'Smartphone',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
        count: 125
    },
    {
        id: 2,
        name: 'Laptop & Máy tính',
        slug: 'laptop-may-tinh',
        icon: 'Laptop',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
        count: 89
    },
    {
        id: 3,
        name: 'Tablet',
        slug: 'tablet',
        icon: 'Tablet',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop',
        count: 45
    },
    {
        id: 4,
        name: 'Phụ kiện',
        slug: 'phu-kien',
        icon: 'Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
        count: 230
    },
    {
        id: 5,
        name: 'Cà phê',
        slug: 'ca-phe',
        icon: 'Coffee',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
        count: 56
    },
    {
        id: 6,
        name: 'Trà',
        slug: 'tra',
        icon: 'Leaf',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
        count: 42
    }
];

// Products
export const products = [
    {
        id: 1,
        name: 'iPhone 15 Pro Max 256GB',
        slug: 'iphone-15-pro-max-256gb',
        category: 'dien-thoai',
        price: 34990000,
        originalPrice: 38990000,
        discount: 10,
        rating: 4.9,
        reviews: 128,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
        images: [
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop'
        ],
        isNew: true,
        isBestSeller: true,
        inStock: true,
        description: 'iPhone 15 Pro Max - Titan. Một hợp kim sáng tạo mang đến thiết kế Pro đất hơn và nhẹ hơn.'
    },
    {
        id: 2,
        name: 'MacBook Pro 14" M3 Pro',
        slug: 'macbook-pro-14-m3-pro',
        category: 'laptop-may-tinh',
        price: 52990000,
        originalPrice: 58990000,
        discount: 10,
        rating: 4.8,
        reviews: 86,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
        isNew: true,
        isBestSeller: false,
        inStock: true,
        description: 'MacBook Pro với chip M3 Pro đột phá, hiệu suất vượt trội.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        slug: 'samsung-galaxy-s24-ultra',
        category: 'dien-thoai',
        price: 31990000,
        originalPrice: 34990000,
        discount: 8,
        rating: 4.7,
        reviews: 156,
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
        isNew: false,
        isBestSeller: true,
        inStock: true,
        description: 'Galaxy S24 Ultra với bút S Pen tích hợp và camera AI thông minh.'
    },
    {
        id: 4,
        name: 'AirPods Pro 2nd Gen',
        slug: 'airpods-pro-2nd-gen',
        category: 'phu-kien',
        price: 6490000,
        originalPrice: 6990000,
        discount: 7,
        rating: 4.8,
        reviews: 312,
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop',
        isNew: false,
        isBestSeller: true,
        inStock: true,
        description: 'AirPods Pro thế hệ 2 với chống ồn chủ động và âm thanh không gian.'
    },
    {
        id: 5,
        name: 'Cà Phê Rang Xay Highland',
        slug: 'ca-phe-rang-xay-highland',
        category: 'ca-phe',
        price: 189000,
        originalPrice: 220000,
        discount: 14,
        rating: 4.6,
        reviews: 89,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
        isNew: false,
        isBestSeller: false,
        inStock: true,
        description: 'Cà phê rang xay nguyên chất từ vùng cao nguyên Việt Nam.'
    },
    {
        id: 6,
        name: 'Trà Ô Long Thượng Hạng',
        slug: 'tra-o-long-thuong-hang',
        category: 'tra',
        price: 350000,
        originalPrice: 420000,
        discount: 17,
        rating: 4.9,
        reviews: 67,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop',
        isNew: true,
        isBestSeller: false,
        inStock: true,
        description: 'Trà Ô Long thượng hạng, hương vị đậm đà, thơm ngát.'
    },
    {
        id: 7,
        name: 'iPad Pro 12.9" M2',
        slug: 'ipad-pro-12-9-m2',
        category: 'tablet',
        price: 28990000,
        originalPrice: 32990000,
        discount: 12,
        rating: 4.8,
        reviews: 94,
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop',
        isNew: false,
        isBestSeller: true,
        inStock: true,
        description: 'iPad Pro với màn hình Liquid Retina XDR và chip M2 mạnh mẽ.'
    },
    {
        id: 8,
        name: 'Sony WH-1000XM5',
        slug: 'sony-wh-1000xm5',
        category: 'phu-kien',
        price: 8490000,
        originalPrice: 9490000,
        discount: 11,
        rating: 4.9,
        reviews: 203,
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop',
        isNew: false,
        isBestSeller: true,
        inStock: true,
        description: 'Tai nghe chống ồn hàng đầu với chất lượng âm thanh cao cấp.'
    }
];

// Flash Sale Products
export const flashSaleProducts = products.slice(0, 4).map(p => ({
    ...p,
    flashSaleEnds: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
}));

// News/Blog
export const news = [
    {
        id: 1,
        title: 'iPhone 16 sắp ra mắt: Những tính năng đáng mong đợi',
        slug: 'iphone-16-sap-ra-mat',
        excerpt: 'Apple dự kiến sẽ ra mắt dòng iPhone 16 vào tháng 9 với nhiều cải tiến đáng kể về camera và hiệu năng.',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop',
        category: 'Công nghệ',
        author: 'Nguyễn Văn A',
        date: '2024-01-15',
        readTime: '5 phút'
    },
    {
        id: 2,
        title: 'Top 5 laptop gaming đáng mua nhất 2024',
        slug: 'top-5-laptop-gaming-2024',
        excerpt: 'Khám phá những chiếc laptop gaming mạnh mẽ nhất với hiệu năng vượt trội cho game thủ.',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&h=400&fit=crop',
        category: 'Đánh giá',
        author: 'Trần Thị B',
        date: '2024-01-12',
        readTime: '8 phút'
    },
    {
        id: 3,
        title: 'Cà phê Việt Nam - Hành trình chinh phục thế giới',
        slug: 'ca-phe-viet-nam-hanh-trinh',
        excerpt: 'Việt Nam đang dần khẳng định vị thế của mình trên bản đồ cà phê thế giới với chất lượng ngày càng cao.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
        category: 'Ẩm thực',
        author: 'Lê Văn C',
        date: '2024-01-10',
        readTime: '6 phút'
    }
];

// Branches
export const branches = [
    {
        id: 1,
        name: 'Chi nhánh Quận 1',
        address: '123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP.HCM',
        phone: '028 1234 5678',
        hotline: '1900 1234',
        email: 'q1@doidep.vn',
        hours: '08:00 - 22:00',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197!2d106.70142!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQyJzA1LjEiRQ!5e0!3m2!1svi!2s!4v1234567890'
    },
    {
        id: 2,
        name: 'Chi nhánh Quận 7',
        address: '456 Nguyễn Thị Thập, Phường Tân Phú, Quận 7, TP.HCM',
        phone: '028 2345 6789',
        hotline: '1900 1234',
        email: 'q7@doidep.vn',
        hours: '08:00 - 22:00',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197!2d106.70142!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQyJzA1LjEiRQ!5e0!3m2!1svi!2s!4v1234567890'
    },
    {
        id: 3,
        name: 'Chi nhánh Hà Nội',
        address: '789 Nguyễn Trãi, Phường Thanh Xuân Trung, Quận Thanh Xuân, Hà Nội',
        phone: '024 3456 7890',
        hotline: '1900 1234',
        email: 'hn@doidep.vn',
        hours: '08:00 - 22:00',
        mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197!2d106.70142!3d10.7769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzM2LjgiTiAxMDbCsDQyJzA1LjEiRQ!5e0!3m2!1svi!2s!4v1234567890'
    }
];

// Menu structure for 2-level navigation
export const menuItems = [
    {
        id: 1,
        label: 'Trang chủ',
        path: '/',
        children: []
    },
    {
        id: 2,
        label: 'Sản phẩm',
        path: '/san-pham',
        children: [
            {
                id: 21,
                label: 'Công nghệ',
                children: [
                    { id: 211, label: 'Điện thoại', path: '/san-pham/dien-thoai' },
                    { id: 212, label: 'Laptop & Máy tính', path: '/san-pham/laptop-may-tinh' },
                    { id: 213, label: 'Tablet', path: '/san-pham/tablet' },
                    { id: 214, label: 'Phụ kiện', path: '/san-pham/phu-kien' }
                ]
            },
            {
                id: 22,
                label: 'Đồ uống',
                children: [
                    { id: 221, label: 'Cà phê', path: '/san-pham/ca-phe' },
                    { id: 222, label: 'Trà', path: '/san-pham/tra' },
                    { id: 223, label: 'Combo', path: '/san-pham/combo' }
                ]
            }
        ]
    },
    {
        id: 3,
        label: 'Khuyến mãi',
        path: '/khuyen-mai',
        children: []
    },
    {
        id: 4,
        label: 'Tin tức',
        path: '/tin-tuc',
        children: []
    },
    {
        id: 5,
        label: 'Giới thiệu',
        path: '/gioi-thieu',
        children: []
    },
    {
        id: 6,
        label: 'Liên hệ',
        path: '/lien-he',
        children: []
    }
];

// Why choose us
export const whyChooseUs = [
    {
        id: 1,
        icon: 'Shield',
        title: 'Bảo hành chính hãng',
        description: 'Tất cả sản phẩm đều được bảo hành chính hãng, đảm bảo quyền lợi khách hàng.'
    },
    {
        id: 2,
        icon: 'Truck',
        title: 'Giao hàng miễn phí',
        description: 'Miễn phí giao hàng toàn quốc cho đơn hàng từ 500.000đ.'
    },
    {
        id: 3,
        icon: 'RotateCcw',
        title: 'Đổi trả dễ dàng',
        description: 'Đổi trả trong vòng 30 ngày nếu sản phẩm có lỗi từ nhà sản xuất.'
    },
    {
        id: 4,
        icon: 'Headphones',
        title: 'Hỗ trợ 24/7',
        description: 'Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn mọi lúc.'
    }
];

// Hero slides
export const heroSlides = [
    {
        id: 1,
        title: 'iPhone 15 Pro Max',
        subtitle: 'Titan. Cực mạnh. Cực nhẹ.',
        description: 'Chip A17 Pro mang đến hiệu năng đột phá, camera 48MP chụp ảnh chuyên nghiệp.',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200&h=600&fit=crop',
        buttonText: 'Khám phá ngay',
        buttonLink: '/san-pham/iphone-15-pro-max-256gb',
        bgGradient: 'from-navy-600 to-navy-800'
    },
    {
        id: 2,
        title: 'MacBook Pro M3',
        subtitle: 'Sức mạnh vượt trội',
        description: 'Chip M3 Pro thế hệ mới, màn hình Liquid Retina XDR tuyệt đẹp.',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&h=600&fit=crop',
        buttonText: 'Xem chi tiết',
        buttonLink: '/san-pham/macbook-pro-14-m3-pro',
        bgGradient: 'from-navy-700 to-navy-900'
    },
    {
        id: 3,
        title: 'Cà Phê Việt Nam',
        subtitle: 'Hương vị đích thực',
        description: 'Thưởng thức cà phê rang xay nguyên chất từ vùng cao nguyên.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=600&fit=crop',
        buttonText: 'Mua ngay',
        buttonLink: '/san-pham/ca-phe',
        bgGradient: 'from-gold-600 to-gold-800'
    }
];

// Format price in VND
export const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
};

// Calculate discount percentage
export const calcDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
};
