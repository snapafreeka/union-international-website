import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Analytics Component
 * Handles Google Analytics 4, Google Tag Manager, and Microsoft Clarity
 *
 * SETUP INSTRUCTIONS:
 * 1. Replace the IDs below with your actual tracking IDs
 * 2. This component is already added to App.tsx
 * 3. It will automatically track page views and route changes
 */

// ==================== YOUR TRACKING IDS ====================
// ✅ Google Analytics 4 - ACTIVE
const GA4_MEASUREMENT_ID = 'G-VKHNWHZPXN'; // ✅ Added!

// ⏳ Add these when you create the accounts:
const GTM_CONTAINER_ID = 'GTM-XXXXXXX';    // Get from https://tagmanager.google.com
const CLARITY_PROJECT_ID = 'XXXXXXXXXX';   // Get from https://clarity.microsoft.com

// Set to false to disable analytics (useful for development)
// ⚠️ DISABLED - Using custom code form method instead
const ANALYTICS_ENABLED = false;

// ===========================================================

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!ANALYTICS_ENABLED) {
      console.log('📊 Analytics disabled (development mode)');
      return;
    }

    // ========== Google Tag Manager ==========
    if (GTM_CONTAINER_ID && GTM_CONTAINER_ID !== 'GTM-XXXXXXX') {
      // GTM Head Script
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');
      `;
      document.head.appendChild(gtmScript);

      // GTM Body Script (noscript fallback)
      const gtmNoscript = document.createElement('noscript');
      const gtmIframe = document.createElement('iframe');
      gtmIframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`;
      gtmIframe.height = '0';
      gtmIframe.width = '0';
      gtmIframe.style.display = 'none';
      gtmIframe.style.visibility = 'hidden';
      gtmNoscript.appendChild(gtmIframe);
      document.body.insertBefore(gtmNoscript, document.body.firstChild);

      console.log('✅ Google Tag Manager loaded');
    }

    // ========== Google Analytics 4 (Direct) ==========
    if (GA4_MEASUREMENT_ID && GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
      document.head.appendChild(gaScript);

      const gaConfigScript = document.createElement('script');
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_MEASUREMENT_ID}', {
          send_page_view: true
        });
      `;
      document.head.appendChild(gaConfigScript);

      console.log('✅ Google Analytics 4 loaded');
    }

    // ========== Microsoft Clarity ==========
    if (CLARITY_PROJECT_ID && CLARITY_PROJECT_ID !== 'XXXXXXXXXX') {
      const clarityScript = document.createElement('script');
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
      `;
      document.head.appendChild(clarityScript);

      console.log('✅ Microsoft Clarity loaded');
    }

    // Warn if no tracking IDs are set (disabled - set up when ready)
    // if (
    //   (!GA4_MEASUREMENT_ID || GA4_MEASUREMENT_ID === 'G-XXXXXXXXXX') &&
    //   (!GTM_CONTAINER_ID || GTM_CONTAINER_ID === 'GTM-XXXXXXX') &&
    //   (!CLARITY_PROJECT_ID || CLARITY_PROJECT_ID === 'XXXXXXXXXX')
    // ) {
    //   console.warn('⚠️ Analytics component loaded but no tracking IDs configured. Please update Analytics.tsx with your tracking IDs.');
    // }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (!ANALYTICS_ENABLED) return;

    // Send page view to GA4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    // Send page view to GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'pageview',
        page: {
          path: location.pathname + location.search,
          title: document.title,
          url: window.location.href,
        },
      });
    }

    console.log('📄 Page view tracked:', location.pathname);
  }, [location]);

  // This component doesn't render anything
  return null;
}

// ========== HELPER FUNCTIONS FOR EVENT TRACKING ==========

/**
 * Track custom events
 * Usage: trackEvent('button_click', { button_name: 'Contact Us' })
 */
export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
  if (!ANALYTICS_ENABLED) {
    console.log('📊 Event (disabled):', eventName, eventParams);
    return;
  }

  // Send to GA4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }

  // Send to GTM
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  }

  console.log('📊 Event tracked:', eventName, eventParams);
}

/**
 * Track button clicks
 * Usage: trackButtonClick('Contact Us', '/contact')
 */
export function trackButtonClick(buttonName: string, destination?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    destination: destination || 'none',
  });
}

/**
 * Track form submissions
 * Usage: trackFormSubmit('Contact Form')
 */
export function trackFormSubmit(formName: string) {
  trackEvent('form_submit', {
    form_name: formName,
  });
}

/**
 * Track phone/WhatsApp clicks
 * Usage: trackPhoneClick('0769021111', 'whatsapp')
 */
export function trackPhoneClick(phoneNumber: string, type: 'call' | 'whatsapp' = 'call') {
  trackEvent('contact_click', {
    contact_type: type,
    phone_number: phoneNumber,
  });
}

/**
 * Track email clicks
 * Usage: trackEmailClick('info@unioninternational.co.ke')
 */
export function trackEmailClick(email: string) {
  trackEvent('contact_click', {
    contact_type: 'email',
    email: email,
  });
}
