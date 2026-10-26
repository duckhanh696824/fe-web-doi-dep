// Public routes - accessible without authentication
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import NewsPage from '@/pages/NewsPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import CartPage from '@/pages/CartPage';

const publicRoutes = [
    {
        path: '/',
        element: HomePage,
        index: true
    },
    {
        path: 'san-pham',
        element: ProductsPage
    },
    {
        path: 'san-pham/:category',
        element: ProductsPage
    },
    {
        path: 'tin-tuc',
        element: NewsPage
    },
    {
        path: 'gioi-thieu',
        element: AboutPage
    },
    {
        path: 'lien-he',
        element: ContactPage
    },
    {
        path: 'gio-hang',
        element: CartPage
    },
    {
        path: 'khuyen-mai',
        element: ProductsPage
    }
];

export default publicRoutes;
