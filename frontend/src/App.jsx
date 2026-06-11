import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { publicRoutes } from './routes/routeConfig.jsx'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route
          path="dashboard/*"
          element={(
            <ProtectedRoute>
              <Navigate to="/" replace />
            </ProtectedRoute>
          )}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
