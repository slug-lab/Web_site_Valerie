// Articles du blog — textes transcrits des maquettes fournies le 24/10
// (references/update_du_24_10/Page _ARTICLE BLOG-2.png et Page_ARTICLE BLOG_1.png).
// Pour ajouter un article : ajouter une entrée ici (la page /blog/<slug>/ est générée automatiquement).

export interface BlogSection {
  title: string;
  // Chaque entrée est un paragraphe ; « tip » = paragraphe « Notre conseil : … » mis en gras en tête.
  paragraphs: string[];
  tip?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  // Titre court de la carte sur /blog/ (la maquette ajoute « en Provence » au premier article).
  cardTitle: string;
  excerpt: string;
  standfirst: string;
  intro: string;
  image: { src: string; alt: string; width: number; height: number };
  description: string;
  sections: BlogSection[];
  // Nombre de sections dans la colonne de gauche (desktop), le reste à droite au-dessus de l'encart contact.
  leftColumn: number;
}

export const posts: BlogPost[] = [
  {
    slug: 'reussir-sa-location-saisonniere',
    title: '5 conseils pour réussir sa location saisonnière',
    cardTitle: '5 conseils pour réussir sa location saisonnière en Provence',
    excerpt: 'De la préparation du bien à l’accueil des voyageurs, découvrez nos conseils pour une saison réussie.',
    standfirst: 'De la préparation du bien à l’accueil des voyageurs, découvrez nos conseils pour une saison réussie.',
    intro:
      'Une location saisonnière réussie ne repose pas uniquement sur le charme du lieu. La qualité de la préparation, l’attention portée aux détails et le suivi de la propriété jouent un rôle essentiel dans l’expérience des voyageurs. Voici cinq conseils pour valoriser votre bien et aborder chaque saison avec davantage de sérénité.',
    image: {
      src: '/images/blog-location-saisonniere.webp',
      alt: 'Linge de toilette plié et vase garni d’olivier dans une chambre d’hôtes',
      width: 334,
      height: 153,
    },
    description:
      'Préparation de la maison, annonce, accueil des voyageurs, organisation et rentabilité : 5 conseils de Maison Clovali pour réussir votre location saisonnière en Provence.',
    leftColumn: 3,
    sections: [
      {
        title: 'Préparez votre maison comme si vous y receviez vos proches',
        paragraphs: [
          'Ménage soigné, linge frais, équipements vérifiés et espaces extérieurs préparés. Les détails font la différence dès l’arrivée des voyageurs : literie confortable, cuisine équipée et terrasse prête à accueillir les voyageurs.',
        ],
        tip: 'utilisez une liste de contrôle pour garantir une préparation irréprochable à chaque séjour.',
      },
      {
        title: 'Valorisez votre propriété avec une annonce de qualité',
        paragraphs: [
          'Votre annonce doit séduire les voyageurs tout en reflétant fidèlement votre propriété. Privilégiez des photos lumineuses et une description qui valorise ses atouts : décoration, jardin, vue ou proximité des villages provençaux.',
          'Soyez précis sur les équipements, la capacité d’accueil et les contraintes du logement afin de répondre aux attentes des voyageurs et d’éviter les mauvaises surprises.',
        ],
      },
      {
        title: 'Soignez l’accueil et l’accompagnement des voyageurs',
        paragraphs: [
          'L’expérience des voyageurs commence dès la réservation : réponses claires, informations pratiques et arrivée bien organisée sont essentielles.',
          'Sur place, un livret d’accueil présentant le fonctionnement de la maison et les bonnes adresses locales enrichit leur séjour. Enfin, un interlocuteur disponible permet de répondre aux questions et de gérer les imprévus.',
        ],
      },
      {
        title: 'Organisez la gestion de votre location en amont',
        paragraphs: [
          'La location saisonnière demande une organisation rigoureuse : réservations, accueil des voyageurs, ménage, remise des clés et suivi des réparations.',
          'Anticiper les interventions, s’appuyer sur des prestataires fiables et vérifier régulièrement l’état du logement permet de limiter les imprévus. Si vous résidez loin de votre propriété, une conciergerie locale peut prendre en charge tout ou partie de ces missions.',
        ],
      },
      {
        title: 'Pensez à la maison autant qu’à la rentabilité',
        paragraphs: [
          'Réussir sa location saisonnière, c’est aussi préserver son patrimoine. Des contrôles réguliers, un entretien adapté et un suivi des dépenses permettent de limiter l’usure, d’anticiper les réparations et d’évaluer la rentabilité réelle de votre activité.',
          'L’objectif : concilier satisfaction des voyageurs, maîtrise des coûts et préservation durable de votre maison.',
        ],
      },
    ],
  },
  {
    slug: 'avantages-conciergerie-proprietaires',
    title: 'Faire appel à une conciergerie : quels avantages pour les propriétaires ?',
    cardTitle: 'Faire appel à une conciergerie : quels avantages pour les propriétaires ?',
    excerpt: 'Gain de temps, tranquillité d’esprit et valorisation de votre bien : tour d’horizon des bénéfices.',
    standfirst:
      'Location saisonnière, résidence secondaire ou maison inoccupée : découvrez comment une conciergerie privée peut vous aider à préserver votre propriété et gagner en sérénité.',
    intro:
      'Entretenir et surveiller une maison en Provence demande du temps et une présence locale, surtout lorsque l’on réside à distance. Une conciergerie privée permet de déléguer ces tâches à un interlocuteur de confiance, que votre maison soit louée ou non.',
    image: {
      src: '/images/blog-conciergerie.webp',
      alt: 'Plateau avec clés et téléphone posé au bord d’une piscine à débordement face aux collines provençales',
      width: 320,
      height: 153,
    },
    description:
      'Gain de temps, maison inoccupée, location saisonnière, entretien du patrimoine : les avantages d’une conciergerie privée pour les propriétaires en Provence.',
    leftColumn: 4,
    sections: [
      {
        title: 'Gagner du temps sans perdre le contrôle',
        paragraphs: [
          'Confier la gestion quotidienne de votre propriété à une conciergerie permet de centraliser les interventions, de coordonner les prestataires et d’assurer le suivi des réparations. Vous gardez le contrôle des décisions importantes tout en vous libérant des contraintes du quotidien.',
        ],
      },
      {
        title: 'Préserver sa tranquillité lorsque la maison est inoccupée',
        paragraphs: [
          'La gestion d’une propriété demande du temps pour coordonner les prestataires, suivre les réparations et organiser les interventions. Une conciergerie centralise ces missions et assure leur suivi selon les modalités convenues. Vous conservez la maîtrise des décisions importantes tout en vous libérant des contraintes du quotidien.',
        ],
      },
      {
        title: 'Mieux encadrer la location saisonnière',
        paragraphs: [
          'La location saisonnière exige une organisation rigoureuse : réservations, accueil des voyageurs, ménage, linge et suivi des incidents. Une conciergerie peut prendre en charge tout ou partie de ces missions, pour faciliter la gestion du logement et offrir une expérience de qualité aux voyageurs. Sa présence locale permet également de réagir plus rapidement en cas d’imprévu.',
        ],
      },
      {
        title: 'Entretenir et valoriser son patrimoine',
        paragraphs: [
          'Un entretien régulier permet de préserver votre maison et de repérer rapidement les interventions nécessaires. Même lorsqu’elle est inoccupée, votre propriété nécessite une surveillance adaptée pour anticiper les problèmes et limiter les dégradations.',
        ],
      },
      // La maquette répète cette section en n° 6 avec un texte identique : doublon non repris (validé MOA le 24/10).
      {
        title: 'Bénéficier d’un service adapté à sa situation',
        paragraphs: [
          'Chaque propriétaire a des besoins différents : gestion locative, surveillance d’une résidence secondaire ou suivi ponctuel de la maison. Une conciergerie privée propose des prestations adaptées, de la coordination des interventions à l’accompagnement des voyageurs. Définir clairement les missions, leur fréquence et les tarifs permet de garantir un service transparent et une relation de confiance.',
        ],
      },
    ],
  },
];
