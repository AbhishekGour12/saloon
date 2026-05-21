'use client';

import { Provider, useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { store } from './store/store';
import { useEffect } from 'react';
import { authAPI } from './lib/auth';
import { loginSuccess } from './store/features/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

// ✅ Safe and silent user auth initialization
function AuthInitializer() {
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const token = localStorage.getItem('token');
    if (!token) return;

    const fetchUser = async () => {
      try {
        const res = await authAPI.getProfile(token, { signal });

        if (res?.user) {
          console.log('✅ Logged-in user loaded:', res.user);
          dispatch(loginSuccess(res.user));
        } else {
          // If backend didn't send valid user, clear token
          localStorage.removeItem('token');
          console.warn('⚠️ Invalid user response, token cleared');
          router.push('/Login')
        }
      } catch (err) {
        // Detect if token expired or unauthorized
        const status = err?.response?.status;
        const backendMsg = err?.response?.data?.message;
        const msg = backendMsg || err?.message || 'Unknown error';

        // 🔹 Handle expired/invalid token
        if (status === 401 || msg.toLowerCase().includes('expired')) {
          localStorage.removeItem('token');
          console.warn('🔒 Token expired — logging out user');
          toast.error('Session expired. Please log in again.');
        } else {
          console.error('❌ Error fetching user profile:', msg);
        }
      }
    };

    fetchUser();

    return () => controller.abort();
  }, [dispatch]);

  return null;
}

export function Providers({ children }) {
  return (
    <Provider store={store}>
      <AuthInitializer />
      {children}
      <Toaster position="top-right" />
    </Provider>
  );
}
