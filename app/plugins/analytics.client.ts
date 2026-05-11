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
