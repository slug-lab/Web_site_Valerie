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

export const navItems = [
  { label: 'Accueil', href: '/' },
  { label: 'À propos', href: '/a-propos/' },
  { label: 'Notre accompagnement', href: '/notre-accompagnement/' },
  { label: 'Nos engagements', href: '/nos-engagements/' },
  { label: 'Formules & tarifs', href: '/formules-et-tarifs/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
];
