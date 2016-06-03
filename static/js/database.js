function initDB() {
	var ref = new Firebase("https://openapi-cameras-nantes.firebaseio.com/cameras");

	ref.child("cameras").transaction(function(cams) {
		if(null === cams) {
			console.info("Création des données");
			cameras = {
				701: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt701/snap_c1.jpg?nc=",
					location 	: "Pont du Cens",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "",
					dd_long		: ""
				},
				702: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt702/snap_c1.jpg?nc=",
					location 	: "Rond-point de Rennes",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.233174",
					dd_long		: "-1.565662"
				},
				703: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt701/snap_c1.jpg?nc=",
					location 	: "Boulevard Michelet",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.232910",
					dd_long		: "-1.556755"
				},
				704: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt704.jpg?nc=",
					location 	: "Place du Pont Morrand",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.220593",
					dd_long		: "-1.555184"
				},
				705: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt705/snap_c1.jpg?nc=",
					location 	: "Ponnt de la Tortière",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.235227",
					dd_long		: "-1.555184"
				},
				706: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt706/snap_c1.jpg?nc=",
					location 	: "",
					zip			: "",
					city		: "",
					dd_lat		: "",
					dd_long		: "",
					outoforder	: "true"
				},
				707: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt707/snap_c1.jpg?nc=",
					location 	: "Liberté - Rue Chevreul",
					zip			: "44100",
					city		: "Nantes",
					dd_lat		: "47.198198",
					dd_long		: "-1.588828"
				},
				708: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt708/snap_c1.jpg?nc=",
					location 	: "Beauséjour",
					zip			: "44800",
					city		: "Saint Herblain",
					dd_lat		: "47.237467",
					dd_long		: "-1.586269"
				},
				709: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt709.jpg?nc=",
					location 	: "Prairie au Duc",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.204428",
					dd_long		: "-1.562452"
				},
				710: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt710.jpg?nc=",
					location 	: "Pont de Pirmil",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.197645",
					dd_long		: "-1.542400"
				},
				711: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt711.jpg?nc=",
					location 	: "Pont Aristide Briand - Avenue Jean Claude Bonduelle",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.209400",
					dd_long		: "-1.541410"
				},
				712: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt712.jpg?nc=",
					location 	: "Boulevard des Martiyrs Nantais de la Résistance",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.205940",
					dd_long		: "-1.547497"
				},
				713: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt713/snap_c1.jpg?nc=",
					location 	: "Pont Anne de Bretagne",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.209167",
					dd_long		: "-1.567188"
				},
				716: {
					url			: "http://infotrafic.nantesmetropole.fr/data/webcams/rt716.jpg?nc=",
					location	: "Rond-point des Marguyonnes",
					zip			: "44400",
					city		: "Rezé",
					dd_lat		: "47.192296",
					dd_long		: "-1.562987"
				},
				717: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt717.jpg?nc=",
					location 	: "Route de Vannes",
					zip			: "44800",
					city		: "Saint Herblain",
					dd_lat		: "47.246306",
					dd_long		: "-1.604290"
				},
				718: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt718.jpg?nc=",
					location 	: "Pont du Général De Gaulle vers Boulevard Vincent Gache",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.205804",
					dd_long		: "-1.538591"
				},
				720: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt720.jpg?nc=",
					location 	: "Route de Pornic",
					zip			: "44340",
					city		: "Bouguenais",
					dd_lat		: "47.187892",
					dd_long		: "-1.586685"
				},
				721: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt721.jpg?nc=",
					location 	: "Pont Willy Brandt",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.210477",
					dd_long		: "-1.537859",
				},
				722: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt722.jpg?nc=",
					location 	: "Pont de Pirmil",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.197645",
					dd_long		: "-1.542400"
				},
				723: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt723.jpg?nc=",
					location 	: "Route de Rennes vers Boulevard René Cassin",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.262591",
					dd_long		: "-1.583784"
				},
				726: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt726.jpg?nc=",
					location 	: "Porte de la Beaugeoire (périphérique)",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.254606",
					dd_long		: "-1.529905"
				},
				727: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt727.jpg?nc=",
					location 	: "Rond-point de Paris",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.233718",
					dd_long		: "-1.535914"
				},
				728: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt726.jpg?nc=",
					location 	: "Duchesse Anne - Chateau des ducs de Bretagne",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.216400",
					dd_long		: "-1.546802"
				},
				729: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt729/snap_c1.jpg?nc=",
					location 	: "Rond-point Boulevard Victor Hugo - Boulevard Gustave Roch",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.203665",
					dd_long		: "-1.551619"
				},
				731: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt731.jpg?nc=",
					location 	: "Pont des 3 continents",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.199973",
					dd_long		: "-1.561311"
				},
				732: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt732.jpg?nc=",
					location 	: "Passerelle Victor Schoelcher",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.210128",
					dd_long		: "-1.561943"
				},
				734: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt734.jpg?nc=",
					location 	: "Place de Jacksonville",
					zip			: "44100",
					city		: "Nantes",
					dd_lat		: "47.207116",
					dd_long		: "-1.572134"
				},
				735: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt735/snap_c1.jpg?nc=",
					location 	: "Boulevard du Petit Port",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.243662",
					dd_long		: "-1.556629"
				},
				736: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt736/snap_c1.jpg?nc=",
					location 	: "Prairie de Mauves - Boulevard de Seattle",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.220773",
					dd_long		: "-1.516763"
				},
				737: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt737/snap_c1.jpg?nc=",
					location 	: "Croix des Herses - Route de Clisson",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.192837",
					dd_long		: "-1.528085"
				},
				738: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt738/snap_c1.jpg?nc=",
					location 	: "Rezé Saint Paul",
					zip			: "44400",
					city		: "Rezé",
					dd_lat		: "47.184601",
					dd_long		: "-1.546058"
				},
				739: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt739/snap_c1.jpg?nc=",
					location 	: "Place Raymond Pointcaré",
					zip			: "44100",
					city		: "Nantes",
					dd_lat		: "47.222670",
					dd_long		: "-1.585228"
				},
				740: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt740.jpg?nc=",
					location 	: "Rue de Strasbourg",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.214861",
					dd_long		: "-1.550382"
				},
				741: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt741.jpg?nc=",
					location 	: "Allée Baco - Chaussée de la Madeleine",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.212360",
					dd_long		: "-1.552957"
				},
				742: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt742.jpg?nc=",
					location 	: "Place du Cirque",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.217946",
					dd_long		: "-1.557273"
				},
				743: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt743.jpg?nc=",
					location 	: "Pompes funèbres Pascal Leclerc - Rue de Strasbourg",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "",
					dd_long		: ""
				},
				744: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt744.jpg?nc=",
					location 	: "Place Sophie Trébuchet",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.220600",
					dd_long		: "-1.545700"
				},
				745: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt745.jpg?nc=",
					location 	: "Rue général Buat - Rue Dessaix",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.227288",
					dd_long		: "-1.542542"
				},
				746: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt746.jpg?nc=",
					location 	: "Croix Bonneau",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.209460",
					dd_long		: "-1.596053"
				},
				748: {
					url			: "http://infotrafic.nantesmetropole.fr/data/webcams/rt748.jpg?nc=",
					location	: "Place Vincent Auriol - Boulevard Jean Ingres",
					zip			: "44100",
					city		: "Nantes",
					dd_lat		: "47.221787",
					dd_long		: "-1.592872"
				},
				749: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt749.jpg?nc=",
					location 	: "Le bout des pavés - Route de Rennes",
					zip			: "44700",
					city		: "Nantes",
					dd_lat		: "47.253038",
					dd_long		: "-1.576410"
				},
				750: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt750.jpg?nc=",
					location 	: "Boulevard Albert Einstein",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.260448",
					dd_long		: "-1.560986"
				},
				751: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt751.jpg?nc=",
					location 	: "Boulevard des Poilus",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.228386",
					dd_long		: "-1.526336"
				},
				752: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt752.jpg?nc=",
					location 	: "Rue du Ranzay",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.252775",
					dd_long		: "-1.530080"
				},
				753: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt753.jpg?nc=",
					location 	: "Rue Aristide Briand - Trois Moulins - Rezé",  
					zip			: "44400",
					city		: "Rezé",
					dd_lat		: "47.178464",
					dd_long		: "-1.544449"
				},
				754: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt754.jpg?nc=",
					location 	: "Rond-point des Combattants d' Indochine - coté Sud",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.242411",
					dd_long		: "-1.534214"

				},
				755: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt755.jpg?nc=",
					location 	: "Indochine coté Nord - Rue du Bouffay", 
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.242460",
					dd_long		: "-1.534567"
				},
				756: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt756.jpg?nc=",
					location 	: "Rond-point d' Haluchère", 
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.248562",
					dd_long		: "-1.521305"
				},
				757: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt756.jpg?nc=",
					location 	: "Avenue de la gare Saint Joseph - Boulevard de la Beaugeoire",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.258821",
					dd_long		: "-1.527751"
				},
				758: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt758.jpg?nc=",
					location 	: "Pont Léopold Sédar Senghor",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.206892",
					dd_long		: "-1.526829"
				},
				759: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt759/snap_c1.jpg?nc=",
					location 	: "Boulevard Martin Luther King", 
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.259027",
					dd_long		: "-1.556778"
				},
				760: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt760/snap_c1.jpg?nc=",
					location 	: "Boulevard Martin Luther King",
					zip			: "",
					city		: "",
					dd_lat		: "",
					dd_long		: ""
				},
				766: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt766.jpg?nc=",
					location 	: "Rue du Perray",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.241180",
					dd_long		: "-1.508848"
				},
				767: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt767.jpg?nc=",
					location 	: "Route de Sainte-Luce en intérieur",
					zip			: "44300",
					dd_lat		: "47.246320",
					dd_long		: "-1.502024"
				},
				768: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt768.jpg?nc=",
					location 	: "Route de Sainte-Luce en extérieur", 
					zip			: "44300",
					dd_lat		: "47.246783",
					dd_long		: "-1.500025"
				},
				769: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt769.jpg?nc=",
					location 	: "Pont de Tbilissi - Quai Malakoff",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.213215",
					dd_long		: "-1.536662"
				},
				770: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt770.jpg?nc=",
					location 	: "Mail Pablo Picasso - Boulevard de Berlin", 
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.216375",
					dd_long		: "-1.534232"
				},
				771: {
				url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt771.jpg?nc=",
					location 	: "Boulevard des Pas Enchantés", 
					zip			: "44230",
					city		: "Saint Sébastien sur Loire",
					dd_lat		: "47.204801",
					dd_long		: "-1.523494"
				},
				772: {
				url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt772.jpg?nc=",
					location 	: "Moutonnerie - Boulevard Stalingrad", 
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.219820",
					dd_long		: "-1.531865"
				},
				773: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt773.jpg?nc=",
					location 	: "Cours John Kennedy",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.214332",
					dd_long		: "-1.550005"

				},
				774: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt774.jpg?nc=",
					location 	: "Boulevard Alexandre Millerand",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.208114",
					dd_long		: "-1.530509"
				},
				775: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt775.jpg?nc=",
					location 	: "Rue Célestin Freinet",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.206617",
					dd_long		: "-1.534015"
				},
				776: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt776.jpg?nc=",
					location 	: "Place de la République",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.205058",
					dd_long		: "-1.554347"
				},
				777: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt777/snap_c1.jpg?nc=",
					location 	: "Boulevard des Antilles",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.199807",
					dd_long		: "-1.573348"
				},
				778: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt778.jpg?nc=",
					location 	: "Pont Haudaudine",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.207482",
					dd_long		: "-1.554312"
				},
				779: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt779.jpg?nc=",
					location 	: "Place Victor Mangin",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.200483",
					dd_long		: "-1.544510"
				},
				780: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt780.jpg?nc=",
					location 	: "Place Saint Similien",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.220222",
					dd_long		: "-1.559035"
				},
				781: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt781.jpg?nc=",
					location 	: "Porte de Carquefou (périphérique)",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.252406",
					dd_long		: "-1.517047"
				},
				782: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt782.jpg?nc=",
					location 	: "Pont Éric Tabarly - Boulevard de Sarrebruck",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.213450",
					dd_long		: "-1.529697"
				},
				786: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt786.jpg?nc=",
					location 	: "Pont Éric Tabarly - Rue du Général de Bollardière",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.211487",
					dd_long		: "-1.528204"
				},
				787: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt787.jpg?nc=",
					location 	: "Boulevard Robert Schuman - Avenue de la Close",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.241129",
					dd_long		: "-1.573182"
				},
				788: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt788.jpg?nc=",
					location 	: "Pont Général de la Motte Rouge",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.228541",
					dd_long		: "-1.553078"
				},
				789: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt789.jpg?nc=",
					location 	: "Place René Bouhier - Rue Charles Brunellière",
					zip			: "44100",
					city		: "Nantes",
					dd_lat		: "47.209172",
					dd_long		: "-1.569081"
				},
				790: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt790.jpg?nc=",
					location 	: "Square de l' EDIT de Nantes",
					zip			: "44100",
					city		: "Nantes",
					dd_lat		: "47.214480",
					dd_long		: "-1.567611"
				},
				791: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt791.jpg?nc=",
					location 	: "Boulevard Gabriel Guist' Hau - Rue Bertrand Geslin",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.216145",
					dd_long		: "-1.565847"
				},
				792: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt792.jpg?nc=",
					location 	: "Place Eugène Livet",
					zip			: "44000",
					city		: "Nantes",
					dd_lat		: "47.211410",
					dd_long		: "-1.567438"
				},
				794: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt794.jpg?nc=",
					location 	: "Souillarderie",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.237594",
					dd_long		: "-1.516585"
				},
				795: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt795/snap_c1.jpg?nc=",
					location 	: "Boulevard des Européens",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.280332",
					dd_long		: "-1.514378"

				},
				797: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt797/snap_c1.jpg?nc=",
					location 	: "Pont Général Audibert",
					zip			: "44200",
					city		: "Nantes",
					dd_lat		: "47.207049",
					dd_long		: "-1.548205"
				},
				798: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt798/snap_c1.jpg?nc=",
					location 	: "Boulevard de Doulon",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.224208",
					dd_long		: "-1.520293"
				},
				799: {
					url 		: "http://infotrafic.nantesmetropole.fr/data/webcams/rt799/snap_c1.jpg?nc=",
					location 	: "Boulevard des Belges - Rue du Coudray",
					zip			: "44300",
					city		: "Nantes",
					dd_lat		: "47.234516",
					dd_long		: "-1.541126"
				}
			};
			return cameras;
		}
		else {
			console.info("Les caméras existent déjà.");
		}

	}, function(error, committed) {
		if(error) {
			console.log("Unexpected error at creating data.", error);
		}
	});	
}

