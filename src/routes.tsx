import { NotFound } from '@/pages/404'
import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Dashboard } from '@/pages/app/dashboard'
import { Products } from '@/pages/app/products'
import { ProductCreate } from '@/pages/app/products/create'
import { ProductsEdit } from '@/pages/app/products/edit'
import { Login } from '@/pages/auth/login'
import { Register } from '@/pages/auth/register'
import { createBrowserRouter } from 'react-router-dom'
import { PrivateRoute } from '@/PrivateRoute'

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/products',
        element: (
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        ),
      },
      {
        path: '/products/edit/:productId',
        element: (
          <PrivateRoute>
            <ProductsEdit />
          </PrivateRoute>
        ),
      },
      {
        path: '/products/create',
        element: (
          <PrivateRoute>
            <ProductCreate />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
