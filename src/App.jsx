import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Import route configurations
import { publicRoutes, privateRoutes, authRoutes, adminRoutes } from '@/routes';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes - With Main Layout */}
        <Route path="/" element={<Layout />}>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.index ? undefined : route.path}
              index={route.index}
              element={<route.element />}
            />
          ))}

          {/* Private Routes - Requires Authentication */}
          {/* TODO: Wrap with PrivateRoute component when auth is implemented */}
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Route>

        {/* Auth Routes - No Layout (Login, Register, etc.) */}
        {authRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}

        {/* Admin Routes - With Admin Layout */}
        {/* TODO: Wrap with AdminLayout and AdminRoute when implemented */}
        {adminRoutes.length > 0 && (
          <Route path="/admin">
            {adminRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.index ? undefined : route.path}
                index={route.index}
                element={<route.element />}
              />
            ))}
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;
