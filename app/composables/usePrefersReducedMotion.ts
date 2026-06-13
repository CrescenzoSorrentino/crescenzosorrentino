// Rileva la preferenza di sistema "riduci movimento".
// Valutato in modo sincrono e solo lato client: durante l'SSR ritorna false
// (il server non conosce la preferenza), poi all'idratazione il valore è già
// corretto prima che la direttiva v-motion parta, evitando l'animazione.
// Usato per azzerare le variant di v-motion, che essendo JS non vengono
// fermate dalla media query CSS in assets/css/main.css.
//
// NB: nome volutamente diverso da useReducedMotion, che @vueuse/motion
// auto-importa già (ritorna un Ref, sempre truthy: causerebbe collisione).
export function usePrefersReducedMotion(): boolean {
  return import.meta.client
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches
}
