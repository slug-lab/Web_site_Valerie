// Articles du blog — textes repris tels quels de la référence du 22/11/2026
// (references/update_du_22_11/SITE INTERNET Maison Clovali.pdf, p. 10 à 17 ; seules les apostrophes sont typographiques).
// Pour ajouter un article : ajouter une entrée ici (la page /blog/<slug>/ est générée automatiquement).

// Contenu d'une section : paragraphe (avec éventuellement un début en gras, ex. « Notre conseil : »),
// sous-titre en gras ou liste à puces.
export type BlogBlock =
  | { type: 'p'; text: string; lead?: string }
  | { type: 'h'; text: string }
  | { type: 'list'; items: string[] };

export interface BlogSection {
  title: string;
  blocks: BlogBlock[];
}

export interface BlogPost {
  slug: string;
  title: string;
  // Titre de la carte sur /blog/ (la maquette ajoute « en Provence » au premier article).
  cardTitle: string;
  excerpt: string;
  standfirst: string;
  intro: string;
  image: { src: string; alt: string; width: number; height: number };
  description: string;
  sections: BlogSection[];
  // Encadré de conclusion « L'essentiel à retenir » (article sur les obligations).
  takeaway?: { title: string; subtitle: string; paragraphs: string[] };
}

const p = (text: string, lead?: string): BlogBlock => ({ type: 'p', text, lead });

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
      width: 1200,
      height: 550,
    },
    description:
      'Préparation de la maison, annonce, accueil des voyageurs, organisation et rentabilité : 5 conseils de Maison Clovali pour réussir votre location saisonnière en Provence.',
    sections: [
      {
        title: 'Préparez votre maison comme si vous y receviez vos proches',
        blocks: [
          p('Ménage soigné, linge frais, équipements vérifiés et espaces extérieurs préparés. Les détails font la différence dès l’arrivée des voyageurs : literie confortable, cuisine équipée et terrasse prête à accueillir les voyageurs.'),
          p('utilisez une liste de contrôle pour garantir une préparation irréprochable à chaque séjour.', 'Notre conseil :'),
        ],
      },
      {
        title: 'Valorisez votre propriété avec une annonce de qualité',
        blocks: [
          p('Votre annonce doit séduire les voyageurs tout en reflétant fidèlement votre propriété. Privilégiez des photos lumineuses et une description qui valorise ses atouts : décoration, jardin, vue ou proximité des villages provençaux.'),
          p('Soyez précis sur les équipements, la capacité d’accueil et les contraintes du logement afin de répondre aux attentes des voyageurs et d’éviter les mauvaises surprises.'),
        ],
      },
      {
        title: 'Soignez l’accueil et l’accompagnement des voyageurs',
        blocks: [
          p('L’expérience des voyageurs commence dès la réservation : réponses claires, informations pratiques et arrivée bien organisée sont essentielles.'),
          p('Sur place, un livret d’accueil présentant le fonctionnement de la maison et les bonnes adresses locales enrichit leur séjour. Enfin, un interlocuteur disponible permet de répondre aux questions et de gérer les imprévus.'),
        ],
      },
      {
        title: 'Organisez la gestion de votre location en amont',
        blocks: [
          p('La location saisonnière demande une organisation rigoureuse : réservations, accueil des voyageurs, ménage, remise des clés et suivi des réparations.'),
          p('Anticiper les interventions, s’appuyer sur des prestataires fiables et vérifier régulièrement l’état du logement permet de limiter les imprévus. Si vous résidez loin de votre propriété, une conciergerie locale peut prendre en charge tout ou partie de ces missions.'),
        ],
      },
      {
        title: 'Pensez à la maison autant qu’à la rentabilité',
        blocks: [
          p('Réussir sa location saisonnière, c’est aussi préserver son patrimoine. Des contrôles réguliers, un entretien adapté et un suivi des dépenses permettent de limiter l’usure, d’anticiper les réparations et d’évaluer la rentabilité réelle de votre activité.'),
          p('L’objectif : concilier satisfaction des voyageurs, maîtrise des coûts et préservation durable de votre maison.'),
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
      // Recadrage de la photo « terrasse » tel qu'il apparaît sur la maquette (original HD à demander).
      src: '/images/blog-conciergerie.webp',
      alt: 'Plateau avec clés posé au bord d’une piscine à débordement face aux collines provençales',
      width: 320,
      height: 153,
    },
    description:
      'Gain de temps, maison inoccupée, location saisonnière, entretien du patrimoine : les avantages d’une conciergerie privée pour les propriétaires en Provence.',
    sections: [
      {
        title: 'Gagner du temps sans perdre le contrôle',
        blocks: [
          p('Confier la gestion quotidienne de votre propriété à une conciergerie permet de centraliser les interventions, de coordonner les prestataires et d’assurer le suivi des réparations. Vous gardez le contrôle des décisions importantes tout en vous libérant des contraintes du quotidien.'),
        ],
      },
      {
        title: 'Préserver sa tranquillité lorsque la maison est inoccupée',
        blocks: [
          p('La gestion d’une propriété demande du temps entre le suivi des interventions, la surveillance et l’entretien courant. Une conciergerie centralise ces missions et assure leur suivi selon les modalités convenues. Vous conservez la maîtrise des décisions importantes tout en vous libérant des contraintes du quotidien.'),
        ],
      },
      {
        title: 'Mieux encadrer la location saisonnière',
        blocks: [
          p('La location saisonnière exige une organisation rigoureuse : réservations, accueil des voyageurs, ménage, linge et suivi des incidents. Une conciergerie peut prendre en charge tout ou partie de ces missions, pour faciliter la gestion du logement et offrir une expérience de qualité aux voyageurs. Sa présence locale permet également de réagir plus rapidement en cas d’imprévu.'),
        ],
      },
      {
        title: 'Entretenir et valoriser son patrimoine',
        blocks: [
          p('Un entretien régulier permet de préserver votre maison et de repérer rapidement les interventions nécessaires. Même lorsqu’elle est inoccupée, votre propriété nécessite une surveillance adaptée pour anticiper les problèmes et limiter les dégradations.'),
        ],
      },
      {
        title: 'Bénéficier d’un service adapté à sa situation',
        blocks: [
          p('Chaque propriétaire a des besoins différents : gestion locative, surveillance d’une résidence secondaire ou suivi ponctuel de la maison. Une conciergerie privée propose des prestations adaptées, de la coordination des interventions à l’accompagnement des voyageurs. Définir clairement les missions, leur fréquence et les tarifs permet de garantir un service transparent et une relation de confiance.'),
        ],
      },
    ],
  },
  {
    // Contenu juridique et fiscal fourni par la cliente : non certifié par la charte (§ 11), à ne pas réécrire sans sa validation.
    slug: 'obligations-location-saisonniere',
    title: 'Location saisonnière : les obligations essentielles des propriétaires',
    cardTitle: 'Location saisonnière : les obligations essentielles des propriétaires',
    excerpt:
      'De la déclaration de votre logement à vos obligations fiscales, découvrez les points essentiels à connaître pour louer en toute sérénité.',
    standfirst:
      'Déclaration du logement, respect des règles locales, contrat de location et fiscalité : la location saisonnière impose plusieurs obligations aux propriétaires. Voici les principales règles à connaître pour louer sa maison en toute conformité.',
    intro:
      'La location saisonnière, ou meublé de tourisme, permet aux propriétaires de valoriser leur logement. La loi Le Meur du 19 novembre 2024, visant à renforcer la régulation des meublés de tourisme, a fait évoluer les obligations des propriétaires. En 2026, plusieurs règles doivent être respectées selon la nature du logement et sa localisation.',
    image: {
      src: '/images/blog-obligations.webp',
      alt: 'Classeurs « Réglementation », « Fiscalité » et « Location saisonnière », bail et calculatrice sur un bureau face à la mer',
      width: 1200,
      height: 550,
    },
    description:
      'Déclaration en mairie, résidence principale ou secondaire, copropriété, DPE, contrat, assurance et fiscalité : les obligations essentielles des propriétaires en location saisonnière.',
    sections: [
      {
        title: 'Déclarer son logement en mairie et obtenir un numéro d’enregistrement',
        blocks: [
          p('La déclaration du meublé de tourisme auprès de la mairie est obligatoire depuis le 20 mai 2026, qu’il s’agisse d’une résidence principale ou secondaire. Elle permet d’obtenir un numéro d’enregistrement à faire figurer sur les annonces.'),
          p('le déploiement du téléservice national étant en transition, les modalités peuvent varier selon les communes. Il est donc indispensable de contacter sa mairie. Par ailleurs, ce numéro ne vaut pas autorisation de louer : d’autres démarches, notamment une autorisation de changement d’usage, peuvent être exigées.', 'Point de vigilance :'),
        ],
      },
      {
        title: 'Vérifier les règles applicables à la résidence principale et secondaire',
        blocks: [
          p('Les obligations varient selon la nature du logement.'),
          { type: 'h', text: 'La résidence principale :' },
          p('Occupée au moins 8 mois par an, elle peut être louée dans la limite de 120 jours par an, plafond que les communes peuvent abaisser à 90 jours depuis la loi Le Meur du 19 novembre 2024. Des exceptions existent pour certains motifs professionnels, de santé ou de force majeure.'),
          p('Point de vigilance : vérifier auprès de la mairie le plafond applicable dans la commune.'),
          { type: 'h', text: 'La résidence secondaire :' },
          p('Elle n’est pas soumise au plafond national de 120 jours. Toutefois, certaines communes imposent une autorisation préalable de changement d’usage, parfois assortie d’une obligation de compensation.'),
          p('Point de vigilance : les règles varient selon les communes. Il est indispensable de vérifier les démarches locales avant toute mise en location.'),
        ],
      },
      {
        title: 'Vérifier le règlement de copropriété',
        blocks: [
          p('Avant toute mise en location, le propriétaire doit consulter le règlement de copropriété.'),
          p('La loi Le Meur du 19 novembre 2024 renforce l’encadrement des meublés de tourisme :'),
          {
            type: 'list',
            items: [
              'Depuis le 21 novembre 2024, les nouveaux règlements doivent préciser si leur location est autorisée ou interdite.',
              'Le copropriétaire doit informer le syndic de sa déclaration en mairie.',
            ],
          },
          p('Point de vigilance : les anciens règlements peuvent contenir des clauses, notamment d’habitation exclusivement bourgeoise, interdisant la location touristique. Il est donc essentiel de vérifier les dispositions applicables avant de publier une annonce.'),
        ],
      },
      {
        title: 'Respecter les obligations relatives aux équipements et au logement',
        blocks: [
          p('Pour être qualifié de meublé de tourisme, le logement doit disposer des équipements indispensables à un séjour normal : literie, volets ou rideaux, cuisine équipée, réfrigérateur, vaisselle, mobilier, luminaires et matériel d’entretien.'),
          p('Le propriétaire doit également veiller au bon état du logement, au fonctionnement des équipements et à la sécurité des installations afin d’accueillir les voyageurs dans de bonnes conditions.'),
        ],
      },
      {
        title: 'Prendre en compte les obligations liées au diagnostic de performance énergétique (DPE)',
        blocks: [
          p('La loi Le Meur du 19 novembre 2024 renforce les exigences énergétiques des meublés de tourisme.'),
          {
            type: 'list',
            items: [
              'Résidence principale : pas de nouvelle obligation générale de DPE liée à la location saisonnière.',
              'Résidence secondaire : depuis le 21 novembre 2024, un DPE classé A à E est requis lorsqu’une autorisation de changement d’usage est nécessaire. À partir de 2034, les meublés de tourisme concernés devront atteindre les classes A à D.',
            ],
          },
          p('Les propriétaires doivent anticiper les éventuels travaux de rénovation énergétique pour respecter ces échéances.'),
        ],
      },
      {
        title: 'Établir un contrat de location et fournir les informations nécessaires',
        blocks: [
          p('Toute location saisonnière doit faire l’objet d’un contrat écrit précisant notamment l’identité des parties, la description du logement, les dates du séjour, le prix, les modalités de paiement, les conditions d’annulation et le dépôt de garantie éventuel.'),
          p('Le numéro d’enregistrement, le classement du logement et la taxe de séjour doivent également être mentionnés lorsqu’ils s’appliquent.'),
          p('Le propriétaire doit conserver un exemplaire signé du contrat et fournir un état descriptif du logement au locataire qui en fait la demande.'),
        ],
      },
      {
        title: 'Vérifier son assurance',
        blocks: [
          p('L’assurance spécifique à la location saisonnière n’est pas systématiquement obligatoire, mais reste fortement recommandée.'),
          p('Vérifier que le contrat d’assurance habitation couvre bien cette activité et prévoit des garanties adaptées (dégâts des eaux, incendie, dégradations et responsabilité civile). Une extension de garantie ou une assurance spécifique peut être nécessaire. Il est également conseillé de préciser les responsabilités de chacun dans le contrat de location.'),
        ],
      },
      {
        title: 'Respecter les obligations fiscales',
        blocks: [
          p('Les revenus de location saisonnière sont imposés dans la catégorie des BIC (bénéfices industriels et commerciaux). Le propriétaire doit déclarer son activité sur le guichet unique des entreprises afin d’obtenir un numéro SIRET.'),
          p('Il peut relever du régime micro-BIC ou du régime réel, selon sa situation. Les seuils et abattements varient notamment selon le classement du meublé. Les règles ayant évolué pour les revenus déclarés en 2026, il convient de vérifier le régime applicable.'),
          p('La location peut également être soumise à la CFE (cotisation foncière des entreprises) et à la taxe de séjour, selon les conditions locales et les éventuelles exonérations.'),
          p('Vérifier ses obligations auprès du service des impôts des entreprises et de sa commune. Les règles fiscales ne sont pas identiques selon que le meublé est classé ou non classé.'),
        ],
      },
    ],
    takeaway: {
      title: 'L’essentiel à retenir',
      subtitle: 'Location saisonnière',
      paragraphs: [
        'La location saisonnière ne consiste pas simplement à publier une annonce et à accueillir des voyageurs.',
        'Elle implique de respecter un ensemble de règles administratives, fiscales et réglementaires qui évoluent régulièrement.',
        'Les propriétaires doivent notamment porter une attention particulière aux formalités en mairie, aux règles locales de changement d’usage, à la copropriété, aux obligations fiscales et aux nouvelles exigences énergétiques.',
        'Une bonne préparation permet de sécuriser son activité, de préserver son patrimoine et d’accueillir les voyageurs dans de bonnes conditions.',
        'Avant toute mise en location, prenez le temps de vérifier les obligations applicables à votre logement auprès de votre mairie et des administrations compétentes.',
      ],
    },
  },
];
