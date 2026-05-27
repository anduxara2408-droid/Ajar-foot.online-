// MEHEDI - IA Assistant pour Ajar-foot
(function(){
    class MehediAI {
        getResponse(msg) {
            const m = msg.toLowerCase();
            if(m.match(/bonjour|salut|coucou|hello|hi|hey/)) return "Salut ! Je suis MEHEDI, l'assistant d'Ajar. Comment vas-tu ?";
            if(m.match(/comment ça va|comment vas-tu|ça va|how are you/)) return "Je vais très bien, merci ! Et toi ?";
            if(m.match(/qui es-tu|tu es qui|c'est qui mehedi/)) return "Je suis MEHEDI, l'IA officielle du village Ajar. Je connais son histoire, ses clubs, ses associations.";
            if(m.match(/au revoir|bye|à plus|ciao/)) return "Au revoir ! Reviens quand tu veux parler d'Ajar.";
            if(m.match(/merci/)) return "Avec plaisir !";
            if(m.match(/club|foot|wale|championnat/)) return "Ajar a 7 clubs. FC Walé est le plus titré avec 3 championnats (2018,2019,2023). FC Dango champion 2017, FC Soumpou 2022, Lion d'Ajar 2024, Kelifado 2021.";
            if(m.match(/histoire|1983/)) return "L'histoire d'Ajar commence en 1983 avec le premier match contre Tachott (2-0). Le village a été fondé entre 1909-1910 par les Diabira.";
            if(m.match(/jeunesse|ajcdd|djiby/)) return "L'AJCDD est présidée par Djiby Sanghare. Bureau : Zeinabou Diallo (VP), Pape Demba Soumare (SG), Mody Sy (trésorier).";
            if(m.match(/adal/)) return "ADAL est l'association de développement. Créée en 2021, présidée par Moussa Boubou Sy.";
            if(m.match(/forage/)) return "Le forage a été construit en 2007 par Ladji Boubou Diabira. Il alimente tout le village en eau.";
            if(m.match(/terrain/)) return "Le terrain d'Ajar existe depuis 1983. 4 générations de joueurs y ont joué.";
            if(m.match(/contact|email/)) return "Email : contact@ajar-foot.online, administration@ajar-foot.online, partenariat@ajar-foot.online. Tél : +222 49 03 76 97.";
            if(m.match(/france|kebe/)) return "L'équipe d'Ajar en France a été fondée en 2022. Président : Papis Sakho. Meilleur résultat : demi-finale du tournoi KEBE 2024.";
            return "Je suis spécialisé dans le village Ajar. Pose-moi une question sur son histoire, ses clubs (FC Walé, Dango...), ses associations ou ses infrastructures.";
        }

        init() {
            this.createWidget();
            setTimeout(() => this.showSplash(), 500);
        }

        showSplash() {
            if(localStorage.getItem('mehedi_splash')) return;
            const splash = document.createElement('div');
            splash.id = 'mehedi-splash';
            splash.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10001;background:#1a2634;border-radius:30px;padding:30px 50px;text-align:center;box-shadow:0 20px 40px rgba(0,0,0,0.3);border:2px solid #ff8c42;';
            splash.innerHTML = '<img src="images/mehedi/MEHEDI.jpeg" style="width:100px;height:100px;border-radius:50%;margin-bottom:15px;" onerror="this.style.display=\'none\'"><h2 style="color:#ff8c42;">MEHEDI</h2><p style="color:white;">Bienvenue</p>';
            document.body.appendChild(splash);
            setTimeout(()=> splash.remove(), 3000);
            localStorage.setItem('mehedi_splash','true');
        }

        createWidget() {
            const html = `
            <div id="mehedi-widget" style="position:fixed;bottom:20px;right:20px;z-index:10000">
                <div id="mehedi-chat" style="display:none;width:360px;height:520px;background:rgba(26,38,52,0.95);border-radius:20px;backdrop-filter:blur(10px);position:absolute;bottom:75px;right:0;flex-direction:column;overflow:hidden;border:1px solid rgba(255,140,66,0.3)">
                    <div style="background:#1a2634;padding:15px;display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(255,140,66,0.3)">
                        <img src="images/mehedi/MEHEDI.jpeg" style="width:40px;height:40px;border-radius:50%;border:2px solid #ff8c42" onerror="this.src='https://via.placeholder.com/40?text=M'">
                        <div style="flex:1"><h3 style="color:white;margin:0">MEHEDI</h3><p style="color:#ff8c42;margin:0;font-size:11px">Assistant Ajar</p></div>
                        <button id="mehedi-close" style="background:none;border:none;color:white;font-size:20px;cursor:pointer">✕</button>
                    </div>
                    <div id="mehedi-messages" style="flex:1;padding:15px;overflow-y:auto">
                        <div style="display:flex;gap:10px;margin-bottom:15px">
                            <img src="images/mehedi/MEHEDI.jpeg" style="width:30px;height:30px;border-radius:50%" onerror="this.src='https://via.placeholder.com/30?text=M'">
                            <div style="background:rgba(255,255,255,0.1);padding:10px 15px;border-radius:18px;color:white">Bonjour ! Je suis MEHEDI. Pose-moi une question sur Ajar, ses clubs, son histoire.</div>
                        </div>
                    </div>
                    <div style="padding:15px;display:flex;gap:10px;border-top:1px solid rgba(255,255,255,0.1)">
                        <input id="mehedi-input" style="flex:1;padding:12px;border-radius:30px;border:none;background:rgba(255,255,255,0.1);color:white" placeholder="Écrivez votre message...">
                        <button id="mehedi-send" style="background:#ff8c42;border:none;width:45px;border-radius:50%;cursor:pointer;color:white">→</button>
                    </div>
                </div>
                <button id="mehedi-button" style="width:65px;height:65px;background:linear-gradient(135deg,#ff8c42,#e67300);border-radius:50%;border:none;cursor:pointer;box-shadow:0 5px 20px rgba(255,140,66,0.4);display:flex;align-items:center;justify-content:center">
                    <img src="images/mehedi/MEHEDI.jpeg" style="width:50px;height:50px;border-radius:50%" onerror="this.src='https://via.placeholder.com/50?text=M'">
                </button>
            </div>`;
            
            document.body.insertAdjacentHTML('beforeend', html);
            
            document.getElementById('mehedi-button').onclick = () => {
                const chat = document.getElementById('mehedi-chat');
                chat.style.display = chat.style.display === 'none' ? 'flex' : 'none';
            };
            document.getElementById('mehedi-close').onclick = () => {
                document.getElementById('mehedi-chat').style.display = 'none';
            };
            
            const input = document.getElementById('mehedi-input');
            const send = document.getElementById('mehedi-send');
            const messages = document.getElementById('mehedi-messages');
            
            const addMessage = (text, isUser) => {
                const div = document.createElement('div');
                div.style.marginBottom = '15px';
                div.style.display = 'flex';
                div.style.justifyContent = isUser ? 'flex-end' : 'flex-start';
                div.style.gap = '10px';
                if(!isUser) {
                    div.innerHTML = `<img src="images/mehedi/MEHEDI.jpeg" style="width:30px;height:30px;border-radius:50%" onerror="this.src='https://via.placeholder.com/30?text=M'">`;
                }
                const bubble = document.createElement('div');
                bubble.style.background = isUser ? '#ff8c42' : 'rgba(255,255,255,0.1)';
                bubble.style.color = 'white';
                bubble.style.padding = '10px 15px';
                bubble.style.borderRadius = '18px';
                bubble.style.maxWidth = '80%';
                bubble.textContent = text;
                div.appendChild(bubble);
                messages.appendChild(div);
                messages.scrollTop = messages.scrollHeight;
            };
            
            const sendMessage = () => {
                const msg = input.value.trim();
                if(!msg) return;
                addMessage(msg, true);
                input.value = '';
                const typing = document.createElement('div');
                typing.id = 'typing';
                typing.style.display = 'flex';
                typing.style.gap = '5px';
                typing.style.padding = '10px 15px';
                typing.style.background = 'rgba(255,255,255,0.1)';
                typing.style.borderRadius = '18px';
                typing.style.width = 'fit-content';
                typing.style.marginBottom = '15px';
                typing.innerHTML = '<span style="width:8px;height:8px;background:#ccc;border-radius:50%;animation:pulse 1.4s infinite"></span><span style="width:8px;height:8px;background:#ccc;border-radius:50%;animation:pulse 1.4s infinite 0.2s"></span><span style="width:8px;height:8px;background:#ccc;border-radius:50%;animation:pulse 1.4s infinite 0.4s"></span>';
                messages.appendChild(typing);
                messages.scrollTop = messages.scrollHeight;
                setTimeout(() => {
                    typing.remove();
                    addMessage(this.getResponse(msg), false);
                }, 800);
            };
            
            send.onclick = sendMessage;
            input.onkeypress = (e) => { if(e.key === 'Enter') sendMessage(); };
        }
    }
    
    const style = document.createElement('style');
    style.textContent = `@keyframes pulse{0%,60%,100%{transform:translateY(0);opacity:0.4}30%{transform:translateY(-8px);opacity:1}}`;
    document.head.appendChild(style);
    
    document.addEventListener('DOMContentLoaded', () => new MehediAI());
})();
