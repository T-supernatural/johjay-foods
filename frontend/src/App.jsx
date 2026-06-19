import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminRoute from './components/AdminRoute.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import AdminOverview from './pages/admin/AdminOverview.jsx'
import AdminLeads from './pages/admin/AdminLeads.jsx'
import AdminMessages from './pages/admin/AdminMessages.jsx'
import { publicRoutes } from './routes/routeConfig.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>

      <Route
        path="/admin"
        element={(
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        )}
      >
        <Route index element={<AdminOverview />} />
        <Route path="leads" element={<AdminLeads />} />
        <Route path="messages" element={<AdminMessages />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
