import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PostHogProvider } from 'posthog-js/react'
import posthog from 'posthog-js'

const isProd = import.meta.env.MODE === 'production'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2025-05-24',
}

if (!isProd) {
  // Explicitly disable PostHog tracking in dev
  posthog.opt_out_capturing()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostHogProvider apiKey={isProd ? import.meta.env.VITE_PUBLIC_POSTHOG_KEY : undefined} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>,
);
