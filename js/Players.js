const playersObject = [
  {
    name: "Wolf Ackx",
    picture:
      "https://proleague.be/dato/25478/1637762369-ackx-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Anouar Ait El Hadj",
    picture:
      "https://proleague.be/dato/25478/1627812165-el-hadj-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Reda Akbib",
    picture:
      "https://proleague.be/dato/25478/1627816074-reda-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Abdelhafid Al Badaoui Sabri",
    picture:
      "https://proleague.be/dato/25478/1597059337-al-badaoui-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ameen Al Dakhil",
    picture:
      "https://proleague.be/dato/25478/1627203911-al-dakhil.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ameen Al Dakhil",
    picture:
      "https://proleague.be/dato/25478/1646410937-al-dakhil.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alessandro Albanese",
    picture:
      "https://proleague.be/dato/25478/1646392115-panini-2302-kv-oostende28.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Arthur Frans Allemeersch",
    picture:
      "https://proleague.be/dato/25478/1627746325-allemeersch-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Joseph Amuzu",
    picture: "No Image Found",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Zacarias Antonio",
    picture: "No Image Found",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Francis Apelete Amuzu",
    picture:
      "https://proleague.be/dato/25478/1627814283-amuzu-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dirk Junior Asare",
    picture:
      "https://proleague.be/dato/25478/1633438572-asare.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Kerian Johan Atheba",
    picture:
      "https://proleague.be/dato/25478/1627765237-atheba.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lynnt Audoor",
    picture: "No Image Found",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Marciano Aziz",
    picture:
      "https://proleague.be/dato/25478/1637577735-aziz.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Richmond Badu",
    picture: "No Image Found",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Yunus Bahad\u0131r",
    picture: "No Image Found",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Zakaria Bakkali",
    picture:
      "https://proleague.be/dato/25478/1596644582-bakkali-2-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Michel-Ange Balikwisha",
    picture:
      "https://proleague.be/dato/25478/1627757906-balikwiha-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "William Balikwisha",
    picture:
      "https://proleague.be/dato/25478/1595945516-balikwisha7.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jelle Bataille",
    picture:
      "https://proleague.be/dato/25478/1627758047-bataille-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Martijn Beernaert",
    picture:
      "https://proleague.be/dato/25478/1627822536-beernaert-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Antoine Rudy Bernier",
    picture:
      "https://proleague.be/dato/25478/1627754810-bernier-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Soulaimane Berradi",
    picture: "No Image Found",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mohamed Berte",
    picture:
      "https://proleague.be/dato/25478/1627743443-berte-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Wouter Biebauw",
    picture:
      "https://proleague.be/dato/25478/1627316736-biebauw-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Arnaud Bodart",
    picture:
      "https://proleague.be/dato/25478/1627204115-bodart.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Keo Boets",
    picture: "No Image Found",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Indy Boonen",
    picture:
      "https://proleague.be/dato/25478/1627743625-boonen-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Sammy Andre Bossut",
    picture:
      "https://proleague.be/dato/25478/1627823008-bossut-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Louis Bostyn",
    picture:
      "https://proleague.be/dato/25478/1627823243-bostyn-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Yacine Boufath",
    picture: "No Image Found",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mehdi Boukamir",
    picture:
      "https://proleague.be/dato/25478/1627815459-boukamir-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bassim Boukteb",
    picture:
      "https://proleague.be/dato/25478/1627754869-boukteb-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Adel Bourard",
    picture: "No Image Found",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Louis Broch\u00e9",
    picture: "No Image Found",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jordy Brock",
    picture: "No Image Found",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Gianni Bruno",
    picture:
      "https://proleague.be/dato/25478/1627651356-bruno-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "S\u00e9bastien Bruzzese",
    picture:
      "https://proleague.be/dato/25478/1627637874-bruzzese-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Christian Br\u00fcls",
    picture:
      "https://proleague.be/dato/25478/1627817467-bruls-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mathieu Joseph Cachbach",
    picture:
      "https://proleague.be/dato/25478/1627755003-cachbach-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alexandro Calut",
    picture:
      "https://proleague.be/dato/25478/1627204271-calut.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Brecht Capon",
    picture:
      "https://proleague.be/dato/25478/1627743696-capon-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Joachim Carcela-Gonzalez",
    picture:
      "https://proleague.be/dato/25478/1595945671-gonzalez3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Senne Carleer",
    picture:
      "https://proleague.be/dato/25478/1627733237-carleer-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Arne Cassaert",
    picture:
      "https://proleague.be/dato/25478/1627638200-cassaert-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alessio Daniel Castro-Montes",
    picture:
      "https://proleague.be/dato/25478/1627651563-castro-montes-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Maximiliano Caufriez",
    picture:
      "https://proleague.be/dato/25478/1627817678-cauffriez-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Vic Chambaere",
    picture:
      "https://proleague.be/dato/25478/1627718857-chambaere-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Matteo Pierre Chiacig",
    picture:
      "https://proleague.be/dato/25478/1627815489-chiacig-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alessandro Ciranni",
    picture:
      "https://proleague.be/dato/25478/1627823728-ciranni-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Elias Cobbaut",
    picture:
      "https://proleague.be/dato/25478/1627811242-cobbaut-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Antoine Benjamin Colassin",
    picture:
      "https://proleague.be/dato/25478/1627811423-colassin-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Thijs Coninckx",
    picture: "No Image Found",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jens Cools",
    picture:
      "https://proleague.be/dato/25478/1637578439-cools.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Sander Coopman",
    picture:
      "https://proleague.be/dato/25478/1627759511-coopman-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Colin Coosemans",
    picture:
      "https://proleague.be/dato/25478/1627811599-coosemans-4.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alexander Jacques Corryn",
    picture:
      "https://proleague.be/dato/25478/1627638367-corryn-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ga\u00ebtan Coucke",
    picture:
      "https://proleague.be/dato/25478/1627733290-coucke-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alexandro Marco Craninx Joostens",
    picture:
      "https://proleague.be/dato/25478/1647423793-photonews_10968626-013.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Hugo Jean-Marc Cuypers",
    picture:
      "https://proleague.be/dato/25478/1627733353-cuypers-3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Kristof D'Haene",
    picture:
      "https://proleague.be/dato/25478/1634042137-d-haene-8.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Robbie D'Haese",
    picture:
      "https://proleague.be/dato/25478/1627743852-d-haese-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Francesco D'Onofrio",
    picture:
      "https://proleague.be/dato/25478/1627755575-d-onofrio-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Niklo Dailly",
    picture:
      "https://proleague.be/dato/25478/1627733410-dailly-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dylan Dassy",
    picture:
      "https://proleague.be/dato/25478/1633438580-dassy.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Laurence Henry Cristine De Bock",
    picture: "No Image Found",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alexandre De Bruyn",
    picture:
      "https://proleague.be/dato/25478/1627651988-de-bruyn-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alexandre De Bruyn",
    picture:
      "https://proleague.be/dato/25478/1646325270-photonews_10968367-033.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Wout Didier De Buyser",
    picture:
      "https://proleague.be/dato/25478/1627824170-de-buyser-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Maxim De Cuyper",
    picture:
      "https://proleague.be/dato/25478/1627644768-de-cuyper-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Charles De Ketelaere",
    picture:
      "https://proleague.be/dato/25478/1627644954-de-ketelere-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ritchie Ria Alfons De Laet",
    picture:
      "https://proleague.be/dato/25478/1627759646-de-laet-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dion De Neve",
    picture:
      "https://proleague.be/dato/25478/1627824419-de-neve-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Casper De Norre",
    picture:
      "https://proleague.be/dato/25478/1627748757-de-norre-2-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Steve Danny Marc De Ridder",
    picture:
      "https://proleague.be/dato/25478/1627818537-de-ridder-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Julien Ariel De Sart",
    picture:
      "https://proleague.be/dato/25478/1627652330-de-sart-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alexis Fran\u00e7ois De Sart",
    picture:
      "https://proleague.be/dato/25478/1634047668-de-sart-7.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alexis Fran\u00e7ois De Sart",
    picture:
      "https://proleague.be/dato/25478/1627759915-de-sart-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Thibault De Smet",
    picture:
      "https://proleague.be/dato/25478/1627316914-de-smet-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mathieu De Smet",
    picture:
      "https://proleague.be/dato/25478/1627824882-de-smet-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ebbe De Vlaeminck",
    picture: "No Image Found",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ortwin De Wolf",
    picture:
      "https://proleague.be/dato/25478/1627760273-de-wolf-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Zeno Koen Debast",
    picture:
      "https://proleague.be/dato/25478/1627811856-de-bast-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Robbe Decostere",
    picture:
      "https://proleague.be/dato/25478/1627638859-decostere-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Hannes Delcroix",
    picture:
      "https://proleague.be/dato/25478/1627811890-delcroix-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Allan Micha\u00ebl Delferriere",
    picture: "No Image Found",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mathias Delorge-Knieper",
    picture:
      "https://proleague.be/dato/25478/1627817840-delorge-knieper-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Olivier Deman",
    picture:
      "https://proleague.be/dato/25478/1627638987-deman-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Maxim Deman",
    picture:
      "https://proleague.be/dato/25478/1634041878-deman.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Emile Demarbaix",
    picture: "No Image Found",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Robin Denuit",
    picture:
      "https://proleague.be/dato/25478/1627755362-denuit-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Laurent Depoitre",
    picture:
      "https://proleague.be/dato/25478/1627652187-depoitre-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Timothy Derijck",
    picture:
      "https://proleague.be/dato/25478/1596561302-derijck.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Timothy Derijck",
    picture:
      "https://proleague.be/dato/25478/1646411320-photonews_10968264-001.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Anthony Kevin Descotte",
    picture:
      "https://proleague.be/dato/25478/1627815519-descotte-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dorian Dessoleil",
    picture:
      "https://proleague.be/dato/25478/1634471908-dessoleil-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dorian Dessoleil",
    picture:
      "https://proleague.be/dato/25478/1627815547-dessoleil-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Gilles Dewaele",
    picture:
      "https://proleague.be/dato/25478/1634041996-dewaele-5.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Sieben Dewaele",
    picture:
      "https://proleague.be/dato/25478/1627812126-dewaele-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Gilles Dewaele",
    picture:
      "https://proleague.be/dato/25478/1646406055-photonews_10966675-010.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "S\u00e9bastien Tony Dewaest",
    picture:
      "https://proleague.be/dato/25478/1634048135-dewaest-9.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jossue Dolet",
    picture: "No Image Found",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Joren Dom",
    picture:
      "https://proleague.be/dato/25478/1627316970-dom-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Romain Donnez",
    picture: "No Image Found",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Arnaud Dony",
    picture: "No Image Found",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Olivier Dumont",
    picture:
      "https://proleague.be/dato/25478/1627204690-dumont.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "No\u00eb Dussenne",
    picture:
      "https://proleague.be/dato/25478/1627204741-dusenne.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Pierre Junior Dwomoh",
    picture: "No Image Found",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Pierre Junior Dwomoh",
    picture:
      "https://proleague.be/dato/25478/1634472028-dwomoh-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "J\u00e9r\u00f4me D\u00e9om",
    picture:
      "https://proleague.be/dato/25478/1637578803-deom.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bilal El Khannous",
    picture: "No Image Found",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Renaud Emond",
    picture:
      "https://proleague.be/dato/25478/1646406110-photonews_10966675-056.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bj\u00f6rn Lionel Engels",
    picture:
      "https://proleague.be/dato/25478/1627760545-engels-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Matthieu Luka Epolo",
    picture:
      "https://proleague.be/dato/25478/1627204806-epolo.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Fabio Ferraro",
    picture:
      "https://proleague.be/dato/25478/1636986956-ferraro-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mathias Fixelles",
    picture:
      "https://proleague.be/dato/25478/1634042259-fixelles-9.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Julien Fontaine Ngoy Bin Cibambi",
    picture:
      "https://proleague.be/dato/25478/1637584069-ngoy.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Louis Fortin",
    picture:
      "https://proleague.be/dato/25478/1627652979-fontin-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Fr\u00e9d\u00e9ric Frans",
    picture:
      "https://proleague.be/dato/25478/1627317077-frans-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Guillaume Fran\u00e7ois",
    picture:
      "https://proleague.be/dato/25478/1627765278-francois.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Timothy Galj\u00e9",
    picture:
      "https://proleague.be/dato/25478/1627755750-galje-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Zinho Gano",
    picture:
      "https://proleague.be/dato/25478/1627825544-gano-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Wouter George",
    picture:
      "https://proleague.be/dato/25478/1627653357-george-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Pieter Gerkens",
    picture:
      "https://proleague.be/dato/25478/1627761049-gerkens-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jay-Dee Geusens",
    picture:
      "https://proleague.be/dato/25478/1627719368-geusens-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jo Gilis",
    picture: "No Image Found",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Guillaume Olivier Gillet",
    picture:
      "https://proleague.be/dato/25478/1627815634-gillet-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bruno Godeau",
    picture:
      "https://proleague.be/dato/25478/1627653539-godeau.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Matteo Godfroid",
    picture:
      "https://proleague.be/dato/25478/1627205029-godfroid.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Geoffry Hairemans",
    picture:
      "https://proleague.be/dato/25478/1627733715-hairemans-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Anas Hamzaoui",
    picture:
      "https://proleague.be/dato/25478/1603804218-anas-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Faris Dominguere Jenny Haroun",
    picture:
      "https://proleague.be/dato/25478/1627761200-haroun-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Kylian Hazard",
    picture:
      "https://proleague.be/dato/25478/1596554899-hazard3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ga\u00ebtan Hendrickx",
    picture:
      "https://proleague.be/dato/25478/1627815692-henderickx.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Laurent Claude Henkinet",
    picture:
      "https://proleague.be/dato/25478/1627205097-henkinet.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Tibo Herbots",
    picture:
      "https://proleague.be/dato/25478/1627765287-herbots.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jonathan Steve Heris",
    picture:
      "https://proleague.be/dato/25478/1637579479-heris.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Daan Heymans",
    picture:
      "https://proleague.be/dato/25478/1646405580-photonews_10968360-083.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bryan Heynen",
    picture:
      "https://proleague.be/dato/25478/1627719456-heynen-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Kobe Hosten",
    picture: "No Image Found",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Guillaume Hubert",
    picture:
      "https://proleague.be/dato/25478/1627744108-hubert-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "David Hubert",
    picture:
      "https://proleague.be/dato/25478/1627826013-hubert-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Wolke Johannes Janssens",
    picture:
      "https://proleague.be/dato/25478/1627819376-janssens-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Owen Jochmans",
    picture: "No Image Found",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Michiel Jonckheere",
    picture:
      "https://proleague.be/dato/25478/1634042619-jonckheere-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lucas Kalala",
    picture: "No Image Found",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Marco Kana",
    picture:
      "https://proleague.be/dato/25478/1627812423-kana-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Onur Kaya",
    picture:
      "https://proleague.be/dato/25478/1627733777-kaya-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Joris Kayembe Ditu",
    picture:
      "https://proleague.be/dato/25478/1627815749-kayembe-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lamine Mandela Keita",
    picture:
      "https://proleague.be/dato/25478/1627748893-keita-2-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Andi Koshi",
    picture:
      "https://proleague.be/dato/25478/1627639775-koshi-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Sven Kums",
    picture:
      "https://proleague.be/dato/25478/1627654196-kums-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bram Lagae",
    picture: "No Image Found",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Sami Lahssaini",
    picture:
      "https://proleague.be/dato/25478/1627755979-lahssaini-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Boris Luc Lambert",
    picture:
      "https://proleague.be/dato/25478/1637582567-lambert.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Senne Lammens",
    picture:
      "https://proleague.be/dato/25478/1627645382-lammens-3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bas Langenbick",
    picture: "No Image Found",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dimitri Dominique Laval\u00e9e",
    picture:
      "https://proleague.be/dato/25478/1627819622-lavalee-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ilyas Lefrancq",
    picture: "No Image Found",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Antoine Lejoly",
    picture:
      "https://proleague.be/dato/25478/1627317374-lejoly-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Theo Leoni",
    picture:
      "https://proleague.be/dato/25478/1627812515-leoni-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Maxime Christophe Lestienne",
    picture: "No Image Found",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Tobe Leysen",
    picture:
      "https://proleague.be/dato/25478/1627719846-leysen-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Simon Libert",
    picture: "No Image Found",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lucas Jozef Lissens",
    picture:
      "https://proleague.be/dato/25478/1627812550-lissens-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Killian Lokembo Lokaso",
    picture:
      "https://proleague.be/dato/25478/1627815925-lokembo-lokaso-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Daryl Lopes Ribeiro",
    picture: "No Image Found",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Senne Maaike Lynen",
    picture:
      "https://proleague.be/dato/25478/1627765349-lynen.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Fostave Mabani",
    picture: "No Image Found",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mathieu Maertens",
    picture:
      "https://proleague.be/dato/25478/1627746960-maertens-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Gary Magn\u00e9e",
    picture:
      "https://proleague.be/dato/25478/1637583540-magnee.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Junior Marsoni Sambu Mansoni",
    picture:
      "https://proleague.be/dato/25478/1627756049-marsoni-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Benson Manuel Hedilazio",
    picture:
      "https://proleague.be/dato/25478/1627758435-benson.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Henri Daniel Maton",
    picture: "No Image Found",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Romain Matthys",
    picture:
      "https://proleague.be/dato/25478/1637583809-matthys.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Noah Mbamba-Muanda",
    picture:
      "https://proleague.be/dato/25478/1627646293-mbamba-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dylan Mbayo",
    picture:
      "https://proleague.be/dato/25478/1634042984-mbayo-11.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Isaac Mbenza",
    picture: "No Image Found",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ayrton Mboko",
    picture:
      "https://proleague.be/dato/25478/1627317540-mboko-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ilomb\u00e9 Mboyo",
    picture:
      "https://proleague.be/dato/25478/1633437448-mboyo.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ilomb\u00e9 Mboyo",
    picture:
      "https://proleague.be/dato/25478/1627820166-mboyo-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Brandon Mechele",
    picture:
      "https://proleague.be/dato/25478/1627646472-mechele-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Nayel Mehssatou Sep\u00falveda",
    picture:
      "https://proleague.be/dato/25478/1646325232-photonews_10968367-026.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Nayel Mehssatou Sep\u00falveda",
    picture:
      "https://proleague.be/dato/25478/1627812729-mehsattou-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Senna Malik Miangu\u00e9",
    picture:
      "https://proleague.be/dato/25478/1627640494-miangue-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Simon Luc Hildebert Mignolet",
    picture:
      "https://proleague.be/dato/25478/1627650112-mignolet-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Maxime Mignon",
    picture:
      "https://proleague.be/dato/25478/1627756126-mignon-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "David Mindombe",
    picture:
      "https://proleague.be/dato/25478/1599058325-mindombe.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Arnaud Mollers",
    picture: "No Image Found",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lukas Hubert Mondele Anzun",
    picture: "No Image Found",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lucas Morren",
    picture: "No Image Found",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "David Mukuna-Trouet",
    picture:
      "https://proleague.be/dato/25478/1627317627-mukuna-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Radja Nainggolan",
    picture:
      "https://proleague.be/dato/25478/1634224915-radja-png.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Pierre-Yves Raffaella Michel Lucien Ngawa",
    picture:
      "https://proleague.be/dato/25478/1627747277-ngawa-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Nathan Ngoy",
    picture:
      "https://proleague.be/dato/25478/1627205578-ngoy.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Aristote Nkaka Bazunga",
    picture: "No Image Found",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ken Nkuba Tshiend",
    picture:
      "https://proleague.be/dato/25478/1603179191-nkuba.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lucas Dominique Noubi Ngnokam",
    picture: "No Image Found",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bruny Nsimba",
    picture:
      "https://proleague.be/dato/25478/1627762517-nsimba-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Vadis Odjidja-Ofoe",
    picture:
      "https://proleague.be/dato/25478/1627659450-odjidja-2-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lorenzo Offermann",
    picture: "No Image Found",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dario Oger",
    picture: "No Image Found",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Manuel Osifo",
    picture:
      "https://proleague.be/dato/25478/1627744519-osifo-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mamadou Obbi Oular\u00e9",
    picture:
      "https://proleague.be/dato/25478/1595945771-oulare3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Luca Oyen",
    picture:
      "https://proleague.be/dato/25478/1627720317-oyen-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Rune Paeshuyse",
    picture: "No Image Found",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Evangelos Patoulidis",
    picture:
      "https://proleague.be/dato/25478/1627744591-patouldis-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Louis Patris",
    picture:
      "https://proleague.be/dato/25478/1627747571-patris-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Stef Peeters",
    picture:
      "https://proleague.be/dato/25478/1637584443-peeters.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Daouda Peeters",
    picture:
      "https://proleague.be/dato/25478/1634822329-peeters-3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mike Penders",
    picture: "No Image Found",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Tibo Persyn",
    picture:
      "https://proleague.be/dato/25478/1629904480-persyn.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Tom Daniel Bart Pietermaat",
    picture:
      "https://proleague.be/dato/25478/1627317842-pietermaat-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lucas Fr\u00e9d\u00e9ric Pirard",
    picture:
      "https://proleague.be/dato/25478/1627765405-pirard.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ewoud Pletinckx",
    picture:
      "https://proleague.be/dato/25478/1627826432-pletinckx-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Robbe Quirynen",
    picture:
      "https://proleague.be/dato/25478/1627762809-quirynen-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Toon Raemaekers",
    picture:
      "https://proleague.be/dato/25478/1627747668-raemaekers-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Benito Raman",
    picture:
      "https://proleague.be/dato/25478/1627812828-raman.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Nicolas Thierry Raskin",
    picture:
      "https://proleague.be/dato/25478/1627205748-raskin.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Oregan Ravet",
    picture:
      "https://proleague.be/dato/25478/1627747773-ravet-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Christiaan Ravych",
    picture: "No Image Found",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dante Rigo",
    picture:
      "https://proleague.be/dato/25478/1647425928-photonews_10968647-042.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Igor Alberto Rinck de Camargo",
    picture:
      "https://proleague.be/dato/25478/1627733466-de-camargo-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mats Rits",
    picture:
      "https://proleague.be/dato/25478/1627647503-rits-5.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Milan Robberechts",
    picture:
      "https://proleague.be/dato/25478/1633438587-robberechts.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Davy Roef",
    picture:
      "https://proleague.be/dato/25478/1627664701-roef-2-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Tuur Rommens",
    picture: "No Image Found",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Tom Roufosse",
    picture:
      "https://proleague.be/dato/25478/1637664215-roufosse.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ibrahim Salah",
    picture: "No Image Found",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Matisse Samoise",
    picture:
      "https://proleague.be/dato/25478/1627664838-samoise-2-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Aske Sampers",
    picture:
      "https://proleague.be/dato/25478/1637763475-sampers-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Cisse Sandra",
    picture:
      "https://proleague.be/dato/25478/1627647678-sandra-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ryan Sanusi",
    picture:
      "https://proleague.be/dato/25478/1627317996-sanusi-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Killian Sardella",
    picture:
      "https://proleague.be/dato/25478/1627812889-sardella-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jordy Schelfhout",
    picture:
      "https://proleague.be/dato/25478/1627744720-schelfhout-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Rob Schoofs",
    picture:
      "https://proleague.be/dato/25478/1627734013-schoofs-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Siebe Schrijvers",
    picture:
      "https://proleague.be/dato/25478/1627747880-schrijvers-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ilias Sebaoui",
    picture:
      "https://proleague.be/dato/25478/1647426033-photonews_10968647-052.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Vincent Sels",
    picture: "No Image Found",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Noah Serwy",
    picture:
      "https://proleague.be/dato/25478/1627756571-serwy-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Nick Shinton",
    picture:
      "https://proleague.be/dato/25478/1627647854-shinton-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Hugo Siquet",
    picture:
      "https://proleague.be/dato/25478/1627205949-siquet.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Thibo Somers",
    picture:
      "https://proleague.be/dato/25478/1627641282-somers-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Abderahmane Soussi",
    picture:
      "https://proleague.be/dato/25478/1627911889-27-abderahmanesoussi.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Elias Noah Spago",
    picture:
      "https://proleague.be/dato/25478/1627756720-spago-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Kenny Steppe",
    picture:
      "https://proleague.be/dato/25478/1627820814-steppe-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alessio Guy Sternon",
    picture: "No Image Found",
    team: "KAS Eupen",
    team_logo:
      "https://proleague.be/dato/25478/1592247448-kas-eupen-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jarne Steuckers",
    picture:
      "https://proleague.be/dato/25478/1627820973-steuckers-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Nikola Storm",
    picture:
      "https://proleague.be/dato/25478/1627734128-storm-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mario Stroeykens",
    picture:
      "https://proleague.be/dato/25478/1627812939-stroeykens-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Iebe Swers",
    picture:
      "https://proleague.be/dato/25478/1627734181-swers-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Youssuf Sylla",
    picture:
      "https://proleague.be/dato/25478/1627827682-sylla-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Milan Taildeman",
    picture: "No Image Found",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Anton Willy Tanghe",
    picture:
      "https://proleague.be/dato/25478/1627744792-tanghe-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jackson Tchatchoua",
    picture:
      "https://proleague.be/dato/25478/1627816228-tchatchoua-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Arthur Nicolas Theate",
    picture:
      "https://proleague.be/dato/25478/1627744872-theate-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Cheikh Ahadou Tidiane Thiam",
    picture:
      "https://proleague.be/dato/25478/1627823476-cheick-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Yannick Thoelen",
    picture:
      "https://proleague.be/dato/25478/1627734245-thoelen-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mike Tr\u00e9sor Ndayishimiye",
    picture:
      "https://proleague.be/dato/25478/1627720871-tresor-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Giacomo Valerio D'Asaro",
    picture:
      "https://proleague.be/dato/25478/1627755290-d-asrro-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RFC Seraing",
    team_logo:
      "https://proleague.be/dato/25478/1630058660-rfc-seraing-logo-new.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jules Van Cleemput",
    picture:
      "https://proleague.be/dato/25478/1627816277-van-cleemput-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Hendrik Van Crombrugge",
    picture:
      "https://proleague.be/dato/25478/1627813146-van-crombrugge-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Cederick Van Daele",
    picture:
      "https://proleague.be/dato/25478/1627665080-van-daele-1-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Miguel Van Damme",
    picture:
      "https://proleague.be/dato/25478/1627641699-van-damme-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Joachim Marc Van Damme",
    picture:
      "https://proleague.be/dato/25478/1627734301-van-damme-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Joachim Marc Van Damme",
    picture:
      "https://proleague.be/dato/25478/1646406172-photonews_10966675-073.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Sef Van Damme",
    picture:
      "https://proleague.be/dato/25478/1627828193-van-damme-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Zeno Van Den Bosch",
    picture:
      "https://proleague.be/dato/25478/1627763298-van-den-bosch-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Stan Van Dessel",
    picture:
      "https://proleague.be/dato/25478/1627821173-van-dessel-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jannes Van Hecke",
    picture:
      "https://proleague.be/dato/25478/1627734420-van-hecke-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Rein Van Helden",
    picture: "No Image Found",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Alec Van Hoorenbeeck",
    picture:
      "https://proleague.be/dato/25478/1627734472-van-hoorenbeeck-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jelle Van Neck",
    picture: "No Image Found",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jan Van den Bergh",
    picture:
      "https://proleague.be/dato/25478/1627318134-van-den-bergh-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dario Van den Buijs",
    picture:
      "https://proleague.be/dato/25478/1627318217-van-den-bujis-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Bas Van den Eynden",
    picture:
      "https://proleague.be/dato/25478/1627734366-van-den-eynden-3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Thomas Van den Keybus",
    picture:
      "https://proleague.be/dato/25478/1627648817-van-den-keybus-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ignace Van der Brempt",
    picture:
      "https://proleague.be/dato/25478/1627649248-van-der-brempt-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Hannes Van der Bruggen",
    picture:
      "https://proleague.be/dato/25478/1627642011-van-der-bruggen.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Siebe Van der Heyden",
    picture:
      "https://proleague.be/dato/25478/1627765452-van-der-heyden.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Hans Vanaken",
    picture:
      "https://proleague.be/dato/25478/1627648508-vanaken-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jorn Vancamp",
    picture:
      "https://proleague.be/dato/25478/1596461817-vancamp.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ren\u00e9 Vanden Borre",
    picture: "No Image Found",
    team: "KAA Gent",
    team_logo:
      "https://proleague.be/dato/25478/1592247666-gent.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Maarten Vandevoordt",
    picture:
      "https://proleague.be/dato/25478/1627721071-vandevoordt-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KRC Genk",
    team_logo:
      "https://proleague.be/dato/25478/1630076768-krc-genk-v2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Mike Vanhamel",
    picture:
      "https://proleague.be/dato/25478/1627318318-vanhamel-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Charles Vanhoutte",
    picture:
      "https://proleague.be/dato/25478/1627642169-vanhoutte-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jordi Vanlerberghe",
    picture:
      "https://proleague.be/dato/25478/1627734603-vanlerberghe-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Wim Vanmarsenille",
    picture:
      "https://proleague.be/dato/25478/1627821453-vanmersenille-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dante Vanzeir",
    picture:
      "https://proleague.be/dato/25478/1627765462-vanzeir.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Daan Vekemans",
    picture:
      "https://proleague.be/dato/25478/1627749729-vekemans-2-edited.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Rik Robert Vercauteren",
    picture:
      "https://proleague.be/dato/25478/1627813219-vercauteren-3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Brice Verkerken",
    picture: "No Image Found",
    team: "KV Kortrijk",
    team_logo:
      "https://proleague.be/dato/25478/1592247478-kv-kortrijk-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Yari Verschaeren",
    picture:
      "https://proleague.be/dato/25478/1627813261-verschaeren-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "RSC Anderlecht",
    team_logo:
      "https://proleague.be/dato/25478/1592247697-rsc-anderlecht-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Louis Verstraete",
    picture:
      "https://proleague.be/dato/25478/1627764136-verstraete-louis-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Birger Danny Verstraete",
    picture:
      "https://proleague.be/dato/25478/1627763957-verstraete-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royal Antwerp FC",
    team_logo:
      "https://proleague.be/dato/25478/1592247029-royal-antwerp-fc-logo-1.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Thibault Vlietinck",
    picture:
      "https://proleague.be/dato/25478/1598460318-vlietinck.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "OH Leuven",
    team_logo:
      "https://proleague.be/dato/25478/1596574919-ohleuven1000px-1000px.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Jelle Vossen",
    picture:
      "https://proleague.be/dato/25478/1627828747-vossen-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Kiany Vroman",
    picture: "No Image Found",
    team: "Club Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1588931439-brugge.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Patryk Walicki",
    picture: "No Image Found",
    team: "K. Beerschot V.A.",
    team_logo:
      "https://proleague.be/dato/25478/1596459577-beerschot.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Martin Jean Wasinski",
    picture:
      "https://proleague.be/dato/25478/1627816355-wasinski-1.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Maxime Kali Wenssens",
    picture:
      "https://proleague.be/dato/25478/1627734781-wenssens-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Lukas Willen",
    picture:
      "https://proleague.be/dato/25478/1634565913-willen-3.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "SV Zulte Waregem",
    team_logo:
      "https://proleague.be/dato/25478/1592247583-sv-zulte-waregem-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Dries Wouters",
    picture:
      "https://proleague.be/dato/25478/1646381157-photonews_10968492-001.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "KV Mechelen",
    team_logo:
      "https://proleague.be/dato/25478/1592247743-1200px-kvmechelenlogo-svg.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Siebe Wylin",
    picture: "No Image Found",
    team: "KV Oostende",
    team_logo:
      "https://proleague.be/dato/25478/1622474883-kvo2-website.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Noa David Wyns",
    picture: "No Image Found",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Aboubakary Yeli Koita",
    picture:
      "https://proleague.be/dato/25478/1627819479-konate-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "STVV",
    team_logo:
      "https://proleague.be/dato/25478/1592247464-stvv-sint-truiden-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Anass Zaroury",
    picture:
      "https://proleague.be/dato/25478/1627816515-zaroury-2.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Sporting Charleroi",
    team_logo:
      "https://proleague.be/dato/25478/1592247599-rsc-charleroi-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Ilyes Ziani",
    picture:
      "https://proleague.be/dato/25478/1627765471-ziani.png?auto=format&crop=faces&fit=crop&h=640&w=640",
    team: "Royale  Union Saint-Gilloise",
    team_logo:
      "https://proleague.be/dato/25478/1613465224-logo-rusg-noback-whiteboard.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Artuur Rik Zutterman",
    picture: "No Image Found",
    team: "Cercle Brugge",
    team_logo:
      "https://proleague.be/dato/25478/1646830057-cerclebrugge-logo_hr.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
  {
    name: "Cihan \u00c7anak",
    picture: "No Image Found",
    team: "Standard de Li\u00e8ge",
    team_logo:
      "https://proleague.be/dato/25478/1592247756-standard-de-liege-logo.png?fit=fillmax&fill=solid&w=250&h=250",
    nationality: "Belgi\u00eb",
  },
];