document.addEventListener("DOMContentLoaded", function() {
    const rules = [
        {
            title: "Win RP",
            description: "Ne pas prendre les éléments de votre environnement en compte ou bien vous attribuer des avantages en jeu lors d'une scène constitue du Win RP. Si par exemple vous êtes dans une course poursuite et que vous prenez une voiture de plein fouet, vous devez vous arrêter même si votre véhicule fonctionne encore. Prendre la fuite après un tel accident est INTERDIT."
        },
        {
            title: "Revenge Kill",
            description: "Lorsque vous mourrez RP, vous devez oublier qui vous a tué, comment, quand et pourquoi. Une fois votre nouveau personnage créé, vous obtenez une toute nouvelle identité. Le Revenge Kill omet cela puisqu'il vous pousse à aller vous venger de votre ancien agresseur."
        },
        {
            title: "Raccourcis RP",
            description: "Comme l’indique la règle du Mass RP, La ville est bondée de monde. Il est interdit d'accuser un citoyen de faire de l’illégal. En d'autres termes, ne faites pas de raccourcis rapides puisqu'il faut toujours prendre en compte la diversité des possibilités."
        },
        {
            title: "Powergaming",
            description: "Si vous voyez un joueur plonger au fond de la mer, y rester plus de dix minutes pour échapper à la police par exemple, et ensuite ressortir sur la plage tranquillement comme si de rien n'était, vous venez d'assister à du Powergaming."
        },
        {
            title: "Bunny Hopping",
            description: "Certains n'hésitent pas à utiliser une technique de déplacement appelée Bunny Hopping. Il s'agit en fait de courir tout en sautant afin d'aller plus vite. Ce qui est strictement interdit."
        },
        {
            title: "Pain RP",
            description: "Ce terme correspond à la simulation de la douleur qu'elle soit physique ou morale. La respecter implique d'accepter les effets d'une balle, d'un coup de batte ou bien d'une chute que peut recevoir votre personnage."
        },
        {
            title: "Carjacking",
            description: "Comme dans la vraie vie, carjacker un véhicule signifie tout simplement de sortir le conducteur de sa voiture pour le voler. Cette action peut être autorisée si le contexte le permet. Si vous êtes un citoyen lambda et que vous devez vous rendre quelque part dans la ville mais que vous n'êtes pas motorisé, tenter de carjacker une voiture n'est absolument pas autorisé."
        },
        {
            title: "Chicken Run",
            description: "Cela consiste à courir dans tous les sens, changeant de direction rapidement, afin d'éviter des coups de feu par exemple. Ce n'est pas quelque chose de possible dans la vraie vie, ce qui en fait donc une action strictement interdite. Vous y essayer peut vous exposer à de lourdes sanctions."
        },
        {
            title: "Cop Bait",
            description: "Dans la vraie vie, il est interdit de mettre au défi la LSPD pour 'rigoler'. Et bien dans GTA RP c'est la même chose. Le fait de provoquer intentionnellement la police pour rien s'appelle du Cop Bait. Quand on se couche avec le cul qui gratte, on se lève avec le doigt qui pue."
        },
        {
            title: "Fear RP",
            description: "Il s'agit de simuler la peur au cours d’une scène RP. Dans la vraie vie tout le monde (ou presque) craint la vue d'un fusil à pompe. Si vous décidez de sortir une arme ou bien d'appeler la police alors que vous êtes vous-même braqué constitue du No Fear RP ce qui est interdit."
        },
        {
            title: "Force RP",
            description: "Si lors d'une scène vous décidez d’obliger un ou plusieurs joueurs avec qui vous échangez à aller dans votre sens, il s'agit de Force RP. Personne ne doit obliger quelqu'un d'autre à faire quelque chose dont il n'a pas envie. GTA RP reste avant tout un jeu vidéo et jouer doit être plaisant."
        },
        {
            title: "HRP",
            description: "Cet acronyme est fait pour Hors RolePlay et désigne toutes les actions qui viennent du joueur et non du personnage. Si jamais un streamer reçoit une information dont il n'a pas connaissance en jeu de la part de son chat mais qu'il s'en sert en jeu, cela revient à faire du HRP."
        },
        {
            title: "Mass RP",
            description: "Vous imaginez bien que les rues de “Passion” sont bondées de monde. C'est tout le principe du Mass RP puisqu'il demande aux joueurs de prendre en compte qu'une zone n'est pas vide malgré l'absence de joueurs. Si un seul policier est connecté sur le serveur, il n'est pas pour autant seul dans le commissariat et vous ne pouvez pas y faire ce que bon vous semble."
        },
        {
            title: "Métagaming",
            description: "Allant de paire avec le HRP, jouer Métagame revient à se servir d'informations que vous n'avez pas obtenues en jeu. Si jamais vous voyez le nom d'un joueur au-dessus de son avatar, que vous l'utilisez en jeu mais que vous ne l'avez jamais rencontré avant, il s'agit du Méta Gaming."
        },
        {
            title: "Streamhack",
            description: "Le fait de “Streamhack” , c’est d'aller sur un stream de quelqu’un qui est en train de jouer dans le serveur pour prendre des informations ainsi que de voir où il est pour faire des scènes ou aller - l’embêter."
        },
        {
            title: "MixRP",
            description: "Mélanger le RP et HRP en jeu ( Exemple dans la même phrase : je bug j'ai mal a la tête 🤕)"
        }
    ];
    const reglement = [
        {
            title: "Art. S1",
            description: " Il est important de respecter les autres joueurs/joueuses."
        },
        {
            title: "Art. S2",
            description: "L’utilisation de bugs ou de logiciels de triche est strictement interdite"
        },
        {
            "title": "Art. S3",
            "description": "Il est interdit de parler Hors rôles play (HRP) en jeu. Pour toutes histoires HRP, il y a la catégorie “hrp” dans le discord."
        },
        {
            "title": "Art. S4",
            "description": "Il est interdit d’être AFK dans les lieux publics, une zone afk existe. (Toujours être dans un lieu isolé)"
        },
        {
            "title": "Art. S5",
            "description": "Il est strictement interdit de se déconnecter ou de quitter le jeu dans le but d’éviter une interaction RP. En cas de crash, prévenez immédiatement sur le Discord dans Besoin d'aide (Risque de lourdes sanctions) !"
        },
        {
            "title": "Art. S6",
            "description": "Il est interdit de donner un nom TROLL à son personnage, comme “Jean-Fil Tamair…” ou autre jeu de mot débile."
        },
        {
            "title": "Art. S7",
            "description": "N’interrompez jamais votre scène, même si la personne en face de vous commet une erreur (volontaire ou pas). Essayez de contacter au plus vite un membre du staff afin qu’il puisse vous regarder. (/report + le message dans le chat in-game mais privilégiez le chanel Besoin d'aide)."
        },
        {
            "title": "Art. S8",
            "description": "Il est interdit de tirer profit d’éléments obtenus de manière HRP (Discord, Chat In-Game, Stream, etc…) – Il est interdit de reconnaître un véhicule avec son modèle ainsi que sa couleur."
        },
        {
            "title": "Art. S9",
            "description": "Les métiers représentant directement l'État (LSDP, EMS) ne peuvent pratiquer des activités illégales sauf autorisation du staff."
        },
        {
            "title": "Art. S10",
            "description": "Interdiction d’utiliser un véhicule d’entreprise dans un but différent du cadre de l’entreprise (se déplacer rapidement, transporter des citoyens, etc ..)."
        },
        {
            "title": "Art. S11",
            "description": "Les kits de réparation ne peuvent être utilisés que si les mécaniciens ne sont pas présents ou pas disponibles (Après 10 minutes d'attente), les medikits doivent être utilisés uniquement dans le cadre d’une scène RP !"
        },
        {
            "title": "Art. S12",
            "description": "Il est interdit de reconnaître la couleur de la peau si elle n'est pas apparente, il en va de même pour la voix d’une personne lorsqu’elle possède un masque."
        },
        {
            "title": "Art. S13",
            "description": "RP sexe strictement interdit dans les lieux publics ! Tenue correcte exigée dans les lieux publics (consentement obligatoire)."
        },
        {
            "title": "Art. S14",
            "description": "L’utilisation d’un modificateur de voix n'est pas autorisée."
        },
        {
            "title": "Art. S15",
            "description": "Il est interdit de rester AFK sur le serveur pour récolter le salaire (AFK Farm)."
        },
        {
            "title": "Art. S16",
            "description": "Il est interdit de voler un véhicule d’entreprise ou de service public (LSPD EMS/ Mécano et Taxi) excepté si cela est justifié par l’action de la scène."
        },
        {
            "title": "Art. S17",
            "description": "Vous devez utiliser uniquement le véhicule d’entreprise floqués qui vous sont donnés par l’entreprise pour vos missions."
        },
        {
            "title": "Art. S18",
            "description": "Interdit de faire du (business) avec l'argent. Proposer de l'argent IRL contre de l'argent ingame est strictement interdit, et sera suivie d'un ban immédiat."
        },
        {
            "title": "Art. S19",
            "description": "L'usage abusif du chat tweeter anonyme est sanctionnable, merci de l'utiliser à bon escient."
        },
        {
            "title": "Art. S20",
            "description": "Vous pouvez refuser de payer vos amendes, mais cela entraînera un allongement du temps de prison ou de l'amende. (voir avec la LSPD ou un Admin)."
        },
        {
            "title": "Art. S21",
            "description": "Le respawn est interdit lorsqu’un ambulancier est en ville."
        },
        {
            "title": "Art. S22",
            "description": "Lorsqu’un EMS intervient dans une scène RP et que vous nécessitez un soin particulier, vous devez absolument respecter leurs décisions et jouer suivant ce qu’il vous dit."
        },
        {
            "title": "Art. S23",
            "description": "Une personne ayant été mise en coma dans un cadre de fusillade / échange de tir , que ce soit LSPD ou civil, devra rester à l’unité X jusqu’à ce que quelqu’un viennent vous aider, en activant la démarche “blessé”, vous ne pouvez pas partir par vos propres moyens."
        },
        {
            "title": "Art. S24",
            "description": "Le ALT + F4 est strictement interdit, même si aucun service de secours n'est en ville ! (SOUS PEINE DE BAN)."
        },
        {
            "title": "Art. S25",
            "description": "Sauf contrôle de billet avec machine etc vous n'êtes pas en mesure de différencier \"argent sale\" de \"propre\"."
        },
        {
            "title": "Art. S27",
            "description": "Pas de stream ou de voc discord lorsque vous êtes en RP (Metagaming)."
        },
        {
            "title": "Art. S28",
            "description": "Pas de ping au staff ni de DM."
        },
        {
            "title": "Art. S29",
            "description": "Hélicoptère : Vous pouvez dépasser légèrement les frontières mais ATTENTION interdiction de se poser au delà."
        }    
    ]

    const reglementlspd = [
        {
            title: "",
            description: "Il est formellement interdit à tout membre de la L.S.P.D de s'engager dans des activités illégales, soit corrompu ou divulgue des informations obtenues dans l'exercice de ses fonctions.  (sous peine de licenciement IG) et (une sanction admin sera appliquée)"
        },
        {
            title: "Art. P1",
            description: "Il est bien évidemment interdit de demander l’identité d’une personne dans le coma, car celle-ci ne peut pas communiquer."
        },
        {
            title: "Art. P2",
            description: "Les négociations d’une prise d’otages avec la LSPD doivent se faire avec un «négociateur» en aucun cas cela doit se dérouler via «Mail», sauf pour envoyer une photo prouvant le bon état de santé de la victime."
        },
        {
            title: "Art. P3",
            description: "Il est interdit de percuter (PIT) les fugitifs pour les arrêter, sauf si la course poursuite dure plus de 15 minutes. Les PIT doivent être effectués au maximum à 50 km/h, cependant il est autorisé de couper la route, tirer dans les roues (hors du véhicule de fonction), de taser (hors du véhicule de fonction). Tirer sur un suspect doit être utilisé seulement en dernier recours (après que les fugitifs aient ouvert le feu par exemple)."
        },
        {
            title: "Art. P4",
            description: "Il est interdit d'avoir une interaction rp avec un mort par balle."
        },
        {
            title: "Art. P5",
            description: "Il est interdit d'être en tenue civile lors de votre prise de service (sauf pour les hauts gradés)."
        },
        {
            title: "Art. P6",
            description: "Équipez-vous selon la situation (patrouille, prise d'otage...)."
        },
        {
            title: "Art. P7",
            description: "Il est interdit de jouer le rôle d'un policier corrompu, sauf si cela est spécifiquement autorisé par un dossier validé par le 'STAFF'."
        },
        {
            title: "Art. P8",
            description: "Interdiction d’utiliser ou de se balader avec ses armes de service si vous n'êtes pas en service. Les armes doivent être déposées dans votre casier. Vos armes de fonctions sont strictement personnelles. Il est de ce fait totalement interdit de les vendre, de les prêter ou de les offrir."
        },

        {
            title: "Art. P10",
            description: "Ne laissez pas vos véhicules de fonction n’importe où dans la ville. S’ils sont en panne ou hors service, vous devez appeler un dépanneur."
        },
        {
            title: "Art. P11",
            description: "Un règlement interne à la LSPD est mis en place et sera disponible pour votre formation dans la police. Le non-respect du règlement entraînera un avertissement, puis une mise à pied et enfin une révocation de la LSPD."
        },
        {
            title: "Art. P12",
            description: "Quand une personne prend la fuite en voiture, vous devez neutraliser le véhicule et non l’individu. Le but étant de pouvoir arrêter l’individu."
        }
    ]
    const reglementillegal = [
        {
            title: "Art. I1",
            description: "Attention, une peine de prison ferme entraîne un WIPE. Dans le cas d’une peine de prison ferme, le personnage sera WIPE après avoir été transporté en prison."
        },
        {
            title: "Art. I2",
            description: "Interdiction de fouiller ou de regarder la carte d'identité d’un(e) citoyen(ne) sans son accord au préalable (Sauf si la personne est braquée et déclare avoir sa carte d'identité sur lui)."
        },
        {
            title: "Art. I3",
            description: "Un minimum d'interaction (dialogue, tir de sommation) est nécessaire avant de neutraliser une cible. (La communication est beaucoup mieux que le Gun-Fight)."
        },
        {
            title: "Art. I4",
            description: "Il est interdit de s'associer entre GANG, vous pouvez évidemment faire du business ensemble mais pas d'association. (Alliance Non Autorisée)."
        },
        {
            title: "Art. I5",
            description: "Voler des armes à un agent de La LSPD doit donner lieu à une scène RP (braquage, enlèvement). Ne pas les prendre réellement, dire /me lui enlève ces armes/radio etc..."
        },
        {
            title: "Art. I6",
            description: "Il est interdit de fouiller une personne à terre morte par balle (Aucune interaction rp est autorisé avec un mort)."
        },
        {
            title: "Art. I7",
            description: "Il est interdit de faire retirer quelqu’un à la banque lors d’un braquage. (et même en dehors quand vous le braquez)."
        },
        {
            title: "Art. I8",
            description: "La mort RP d’un joueur doit être au préalable validée par le staff (G.DOC), des explications doivent être aussi validées. On ne peut pas tuer une personne juste pour l’amusement !"
        },
        {
            title: "Art. I9",
            description: "Pour utiliser les points de drogue, il faut simplement les trouver et faire attention à la police !"
        },
        {
            title: "Art. I10",
            description: "Il est interdit de se déconnecter ou d'être AFK sur un point de drogue !"
        },
        {
            title: "Art. I11",
            description: "Si vous décidez de donner des informations sur les points illégaux aux services des forces de l'ordre, vous vous exposez à une mort RP, si des preuves sont trouvées."
        },
        {
            title: "Art. I12",
            description: "La LSPD s’expose à une altercation s’il approche de trop près un point chaud : (point de drogue, cité, campement Gitan, etc…)."
        },
        {
            title: "Art. I13",
            description: "Il est interdit de tirer à vue sur d'autres joueurs sans raison valable. (freekill, Freeshoot)"
        },
        {
            title: "Art. I14",
            description: "Il est interdit de se dérober entre vous pour farm plus vite ( ban + démote du gang instant )."
        },
        {
            title: "Art. I15",
            description: "Il est interdit de mettre dans le coma une personne coopérative si vous êtes masqué. (freekill)."
        },
        {
            title: "Art. I16",
            description: "Le GunFight trop rapide et simple sera sanctionnable. (la parole est la meilleure solution)."
        },
        {
            title: "Art. I17",
            description: "Il est interdit d'utiliser un 'faux otage' pour un braquage de banque."
        },
        {
            title: "Art. I18",
            description: "La plupart des commerces sont braquables. Ces braquages se passent en temps réel. Une fois le braquage commencé, vous pouvez vous échapper à tout moment sans attendre la LSPD. Si la LSPD arrive avant votre départ, vous serez appréhendé ou pourrez utiliser vos armes."
        },
        {
            title: "Art. I19",
            description: "Braquage de banque. Vous serez obligé d'attendre la LSPD et d'avoir un otage pour braquer la banque / concess / bijouterie uniquement."
        },
        {
            title: "Art. I21",
            description: "Est interdit de braquer le négociateur de la LSPD."
        },
        {
            title: "Art. I22",
            description: "Pour transporter ou récolter la drogue ou il vous faut un sac OBLIGATOIREMENT. (tu récolte pas en mettant dans ton caleçon). Il est aussi interdit de vendre en étant dans un véhicule !"
        },
        {
            title: "Art. I23",
            description: "Tout otage de camp adverse ou autre a un temps maximum de 3 heures en cage."
        },
        {
            title: "Art. I24",
            description: "Est évidemment interdit d'enlever son bracelet électronique sans l'accord d'un agent de la LSPD au gradé."
        },
        {
            title: "Art. I25",
            description: "Les braquages de commerces se font avec un minimum de 2 policiers en ville. Vous avez le droit à 2 braquages par jour et par groupe."
        },
        {
            title: "Art. I26",
            description: "Le braquage de la banque  se fait avec un minimum de 2 policiers en ville."
        },
        {
            title: "Art. I27",
            description: "Le braquage civil peut avoir lieu mais sans ABUS. Vous avez le droit de prendre la moitié de ce qu’il porte."
        },
        {
            title: "Art. I28",
            description: "Si un citoyen vient dans un zone que vous contrôlez et y ramasse des stups ou autre objet vous pouvez lui reprendre la totalité"
        },
        {
            title: "Art. I30",
            description: "Braquage en point illégal drogues, vente d'armes ou autre, (pas besoin de présence policier) entre personnes de l'illégal."
        },
        {
            title: "Art. I31",
            description: "Fear / Fair-Play est important pour de bonne scènes jouer la scène correctement. (Vous n'êtes pas des super-héros)."
        },
        {
            title: "Art. I32",
            description: "Interdit d’utiliser une macro pour farmer plus vite sous peine de BAN!"
        },
        {
            title: "Art. I33",
            description: "! En travaillant dans l’illégal, votre vie sera mise en danger en permanence."
        },
        {
            title: "Art. I34",
            description: "Il est interdit de se réfugier dans une zone SAFE, dans son quartier ou sa maison si la scène commence avant, vous devez absolument semer les suiveurs avant de vous y rendre."
        },
        {
            title: "Art. I35",
            description: "Il est interdit de récupérer quoi que ce soit sur un policier en service."
        },
        {
            title: "Art. I36",
            description: "Il est strictement interdit de prendre des points de téléportation en poursuite. Vous devez attendre 5 min après avoir totalement perdu la police."
        },
        {
            title: "Art. I37",
            description: "Lors d’un braquage d’entreprise avec le patron présent, vous ne pouvez récupérer que 10 000 $ par semaine."
        },
        {
            title: "Art. I38",
            description: "Vous pouvez transporter 3000$ de liquide sur vous."
        }
    ]
    const wipe = [
        {
            title: "Le wipe de personnage sera autorisé sous certaines conditions : ",
        },
        {
            description: "Si vous vous retrouvez bloqué en RP "
        },
        {
            description: "Votre personnage n’a plus de scènes en cours."
        },
        {
            description: "Un dossier de wipe et un nouveau background doivent être envoyés via un ticket et validés par le staff (sous Gdoc)."
        },
        {
            description: "En cas de wipe d’un patron, il devra d’abord vendre l’entreprise et donner les véhicules au nouveau patron. Il peut aussi avec la validation du staff légué son entreprise au co-patron."
        },
        {
            description: "Après un wipe votre personnage ne pourra pas avoir de liens familiaux avec une personne déjà présente en ville depuis plus d’une semaine. (sauf accord du staff)."
        },
        {
            description: "Le personnage doit avoir au minimum une durée de 15 jours pour pouvoir être wipe. (sauf mort rp)."
        },
        {
            description: "Le wipe sera effectué seulement une fois le dossier validé par un membre du staff."
        },
        {
            description: "<span style='color:#820000;'>Interdiction</span> de leguer ou céder des biens avant afin de récupérer après le wipe."
        }
    ]
    const autres = [
        {
            title: "<span style='color:#820000;'>Interdiction</span> de free-loot (de voler sans aucune raison)",
        },
        {
            title: "Safe Zone (sauf sous dossier) :",
        },
        {
            description: " Poste De la LSPD 👮‍♂️"
        },
        {             
            description: " Hôpital 🏥"
        },
        {
            description: " Gouvernement"
        },
        {
            description: " Hotel A / B / C"
        },
        {
            title: "Vocabulaire RP :",
        },
        {
            description: "J’ai mis mes lentilles = Être en live ou stream."
        },
        {
            description: "Tempête = Reboot serveur."
        },
        {
            description: "Maux de tête = Crash."
        },
        {
            description: "Mal aux yeux = Desync ou Lag."
        },
        {
            description: "Avoir la peau pâle = Être invisible."
        },
        {
            description: "Avoir des fourmis dans les jambes = Passer à travers la MAP."
        },
        {
            description: "Sortir d’une angine = Avoir un problème micro."
        },
        {
            description: "Trouver une excuse comme : aller pisser, donner un coup de fil… = S’absenter ou être AFK quelques minutes."
        },
        {
            description: "Intranet = Discord."
        },
        {
            description: "Concitoyen = PNJ."
        },
        {
            description: "Citoyen = Joueur."
        },
        {
            title: "/Me : le /me peut être utilisé pour des actions non réalisables, comme :",
        },
        {
            description: "/me met un bâillon sur la bouche…"
        },
        {
            description: "/me recoud la plaie du patient…"
        },
        {
            description: "Le /me peut être utilisé pour des pensées, comme :"
        },
        {
            description: "/me espère qu'il ne m'a pas vu caché derrière la porte…"
        },
        {
            description: "/me regarde mon patron de travers…"
        }
    ]
    const rulesList = document.getElementById("rules-list");
    
    const ruleElement1 = document.createElement("h2");
    ruleElement1.classList.add("title");
    ruleElement1.innerHTML = `LEXIQUE RP`;
    rulesList.appendChild(ruleElement1);

    rules.forEach(rule => {
        const ruleElement = document.createElement("div");
        ruleElement.classList.add("rule");
        ruleElement.innerHTML = `
            <p class="rule-name"><span>${rule.title}</span> : ${rule.description}</p>
        `;
        rulesList.appendChild(ruleElement);
    });

    const ruleElement2 = document.createElement("h2");
    ruleElement2.classList.add("title");
    ruleElement2.innerHTML = `Règlement GÉNÉRAL`;
    rulesList.appendChild(ruleElement2);

    reglement.forEach(reglement => {
        const ruleElement = document.createElement("div");
        ruleElement.classList.add("rule");
        ruleElement.innerHTML = `
            <p class="rule-name"><span>${reglement.title}</span> : ${reglement.description}</p>
        `;
        rulesList.appendChild(ruleElement);
    });


    const ruleElement3 = document.createElement("h2");
    ruleElement3.classList.add("title");
    ruleElement3.innerHTML = `Règlement LSPD`;
    rulesList.appendChild(ruleElement3);

    reglementlspd.forEach(reglementlspd => {
        const ruleElement = document.createElement("div");
        ruleElement.classList.add("rule");
        if (reglementlspd.title) {
            ruleElement.innerHTML = `
            <p class="rule-name"><span>${reglementlspd.title}</span> : ${reglementlspd.description}</p>
            `;
        } else {
            ruleElement.innerHTML = `
            <p class="rule-name" style='color:#820000;'>${reglementlspd.description}</p>
            `;
        }
        rulesList.appendChild(ruleElement);
    });

    const ruleElement4 = document.createElement("h2");
    ruleElement4.classList.add("title");
    ruleElement4.innerHTML = `Règlement ILLÉGAL`;
    rulesList.appendChild(ruleElement4);

    reglementillegal.forEach(reglementillegal => {
        const ruleElement = document.createElement("div");
        ruleElement.classList.add("rule");
        if (reglementillegal.title) {
            ruleElement.innerHTML = `
            <p class="rule-name"><span>${reglementillegal.title}</span> : ${reglementillegal.description}</p>
            `;
        } else {
            ruleElement.innerHTML = `
            <p class="rule-name" style='color:#820000;'>${reglementillegal.description}</p>
            `;
        }
        rulesList.appendChild(ruleElement);
    });


    const ruleElement5 = document.createElement("h2");
    ruleElement5.classList.add("title");
    ruleElement5.innerHTML = `Wipe`;
    rulesList.appendChild(ruleElement5);

    wipe.forEach(wipe => {
        const ruleElement = document.createElement("div");
        ruleElement.classList.add("rule");
        if (wipe.title) {
            ruleElement.innerHTML = `
            <p class="rule-name"><h3 style="color:#818181;">${wipe.title}</h3></p>
            `;
        } else {
            ruleElement.innerHTML = `
            <p class="rule-name"><span>&emsp;&emsp;&emsp;-</span> ${wipe.description}</p>
            `;
        }
        rulesList.appendChild(ruleElement);
    });

    const ruleElement6 = document.createElement("h2");
    ruleElement6.classList.add("title");
    ruleElement6.innerHTML = `Autres points`;
    rulesList.appendChild(ruleElement6);

    autres.forEach(autres => {
        const ruleElement = document.createElement("div");
        ruleElement.classList.add("rule");
        if (autres.title) {
            ruleElement.innerHTML = `
            <p class="rule-name">${autres.title}</p>
            `;
        } else {
            ruleElement.innerHTML = `
            <p class="rule-name"><span>&emsp;&emsp;&emsp;-</span> ${autres.description}</p>
            `;
        }
        rulesList.appendChild(ruleElement);
    });


    const ruleElement7 = document.createElement("div");
    ruleElement7.style.fontSize="17px";
    ruleElement7.style.textAlign="center";
    ruleElement7.style.color="#818181";
    ruleElement7.innerHTML = `Un grand merci à ceux qui ont pris le temps de lire attentivement le règlement du serveur Passion RP. Votre engagement envers le respect des règles contribue à créer une expérience de jeu agréable pour tous. Ensemble, nous pouvons construire une communauté solide et immersive.`;
    rulesList.appendChild(ruleElement7);


});
