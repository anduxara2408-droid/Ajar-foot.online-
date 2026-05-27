// MEHEDI - Assistant IA
document.addEventListener('DOMContentLoaded', function() {
    console.log('MEHEDI chargé');
    
    var container = document.createElement('div');
    container.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999';
    
    var chatBox = document.createElement('div');
    chatBox.style.cssText = 'display:none;width:320px;height:450px;background:white;border-radius:15px;box-shadow:0 5px 15px rgba(0,0,0,0.3);margin-bottom:10px;overflow:hidden';
    
    var header = document.createElement('div');
    header.style.cssText = 'background:#ff8c42;padding:12px;color:white;font-weight:bold;text-align:center';
    header.innerText = 'MEHEDI';
    
    var messagesArea = document.createElement('div');
    messagesArea.style.cssText = 'height:320px;overflow-y:auto;padding:10px;background:#f5f5f5';
    messagesArea.innerHTML = '<div style="margin-bottom:10px"><span style="background:#e0e0e0;padding:8px 12px;border-radius:15px;display:inline-block">Bonjour ! Je suis MEHEDI. Pose-moi une question.</span></div>';
    
    var inputArea = document.createElement('div');
    inputArea.style.cssText = 'padding:10px;display:flex;gap:10px;border-top:1px solid #ddd;background:white';
    
    var input = document.createElement('input');
    input.placeholder = 'Ecrivez...';
    input.style.cssText = 'flex:1;padding:8px;border-radius:20px;border:1px solid #ddd';
    
    var sendBtn = document.createElement('button');
    sendBtn.innerText = 'Envoyer';
    sendBtn.style.cssText = 'background:#ff8c42;border:none;padding:8px 15px;border-radius:20px;color:white;cursor:pointer';
    
    inputArea.appendChild(input);
    inputArea.appendChild(sendBtn);
    
    chatBox.appendChild(header);
    chatBox.appendChild(messagesArea);
    chatBox.appendChild(inputArea);
    
    var button = document.createElement('div');
    button.style.cssText = 'width:60px;height:60px;background:#ff8c42;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 5px 15px rgba(0,0,0,0.2);float:right';
    button.innerHTML = '<span style="color:white;font-size:28px">⚽</span>';
    
    container.appendChild(chatBox);
    container.appendChild(button);
    document.body.appendChild(container);
    
    function getResponse(msg) {
        var m = msg.toLowerCase();
        if(m.indexOf('bonjour') !== -1 || m.indexOf('salut') !== -1) return 'Salut ! Comment vas-tu ?';
        if(m.indexOf('comment') !== -1 && m.indexOf('va') !== -1) return 'Je vais bien, merci ! Et toi ?';
        if(m.indexOf('club') !== -1 || m.indexOf('foot') !== -1) return 'Ajar a 7 clubs. FC Walé a 3 titres (2018,2019,2023). FC Dango champion 2017.';
        if(m.indexOf('wale') !== -1) return 'FC Walé est le club le plus titré avec 3 championnats.';
        if(m.indexOf('histoire') !== -1) return 'L\'histoire d\'Ajar commence en 1983 avec le premier match contre Tachott.';
        if(m.indexOf('jeunesse') !== -1) return 'L\'AJCDD est l\'association jeunesse dirigée par Djiby Sanghare.';
        if(m.indexOf('adal') !== -1) return 'ADAL est l\'association de développement.';
        if(m.indexOf('merci') !== -1) return 'Avec plaisir !';
        if(m.indexOf('au revoir') !== -1) return 'Au revoir !';
        return 'Parle-moi du village Ajar, de ses clubs, de son histoire ou de ses associations.';
    }
    
    var isOpen = false;
    button.onclick = function() {
        chatBox.style.display = isOpen ? 'none' : 'block';
        isOpen = !isOpen;
    };
    
    sendBtn.onclick = function() {
        var userMsg = input.value.trim();
        if(userMsg === '') return;
        messagesArea.innerHTML += '<div style="text-align:right;margin-bottom:10px"><span style="background:#ff8c42;color:white;padding:8px 12px;border-radius:15px;display:inline-block">' + userMsg.replace(/</g, '&lt;') + '</span></div>';
        input.value = '';
        messagesArea.scrollTop = messagesArea.scrollHeight;
        var response = getResponse(userMsg);
        setTimeout(function() {
            messagesArea.innerHTML += '<div style="margin-bottom:10px"><span style="background:#e0e0e0;padding:8px 12px;border-radius:15px;display:inline-block">🤖 ' + response + '</span></div>';
            messagesArea.scrollTop = messagesArea.scrollHeight;
        }, 500);
    };
    
    input.onkeypress = function(e) {
        if(e.key === 'Enter') {
            sendBtn.onclick();
        }
    };
});
