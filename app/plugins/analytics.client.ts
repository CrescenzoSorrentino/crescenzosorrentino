declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default defineNuxtPlugin(() => {
  onNuxtReady(() => {
    window.dataLayer = window.dataLayer || []
    window.gtag = (...args: unknown[]) => window.dataLayer.push(args)
    window.gtag('js', new Date())
    window.gtag('config', 'G-9RSLWYMT3F')

    // CookieYes — consent manager, must be injected before GA fires
    const cookieYes = document.createElement('script')
    cookieYes.id = 'cookieyes'
    cookieYes.src =
      'https://cdn-cookieyes.com/client_data/2d9d064aaa0864d4576af5f4c8d2a4e2/script.js'
    document.head.appendChild(cookieYes)

    // GA — async so it never blocks the thread
    const gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9RSLWYMT3F'
    document.head.appendChild(gaScript)
  })
})
