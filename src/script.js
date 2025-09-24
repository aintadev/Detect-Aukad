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
    "Ye to tum bilkul bhi nahi kar sakte! 😅",
    "Aukad aisi ki duniya jhukegi! 👑",
    "Tumse na ho payega, chhodo ye soch! 🎯",
    "Tumhari aukad dekh ke lagta hai tum influencer ho! 📱",
    "Tum to asli celebrity ho! 🎬",
    "Tumhari aukad dekh ke lagta hai tum business tycoon ho! 💼",
    "Tumse ye karne ko kehna to jhooth bolna hai! 🎭",
    "Tumhari aukad dekh ke lagta hai tum party animal ho! 🎉",
    "Tum to dance ke badshah ho! 💃",
    "Tumhari aukad dekh ke lagta hai tum foodie ho! 🍔",
    "Tum to travel ke raja ho! ✈️",
    "Tumhari aukad dekh ke lagta hai tum gym freak ho! 💪",
    "Tum to style icon ho! 👔",
    "Tumhari aukad dekh ke lagta hai tum music lover ho! 🎵",
    "Tum to comedy king ho! 🤣",
    "Tumhari aukad dekh ke lagta hai tum night owl ho! 🦉",
    "Tum to adventure seeker ho! 🏔️",
    "Tumhari aukad dekh ke lagta hai tum bookworm ho! 📚",
    "Tum to tech guru ho! 💻",
    "Tumhari aukad dekh ke lagta hai tum car enthusiast ho! 🚗",
    "Tum to fashion designer ho! 👗",
    "Tumhari aukad dekh ke lagta hai tum photographer ho! 📸",
    "Tum to art lover ho! 🎨",
    "Tumhari aukad dekh ke lagta hai tum gamer ho! 🎮",
    "Tum to movie buff ho! 🎥",
    "Tumhari aukad dekh ke lagta hai tum chef ho! 👨‍🍳",
    "Tum to nature lover ho! 🌳",
    "Tumhari aukad dekh ke lagta hai tum sports fan ho! ⚽",
    "Tum to pet lover ho! 🐶",
    "Tumhari aukad dekh ke lagta hai tum shopaholic ho! 🛍️",
    "Tum to fitness freak ho! 🏋️"
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
    "Eita to tumi kortei parbe na! 😅",
    "Aukad emon ki duniya nato korbe! 👑",
    "Tumi parbe na, ei chinta chharo! 🎯",
    "Tomar aukad dekhe mone hocche tumi influencer! 📱",
    "Tumi to ashol celebrity! 🎬",
    "Tomar aukad dekhe mone hocche tumi business tycoon! 💼",
    "Tumi ei kaj korle to mithya bolte hobe! 🎭",
    "Tomar aukad dekhe mone hocche tumi party animal! 🎉",
    "Tumi to dance er badshah! 💃",
    "Tomar aukad dekhe mone hocche tumi foodie! 🍔",
    "Tumi to travel er raja! ✈️",
    "Tomar aukad dekhe mone hocche tumi gym freak! 💪",
    "Tumi to style icon! 👔",
    "Tomar aukad dekhe mone hocche tumi music lover! 🎵",
    "Tumi to comedy king! 🤣",
    "Tomar aukad dekhe mone hocche tumi night owl! 🦉",
    "Tumi to adventure seeker! 🏔️",
    "Tomar aukad dekhe mone hocche tumi bookworm! 📚",
    "Tumi to tech guru! 💻",
    "Tomar aukad dekhe mone hocche tumi car enthusiast! 🚗",
    "Tumi to fashion designer! 👗",
    "Tomar aukad dekhe mone hocche tumi photographer! 📸",
    "Tumi to art lover! 🎨",
    "Tomar aukad dekhe mone hocche tumi gamer! 🎮",
    "Tumi to movie buff! 🎥",
    "Tomar aukad dekhe mone hocche tumi chef! 👨‍🍳",
    "Tumi to nature lover! 🌳",
    "Tomar aukad dekhe mone hocche tumi sports fan! ⚽",
    "Tumi to pet lover! 🐶",
    "Tomar aukad dekhe mone hocche tumi shopaholic! 🛍️",
    "Tumi to fitness freak! 🏋️"
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
    "Write about animals! 🐶",
    "Mention 'fitness' or 'gym'! 💪",
    "Type something about movies! 🎬",
    "Use the word 'love' in your text! ❤️",
    "Write about your dreams! 🌟",
    "Mention 'business' or 'work'! 💼",
    "Type something about fashion! 👔",
    "Use the word 'crazy'! 🤪",
    "Write about nature! 🌳",
    "Mention 'art' or 'creative'! 🎨",
    "Type something about books! 📚"
];

const emojis = ["😎", "🚀", "💰", "🍕", "🤔", "😂", "🤩", "😜", "🙈", "💪", "🧠", "⚡", "🌟", "🦁", "🍻", "🎉", "🎯", "🔥", "💯", "✔️", "👑", "🎬", "💼", "🎭", "🎉", "💃", "🍔", "✈️", "💪", "👔", "🎵", "🤣", "🦉", "🏔️", "📚", "💻", "🚗", "👗", "📸", "🎨", "🎮", "🎥", "👨‍🍳", "🌳", "⚽", "🐶", "🛍️", "🏋️"];

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
    "Jhakaas Performer 🎭",
    "Influencer of the Year 🎬",
    "Business Tycoon Trophy 💼",
    "Party Animal Award 🎉",
    "Dance King Trophy 💃",
    "Foodie Legend 🍔",
    "Travel Guru ✈️",
    "Gym Freak Award 💪",
    "Style Icon 👔",
    "Music Maestro 🎵",
    "Comedy King 🤣",
    "Night Owl 🦉",
    "Adventure Seeker 🏔️",
    "Bookworm 📚",
    "Tech Guru 💻",
    "Car Enthusiast 🚗",
    "Fashion Designer 👗",
    "Photographer 📸",
    "Art Lover 🎨",
    "Gamer 🎮",
    "Movie Buff 🎥",
    "Master Chef 👨‍🍳",
    "Nature Lover 🌳",
    "Sports Fan ⚽",
    "Pet Lover 🐶",
    "Shopaholic 🛍️",
    "Fitness Freak 🏋️"
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
    "bhai": "Bhai sahab! 🙏",
    "party": "Party kab de rahe ho? 🎉",
    "dance": "Dance floor pe dikha do! 💃",
    "food": "Khana khilao yaar! 🍔",
    "travel": "Ghumne chaloge? ✈️",
    "gym": "Gym jaate ho? 💪",
    "style": "Style hai tumhare paas! 👔",
    "music": "Gaana sunaoge? 🎵",
    "comedy": "Hasate rehna! 🤣",
    "night": "Raat ko jaagte ho? 🦉",
    "adventure": "Adventure pasand hai? 🏔️",
    "book": "Kitab padhte ho? 📚",
    "tech": "Technology expert ho? 💻",
    "car": "Car collection hai? 🚗",
    "fashion": "Fashion sense zabardast! 👗",
    "photo": "Photo khichoge? 📸",
    "art": "Art appreciate karte ho? 🎨",
    "game": "Game kheloge? 🎮",
    "movie": "Movie dekhoge? 🎥",
    "cook": "Cooking aati hai? 👨‍🍳",
    "nature": "Nature lover ho? 🌳",
    "sports": "Sports dekhte ho? ⚽",
    "pet": "Pet palte ho? 🐶",
    "shop": "Shopping karoge? 🛍️",
    "fit": "Fitness freak ho? 🏋️"
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

function loadGameData() {
    const savedData = localStorage.getItem('detectAukadGame');
    if (savedData) {
        const data = JSON.parse(savedData);
        aukadLevel = data.aukadLevel || 0;
        wealthValue = data.wealthValue || 0;
        socialValue = data.socialValue || 0;
        crazyValue = data.crazyValue || 0;
        earnedTrophies = new Set(data.earnedTrophies || []);
        usedChallenges = new Set(data.usedChallenges || []);
        currentLanguage = data.currentLanguage || "hinglish";
        
        updateDisplay();
        updateTrophyDisplay();
        updateLanguageUI();
    }
}

function saveGameData() {
    const gameData = {
        aukadLevel,
        wealthValue,
        socialValue,
        crazyValue,
        earnedTrophies: Array.from(earnedTrophies),
        usedChallenges: Array.from(usedChallenges),
        currentLanguage
    };
    localStorage.setItem('detectAukadGame', JSON.stringify(gameData));
}

function resetGameData() {
    if (confirm(currentLanguage === "hinglish" ? "Kya tum sach mein game reset karna chahte ho? Saara data kho jayega!" : "Tumi ki shotai game reset korte chao? Shob data chole jabe!")) {
        localStorage.removeItem('detectAukadGame');
        aukadLevel = 0;
        wealthValue = 0;
        socialValue = 0;
        crazyValue = 0;
        earnedTrophies = new Set();
        usedChallenges = new Set();
        currentLanguage = "hinglish";
        
        updateDisplay();
        updateTrophyDisplay();
        updateLanguageUI();
        document.getElementById('response').textContent = currentLanguage === "hinglish" ? "Game reset ho gaya! Naye se shuru karo! 🔄" : "Game reset hoye gelo! Notun kore shuru koro! 🔄";
    }
}

function updateLanguageUI() {
    if (currentLanguage === "hinglish") {
        document.getElementById('hinglishBtn').classList.add('active');
        document.getElementById('banglishBtn').classList.remove('active');
        document.getElementById('userInput').placeholder = "Type anything here...";
    } else {
        document.getElementById('banglishBtn').classList.add('active');
        document.getElementById('hinglishBtn').classList.remove('active');
        document.getElementById('userInput').placeholder = "Kichu type koro...";
    }
}

function updateTrophyDisplay() {
    const trophyContainer = document.getElementById('trophyContainer');
    trophyContainer.innerHTML = '';
    
    if (earnedTrophies.size === 0) {
        trophyContainer.innerHTML = '<div class="trophy">No trophies yet!</div>';
    } else {
        earnedTrophies.forEach(trophy => {
            const trophyElement = document.createElement('div');
            trophyElement.classList.add('trophy');
            trophyElement.textContent = trophy;
            trophyContainer.appendChild(trophyElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadGameData();
    
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
        saveGameData();
    });

    document.getElementById('challengeBtn').addEventListener('click', function() {
        generateChallenge();
        saveGameData();
    });

    document.getElementById('shareBtn').addEventListener('click', function() {
        shareAukad();
    });

    document.getElementById('hinglishBtn').addEventListener('click', function() {
        currentLanguage = "hinglish";
        updateLanguageUI();
        saveGameData();
    });

    document.getElementById('banglishBtn').addEventListener('click', function() {
        currentLanguage = "banglish";
        updateLanguageUI();
        saveGameData();
    });

    document.getElementById('userInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('checkBtn').click();
        }
    });

    const resetBtn = document.createElement('button');
    resetBtn.textContent = "Reset Game";
    resetBtn.id = "resetBtn";
    resetBtn.style.background = "linear-gradient(to right, #e74c3c, #c0392b)";
    resetBtn.style.marginTop = "10px";
    resetBtn.addEventListener('click', resetGameData);
    document.querySelector('.input-area').appendChild(resetBtn);
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
    } else if (currentChallenge.includes("'fitness' or 'gym'") && (input.includes("fitness") || input.includes("gym"))) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("movies") && input.includes("movie")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'love'") && input.includes("love")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("dreams") && input.includes("dream")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'business' or 'work'") && (input.includes("business") || input.includes("work"))) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("fashion") && input.includes("fashion")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'crazy'") && input.includes("crazy")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("nature") && input.includes("nature")) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("'art' or 'creative'") && (input.includes("art") || input.includes("creative"))) {
        challengeCompleted = true;
    } else if (currentChallenge.includes("books") && input.includes("book")) {
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
