export const site = {
  name: 'Maison Clovali',
  tagline: 'Conciergerie privée',
  description:
    'Maison CLOVALI : conciergerie spécialisée dans l’accompagnement des locations saisonnières et l’intendance de résidences secondaires, entre Aix-en-Provence et le Luberon.',
  phone: '07 85 74 25 96',
  phoneHref: '+33785742596',
  email: 'contact@maisonclovali.fr',
  town: 'Meyrargues',
  // Clé d'accès Web3Forms (formulaire de contact). Publique par conception : elle ne permet que d'envoyer
  // des messages vers l'adresse associée. À obtenir sur https://web3forms.com avec contact@maisonclovali.fr.
  web3formsKey: 'A_REMPLACER_PAR_LA_CLE_WEB3FORMS',
};

// Menu de la référence du 22/11/2026 (6 entrées). « Formules » devient « Prestations » : la cliente ne propose
// plus de formules mais des prestations à la carte (retour du 22/11). Notre territoire : lien depuis À propos et le pied de page.
export const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos/' },
  { label: 'Notre accompagnement', href: '/notre-accompagnement/' },
  { label: 'Prestations & tarifs', href: '/prestations-et-tarifs/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
