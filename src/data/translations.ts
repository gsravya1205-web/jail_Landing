export type Language = 'te' | 'en';

export interface Translation {
  nav: {
    brandName: string;
    tagline: string;
    freeCampBadge: string;
    phone: string;
    bookAppointment: string;
    emergencyCall: string;
    topBannerText: string;
    limitedSlots: string;
    bookNow: string;
    topBannerBadge: string;
    topBannerTitle: string;
    topBannerSubtitle: string;
    topBannerButton: string;
    campFormTitle: string;
    campFormSubtitle: string;
    campLocation: string;
  };
  hero: {
    badge: string;
    brandTag?: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    tagline?: string;
    subtext: string;
    locationBadge: string;
    offerBadge: string;
    offerText: string;
    offerOriginalPrice?: string;
    offerSaveTag?: string;
    offerNote: string;
    srikakulamOffer: string;
    keyPoints: string[];
    formTitle: string;
    formSubtitle: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    ageLabel: string;
    agePlaceholder: string;
    mobileLabel: string;
    mobilePlaceholder: string;
    dateLabel: string;
    slotLabel: string;
    slotOptions: string[];
    submitButton: string;
    submitting: string;
    privacyNote: string;
  };
  stats: {
    cases: string;
    casesLabel: string;
    startingPrice: string;
    startingPriceLabel: string;
    successRate: string;
    successRateLabel: string;
  };
  inclusions: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
    pricingTitle: string;
    pricingSubtitle: string;
    packages: {
      name: string;
      price: string;
      subnote: string;
      highlights: string[];
      featured: boolean;
    }[];
    disclaimer: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    rating: string;
    reviewCount: string;
    googleSearchUrl: string;
    viewAllButton: string;
    verifiedBadge: string;
    list: {
      name: string;
      rating: number;
      date: string;
      comment: string;
      initials: string;
    }[];
  };
  doctors: {
    badge: string;
    title: string;
    subtitle: string;
    list: {
      id: string;
      name: string;
      title: string;
      qualifications: string;
      expBadge: string;
      photo: string;
      bio: string;
      achievementBadge: string;
    }[];
  };
  whyChoose: {
    title: string;
    items: {
      number: string;
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    button: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    addressTitle: string;
    addressValue: string;
    phoneTitle: string;
    phoneValue: string;
    hoursTitle: string;
    hoursValue: string;
    copyright: string;
  };
  modal: {
    title: string;
    subtitle: string;
    tokenLabel: string;
    nameLabel: string;
    phoneLabel: string;
    slotLabel: string;
    dateLabel: string;
    whatsappButton: string;
    closeButton: string;
    note: string;
  };
}

export const translations: Record<Language, Translation> = {
  te: {
    nav: {
      brandName: "వైజాగ్ IVF సెంటర్",
      tagline: "MIRACLES MADE HERE",
      freeCampBadge: "ఉచిత మెడికల్ క్యాంప్",
      phone: "+91 95025 34222",
      bookAppointment: "అపాయింట్మెంట్ బుక్ చేయండి",
      emergencyCall: "నేరుగా కాల్ చేయండి",
      topBannerText: "ప్రతి నెల ప్రతి శనివారం నిర్వహించబడే ఉచిత మెడికల్ క్యాంప్",
      limitedSlots: "పరిమిత స్లాట్‌లు మాత్రమే",
      bookNow: "ఇప్పుడే బుక్ చేయండి",
      topBannerBadge: "ఉచిత సంప్రదింపులు • పరిమిత స్లాట్‌లు",
      topBannerTitle: "ప్రతి నెల ప్రతి శనివారం నిర్వహించబడే ఉచిత మెడికల్ క్యాంప్",
      topBannerSubtitle: "ఈ రోజే మీ ఉచిత స్లాట్‌ను బుక్ చేసుకోండి మరియు వైజాగ్ టాప్ ఫెర్టిలిటీ నిపుణులను సంప్రదించండి.",
      topBannerButton: "మీ ఉచిత స్లాట్‌ను బుక్ చేసుకోండి",
      campFormTitle: "ఉచిత మెడికల్ క్యాంప్ రిజిస్ట్రేషన్",
      campFormSubtitle: "ఉచిత నిపుణుల సంప్రదింపుల కోసం మీ ఉచిత స్లాట్‌ను ఇప్పుడే బుక్ చేసుకోండి",
      campLocation: "వైజాగ్ IVF సెంటర్, #29-2-4, 1వ అంతస్తు, వద్దిరాజు నిలయం, జైల్ రోడ్, వెటర్నరీ హాస్పిటల్ ఎదురుగా, విశాఖపట్నం – 530020"
    },
    hero: {
      badge: "",
      brandTag: "VIZAG IVF",
      headlinePart1: "8,000+ కుటుంబాలు మాతో ఎదిగాయి.",
      headlineHighlight: "మీ కుటుంబం కూడా!",
      headlinePart2: "",
      tagline: "అత్యుత్తమ ఫెర్టిలిటీ సంరక్షణ. తల్లిదండ్రులు కావాలనే మీ ప్రయాణం ఇక్కడే మొదలవుతుంది.",
      subtext: "రుజువైన విజయవంతమైన రేట్లు, అగ్రశ్రేణి సంతానలేమి నిపుణులు మరియు అందుబాటు ధరల సంపూర్ణ చికిత్సా ప్రణాళికల కోసం వైజాగ్ IVF సెంటర్‌ని ఎంచుకోండి. ఎటువంటి దాగి ఉన్న రుసుములు లేదా రిజిస్ట్రేషన్ ఛార్జీలు లేవు — మీరు తల్లిదండ్రులు కావడానికి తోడ్పడే నిజమైన నిపుణుల సంరక్షణ మాత్రమే.",
      locationBadge: "జైల్ రోడ్, విశాఖపట్నం",
      offerBadge: "వైజాగ్ IVF చికిత్స",
      offerText: "IVF Packages starting from 1.8* lakhs onwards",
      offerOriginalPrice: "",
      offerSaveTag: "",
      offerNote: "*final amount may vary from patient to patient",
      srikakulamOffer: "శ్రీకాకుళం బ్రాంచ్‌లో సంపూర్ణ IVF చికిత్స కేవలం ₹1.5 లక్షలకే!",
      keyPoints: [
        "ఉచిత నిపుణుల సంప్రదింపులు",
        "ఉచిత కౌన్సెలింగ్",
        "ఎటువంటి రిజిస్ట్రేషన్ ఫీజు లేదు"
      ],
      formTitle: "కన్సల్టేషన్ రిజిస్ట్రేషన్",
      formSubtitle: "మీ కన్సల్టేషన్ స్లాట్‌ను ఇప్పుడే రిజర్వ్ చేసుకోండి",
      fullNameLabel: "పూర్తి పేరు *",
      fullNamePlaceholder: "మీ పూర్తి పేరును నమోదు చేయండి",
      ageLabel: "వయస్సు (ఐచ్ఛికం)",
      agePlaceholder: "ఉదా: 28",
      mobileLabel: "మొబైల్ ఫోన్ నంబర్ *",
      mobilePlaceholder: "+91 9XXXX XXXXX",
      dateLabel: "కన్సల్టేషన్ తేదీ ఎంచుకోండి *",
      slotLabel: "కన్సల్టేషన్ సమయం *",
      slotOptions: ["10:00 AM - 07:00 PM", "10:00 AM - 01:00 PM", "01:00 PM - 04:00 PM", "04:00 PM - 07:00 PM"],
      submitButton: "కన్ఫర్మ్ బుకింగ్",
      submitting: "నమోదు అవుతోంది...",
      privacyNote: "మీ వ్యక్తిగత సమాచారం సంపూర్ణంగా రహస్యంగా ఉంచబడుతుంది."
    },
    stats: {
      cases: "8,000+",
      casesLabel: "విజయవంతమైన కేసులు",
      startingPrice: "₹1.8L*",
      startingPriceLabel: "IVF ప్యాకేజ్ ప్రారంభం",
      successRate: "ఉచితం",
      successRateLabel: "సంప్రదింపులు & కౌన్సెలింగ్"
    },
    inclusions: {
      badge: "INCLUSIONS",
      title: "1.8 Lakh Package Inclusions",
      subtitle: "",
      items: [
        {
          title: "IVF profiling tests & Scans",
          desc: "",
          icon: "Activity"
        },
        {
          title: "Semen Backup",
          desc: "",
          icon: "Database"
        },
        {
          title: "Stimulation Injections",
          desc: "",
          icon: "Syringe"
        },
        {
          title: "IVF/ICSI Procedure charges",
          desc: "",
          icon: "ShieldCheck"
        },
        {
          title: "Trigger Shot",
          desc: "",
          icon: "Target"
        },
        {
          title: "OT charges",
          desc: "",
          icon: "Building2"
        },
        {
          title: "Embryo Transfer",
          desc: "",
          icon: "HeartHandshake"
        },
        {
          title: "Embryo Freezing (6 months)",
          desc: "",
          icon: "Snowflake"
        }
      ],
      pricingTitle: "సులభమైన చికిత్స ప్యాకేజీల వివరాలు",
      pricingSubtitle: "ప్రతి దంపతుల అవసరాలకు అనుగుణంగా అనుకూలమైన ధరలలో అందుబాటులో ఉన్నాయి.",
      packages: [
        {
          name: "IVF / ICSI సంపూర్ణ ప్యాకేజ్",
          price: "₹1.8 లక్షలు*",
          subnote: "అన్ని రకాల పరీక్షలు, OT, ఇంజెక్షన్లు & 6 నెలల ఫ్రీజింగ్‌తో",
          highlights: ["IVF ప్రొఫైలింగ్ & స్కాన్లు", "స్టిమ్యులేషన్ & ట్రిగ్గర్ షాట్", "Embryo ట్రాన్స్‌ఫర్ & ఫ్రీజింగ్", "Semen Backup చేర్చబడింది"],
          featured: true
        },
        {
          name: "IUI చికిత్స (Per Cycle)",
          price: "₹7,500",
          subnote: "ప్రారంభ దశ సంతాన సమస్యలకు సులువైన మార్గం",
          highlights: ["అల్ట్రాసౌండ్ మానిటరింగ్", "స్పెర్మ్ ప్రిపరేషన్", "IUI ప్రక్రియ ఛార్జీలు"],
          featured: false
        },
        {
          name: "Donor Insemination (DI)",
          price: "₹15,000",
          subnote: "ప్రత్యేక అవసరాలు కలిగిన దంపతులకు",
          highlights: ["డోనర్ సాంపుల్ ప్రిపరేషన్", "శాస్త్రీయ ప్రాసెస్", "కౌన్సెలింగ్ చేర్చబడింది"],
          featured: false
        }
      ],
      disclaimer: "*రోగి ఆరోగ్య స్థితి మరియు వైద్యుల నివేదికల ఆధారంగా ఛార్జీలలో స్వల్ప మార్పులు ఉండవచ్చు."
    },
    reviews: {
      badge: "GOOGLE REVIEWS",
      title: "మా పేషెంట్ల నిజమైన అనుభవాలు",
      subtitle: "వైజాగ్ IVF సెంటర్ జైల్ రోడ్ బ్రాంచ్‌లో చికిత్స పొందిన దంపతులు గూగుల్‌లో పంచుకున్న అనుభవాలు",
      rating: "4.8",
      reviewCount: "483 Google Reviews",
      googleSearchUrl: "https://www.google.com/search?q=vizag+ivf+jail+road&rlz=1C1CHZN_enIN1233IN1233&oq=vizag+ivf+jail&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRiPAjIHCAQQIRiPAtIBCDUxNjBqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
      viewAllButton: "గూగుల్‌లో మొత్తం 483+ రివ్యూలు చూడండి",
      verifiedBadge: "Verified Patient",
      list: [
        {
          name: "Sravani K.",
          rating: 5,
          date: "a month ago",
          comment: "Dr. Sireesha Rani madam is an exceptional doctor. Her polite nature and deep expertise gave us immense confidence during our IVF journey. The nursing staff and coordinators at Jail Road centre are very caring and supportive. Blessed with positive results in our first attempt!",
          initials: "SK"
        },
        {
          name: "Prasad Varma",
          rating: 5,
          date: "2 months ago",
          comment: "Best IVF Centre in Visakhapatnam. Dr. Sireesha madam explains everything clearly without keeping any doubts. The hospital atmosphere is very peaceful and clean. We are truly thankful to the whole Vizag IVF team for making our dream come true.",
          initials: "PV"
        },
        {
          name: "M. Lavanya",
          rating: 5,
          date: "3 months ago",
          comment: "After 7 years of marriage and facing disappointment elsewhere, we consulted Dr. Sireesha Rani at Vizag IVF Center Jail Road. Mam's positive counseling and advanced treatment gave us hope. Today we are blessed with twin babies! Highly recommend this hospital.",
          initials: "ML"
        },
        {
          name: "Ramesh Kumar B.",
          rating: 5,
          date: "4 months ago",
          comment: "Very transparent treatment and highly skilled doctors. Dr. Sireesha Rani and Dr. Mounica take personal care of every patient. Staff are cooperative during scans and appointments. Truly grateful to Vizag IVF Centre.",
          initials: "RB"
        }
      ]
    },
    doctors: {
      badge: "మా స్పెషలిస్ట్ వైద్యులు",
      title: "మా ప్రముఖ సంతానలేమి నిపుణులు",
      subtitle: "దశాబ్దాల క్లినికల్ నైపుణ్యం మరియు అంతర్జాతీయ శిక్షణతో దంపతులకు ఆశాకిరణంగా నిలుస్తున్న మా వైద్య బృందం.",
      list: [
        {
          id: "dr-sireesha",
          name: "డా. బి. శిరీష రాణి",
          title: "ఫౌండర్ & చీఫ్ ఇన్ఫెర్టిలిటీ స్పెషలిస్ట్ | గైనకాలజిస్ట్",
          qualifications: "MBBS, DNB (Obstetrics & Gynaecology), DRM (కీల్ యూనివర్సిటీ, జర్మనీ)",
          expBadge: "20+ YEARS EXP",
          photo: "/dr-sireesha-rani.png",
          bio: "వైజాగ్ IVF సెంటర్ వ్యవస్థాపకురాలు మరియు మేనేజింగ్ డైరెక్టర్. 20+ సంవత్సరాల అనుభవం కలిగిన ప్రముఖ సంతానలేమి వైద్యురాలు. గౌరవనీయ మాజీ ఉపరాష్ట్రపతి గారి చేతుల మీదుగా 'మోస్ట్ ప్రిఫర్డ్ IVF డాక్టర్ ఇన్ AP' పురస్కారం పొందిన ఘనత.",
          achievementBadge: "Most Preferred IVF Doctor in AP"
        },
        {
          id: "dr-mounica",
          name: "డా. మౌనిక",
          title: "ఇన్‌ఫెర్టిలిటీ స్పెషలిస్ట్ | IVF & రీప్రొడక్టివ్ మెడిసిన్",
          qualifications: "MBBS, MS (Obstetrics & Gynaecology), Advanced Certificate in Reproductive Medicine & IVF",
          expBadge: "11+ YEARS EXP",
          photo: "/dr-mounica.png",
          bio: "IVF, IUI, ICSI మరియు పునరుత్పత్తి వైద్యంలో వ్యక్తిగతీకరించిన చికిత్సను అందిస్తూ, సంతానలేమి నివారణ మరియు మహిళల ఆరోగ్య సంరక్షణలో నిపుణులు.",
          achievementBadge: "సంతానలేమి & IVF నిపుణులు"
        }
      ]
    },
    whyChoose: {
      title: "మా ప్రత్యేకతలు",
      items: [
        {
          number: "1",
          title: "8,000+ విజయవంతమైన కేసులు",
          desc: "విశాఖపట్నం మరియు పరిసర ప్రాంతాలలో అత్యధిక సంతానలేమి విజయాలు.",
          icon: "Trophy"
        },
        {
          number: "2",
          title: "జర్మన్ కీల్ ప్రొటోకాల్స్",
          desc: "ప్రపంచ ప్రఖ్యాతి గాంచిన అంతర్జాతీయ ఎంబ్రియోలాజీ ల్యాబ్ ప్రమాణాలు.",
          icon: "Gem"
        },
        {
          number: "3",
          title: "అనుభవజ్ఞులైన నిపుణులు",
          desc: "20+ సంవత్సరాల అనుభవం కలిగిన సీనియర్ వైద్యుల సంరక్షణ.",
          icon: "Stethoscope"
        },
        {
          number: "4",
          title: "వ్యక్తిగతీకరించిన సంరక్షణ",
          desc: "ప్రతి జంటకు అనుకూలమైన చికిత్సా విధానాలు మరియు కౌన్సెలింగ్.",
          icon: "HeartHandshake"
        },
        {
          number: "5",
          title: "అధునాతన సాంకేతికత",
          desc: "లేటెస్ట్ లేజర్ హాచింగ్ మరియు మైక్రో-మనిప్యులేషన్ సాంకేతికత.",
          icon: "Microscope"
        }
      ]
    },
    ctaBanner: {
      title: "తల్లిదండ్రులు కావాలనే మీ కల కేవలం ఒక్క క్లిక్ దూరంలో ఉంది",
      subtitle: "ఈరోజే మీ ఉచిత స్లాట్‌ను బుక్ చేసుకోండి మరియు నిపుణుల సలహాలు పొందండి.",
      button: "ఉచిత స్లాట్ బుక్ చేసుకోండి"
    },
    faq: {
      badge: "తరచుగా అడిగే ప్రశ్నలు",
      title: "మీ అనుమానాలకు సందేహ నివృత్తి",
      subtitle: "క్యాంప్ మరియు IVF ప్యాకేజీలకు సంబంధించి సాధారణ ప్రశ్నలు.",
      items: [
        {
          q: "ఉచిత మెడికల్ క్యాంప్‌లో ఏమేమి సేవలు లభిస్తాయి?",
          a: "ఉచిత ఫెర్టిలిటీ కన్సల్టేషన్, ఉచిత కౌన్సెలింగ్ మరియు శ్రీకాకుళం బ్రాంచ్‌లో ₹1.5 లక్షలకే IVF ఆఫర్ లభిస్తాయి."
        },
        {
          q: "IVF ₹1.8 లక్షల ప్యాకేజీలో ఏమేమి చేర్చబడ్డాయి?",
          a: "IVF ప్రొఫైలింగ్ పరీక్షలు, స్కాన్లు, స్టిమ్యులేషన్ ఇంజెక్షన్లు, IVF/ICSI ప్రక్రియ, OT ఛార్జీలు, Embryo ట్రాన్స్‌ఫర్, Semen backup మరియు 6 నెలల Embryo ఫ్రీజింగ్ చేర్చబడ్డాయి."
        },
        {
          q: "అపాయింట్మెంట్ కోసం ఏమేమి తెచ్చుకోవాలి?",
          a: "మీ వద్ద ఉన్న పాత మెడికల్ రిపోర్టులు, బ్లడ్ టెస్ట్ లేదా స్కానింగ్ కాపీలు ఏవైనా ఉంటే వెంట తెచ్చుకోవడం మంచిది."
        }
      ]
    },
    footer: {
      aboutTitle: "మెడ్సీ IVF & వైజాగ్ IVF సెంటర్",
      aboutText: "విశాఖపట్నం జైల్ రోడ్డులో 8,000 పైగా విజయవంతమైన IVF కేసులతో అత్యుత్తమ సంతానలేమి చికిత్స నందిస్తున్న విశ్వసనీయ ఫెర్టిలిటీ సెంటర్.",
      addressTitle: "సెంటర్ చిరునామా",
      addressValue: "#29-2-4, 1వ అంతస్తు, వద్దిరాజు నిలయం, జైల్ రోడ్, వెటర్నరీ హాస్పిటల్ ఎదురుగా, విశాఖపట్నం – 530020",
      phoneTitle: "హెల్ప్‌లైన్ & అపాయింట్మెంట్స్",
      phoneValue: "+91 95025 34222",
      hoursTitle: "పని చేయు సమయాలు",
      hoursValue: "సోమవారం - ఆదివారం: ఉదయం 9:00 - సాయంత్రం 6:00",
      copyright: "© 2026 వైజాగ్ IVF సెంటర్. సర్వ హక్కులూ ప్రత్యేకించబడ్డాయి."
    },
    modal: {
      title: "అపాయింట్మెంట్ నమోదైంది! 🎉",
      subtitle: "మెడ్సీ IVF ఉచిత మెడికల్ క్యాంప్ రిజిస్ట్రేషన్ విజయవంతమైంది.",
      tokenLabel: "బుకింగ్ టోకెన్ నంబర్",
      nameLabel: "పేరు",
      phoneLabel: "ఫోన్",
      slotLabel: "సమయ స్లాట్",
      dateLabel: "తేదీ",
      whatsappButton: "WhatsApp లో కన్ఫర్మేషన్ పొందండి",
      closeButton: "సరే, ముగించు",
      note: "మా సంరక్షణ బృందం త్వరలోనే మీకు ఫోన్ చేసి సమయాన్ని స్థిరీకరిస్తారు."
    }
  },
  en: {
    nav: {
      brandName: "VIZAG IVF CENTRE",
      tagline: "MIRACLES MADE HERE",
      freeCampBadge: "FREE MEDICAL CAMP",
      phone: "+91 95025 34222",
      bookAppointment: "Book Appointment",
      emergencyCall: "Call Now Direct",
      topBannerText: "Free Medical Camp Conducted Every Saturday of the Month",
      limitedSlots: "Limited Slots",
      bookNow: "Book Now",
      topBannerBadge: "FREE CONSULTATION • LIMITED SLOTS",
      topBannerTitle: "Free Medical Camp Conducted Every Saturday of the Month",
      topBannerSubtitle: "Book Your Free Slot Today and consult with Vizag's top fertility specialists.",
      topBannerButton: "Book Your Free Slot Today",
      campFormTitle: "Free Medical Camp Registration",
      campFormSubtitle: "Book your complimentary slot for a free expert fertility consultation",
      campLocation: "Vizag IVF Centre, #29-2-4, 1st Floor, Vaddiraju Nilayam, Jail Road, Opp. Veterinary Hospital, Visakhapatnam – 530020"
    },
    hero: {
      badge: "",
      brandTag: "VIZAG IVF",
      headlinePart1: "8,000+ Families Grew With Us.",
      headlineHighlight: "Yours Can Too.",
      headlinePart2: "",
      tagline: "Expert fertility care. Your journey to parenthood starts here.",
      subtext: "Choose Vizag IVF Centre for proven success rates, top-tier fertility specialists, and highly affordable, all-inclusive treatment plans. No hidden fees, no registration charges—just genuine, expert care to help you become parents.",
      locationBadge: "Jail Road, Visakhapatnam",
      offerBadge: "VIZAG IVF TREATMENT",
      offerText: "IVF Packages starting from 1.8* lakhs onwards",
      offerOriginalPrice: "",
      offerSaveTag: "",
      offerNote: "*final amount may vary from patient to patient",
      srikakulamOffer: "In Srikakulam Branch, Complete IVF Treatment at ₹1.5 Lakhs Only",
      keyPoints: [
        "Free Expert Consultation",
        "Free Counselling",
        "No Registration"
      ],
      formTitle: "Consultation Registration",
      formSubtitle: "Reserve your consultation spot today",
      fullNameLabel: "Full Name *",
      fullNamePlaceholder: "Enter your full name",
      ageLabel: "Age (Optional)",
      agePlaceholder: "e.g. 28",
      mobileLabel: "Mobile Phone Number *",
      mobilePlaceholder: "+91 9XXXX XXXXX",
      dateLabel: "Select Consultation Date *",
      slotLabel: "Consultation Time *",
      slotOptions: ["10:00 AM - 07:00 PM", "10:00 AM - 01:00 PM", "01:00 PM - 04:00 PM", "04:00 PM - 07:00 PM"],
      submitButton: "Confirm Booking",
      submitting: "Submitting...",
      privacyNote: "Your personal information is strictly confidential."
    },
    stats: {
      cases: "8,000+",
      casesLabel: "Successful Cases",
      startingPrice: "₹1.8L*",
      startingPriceLabel: "Starting IVF Package",
      successRate: "FREE",
      successRateLabel: "Consultation & Counselling"
    },
    inclusions: {
      badge: "INCLUSIONS",
      title: "1.8 Lakh Package Inclusions",
      subtitle: "",
      items: [
        {
          title: "IVF profiling tests & Scans",
          desc: "",
          icon: "Activity"
        },
        {
          title: "Semen Backup",
          desc: "",
          icon: "Database"
        },
        {
          title: "Stimulation Injections",
          desc: "",
          icon: "Syringe"
        },
        {
          title: "IVF/ICSI Procedure charges",
          desc: "",
          icon: "ShieldCheck"
        },
        {
          title: "Trigger Shot",
          desc: "",
          icon: "Target"
        },
        {
          title: "OT charges",
          desc: "",
          icon: "Building2"
        },
        {
          title: "Embryo Transfer",
          desc: "",
          icon: "HeartHandshake"
        },
        {
          title: "Embryo Freezing (6 months)",
          desc: "",
          icon: "Snowflake"
        }
      ],
      pricingTitle: "Transparent Treatment Pricing",
      pricingSubtitle: "Customized treatment plans tailored to your specific medical profile.",
      packages: [
        {
          name: "All-Inclusive IVF / ICSI Package",
          price: "₹1.8 Lakhs*",
          subnote: "Includes tests, scans, injections, OT, ET & 6 months freezing",
          highlights: ["Profiling Tests & Scans", "Stimulation & Trigger Shot", "Embryo Transfer & Freezing", "Semen Backup Included"],
          featured: true
        },
        {
          name: "IUI Treatment Package",
          price: "₹7,500",
          subnote: "Per cycle solution for early-stage fertility support",
          highlights: ["Ultrasound Monitoring", "Sperm Wash & Preparation", "IUI Procedure Fee"],
          featured: false
        },
        {
          name: "Donor Insemination (DI)",
          price: "₹15,000",
          subnote: "Per cycle procedure for specialized requirements",
          highlights: ["Donor Sample Preparation", "Clinical Lab Processing", "Counselling Included"],
          featured: false
        }
      ],
      disclaimer: "*Treatment fees may vary slightly depending on individualized clinical evaluation."
    },
    reviews: {
      badge: "GOOGLE REVIEWS",
      title: "What Our Patients Say",
      subtitle: "Authentic reviews from couples who achieved their dream of parenthood at Vizag IVF Centre Jail Road",
      rating: "4.8",
      reviewCount: "483 Google reviews",
      googleSearchUrl: "https://www.google.com/search?q=vizag+ivf+jail+road&rlz=1C1CHZN_enIN1233IN1233&oq=vizag+ivf+jail&gs_lcrp=EgZjaHJvbWUqBwgBECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRiPAjIHCAQQIRiPAtIBCDUxNjBqMGo3qAIAsAIA&sourceid=chrome&source=chrome.ob&ie=UTF-8",
      viewAllButton: "Read all 483+ Google Reviews",
      verifiedBadge: "Verified Patient",
      list: [
        {
          name: "Sravani K.",
          rating: 5,
          date: "a month ago",
          comment: "Dr. Sireesha Rani mam is an exceptional doctor. Her polite nature and deep expertise gave us immense confidence during our IVF journey. The nursing staff and coordinators at Jail Road centre are very caring and supportive. Blessed with positive results in our first attempt!",
          initials: "SK"
        },
        {
          name: "Prasad Varma",
          rating: 5,
          date: "2 months ago",
          comment: "Best IVF Centre in Visakhapatnam. Dr. Sireesha madam explains everything clearly without keeping any doubts. The hospital atmosphere is very peaceful and clean. We are truly thankful to the whole Vizag IVF team for making our dream come true.",
          initials: "PV"
        },
        {
          name: "M. Lavanya",
          rating: 5,
          date: "3 months ago",
          comment: "After 7 years of marriage and facing disappointment elsewhere, we consulted Dr. Sireesha Rani at Vizag IVF Center Jail Road. Mam's positive counseling and advanced treatment gave us hope. Today we are blessed with twin babies! Highly recommend this hospital.",
          initials: "ML"
        },
        {
          name: "Ramesh Kumar B.",
          rating: 5,
          date: "4 months ago",
          comment: "Very transparent treatment and highly skilled doctors. Dr. Sireesha Rani and Dr. Mounica take personal care of every patient. Staff are cooperative during scans and appointments. Truly grateful to Vizag IVF Centre.",
          initials: "RB"
        }
      ]
    },
    doctors: {
      badge: "OUR SPECIALISTS",
      title: "Meet Our Fertility Specialists",
      subtitle: "Trusted medical leadership providing personalized care in IVF, IUI, ICSI, and reproductive medicine.",
      list: [
        {
          id: "dr-sireesha",
          name: "Dr. B. Sireesha Rani",
          title: "Founder & Chief Fertility Specialist | Gynecologist",
          qualifications: "MBBS, DNB (Obstetrics & Gynaecology), DRM (Kiel University, Germany)",
          expBadge: "20+ YEARS EXP",
          photo: "/dr-sireesha-rani.png",
          bio: "Founder and Managing Director of Vizag IVF Centre with over 20 years of clinical mastery in reproductive medicine. Honored with the prestigious 'Most Preferred IVF Doctor in AP' award by the former Vice President of India.",
          achievementBadge: "Most Preferred IVF Doctor in AP"
        },
        {
          id: "dr-mounica",
          name: "Dr. Mounica",
          title: "Infertility Specialist | IVF & Reproductive Medicine",
          qualifications: "MBBS, MS (Obstetrics & Gynaecology), Advanced Certificate in Reproductive Medicine & IVF",
          expBadge: "11+ YEARS EXP",
          photo: "/dr-mounica.png",
          bio: "Infertility specialist providing personalized care in IVF, IUI, ICSI, and reproductive medicine, with a focus on individualized fertility treatment and women's reproductive health.",
          achievementBadge: "IVF & Reproductive Medicine Specialist"
        }
      ]
    },
    whyChoose: {
      title: "Why Choose Vizag IVF",
      items: [
        {
          number: "1",
          title: "8,000+ Success Stories",
          desc: "Leading fertility institute with proven success rates across centres.",
          icon: "Trophy"
        },
        {
          number: "2",
          title: "German Kiel Protocols",
          desc: "State-of-the-art embryology lab bench-marked to global benchmarks.",
          icon: "Gem"
        },
        {
          number: "3",
          title: "Senior Specialists",
          desc: "Decades of dedicated clinical expertise in complex infertility.",
          icon: "Stethoscope"
        },
        {
          number: "4",
          title: "Personalized Care",
          desc: "Customized protocols tailored to your unique diagnostic profile.",
          icon: "HeartHandshake"
        },
        {
          number: "5",
          title: "Cutting-Edge Tech",
          desc: "Advanced laser hatching and high-precision micromanipulation.",
          icon: "Microscope"
        }
      ]
    },
    ctaBanner: {
      title: "Your Dream of Parenthood is Just One Click Away",
      subtitle: "Book Your Free Slot Today and consult with Vizag's top fertility specialists.",
      button: "Book Your Free Slot Today"
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Answers to Your Questions",
      subtitle: "Clear answers regarding our free camp, consultation, and IVF treatments.",
      items: [
        {
          q: "What is included in the Free Medical Camp?",
          a: "The camp includes free initial fertility consultation, complimentary expert counselling, report evaluation, and special Srikakulam branch IVF rates from ₹1.5 Lakhs."
        },
        {
          q: "What is included in the ₹1.8 Lakh IVF Package?",
          a: "It includes profiling tests, scans, semen backup, stimulation injections, IVF/ICSI procedure, OT charges, embryo transfer, and 6 months embryo freezing."
        },
        {
          q: "What documents should I bring to the camp?",
          a: "Please bring any previous medical records, blood test reports, ultrasound scans, or prescriptions if available."
        }
      ]
    },
    footer: {
      aboutTitle: "VIZAG IVF CENTRE",
      aboutText: "Visakhapatnam's premier fertility & reproductive medicine institute on Jail Road with 8,000+ successful IVF cases.",
      addressTitle: "Centre Address",
      addressValue: "#29-2-4, 1st Floor, Vaddiraju Nilayam, Jail Road, Opp. Veterinary Hospital, Visakhapatnam – 530020",
      phoneTitle: "Helpline & Appointments",
      phoneValue: "+91 95025 34222",
      hoursTitle: "Working Hours",
      hoursValue: "Mon - Sun: 9:00 AM - 6:00 PM",
      copyright: "© 2026 VIZAG IVF CENTRE. All rights reserved."
    },
    modal: {
      title: "Appointment Reserved! 🎉",
      subtitle: "Your registration for Vizag IVF Free Medical Camp is confirmed.",
      tokenLabel: "Booking Token No.",
      nameLabel: "Name",
      phoneLabel: "Phone",
      slotLabel: "Time Slot",
      dateLabel: "Date",
      whatsappButton: "Receive Confirmation on WhatsApp",
      closeButton: "Close Confirmation",
      note: "Our patient care team will call you shortly to confirm your exact appointment slot."
    }
  }
};
