// Voci di navigazione principali, condivise tra Navbar e Footer.
// Fonte unica: aggiungere o rinominare una voce qui la aggiorna in entrambi.
export interface NavLink {
  to:    string
  label: string
  icon:  string
}

export const navLinks: NavLink[] = [
  { to: "/projects", label: "Projects", icon: "lucide:folder-open" },
  { to: "/blog",     label: "Blog",     icon: "lucide:book-open" },
  { to: "/contact",  label: "Contact",  icon: "lucide:mail" },
]
