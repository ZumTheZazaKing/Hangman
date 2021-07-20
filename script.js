//Variables declaration
const intro = document.querySelector(".intro");
const introText = intro.querySelector("p");
const loading = intro.querySelector("div");
const mainMenu = document.querySelector(".mainMenu");
const startButton = mainMenu.querySelector("button");
const title = mainMenu.querySelector("h1");
const difficulty = document.querySelector(".difficulty");
const difficultySelections = difficulty.querySelectorAll("p");
const category = document.querySelector(".categories");
const categories = category.querySelectorAll("p");
const cutscene = document.querySelector(".cutscene");
const cutsceneVideo = cutscene.querySelector("video");
const cutsceneSkipButton = cutscene.querySelector("p");
const ingame = document.querySelector(".ingame");
const scene = ingame.querySelector(".scene");
const game = ingame.querySelector(".game");
const showCategory = game.querySelector(".showCategory");
const showChances = game.querySelector(".showChances");
const showHint = game.querySelector(".showHint");
const hiddenWordContainer = game.querySelector(".hiddenWord");
const input = game.querySelector(".input");
const letterSelection = game.querySelector(".letterSelection");
const lettersContainer = game.querySelector(".letters");
const letters = lettersContainer.querySelectorAll("span");
const closeButton = game.querySelector(".close");
const confirmButton = game.querySelector(".confirmButton");
const response = document.querySelector(".response");
const aftermath = document.querySelector(".aftermath");
const victory = document.querySelector('.victory');


const mainMenuMusic = document.querySelector('.mainMenuMusic');
const selectionMusic = document.querySelector('.selectionMusic');
const selectSoundEffect = document.querySelector('.selectionSoundEffect');
const heavyBreathing = document.querySelector('.heavyBreathing');
const heartbeat = document.querySelector('.heartbeat');
const heartbeatFaster = document.querySelector('.heartbeatFaster');
const heartbeatFastest = document.querySelector('.heartbeatFastest');
const axechop1 = document.querySelector('.axechop1');
const axechop2 = document.querySelector('.axechop2');
const axechop3 = document.querySelector('.axechop3');
const clapping = document.querySelector('.clapping');
const hangmanIdle = ingame.querySelector('.sceneVideo');

let difficultyChosen;
let categoryChosen;
let chances;
let hiddenWord;
let hint;
let chopSounds = [axechop1, axechop2, axechop3]

let aftermathQuotes = [
    '"There are two major forms of lying. <br>Concealment & Falsification."',
    '"Being alone is not synonymous with being lonely."',
    '"When a man is denied the right to live the life he believes in,<br>he has no choice but to become an outlaw."',
    '"Dont\'t compromise yourself - you\'re all you have."',
    '“The world is full of obvious things which nobody by any chance ever observes.”',
    '“All men make mistakes, but a good man yields when he knows his course is wrong,<br> and repairs the evil. The only crime is pride.”',
    '"Poverty is the parent of revolution and crime."',
    '“A good act does not wash out the bad, nor a bad act the good.<br> Each should have its own reward.”',
    '“The man who has a conscience suffers whilst acknowledging his sin. <br>That is his punishment.”',
    '“There are crimes of passion and crimes of logic. <br>The boundary between them is not clearly defined.”',
    '“To have once been a criminal is no disgrace.<br> To remain a criminal is the disgrace.”',
    '“Some people steal to stay alive, and some steal to feel alive.<br> Simple as that.”',
    '“Criminals do not die by the hands of the law. <br>They die by the hands of other men.”',
    '“The criminal is the creative artist;<br> the detective only the critic.”',
    '“Before you call yourself a Christian, Buddhist, Muslim, Hindu or any other theology,<br> learn to be human first.”',
    '“It is a capital mistake to theorise before one has data.”',
    '“The devil’s agents may be of flesh and blood, may they not?”',
    '“Society wants to believe it can identify evil people, or bad or harmful people,<br> but it\'s not practical. There are no stereotypes.”',
    '“A society gets the criminals it deserves.”',
    '“A criminal remains a criminal whether he uses a convict\'s suit or a monarch\'s crown.”'

];


let weapons = [
    'KNIFE', 'DAGGER', 'STICK', 'AXE', 'BAT', 'ROCK', 'CLEAVER', 'SWORD',
    'POLEARM', 'STAFF', 'SPEAR', 'FRISBEE', 'YOYO', 'CATAPULT', 'DART',
    'FLAIL', 'BOLAS', 'EXCALIBUR'
];


let weaponsHints = [
    "\"This tool can be both tool or weapon. Depends on the one using it\"",
    "\"It's quite lacking in terms of length but it can serve a swift hand well\"",
    "\"One of the early weapons in time. Irrelevant due to time but still used for other purposes\"",
    "\"It is used to support global warming and can be quite hefty to be lifted naturally\"",
    "\"This is used for a an outdoor activity but it can surely deal a lethal blow\"",
    "\"Probably the very first utilised weapon in history. Still used today for some reason\"",
    "\"This tool shouldn't be toyed around with. Severe a limb you can say, for that is it's main purpose\"",
    "\"The weapon of the honoured with chivalry at heart\"",
    "\"A category of weapons that consist a massive area to grip\"",
    "\"This is used by those of the wise and experienced. Those with said magical powers also use it\"",
    "\"The weapon is that of those brave if meelee but that of those cowardly if thrown\"",
    "\"This wasn't meant to be used for sports but somehow, it did.\"",
    "\"Used in wars in the early times. Can you believe it now serves as entertainment for the children?\"",
    "\"Mankind threw rocks but they wanted to throw even bigger rocks. This contraption was the byproduct.\"",
    "\"Rarely used to harm as it serves most of it's time on a board\"",
    "\"This weapon is quite troublesome as it serves to stike around than head-on\"",
    "\"It is often thrown to capture targets by entangling what's down below\"",
    "\"A legendary weapon which is said to have magical capabilities. Unfortunately, when it's master deceased, it was thrown away\""
];



let history = [
    'ALBERT', 'TESLA', 'JACK', 'ELON', 'JEFF', 'EDISON', 'LUBU', 'ALEXANDAR',
    'HITLER', 'JESUS', 'SHAKESPEARE', 'EDMUND' , 'TED', 'BILLY', 'ARISTOTLE', 
    'ARTHUR', 'AZAZIL', 'GENGHIS', 'ISSAC', 'CAIN', 'ABEL'
];

let historyHints = [
    "\"This individual is famous thanks to his whacky expressions and his extreme devotion in pursuing knowledge\"",
    "\"This individual was never taken seriously and was taken as a fool. Although his discoveries offered to revolutionize the world, he faced slander during his lifetime\"",
    "\"This individual was infamous for notorious crimes and making clean getaways. He was never caught and his identity remains unknown\"",
    "\"This man has touched the heart of others through his unique personality. Everyone knows him and he has an eye on Mars\"",
    "\"This individual is an urban legend which remains unknown to it's legitimacy. It's appearance is disturbing yet welcoming\"",
    "\"This individual was known to shine the light on the world's darkness. Without him, the nights would ever be so sinister\"",
    "\"Was said to be the most powerful warrior during the Period of Three Kingdoms\"",
    "\"This king of an ancient greek kingdom has never lost a single battle in his years of conquest and he is known by many names\"",
    "\"An infamous dictator feared by many. His death dwells in mystery but the cause of many taers of joy\"",
    "\"A man who is considered holy by many. Death of he was an agony for one but for the other, it was naught but mere deception\"",
    "\"A man whose poetry was beat by none earning him fame and recognition for generations\"",
    "\"This man comes from a nation that consists of two islands and is known for being one of the first to ascend the highest of mountains\"",
    "\"This man is infamous for being quite the egoistic savage as he violates the not to be violated and murders them afterwards with joy\"",
    "\"This man was an infamous gunfighter of the American Old West whose gunslinging skills were superior to most\"",
    "\"A great philosopher and the very first genuine scientist in hisotry. He was the one who founded the formal logic we use today\"",
    "\"A king who is the most legendary icon of medieval Britain whose death was griefed by many. His weapon was thrown into the lake upon his demise\"",
    "\"The one who refused to kneel and was banished from the sanctuary that all sought most\"",
    "\"This man was leader of the largest contigous empire in history. Debates are made whether he was good or bad due to his inconsistent actions\"",
    "\"If it wasn't for him, we'd be floating right now. A joke told by many to spread and give recognition to his greatest achievement\"",
    "\"The one who was consumed by his own jealously which caused him to commit sin on a scale that was never achieved before him\"",
    "\"The one whose gift was sincerely offered and accepted which unfortunately led to his own deise\"",
];




let science = [
    'DATA', 'ASTRONOMY', 'STARS', 'TIME', 'SPACE', 'MOON', 'SUN', 'LIGHT',
    'CELL', 'ATOMS', 'GENE', 'FOSSIL', 'NEUTRON', 'KINETIC', 'OSMOSIS', 
    'TRANSPIRATION', 'ARGENTUM', 'POTASSIUM', 'SEROTONIN', 'ESOPHOGUS', 
    'SULPHUR', 'DOPAMAINE', 'ANTIMATTER'
];

let scienceHints = [
    "\"Something extremely important in experiments and research\"",
    "\"A field which takes a close look at celestial objects and requires the use of many skills\"",
    "\"The exact number of them are unknown as they continously live and die in the forever darkness\"",
    "\"The most confusing as it is indefinite. Some sought to bring it back to a certain point while a few sought it's end\"",
    "\"A continuous expanse which is free and unoccupied\"",
    "\"A satellite that can cause special events and determine the start and end of times\"",
    "\"The very thing that extends the existence of the current known system. Without it, the living would run astray\"",
    "\"It serves multiple purposes which are essential to continue the cycle and course of life. It helps make what's visible, visible\"",
    "\"Organsims consists of these extraordinary building blocks\"",
    "\"Everything is of it. None excluded except for a particular group\"",
    "\"A unit which is the very basic of heritage\"",
    "\"Scrap of those lost from eons, resting below the crust of the Earth\"",
    "\"Present in all atomic nuclei except those of ordinary hidrogen\"",
    "\"The very thing that is emerged from motion\"",
    "\"If a solution and solvent or two solutions of different strength are separated by a certain type of membrane, it occurs\"",
    "\"The loss of water through vapor from those of one of the biological kingdoms\"",
    "\"The other name for the element that has the most reflective shine\"",
    "\"An element that is very essential for the continuation of a proper human's body. It is extremely soft and reacts rapidly with oxygen\"",
    "\"The key hormone to a stabilized mind. It is something that is rarely found in those of old age\"",
    "\"A muscular tube that can prevent secretions from entering the pipe of wind\"",
    "\"An abundant element which is nonmetallic that is preferred to stay on surfaces than in the air\"",
    "\"A type of neurotransmitter that is sought by many to gain comfort or an escape from the daunting reality before them\"",
    "\"It has been created along with its polar opposite in equal amounts. However, it has yet to be found. It's production though, is possible\""
];












//Script for intro

setTimeout(() => {
    loading.classList.add('hide');
},2000)

setTimeout(() => {
    introText.classList.remove("hide");
},2500)

setTimeout(() => {
    introText.classList.remove("clear");
    mainMenu.classList.remove("hide");
},3000)

setTimeout(() => {
    intro.style.transition = '.2s ease-in';
    intro.classList.add('clear');
},6000);

setTimeout(() => {
    intro.classList.add('hide');
},6200)















//Script for Main Menu

function mainMenuTransition(){
    title.classList.add('clear');
    startButton.classList.add('clear');

    setTimeout(() => {
        title.classList.add('hidden');
        startButton.classList.add('hidden');
        mainMenu.style.transition = '1s cubic-bezier(0.28, -0.48, 1, 1)';
    }, 200)

    setTimeout(() => {
        mainMenu.style.transform = "scale(600%)";
    },1000)

    setTimeout(() => {
        mainMenu.style.transition = '.2s ease-in';
        mainMenu.classList.add('clear');
    },3000)

    setTimeout(() => {
        mainMenu.classList.add('hide');
    },3200);


    setTimeout(() => {
        difficulty.classList.remove('hide');
        selectionMusic.play();
    },5000)
}













//Script for difficulty buttons
difficultySelections.forEach(difficultySelection => {
    
    difficultySelection.addEventListener("click", difficultySelectionsTransition);
    difficultySelection.addEventListener('mouseover', () => {
        selectSoundEffect.load();
        selectSoundEffect.play();
    })

})

function difficultySelectionsTransition(){

    //Switch from difficulty to categories
    difficulty.classList.add('hide');
    category.classList.remove('hide');

    difficultyChosen = this.getAttribute("data-difficulty");

}












//Script for category buttons
categories.forEach(categorySelection => {

    categorySelection.addEventListener("click", categorySelectionTransition);
    categorySelection.addEventListener("mouseover", () => {
        selectSoundEffect.load();
        selectSoundEffect.play();
    })

})

function categorySelectionTransition(){

    category.classList.add("hide");
    cutscene.classList.remove("hide");
    selectionMusic.pause();
    selectionMusic.load();
    cutsceneVideo.play();

    categoryChosen = this.getAttribute("data-category");

}









//Script to go from cutscene to ingame
function cutsceneTransition(){
    cutsceneVideo.pause();
    cutsceneVideo.load();

    cutscene.classList.add("hide");
    ingame.classList.remove("hide");

    switch(difficultyChosen){
        case "easy":
            chances = 7;
            sessionStorage.setItem("chances", chances);
            break;
    
        case 'normal':
            chances = 5;
            sessionStorage.setItem("chances", chances);
            break;
    
        case "hard":
            chances = 3;
            sessionStorage.setItem("chances", chances);
            break;
    }

    switch(categoryChosen){
        case "weapons":
            showCategory.innerHTML = "Category: WEAPONS";
            let randomizerWeapons = Math.floor(Math.random()*weapons.length);
            hiddenWord = weapons[randomizerWeapons];
            hint = weaponsHints[randomizerWeapons];
            sessionStorage.setItem("hiddenWord", hiddenWord);
            break;
    
        case 'history':
            showCategory.innerHTML = "Category: HISTORY";
            let randomizerHistory = Math.floor(Math.random()*history.length);
            hiddenWord = history[randomizerHistory];
            hint = historyHints[randomizerHistory];
            sessionStorage.setItem("hiddenWord", hiddenWord);
            break;
    
        case "science":
            showCategory.innerHTML = "Category: SCIENCE";
            let randomizerScience = Math.floor(Math.random()*science.length);
            hiddenWord = science[randomizerScience];
            hint = scienceHints[randomizerScience];
            sessionStorage.setItem("hiddenWord", hiddenWord);
            break;
    }

    showHint.innerHTML = hint || "\"Unknown\"";
    showChances.innerHTML = `Chances: ${chances}`;
    let hiddenWordArray = hiddenWord.split("");
    let hiddenWordArrayPrivate = [];
    
    for(var i = 0; i < hiddenWordArray.length; i++){

        hiddenWordArrayPrivate.push("_");

    }

    sessionStorage.setItem("hiddenWordArray", hiddenWordArray.join(""));
    sessionStorage.setItem("hiddenWordArrayPrivate", hiddenWordArrayPrivate.join(""));
    hiddenWordContainer.innerHTML = hiddenWordArrayPrivate.join(" ");

    heavyBreathing.load();
    heavyBreathing.play();
    heartbeat.load();
    heartbeat.play();

    hangmanIdle.load();
    hangmanIdle.play();


}

//Script for skip button
cutsceneSkipButton.addEventListener("click", () => {
    cutsceneTransition();
})

//Script to show ingame when video finishes
cutsceneVideo.addEventListener('ended',() => {
    cutsceneTransition();
})














//Script for ingame
let previousLetter;
let letterToSubmit;
let chosenLetterTile;



input.addEventListener("click" , () => {
    letterSelection.classList.remove("hide");
})

closeButton.addEventListener("click", () => {
    letterSelection.classList.add("hide");
})


letters.forEach(letter => letter.addEventListener("mouseover", () => {
    selectSoundEffect.load();
    selectSoundEffect.play();
}))

letters.forEach(letter => letter.addEventListener("click", function letterPick(){

    
    this.classList.add("selected");
    letterToSubmit = this.getAttribute("data-letter");
    chosenLetterTile = this;
    this.removeEventListener('click', letterPick);

    console.log(letterToSubmit);

    if(!previousLetter){
        return previousLetter = this;
    }

    previousLetter.classList.remove("selected");

    if(!previousLetter.classList.contains("unavailable")){

        previousLetter.addEventListener('click', letterPick);

    } 

    previousLetter = this;
    

}))



confirmButton.addEventListener("click", () => {

    let hiddenWordArrayUpdated = sessionStorage.getItem("hiddenWordArray").split("");
    let hiddenWordArrayPrivateUpdated = sessionStorage.getItem("hiddenWordArrayPrivate").split("");

    
    if(letterToSubmit){

        letterSelection.classList.add("hide");
        chosenLetterTile.classList.remove("selected");
        chosenLetterTile.classList.remove('available');
        chosenLetterTile.classList.add("unavailable");


        if(hiddenWordArrayUpdated.includes(letterToSubmit)){

            clapping.load();
            clapping.play();

            response.querySelector('p').innerHTML = "CORRECT";
            response.classList.remove('hide');
            setTimeout(() => {response.classList.add('hide')},1000);

            while(hiddenWordArrayUpdated.includes(letterToSubmit)){
                let indexOfMatch = hiddenWordArrayUpdated.indexOf(letterToSubmit);

                hiddenWordArrayUpdated[indexOfMatch] = "_";
                hiddenWordArrayPrivateUpdated[indexOfMatch] = letterToSubmit;
                hiddenWordContainer.innerHTML = hiddenWordArrayPrivateUpdated.join(" ");

            }

            if(!hiddenWordArrayPrivateUpdated.includes("_")){
                

                setTimeout(() => {
                    ingame.classList.add("hide");
                    victory.classList.remove("hide");
                    heartbeat.pause();
                    heartbeatFaster.pause();
                    heartbeatFastest.pause();
                    heavyBreathing.pause();
                    hangmanIdle.pause();
                }, 2000);
                
                setTimeout(() => {
                    victory.classList.remove("blind");
                }, 4000);

                setTimeout(() => {
                    victory.querySelector('p').innerHTML = `"Well done. You're free.<br>The word was ${sessionStorage.getItem("hiddenWord")}"`;
                },6000)

                setTimeout(() => {
                    victory.classList.add('hide');
                },11000);

                setTimeout(() => {
                    window.location.reload();
                },12000)

            }

            sessionStorage.setItem("hiddenWordArray", hiddenWordArrayUpdated.join(""));
            sessionStorage.setItem("hiddenWordArrayPrivate", hiddenWordArrayPrivateUpdated.join(""));

        } else {

            let chopToPlay = chopSounds[Math.floor(Math.random()*chopSounds.length)];

            chopToPlay.load();
            chopToPlay.play();

            window.navigator.vibrate(500);
            hangmanIdle.src = 'hangmanStrike.mp4';
            hangmanIdle.load();
            hangmanIdle.play();
            setTimeout(() => {
                hangmanIdle.src = 'hangmanIdle.mp4';
                hangmanIdle.load();
                hangmanIdle.play();
            },2000);

            response.querySelector('p').innerHTML = "WRONG";
            response.style.color = "red";
            response.querySelector('p').classList.add('shaken');
            response.classList.remove('hide');
            setTimeout(() => {
                response.classList.add('hide'); 
                response.querySelector('p').classList.remove('shaken');
                response.style.color = "white";
            },2000);

            let chancesUpdated = parseInt(sessionStorage.getItem('chances'));

            chancesUpdated--;
            showChances.innerHTML = `Chances: ${chancesUpdated}`;

            if(chancesUpdated == 2){
                game.classList.add("bleed");
                heartbeat.pause();
                heartbeatFaster.load();
                heartbeatFaster.play();

            } else if (chancesUpdated == 1){
                game.classList.remove("bleed");
                game.classList.add("bleedMore");
                heartbeatFaster.pause();
                heartbeatFastest.load();
                heartbeatFastest.play();

            }

            if(!chancesUpdated){

                game.classList.remove("bleedMore");
                ingame.classList.add("bleedEntire");
                aftermath.classList.remove('hide');
                heartbeatFastest.pause();
                heavyBreathing.pause();
                hangmanIdle.pause();

                setTimeout(() => {
                    ingame.classList.add("hide");
                    aftermath.classList.remove("bleedEntire");
                    ingame.classList.remove("bleedEntire");
                }, 2000);

                setTimeout(() => {
                    aftermath.querySelector('p').innerHTML = aftermathQuotes[Math.floor(Math.random()*aftermathQuotes.length)];
                }, 5000);

                setTimeout(() => {
                    aftermath.classList.add('hide');
                }, 12000)

                setTimeout(() => {
                    window.location.reload();
                }, 13000)

            }

            sessionStorage.setItem('chances', chancesUpdated);

        }


        chosenLetterTile = undefined;
        letterToSubmit = undefined;

    } else {
        response.classList.remove("hide");
        response.querySelector('p').innerHTML = "Please CHOOSE a letter";
        setTimeout(() => {response.classList.add("hide")},3000);
    }

})











//Where it all begins
startButton.addEventListener('click', () => {

    mainMenuTransition();

})



//Credits
console.log("Animations by DonovanAnims");
