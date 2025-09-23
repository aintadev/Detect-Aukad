const hinglishResponses = [
    "Arre bhai! Tumhari aukad hai ye karne ki? 😂",
    "Waah! Tum to badhiya aadmi ho! 😎✨",
    "Nahi nahi, ye tumse na ho payega! 🙈",
    "Tumhari aukad rocket jaise hai 🚀, lekin ye thoda zyada hai!",
    "Kya baat hai! Tumhare andar to sher hai! 🦁",
    "Ye idea to mast hai! Kar dikhao! 💪",
    "Tumhari aukad dekh ke lagta hai pizza khayega? 🍕",
    "Arey yaar, thoda realistic socho na! 🤔",
    "Tumhari aukad hai par dimag nahi! 😜",
    "Mauj kar di! Tum to mastermind nikle! 🧠",
    "Tumse ye hoga? Soch lo phir se! 🤨",
    "Tumhari aukad dekh ke to lagta hai tum sone jaaoge! 😴",
    "Maza aa gaya! Tum to dangerous ho! ⚡",
    "Tumhari aukad ke bahar hai ye! 🚫",
    "Tum jaisa genius aaj tak nahi dekha! 🌟",
    "Ye soch kar hi pata chalta hai tumhari aukad kya hai! 🔍",
    "Tum to ekdum jhakaas ho! 🤩",
    "Nahi, bilkul bhi nahi! Tumse na ho payega! ❌",
    "Tumhari aukad dekh ke lagta hai tum bahot ameer ho! 💰",
    "Ye to tum bilkul bhi nahi kar sakte! 😅"
];

const banglishResponses = [
    "Arre bhai! Tomar aukad ache ei kaj ta korar? 😂",
    "Wah! Tomi to bhalo manush! 😎✨",
    "Na na, ei kaj tumi parbe na! 🙈",
    "Tomar aukad rocket er moto 🚀, kintu eita onek beshi!",
    "Ki je bolbo! Tomar vitor to bagh ache! 🦁",
    "Eita to darun idea! Kore felo! 💪",
    "Tomar aukad dekhe mone hocche pizza khabe? 🍕",
    "Are yaar, thoda realistic chinta koro! 🤔",
    "Tomar aukad ache kintu brain nai! 😜",
    "Mauj kore felo! Tumi to mastermind! 🧠",
    "Tumi ei kaj parbe? Abar chinta koro! 🤨",
    "Tomar aukad dekhe mone hocche tumi ghumote jaccho! 😴",
    "Maja peye gelam! Tumi to dangerous! ⚡",
    "Eita tomar aukad er baire! 🚫",
    "Tumar moto genius aaj porjonto dekhini! 🌟",
    "Eita chinta korei bujha jay tomar aukad koto! 🔍",
    "Tumi to ekdom jhakaas! 🤩",
    "Na, ekdom e na! Tumi parbe na! ❌",
    "Tomar aukad dekhe mone hocche tumi onek rich! 💰",
    "Eita to tumi kortei parbe na! 😅"
];

const challenges = [
    "Type something with more than 20 characters! 📝",
    "Use the word 'pizza' in your text! 🍕",
    "Mention 'money' or 'paisa' in your message! 💰",
    "Write a sentence with at least 5 words! 🔢",
    "Type something about travel! ✈️",
    "Use an emoji in your text! 😎",
    "Mention 'game' or 'gaming'! 🎮",
    "Write about food! 🍔",
    "Type something with the word 'awesome'! 🤩",
    "Use the word 'challenge' in your text! 🏆",
    "Write about sports! ⚽",
    "Mention 'music' in your message! 🎵",
    "Type something about technology! 💻",
    "Use the word 'party'! 🎉",
    "Write about animals! 🐶"
];

const emojis = ["😎", "🚀", "💰", "🍕", "🤔", "😂", "🤩", "😜", "🙈", "💪", "🧠", "⚡", "🌟", "🦁", "🍻", "🎉", "🎯", "🔥", "💯", "✔️"];

const trophies = [
    "Chotta Rocket Owner 🚀",
    "Supreme Aukad Guru 👑",
    "Pizza Khayega Trophy 🍕",
    "Ultra Pro Max Aukad 🏆",
    "Sone ka Badshah 🛌",
    "Crazy Idea Champion 🏅",
    "Aukad Detective 🔍",
    "Hinglish Hero 🦸",
    "Wealth Wizard 💰",
    "Social Media Star 📱",
    "Aukad Emperor 👑",
    "Dream Big Trophy 🌟",
    "Reality Check Master ✅",
    "Mauj Kar Di Trophy 🎉",
    "Jhakaas Performer 🎭"
];

const easterEggs = {
    "pizza": "Pizza khayega? 🍕",
    "rocket": "Rocket le aaya? 🚀",
    "sona": "Sone ja raha hai kya? 🛌",
    "paise": "Paisa hi paisa hoga! 💰",
    "shadi": "Shaadi ka laddoo? 🎉",
    "dimaag": "Dimag ki dahi? 🧠",
    "mauj": "Mauj kar di! 🎊",
    "jhakaas": "Jhakaas idea! 🤩",
    "aukad": "Aukad mein raho! 😎",
    "bhai": "Bhai sahab! 🙏"
};

let aukadLevel = 0;
let wealthValue = 0;
let socialValue = 0;
let crazyValue = 0;
let earnedTrophies = new Set();
let currentChallenge = "";
let challengeActive = false;
let usedChallenges = new Set();
let currentLanguage = "hinglish";

document.getElementById('checkBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    
    if (userInput === '') {
        document.getElementById('response').textContent = currentLanguage === "hinglish" 
            ? "Kuch to type karo yaar! 🤨" 
            : "Kichu to type koro yaar! 🤨";
        return;
    }

    let response = getResponse(userInput);
    document.getElementById('response').textContent = response;

    updateStats(userInput);
    checkEasterEggs(userInput);
    checkTrophies(userInput);
    checkChallenge(userInput);
});

document.getElementById('challengeBtn').addEventListener('click', function() {
    generateChallenge();
});

document.getElementById('shareBtn').addEventListener('click', function() {
    shareAukad();
});

document.getElementById('hinglishBtn').addEventListener('click', function() {
    currentLanguage = "hinglish";
    document.getElementById('hinglishBtn').classList.add('active');
    document.getElementById('banglishBtn').classList.remove('active');
    document.getElementById('userInput').placeholder = "Type anything here...";
});

document.getElementById('banglishBtn').addEventListener('click', function() {
    currentLanguage = "banglish";
    document.getElementById('banglishBtn').classList.add('active');
    document.getElementById('hinglishBtn').classList.remove('active');
    document.getElementById('userInput').placeholder = "Kichu type koro...";
});

function getResponse(input) {
    let responses = currentLanguage === "hinglish" ? hinglishResponses : banglishResponses;
    let randomResponse = responses[Math.floor(Math.random() * responses.length)];
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    return randomResponse + " " + randomEmoji;
}

function generateChallenge() {
    if (usedChallenges.size >= challenges.length) {
        document.getElementById('challengeText').textContent = 
            currentLanguage === "hinglish" 
            ? "Saari challenges complete kar li! 👑" 
            : "Shob challenge shesh kore felo! 👑";
        document.getElementById('challengeBox').style.display = 'block';
        challengeActive = false;
        return;
    }
    
    let availableChallenges = challenges.filter(challenge => !usedChallenges.has(challenge));
    currentChallenge = availableChallenges[Math.floor(Math.random() * availableChallenges.length)];
    usedChallenges.add(currentChallenge);
    document.getElementById('challengeText').textContent = currentChallenge;
    document.getElementById('challengeBox').style.display = 'block';
    challengeActive = true;
}

function checkChallenge(input) {
    if (!challengeActive) return;
    
    let challengeCompleted = false;
    
    if (currentChallenge.includes("20 characters") && input.length > 20) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("word 'pizza'") && input.includes("pizza")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'money' or 'paisa'") && (input.includes("money") || input.includes("paisa"))) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("5 words") && input.split(' ').length >= 5) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("travel") && input.includes("travel")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("emoji") && /[\u{1F600}-\u{1F6FF}]/u.test(input)) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'game' or 'gaming'") && (input.includes("game") || input.includes("gaming"))) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("food") && input.includes("food")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'awesome'") && input.includes("awesome")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'challenge'") && input.includes("challenge")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("sports") && input.includes("sports")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'music'") && input.includes("music")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("technology") && input.includes("technology")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'party'") && input.includes("party")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("animals") && input.includes("animal")) {
        challengeCompleted = true;
    }
    
    if (challengeCompleted) {
        document.getElementById('response').textContent = 
            currentLanguage === "hinglish" 
            ? "Challenge completed! Aukad badh gayi! 🎉" 
            : "Challenge shesh! Aukad bare gelo! 🎉";
        aukadLevel += 5;
        if (aukadLevel > 100) aukadLevel = 100;
        wealthValue += 2000;
        socialValue += 3;
        crazyValue += 4;
        updateDisplay();
        document.getElementById('challengeBox').style.display = 'none';
        challengeActive = false;
        
        if (!earnedTrophies.has("Challenge Master")) {
            earnedTrophies.add("Challenge Master");
            addTrophy("Challenge Master 🏆");
        }
    }
}

function updateStats(input) {
    let inputLength = input.length;
    let wordCount = input.split(' ').length;
    
    let aukadChange = calculateAukadChange(inputLength, wordCount);
    aukadLevel += aukadChange;
    if (aukadLevel < 0) aukadLevel = 0;
    if (aukadLevel > 100) aukadLevel = 100;
    
    let wealthChange = calculateWealthChange(inputLength, wordCount);
    wealthValue += wealthChange;
    if (wealthValue < 0) wealthValue = 0;
    
    let socialChange = calculateSocialChange(inputLength, wordCount);
    socialValue += socialChange;
    if (socialValue < 0) socialValue = 0;
    if (socialValue > 100) socialValue = 100;
    
    let crazyChange = calculateCrazyChange(inputLength, wordCount);
    crazyValue += crazyChange;
    if (crazyValue < 0) crazyValue = 0;
    if (crazyValue > 100) crazyValue = 100;
    
    updateDisplay();
}

function calculateAukadChange(length, words) {
    let change = 0;
    
    if (length > 40) change += 4;
    else if (length > 20) change += 2;
    else if (length > 10) change += 1;
    else change -= 1;
    
    if (words > 8) change += 3;
    else if (words > 4) change += 2;
    else if (words < 2) change -= 2;
    
    return change;
}

function calculateWealthChange(length, words) {
    let change = 0;
    
    if (length > 30) change += Math.floor(length * 8);
    else if (length > 15) change += Math.floor(length * 5);
    else change -= Math.floor(length * 3);
    
    if (words > 6) change += words * 80;
    else if (words < 3) change -= words * 50;
    
    return change;
}

function calculateSocialChange(length, words) {
    let change = 0;
    
    if (length > 25) change += 2;
    else if (length > 12) change += 1;
    else change -= 1;
    
    if (words > 5) change += 2;
    else if (words < 2) change -= 2;
    
    return change;
}

function calculateCrazyChange(length, words) {
    let change = 0;
    
    if (length > 30) change += 3;
    else if (length > 15) change += 2;
    
    if (words > 6) change += 2;
    
    return change;
}

function updateDisplay() {
    document.getElementById('levelProgress').style.width = aukadLevel + '%';
    document.getElementById('levelText').textContent = `Aukad Level: ${aukadLevel}`;
    document.getElementById('wealthValue').textContent = `₹${wealthValue.toLocaleString()}`;
    document.getElementById('socialValue').textContent = socialValue;
    document.getElementById('crazyValue').textContent = crazyValue;
}

function checkEasterEggs(input) {
    for (const [key, value] of Object.entries(easterEggs)) {
        if (input.includes(key)) {
            document.getElementById('response').textContent = value;
            break;
        }
    }
}

function checkTrophies(input) {
    if (input.length > 20 && !earnedTrophies.has("Long Message Expert")) {
        earnedTrophies.add("Long Message Expert");
        addTrophy("Long Message Expert 📜");
    }
    
    if (input.split(' ').length > 5 && !earnedTrophies.has("Word Master")) {
        earnedTrophies.add("Word Master");
        addTrophy("Word Master 🎓");
    }
    
    if (input.length > 0 && Math.random() > 0.9 && earnedTrophies.size < trophies.length) {
        let randomTrophy = trophies[Math.floor(Math.random() * trophies.length)];
        if (!earnedTrophies.has(randomTrophy)) {
            earnedTrophies.add(randomTrophy);
            addTrophy(randomTrophy);
        }
    }
    
    if (aukadLevel > 50 && !earnedTrophies.has("Half Century Aukad")) {
        earnedTrophies.add("Half Century Aukad");
        addTrophy("Half Century Aukad 🎯");
    }
    
    if (aukadLevel > 90 && !earnedTrophies.has("Aukad Legend")) {
        earnedTrophies.add("Aukad Legend");
        addTrophy("Aukad Legend 🏆");
    }
    
    if (wealthValue > 200000 && !earnedTrophies.has("Lakhpati")) {
        earnedTrophies.add("Lakhpati");
        addTrophy("Lakhpati 💰");
    }
    
    if (socialValue > 70 && !earnedTrophies.has("Social Star")) {
        earnedTrophies.add("Social Star");
        addTrophy("Social Star 🌟");
    }
    
    if (crazyValue > 70 && !earnedTrophies.has("Crazy Level Max")) {
        earnedTrophies.add("Crazy Level Max");
        addTrophy("Crazy Level Max 🤪");
    }
}

function addTrophy(trophyName) {
    const trophyContainer = document.getElementById('trophyContainer');
    
    if (trophyContainer.firstChild?.textContent === "No trophies yet!") {
        trophyContainer.innerHTML = '';
    }
    
    const trophyElement = document.createElement('div');
    trophyElement.classList.add('trophy');
    trophyElement.textContent = trophyName;
    
    trophyContainer.appendChild(trophyElement);
}

function shareAukad() {
    const shareText = `Meri Aukad Report 📊:\nAukad Level: ${aukadLevel}\nWealth: ₹${wealthValue.toLocaleString()}\nSocial Status: ${socialValue}\nCrazy Points: ${crazyValue}\nTrophies: ${earnedTrophies.size}\n\nMeri aukad dekh ke lagta hai main ek ${aukadLevel > 70 ? 'BADSHAH' : aukadLevel > 40 ? 'AVERAGE' : 'CHOTTA'} aadmi hun! 😎\n\n#DetectAukad`;
    
    navigator.clipboard.writeText(shareText).then(function() {
        document.getElementById('notification').style.display = 'block';
        setTimeout(function() {
            document.getElementById('notification').style.display = 'none';
        }, 2000);
    });
}

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('checkBtn').click();
    }
});
