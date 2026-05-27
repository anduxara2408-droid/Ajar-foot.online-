// MEHEDI - IA Assistant Premium - Design Original
(function(){
    console.log('MEHEDI chargé');
    
    // Style CSS
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
        .mehedi-status {
            flex: 1;
        }
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
    
    // Réponses intelligentes
    function getResponse(msg) {
        var m = msg.toLowerCase();
        if(m.indexOf('bonjour') !== -1 || m.indexOf('salut') !== -1) return 'Salut ! Je suis MEHEDI, ravi de te parler. Comment vas-tu ?';
        if(m.indexOf('comment') !== -1 && m.indexOf('va') !== -1) return 'Je vais très bien, merci de demander ! Et toi, comment ça va ?';
        if(m.indexOf('club') !== -1 || m.indexOf('foot') !== -1) return 'Ajar a 7 clubs. FC Walé est le plus titré avec 3 championnats (2018,2019,2023). FC Dango champion 2017, FC Soumpou 2022, Lion d\'Ajar 2024, Kelifado 2021.';
        if(m.indexOf('wale') !== -1) return 'FC Walé est le club le plus titré avec 3 championnats. Fondé par Pape Demba Soumare en 2015.';
        if(m.indexOf('histoire') !== -1) return 'L\'histoire d\'Ajar commence en 1983 avec le premier match contre Tachott (2-0). Le village a été fondé entre 1909-1910 par les Diabira.';
        if(m.indexOf('jeunesse') !== -1) return 'L\'AJCDD est l\'association jeunesse. Présidée par Djiby Sanghare, avec Zeinabou Diallo (VP), Pape Demba Soumare (SG), Mody Sy (trésorier).';
        if(m.indexOf('adal') !== -1) return 'ADAL est l\'association de développement. Créée en 2021, présidée par Moussa Boubou Sy.';
        if(m.indexOf('forage') !== -1) return 'Le forage a été construit en 2007 par Ladji Boubou Diabira. Il alimente tout le village en eau potable.';
        if(m.indexOf('terrain') !== -1) return 'Le terrain d\'Ajar existe depuis 1983. 4 générations de joueurs y ont joué.';
        if(m.indexOf('contact') !== -1) return 'Email : contact@ajar-foot.online. Tél : +222 49 03 76 97';
        if(m.indexOf('merci') !== -1) return 'Avec plaisir ! N\'hésite pas si tu as d\'autres questions.';
        if(m.indexOf('au revoir') !== -1) return 'Au revoir ! Reviens quand tu veux parler d\'Ajar.';
        if(m.indexOf('mehedi') !== -1) return 'MEHEDI, c\'est moi ! Je suis ton assistant IA, spécialisé dans le village Ajar.';
        return 'Je suis spécialisé dans le village Ajar. Parle-moi de son histoire, de ses clubs (FC Walé, Dango...), de la jeunesse ou des associations. Que veux-tu savoir ?';
    }
    
    // Widget
    const container = document.createElement('div');
    container.id = 'mehedi-widget';
    container.innerHTML = `
        <div id="mehedi-chat">
            <div class="mehedi-header">
                <img src="images/mehedi/MEHEDI.jpeg" class="mehedi-avatar" onerror="this.src='https://via.placeholder.com/45'">
                <div class="mehedi-status">
                    <h3>MEHEDI</h3>
                    <p>IA Assistant</p>
                </div>
                <button class="mehedi-close" id="mehedi-close">✕</button>
            </div>
            <div class="mehedi-messages" id="mehedi-messages">
                <div class="message-bot">
                    <img src="images/mehedi/MEHEDI.jpeg" class="message-bot-avatar" onerror="this.src='https://via.placeholder.com/35'">
                    <div class="message-bot-content">
                        Salut ! Je suis MEHEDI, ton assistant. Je connais le village Ajar, ses clubs, son histoire. Pose-moi une question !
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
            <img src="images/mehedi/MEHEDI.jpeg" alt="MEHEDI" onerror="this.src='https://via.placeholder.com/55'">
        </div>
    `;
    document.body.appendChild(container);
    
    // Splash screen
    if(!localStorage.getItem('mehedi_splash')) {
        const splash = document.createElement('div');
        splash.id = 'mehedi-splash';
        splash.innerHTML = `<div class="mehedi-splash-content">
            <img src="images/mehedi/MEHEDI.jpeg" onerror="this.src='https://via.placeholder.com/100'">
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
    
    function sendMessage() {
        const userMsg = input.value.trim();
        if(!userMsg) return;
        
        messages.innerHTML += `<div class="message-user"><div class="message-user-content">${userMsg.replace(/</g, '&lt;')}</div></div>`;
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
        
        const typing = document.createElement('div');
        typing.className = 'message-bot';
        typing.id = 'typing';
        typing.innerHTML = `<img src="images/mehedi/MEHEDI.jpeg" class="message-bot-avatar" onerror="this.src='https://via.placeholder.com/35'"><div class="typing-indicator"><span></span><span></span><span></span></div>`;
        messages.appendChild(typing);
        messages.scrollTop = messages.scrollHeight;
        
        setTimeout(() => {
            typing.remove();
            const response = getResponse(userMsg);
            messages.innerHTML += `<div class="message-bot"><img src="images/mehedi/MEHEDI.jpeg" class="message-bot-avatar" onerror="this.src='https://via.placeholder.com/35'"><div class="message-bot-content">🤖 ${response}</div></div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 800);
    }
    
    sendBtn.onclick = sendMessage;
    input.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
})();
