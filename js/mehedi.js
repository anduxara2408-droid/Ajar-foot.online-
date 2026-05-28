// MEHEDI - IA Assistant Premium avec Groq API
// Version 7.0 - Intelligence hybride

(function(){
    console.log('MEHEDI chargé - Version Groq IA');
    
    // Configuration Groq API
    const GROQ_API_KEY = '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';
    const MASCOTTE = '/images/mehedi/MEHEDI.jpeg';
    
    // Réponses locales (rapides, sans API)
    function getLocalResponse(msg) {
        const m = msg.toLowerCase().trim();
        
        // Salutations
        const salutations = ['bonjour', 'bonsoir', 'salut', 'coucou', 'hello', 'hi', 'hey', 'slt', 'bjr'];
        if (salutations.some(s => m.includes(s))) {
            return "Salut ! Je suis MEHEDI, ton assistant intelligent pour le village Ajar. Comment puis-je t'aider aujourd'hui ?";
        }
        
        // Comment ça va
        const commentVa = ['comment ca va', 'comment vas-tu', 'ça va', 'comment tu vas', 'how are you', 'ccava'];
        if (commentVa.some(c => m.includes(c))) {
            return "Je vais très bien, merci de demander ! Je suis toujours heureux de discuter. Et toi, comment ça va aujourd'hui ?";
        }
        
        // Qui es-tu
        const quiEsTu = ['qui es-tu', 'tu es qui', 'c\'est qui mehedi', 'presente toi', 'présente-toi', 'your name'];
        if (quiEsTu.some(q => m.includes(q))) {
            return "Je suis MEHEDI, l'intelligence artificielle officielle du village Ajar. Je connais toute l'histoire du village depuis 1983, ses clubs de football, ses associations, et j'adore discuter avec les visiteurs. Pose-moi toutes tes questions !";
        }
        
        // Remerciements
        if (m.includes('merci') || m.includes('thanks') || m.includes('thank you')) {
            return "Avec plaisir ! C'est toujours un bonheur d'aider. N'hésite pas si tu as d'autres questions.";
        }
        
        // Au revoir
        const auRevoir = ['au revoir', 'bye', 'à plus', 'see you', 'a bientôt', 'ciao', 'tchao', 'adieu'];
        if (auRevoir.some(a => m.includes(a))) {
            return "Au revoir ! Reviens quand tu veux parler d'Ajar. Je serai toujours là pour toi. Prends soin de toi !";
        }
        
        // Football - Clubs
        if ((m.includes('club') || m.includes('clubs')) && (m.includes('foot') || m.includes('championnat'))) {
            return "Ajar compte 7 clubs officiels. Voici les champions :\n• FC Walé : 3 titres (2018, 2019, 2023)\n• FC Dango : champion 2017\n• FC Soumpou : champion 2022\n• Lion d'Ajar : champion 2024\n• Kelifado : champion 2021\n• FC Kawral\n• FC Nassr";
        }
        
        // FC Walé
        if (m.includes('wale') || m.includes('walé')) {
            return "FC Walé est le club le plus titré d'Ajar avec trois championnats (2018, 2019, 2023). Fondé en 2015 par Pape Demba Soumare, l'équipe compte 28 joueurs. C'est le club emblématique du village. Une véritable fierté pour Ajar !";
        }
        
        // FC Dango
        if (m.includes('dango')) {
            return "FC Dango est le premier champion officiel d'Ajar (2017). Ils ont également remporté la première Super Coupe d'Ajar contre Kelifado aux tirs au but. Un club historique !";
        }
        
        // Histoire d'Ajar
        if (m.includes('histoire') || m.includes('1983') || m.includes('origines') || m.includes('fondation')) {
            return "L'histoire d'Ajar commence en 1983 avec le premier match de football contre Tachott (victoire 2-0). Le village a été fondé entre 1909 et 1910 par les Diabira venant de Diaguilly. Le nom soninké 'Assaré' signifie naissance. C'est une histoire riche et passionnante !";
        }
        
        // Jeunesse / AJCDD
        if (m.includes('jeunesse') || m.includes('ajcdd') || m.includes('djiby')) {
            return "L'AJCDD (Association Jeunesse Cohésion et Développement Durable) est présidée par Djiby Sanghare depuis 2025. Le bureau exécutif comprend Zeinabou Diallo (vice-présidente), Pape Demba Soumare (secrétaire général) et Mody Sy (trésorier). Ils font un travail formidable pour le village !";
        }
        
        // ADAL
        if (m.includes('adal')) {
            return "ADAL est l'Association pour le Développement d'Ajar Ladji. Créée en 2021 par Diabe Soumare, elle a obtenu son récépissé officiel en 2023. Le président est Moussa Boubou Sy. En 2025, Cheikhou Diabira a été nommé président de la commission culturelle et sportive.";
        }
        
        // Forage
        if (m.includes('forage') || m.includes('eau') || m.includes('puits')) {
            return "Le forage d'Ajar a été construit en 2007 grâce à Ladji Boubou Diabira et ses partenaires européens. Il alimente tout le village en eau potable. Une infrastructure vitale pour la communauté !";
        }
        
        // Terrain
        if (m.includes('terrain') || m.includes('stade') || m.includes('pelouse')) {
            return "Le terrain de football d'Ajar existe depuis 1983. Quatre générations de joueurs y ont joué. Il a été rénové plusieurs fois et reste le cœur du sport villageois. Beaucoup d'émotions sur cette pelouse !";
        }
        
        // Contact
        if (m.includes('contact') || m.includes('email') || m.includes('téléphone') || m.includes('mail')) {
            return "Tu peux contacter l'équipe d'Ajar-foot par email :\n• contact@ajar-foot.online\n• administration@ajar-foot.online\n• partenariat@ajar-foot.online\n📞 Téléphone : +222 49 03 76 97";
        }
        
        // Équipe France / KEBE
        if (m.includes('france') || m.includes('kebe') || m.includes('paris')) {
            return "L'équipe d'Ajar en France a été fondée en 2022. Son premier entraîneur était Demba Samba Camara, assisté de Fodé Diallo. Depuis 2024, le président est Papis Sakho, un jeune d'Ajar qui a aussi joué à Nouakchott. Meilleur résultat : demi-finale du tournoi KEBE en 2024.";
        }
        
        // Culture
        if (m.includes('tamtam') || m.includes('dimmu') || m.includes('culture') || m.includes('tradition')) {
            return "Ajar est riche en traditions. Le tamtam est un instrument utilisé lors des cérémonies. Le dimmu est une danse traditionnelle soninké. La culture est au cœur de la vie du village, transmise de génération en génération.";
        }
        
        // Ladji Boubou
        if (m.includes('ladji') || m.includes('boubou')) {
            return "Ladji Boubou Diabira est une figure emblématique d'Ajar. Il a joué le premier match en 1983, a créé l'association Fedde, et a participé à la construction du forage et du dispensaire. Un véritable bâtisseur et un modèle pour la jeunesse !";
        }
        
        // Cheikhou Diabira
        if (m.includes('cheikhou') || m.includes('cheikh')) {
            return "Cheikhou Diabira est le président de la Commission Culturelle et Sportive d'ADAL. Il est aussi membre actif de l'AJCDD et participe activement à la vie associative du village.";
        }
        
        // Pape Demba
        if (m.includes('pape demba') || m.includes('pape')) {
            return "Pape Demba Soumare est le fondateur du FC Walé. Il a été président du club et est aujourd'hui secrétaire général de l'AJCDD. Un homme engagé pour le football et la jeunesse d'Ajar.";
        }
        
        return null; // Pas de réponse locale -> appel API
    }
    
    // Appel à l'API Groq
    async function callGroqAPI(userMessage) {
        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'llama-3.1-8b-instant',
                    messages: [
                        { 
                            role: 'system', 
                            content: 'Tu es MEHEDI, un assistant IA amical, professionnel et passionné. Tu représentes le village Ajar en Mauritanie. Tu connais son histoire depuis 1983, ses clubs de football (FC Walé, FC Dango, FC Soumpou, Lion d\'Ajar, Kelifado, FC Kawral, FC Nassr), ses associations (AJCDD, ADAL), ses infrastructures (forage, terrain), l\'équipe d\'Ajar en France. Tu es chaleureux, concis et toujours prêt à aider. Réponds en français de manière naturelle.'
                        },
                        { role: 'user', content: userMessage }
                    ],
                    temperature: 0.7,
                    max_tokens: 500
                })
            });
            
            const data = await response.json();
            
            if (data.choices && data.choices[0] && data.choices[0].message) {
                return data.choices[0].message.content;
            } else {
                console.error('Erreur Groq:', data);
                return "Désolé, j'ai une petite difficulté technique. Peux-tu reformuler ta question ou me poser une question sur Ajar, ses clubs ou son histoire ?";
            }
        } catch (error) {
            console.error('Erreur API:', error);
            return "Je n'arrive pas à me connecter à mon serveur d'intelligence. Pose-moi une question sur Ajar, ses clubs (FC Walé, Dango...), la jeunesse ou les associations. Je suis toujours là pour t'aider !";
        }
    }
    
    // Fonction principale hybride
    async function getResponse(userMessage) {
        // 1. Vérifier les réponses locales en priorité
        const localResponse = getLocalResponse(userMessage);
        if (localResponse) return localResponse;
        
        // 2. Utiliser Groq API pour les questions complexes
        return await callGroqAPI(userMessage);
    }
    
    // ========== STYLES CSS ==========
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
    
    // ========== WIDGET ==========
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
                        Salut ! Je suis MEHEDI, ton assistant intelligent avec Groq AI. Je connais le village Ajar, ses clubs, son histoire. Pose-moi une question !
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
    
    // ========== SPLASH SCREEN ==========
    if(!localStorage.getItem('mehedi_splash')) {
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
    
    // ========== ÉVÉNEMENTS ==========
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
        if(!userMsg) return;
        
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
            if(typingElem) typingElem.remove();
            const response = await getResponse(userMsg);
            messages.innerHTML += `<div class="message-bot"><img src="${MASCOTTE}" class="message-bot-avatar" onerror="this.src='https://via.placeholder.com/35'"><div class="message-bot-content">🤖 ${response}</div></div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 800);
    }
    
    sendBtn.onclick = sendMessage;
    input.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
})();
