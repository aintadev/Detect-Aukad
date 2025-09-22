const responses = [
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
let statChangeCounters = { wealth: 0, social: 0, crazy: 0 };

document.getElementById('checkBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    
    if (userInput === '') {
        document.getElementById('response').textContent = "Kuch to type karo yaar! 🤨";
        return;
    }

    let response = getResponse(userInput);
    document.getElementById('response').textContent = response;

    updateStats(userInput);
    checkEasterEggs(userInput);
    checkTrophies(userInput);
});

function getResponse(input) {
    let randomResponse = responses[Math.floor(Math.random() * responses.length)];
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    return randomResponse + " " + randomEmoji;
}

function updateStats(input) {
    let inputLength = input.length;
    let wordCount = input.split(' ').length;
    
    aukadLevel += calculateAukadChange(inputLength, wordCount);
    if (aukadLevel < 0) aukadLevel = 0;
    if (aukadLevel > 100) aukadLevel = 100;
    
    updateIndividualStat('wealth', inputLength, wordCount);
    updateIndividualStat('social', inputLength, wordCount);
    updateIndividualStat('crazy', inputLength, wordCount);

    document.getElementById('levelProgress').style.width = aukadLevel + '%';
    document.getElementById('levelText').textContent = `Aukad Level: ${aukadLevel}`;
    document.getElementById('wealthValue').textContent = `₹${wealthValue.toLocaleString()}`;
    document.getElementById('socialValue').textContent = socialValue;
    document.getElementById('crazyValue').textContent = crazyValue;
}

function calculateAukadChange(length, words) {
    if (length < 5) return -5;
    if (length > 50) return 15;
    if (words > 8) return 12;
    if (words < 3) return -3;
    
    return Math.floor(Math.random() * 11) - 2;
}

function updateIndividualStat(statName, length, words) {
    const statChanges = {
        wealth: calculateWealthChange(length, words),
        social: calculateSocialChange(length, words),
        crazy: calculateCrazyChange(length, words)
    };
    
    const statValues = {
        wealth: wealthValue,
        social: socialValue,
        crazy: crazyValue
    };
    
    const statMaxValues = {
        wealth: 1000000,
        social: 100,
        crazy: 100
    };
    
    if (statChangeCounters[statName] > 0) {
        statChangeCounters[statName]--;
        return;
    }
    
    if (Math.random() < 0.15) {
        statChangeCounters[statName] = Math.floor(Math.random() * 3) + 1;
        return;
    }
    
    statValues[statName] += statChanges[statName];
    
    if (statValues[statName] < 0) statValues[statName] = 0;
    if (statValues[statName] > statMaxValues[statName]) {
        statValues[statName] = statMaxValues[statName];
    }
    
    if (statName === 'wealth') wealthValue = statValues[statName];
    if (statName === 'social') socialValue = statValues[statName];
    if (statName === 'crazy') crazyValue = statValues[statName];
}

function calculateWealthChange(length, words) {
    if (length > 30 && words > 5) return Math.floor(Math.random() * 5001) + 5000;
    if (length < 10) return -Math.floor(Math.random() * 2001) - 1000;
    
    return Math.floor(Math.random() * 4001) - 1000;
}

function calculateSocialChange(length, words) {
    if (words > 8) return Math.floor(Math.random() * 16) + 5;
    if (length < 5) return -Math.floor(Math.random() * 6) - 5;
    
    return Math.floor(Math.random() * 11) - 3;
}

function calculateCrazyChange(length, words) {
    if (length > 40) return Math.floor(Math.random() * 21) + 10;
    if (words > 10) return Math.floor(Math.random() * 16) + 5;
    if (length < 8) return -Math.floor(Math.random() * 11) - 5;
    
    return Math.floor(Math.random() * 13) - 4;
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
    
    if (input.length > 0 && Math.random() > 0.7 && earnedTrophies.size < trophies.length) {
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
    
    if (wealthValue > 500000 && !earnedTrophies.has("Lakhpati")) {
        earnedTrophies.add("Lakhpati");
        addTrophy("Lakhpati 💰");
    }
    
    if (socialValue > 80 && !earnedTrophies.has("Social Star")) {
        earnedTrophies.add("Social Star");
        addTrophy("Social Star 🌟");
    }
    
    if (crazyValue > 80 && !earnedTrophies.has("Crazy Level Max")) {
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

document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('checkBtn').click();
    }
});
