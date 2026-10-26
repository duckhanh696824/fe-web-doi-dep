// Auth routes - Login, Register, Forgot Password, etc.
// These routes don't use the main Layout

import DangNhapPage from '@/pages/user/dang-nhap/DangNhapPage';
// import DangKyPage from '@/pages/user/dang-ky/DangKyPage';
// import QuenMatKhauPage from '@/pages/user/quen-mat-khau/QuenMatKhauPage';

const authRoutes = [
    {
        path: 'dang-nhap',
        element: DangNhapPage
    },
    {
        path: 'tai-khoan',
        element: DangNhapPage // Will change to ProfilePage when user is logged in
    },
    // {
    //     path: 'dang-ky',
    //     element: DangKyPage
    // },
    // {
    //     path: 'quen-mat-khau',
    //     element: QuenMatKhauPage
    // }
];

export default authRoutes;
