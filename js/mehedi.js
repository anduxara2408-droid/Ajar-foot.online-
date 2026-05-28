// MEHEDI - IA Assistant Premium avec Groq API
// Version 8.0 - Réponses ultra-précises sur Ajar

(function(){
    console.log('MEHEDI chargé - Version Groq IA v8');

    // Configuration Groq API
    const GROQ_API_KEY = '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';
    const MASCOTTE = '/images/mehedi/MEHEDI.jpeg';

    // ========== BASE DE CONNAISSANCES LOCALES ULTRA-PRÉCISES ==========
    const ajarknowledge = {
        // LOCALISATION
        situation: "Ajar est situé dans la région du Guidimakha, en Mauritanie méridionale. Le village se trouve à environ 15°31'02.8\"N de latitude et 12°37'55.5\"W de longitude. Il est situé à proximité des villages d'Agoinitt, Tachott, Ouloumbony et Diaguilly. Il ne se trouve ni à Nouakchott, ni à Dakhlet Nouadhibou, ni à Rosso. C'est un village rural du Guidimakha.",
        
        // RÉGION
        region: "Guidimakha",
        wilaya: "Guidimakha",
        
        // HISTOIRE
        histoire: "L'histoire d'Ajar commence entre 1909 et 1910. Les premiers habitants venaient de Diaguilly pour cultiver les terres. Les Diabira sont les fondateurs, avec Ladji Hamady Diabira comme patriarche. Le premier match de football a eu lieu en 1983 contre Tachott (victoire 2-0).",
        
        // CHEFFERIE
        chefs: "Les chefs du village viennent de la famille Diabira. Le dernier chef était Siakha Ladji Diabira, décédé le 16 juillet 2025. La succession est en préparation, avec Ladji Boubou Diabira comme successeur pressenti.",
        
        // INFRASTRUCTURES
        forage: "Le forage a été construit en 2007 par Ladji Boubou Diabira et des partenaires européens.",
        terrain: "Le terrain de football existe depuis 1983. Quatre générations de joueurs y ont joué.",
        dispensaire: "Le dispensaire a été inauguré en 2003 par le CER et Ladji Boubou Diabira.",
        
        // FOOTBALL
        clubs: "7 clubs officiels : FC Walé (3 titres), FC Dango (2017), FC Soumpou (2022), Lion d'Ajar (2024), Kelifado (2021), FC Kawral, FC Nassr.",
        wale: "FC Walé a été fondé en 2015 par Pape Demba Soumare. Titres : 2018, 2019, 2023. 28 joueurs.",
        
        // ASSOCIATIONS
        jeunesse: "L'AJCDD est présidée par Djiby Sanghare depuis 2025. Bureau : Zeinabou Diallo (VP), Pape Demba Soumare (SG), Mody Sy (trésorier).",
        adal: "ADAL a été créée en 2021 par Diabe Soumare. Président : Moussa Boubou Sy. Récépissé : FA 010000242301202305689 du 24/01/2023.",
        
        // CONTACT
        contact: "Email : contact@ajar-foot.online, administration@ajar-foot.online, partenariat@ajar-foot.online. Tél : +222 49 03 76 97.",
        
        // ÉQUIPE FRANCE
        france: "L'équipe d'Ajar en France a été fondée en 2022. Président : Papis Sakho. Meilleur résultat : demi-finale du tournoi KEBE 2024.",
        
        // CULTURE
        culture: "Tamtam (instrument), dimmu (danse soninké). La langue soninké est parlée."
    };

    // Réponse locale ultra-précise
    function getLocalResponse(msg) {
        const m = msg.toLowerCase().trim();

        // Localisation géographique
        if (m.includes('où') && (m.includes('situé') || m.includes('se trouve') || m.includes('localisation') || m.includes('adresse'))) {
            return ajarknowledge.situation;
        }
        if (m.includes('guidimakha')) return `Ajar est situé dans la région du ${ajarknowledge.region} en Mauritanie.`;
        if (m.includes('région')) return `Ajar se trouve dans le ${ajarknowledge.region}, en Mauritanie méridionale.`;
        
        // Informations géographiques
        if (m.includes('latitude') || m.includes('longitude') || m.includes('coordonnées') || m.includes('gps')) {
            return "Les coordonnées GPS du village Ajar sont : 15°31'02.8\"N (latitude) et 12°37'55.5\"W (longitude), soit 15.517452, -12.632089 en décimales.";
        }
        
        // Correction des fausses informations
        if (m.includes('nouakchott') || m.includes('dakhlet') || m.includes('nouadhibou') || m.includes('rosso')) {
            return "Attention : Ajar n'est pas situé à Nouakchott, ni à Dakhlet Nouadhibou, ni à Rosso. Le village se trouve dans la région du Guidimakha, en Mauritanie méridionale, près des villages d'Agoinitt et de Tachott.";
        }

        // Salutations
        const salutations = ['bonjour', 'bonsoir', 'salut', 'coucou', 'hello', 'hi', 'hey', 'slt', 'bjr'];
        if (salutations.some(s => m.includes(s))) {
            return "Salut ! Je suis MEHEDI, l'assistant officiel du village Ajar. Je connais parfaitement notre village situé dans le Guidimakha. Comment puis-je t'aider ?";
        }

        // Comment ça va
        const commentVa = ['comment ca va', 'comment vas-tu', 'ça va', 'comment tu vas', 'how are you', 'ccava'];
        if (commentVa.some(c => m.includes(c))) {
            return "Je vais très bien, merci ! Je suis toujours heureux de parler du village Ajar, situé dans le Guidimakha. Et toi, comment ça va ?";
        }

        // Qui es-tu
        if (m.includes('qui es-tu') || m.includes('tu es qui') || m.includes('c\'est qui mehedi') || m.includes('presente toi')) {
            return "Je suis MEHEDI, l'intelligence artificielle officielle du village Ajar. Je connais toute l'histoire du village depuis 1983, ses clubs de football, ses associations, et je donne des informations précises. Le village est situé dans la région du Guidimakha en Mauritanie.";
        }

        // Histoire
        if (m.includes('histoire') || m.includes('1983') || m.includes('origines') || m.includes('fondation')) {
            return ajarknowledge.histoire;
        }

        // Chefferie
        if (m.includes('chef') || m.includes('diabira') || m.includes('siakha')) {
            return ajarknowledge.chefs;
        }

        // Clubs
        if (m.includes('club') || m.includes('clubs') || m.includes('championnat')) {
            return ajarknowledge.clubs;
        }

        // FC Walé
        if (m.includes('wale') || m.includes('walé')) {
            return ajarknowledge.wale;
        }

        // FC Dango
        if (m.includes('dango')) {
            return "FC Dango est le premier champion officiel d'Ajar (2017). Ils ont aussi remporté la première Super Coupe contre Kelifado aux tirs au but.";
        }

        // Jeunesse / AJCDD
        if (m.includes('jeunesse') || m.includes('ajcdd') || m.includes('djiby')) {
            return ajarknowledge.jeunesse;
        }

        // ADAL
        if (m.includes('adal')) {
            return ajarknowledge.adal;
        }

        // Forage
        if (m.includes('forage') || m.includes('eau') || m.includes('puits')) {
            return ajarknowledge.forage;
        }

        // Terrain
        if (m.includes('terrain') || m.includes('stade')) {
            return ajarknowledge.terrain;
        }

        // Dispensaire
        if (m.includes('dispensaire') || m.includes('santé') || m.includes('cer')) {
            return ajarknowledge.dispensaire;
        }

        // Contact
        if (m.includes('contact') || m.includes('email') || m.includes('téléphone')) {
            return ajarknowledge.contact;
        }

        // Équipe France / KEBE
        if (m.includes('france') || m.includes('kebe')) {
            return ajarknowledge.france;
        }

        // Culture
        if (m.includes('tamtam') || m.includes('dimmu') || m.includes('culture') || m.includes('tradition')) {
            return ajarknowledge.culture;
        }

        // Merci
        if (m.includes('merci') || m.includes('thanks')) {
            return "Avec plaisir ! C'est un honneur de partager des informations précises sur notre village Ajar, situé dans le Guidimakha.";
        }

        // Au revoir
        const auRevoir = ['au revoir', 'bye', 'à plus', 'see you', 'a bientôt', 'ciao'];
        if (auRevoir.some(a => m.includes(a))) {
            return "Au revoir ! Reviens quand tu veux en savoir plus sur Ajar, notre village du Guidimakha. Bonne journée !";
        }

        return null; // Pas de réponse locale -> API
    }

    // Appel à Groq API avec prompt ultra-précis
    async function callGroqAPI(userMessage) {
        try {
            const systemPrompt = `Tu es MEHEDI, l'assistant IA officiel et ultra-précis du village Ajar.

INFORMATIONS OBLIGATOIRES ET EXACTES SUR AJAR (TU NE DOIS PAS DIFFUSER DE FAUSSES INFORMATIONS) :

- LOCALISATION : Ajar est situé dans la RÉGION DU GUIDIMAKHA, en Mauritanie méridionale. Coordonnées GPS : 15.517452, -12.632089 (15°31'02.8"N 12°37'55.5"W).
- IL N'EST PAS à Nouakchott, ni à Dakhlet Nouadhibou, ni à Rosso, ni à Sélibaby (Sélibaby est le chef-lieu du Guidimakha, mais Ajar est un village rural).
- Villages voisins : Agoinitt (18 km), Tachott, Ouloumbony, Diaguilly.

- HISTOIRE : Fondation entre 1909-1910 par les Diabira venant de Diaguilly. Premier match de football en 1983 contre Tachott (2-0). Le nom soninké "Assaré" signifie "naissance".

- CHEFFERIE : Famille Diabira. Dernier chef : Siakha Ladji Diabira (décédé le 16 juillet 2025). Successeur pressenti : Ladji Boubou Diabira.

- FOOTBALL : 7 clubs. FC Walé (3 titres : 2018,2019,2023), FC Dango (2017), FC Soumpou (2022), Lion d'Ajar (2024), Kelifado (2021), FC Kawral, FC Nassr.

- INFRASTRUCTURES : Forage (2007), terrain de foot (1983), dispensaire (2003).

- ASSOCIATIONS : AJCDD (jeunesse, présidée par Djiby Sanghare), ADAL (développement, créée en 2021, présidée par Moussa Boubou Sy).

- CONTACT : contact@ajar-foot.online, administration@ajar-foot.online, partenariat@ajar-foot.online. Tél : +222 49 03 76 97.

Tu es amical, professionnel, et tu donnes des réponses PRÉCISES, CONCISES et VRAIES. Tu ne dois JAMAIS inventer de fausses informations sur Ajar. Tu peux discuter de sujets généraux, mais toujours en restant positif et utile.

Question de l'utilisateur : ${userMessage}`;

            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'llama-3.1-8b-instant',
                    messages: [
                        { role: 'system', content: systemPrompt },
                        { role: 'user', content: userMessage }
                    ],
                    temperature: 0.5,  // Plus bas pour plus de précision
                    max_tokens: 500
                })
            });

            const data = await response.json();

            if (data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                console.error('Erreur Groq:', data);
                return "Désolé, j'ai une petite difficulté technique. Le village Ajar se trouve dans le Guidimakha, en Mauritanie. Peux-tu reformuler ta question ?";
            }
        } catch (error) {
            console.error('Erreur API:', error);
            return "Je n'arrive pas à me connecter. Mais je peux te dire qu'Ajar est situé dans la région du Guidimakha en Mauritanie, pas à Nouakchott. Pose-moi une question sur le village, ses clubs ou son histoire !";
        }
    }

    // Fonction principale hybride
    async function getResponse(userMessage) {
        const localResponse = getLocalResponse(userMessage);
        if (localResponse) return localResponse;
        return await callGroqAPI(userMessage);
    }

    // ========== STYLES CSS (inchangé, garde le design) ==========
    const style = document.createElement('style');
    style.textContent = `
        #mehedi-widget {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 10000;
            font-family: 'Poppins', sans-serif;
        }
        .mehedi-button {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #ff8c42, #e67300);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(255, 140, 66, 0.5);
            transition: all 0.3s ease;
            border: 2px solid rgba(255,255,255,0.3);
        }
        .mehedi-button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 25px rgba(255, 140, 66, 0.7);
        }
        .mehedi-button img {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            object-fit: cover;
        }
        #mehedi-chat {
            position: absolute;
            bottom: 85px;
            right: 0;
            width: 380px;
            height: 550px;
            background: rgba(26, 38, 52, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: all 0.3s ease;
            opacity: 0;
            transform: scale(0.9);
            visibility: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        #mehedi-chat.active {
            opacity: 1;
            transform: scale(1);
            visibility: visible;
        }
        .mehedi-header {
            background: rgba(26, 38, 52, 0.98);
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(255, 140, 66, 0.3);
        }
        .mehedi-avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            border: 2px solid #ff8c42;
            object-fit: cover;
        }
        .mehedi-status { flex: 1; }
        .mehedi-status h3 {
            font-size: 1.1rem;
            margin: 0;
            color: white;
            font-weight: 600;
        }
        .mehedi-status p {
            font-size: 0.65rem;
            opacity: 0.7;
            margin: 0;
            color: white;
        }
        .mehedi-close {
            background: none;
            border: none;
            color: white;
            font-size: 1.3rem;
            cursor: pointer;
            opacity: 0.7;
        }
        .mehedi-close:hover { opacity: 1; }
        .mehedi-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            background: transparent;
        }
        .message-user {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 15px;
        }
        .message-user-content {
            background: #ff8c42;
            color: white;
            padding: 10px 16px;
            border-radius: 20px;
            border-top-right-radius: 4px;
            max-width: 80%;
            font-size: 0.9rem;
        }
        .message-bot {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }
        .message-bot-avatar {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            object-fit: cover;
            border: 1px solid #ff8c42;
        }
        .message-bot-content {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 10px 16px;
            border-radius: 20px;
            border-top-left-radius: 4px;
            max-width: 80%;
            font-size: 0.9rem;
        }
        .mehedi-input-area {
            padding: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            gap: 10px;
            background: rgba(26, 38, 52, 0.98);
        }
        .mehedi-input {
            flex: 1;
            padding: 12px 16px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
            font-family: 'Poppins', sans-serif;
            font-size: 0.9rem;
            background: rgba(255, 255, 255, 0.1);
            color: white;
        }
        .mehedi-input::placeholder { color: rgba(255, 255, 255, 0.5); }
        .mehedi-input:focus {
            outline: none;
            border-color: #ff8c42;
        }
        .mehedi-send {
            width: 45px;
            height: 45px;
            background: #ff8c42;
            border: none;
            border-radius: 50%;
            color: white;
            cursor: pointer;
        }
        .typing-indicator {
            display: flex;
            gap: 5px;
            padding: 10px 16px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            width: fit-content;
        }
        .typing-indicator span {
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: typing 1.4s infinite;
        }
        .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
        .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing {
            0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
            30% { transform: translateY(-8px); opacity: 1; }
        }
        #mehedi-splash {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10001;
            animation: fadeZoom 0.5s ease forwards;
        }
        .mehedi-splash-content {
            background: rgba(26, 38, 52, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 30px;
            padding: 30px 50px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 140, 66, 0.5);
        }
        .mehedi-splash-content img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 3px solid #ff8c42;
            margin-bottom: 15px;
        }
        .mehedi-splash-content h2 {
            color: #ff8c42;
            font-size: 2rem;
            margin: 0;
        }
        .mehedi-splash-content p {
            color: white;
            font-size: 1.2rem;
            margin: 10px 0 0;
        }
        @keyframes fadeZoom {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Widget
    const container = document.createElement('div');
    container.id = 'mehedi-widget';
    container.innerHTML = `
        <div id="mehedi-chat">
            <div class="mehedi-header">
                <img src="${MASCOTTE}" class="mehedi-avatar" onerror="this.src='https://via.placeholder.com/45'">
                <div class="mehedi-status">
                    <h3>MEHEDI</h3>
                    <p>IA Assistant</p>
                </div>
                <button class="mehedi-close" id="mehedi-close">✕</button>
            </div>
            <div class="mehedi-messages" id="mehedi-messages">
                <div class="message-bot">
                    <img src="${MASCOTTE}" class="message-bot-avatar" onerror="this.src='https://via.placeholder.com/35'">
                    <div class="message-bot-content">
                        Salut ! Je suis MEHEDI, l'assistant officiel du village Ajar. Je connais parfaitement notre village situé dans le Guidimakha. Pose-moi une question précise !
                    </div>
                </div>
            </div>
            <div class="mehedi-input-area">
                <input type="text" class="mehedi-input" id="mehedi-input" placeholder="Pose ta question...">
                <button class="mehedi-send" id="mehedi-send">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
        <div class="mehedi-button" id="mehedi-button">
            <img src="${MASCOTTE}" alt="MEHEDI" onerror="this.src='https://via.placeholder.com/55'">
        </div>
    `;
    document.body.appendChild(container);

    // Splash screen
    if (!localStorage.getItem('mehedi_splash')) {
        const splash = document.createElement('div');
        splash.id = 'mehedi-splash';
        splash.innerHTML = `<div class="mehedi-splash-content">
            <img src="${MASCOTTE}" onerror="this.src='https://via.placeholder.com/100'">
            <h2>MEHEDI</h2>
            <p>Bienvenue</p>
        </div>`;
        document.body.appendChild(splash);
        setTimeout(() => splash.remove(), 3000);
        localStorage.setItem('mehedi_splash', 'true');
    }

    // Événements
    const chat = document.getElementById('mehedi-chat');
    const button = document.getElementById('mehedi-button');
    const closeBtn = document.getElementById('mehedi-close');
    const sendBtn = document.getElementById('mehedi-send');
    const input = document.getElementById('mehedi-input');
    const messages = document.getElementById('mehedi-messages');

    button.onclick = () => chat.classList.toggle('active');
    closeBtn.onclick = () => chat.classList.remove('active');

    async function sendMessage() {
        const userMsg = input.value.trim();
        if (!userMsg) return;

        messages.innerHTML += `<div class="message-user"><div class="message-user-content">${userMsg.replace(/</g, '&lt;')}</div></div>`;
        input.value = '';
        messages.scrollTop = messages.scrollHeight;

        const typing = document.createElement('div');
        typing.className = 'message-bot';
        typing.id = 'typing';
        typing.innerHTML = `<img src="${MASCOTTE}" class="message-bot-avatar" onerror="this.src='https://via.placeholder.com/35'"><div class="typing-indicator"><span></span><span></span><span></span></div>`;
        messages.appendChild(typing);
        messages.scrollTop = messages.scrollHeight;

        setTimeout(async () => {
            const typingElem = document.getElementById('typing');
            if (typingElem) typingElem.remove();
            const response = await getResponse(userMsg);
            messages.innerHTML += `<div class="message-bot"><img src="${MASCOTTE}" class="message-bot-avatar" onerror="this.src='https://via.placeholder.com/35'"><div class="message-bot-content">🤖 ${response}</div></div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 800);
    }

    sendBtn.onclick = sendMessage;
    input.onkeypress = (e) => { if (e.key === 'Enter') sendMessage(); };
})();
