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

    // CookieYes must load first so it can update consent before GA fires
    const cookieYes = document.createElement('script')
    cookieYes.id = 'cookieyes'
    cookieYes.src =
      'https://cdn-cookieyes.com/client_data/2d9d064aaa0864d4576af5f4c8d2a4e2/script.js'
    document.head.appendChild(cookieYes)

    // GA — config is queued in dataLayer and processed once the script loads
    const gaScript = document.createElement('script')
    gaScript.async = true
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9RSLWYMT3F'
    gaScript.onload = () => {
      window.gtag('js', new Date())
      window.gtag('config', 'G-9RSLWYMT3F')
    }
    document.head.appendChild(gaScript)
  })
})
