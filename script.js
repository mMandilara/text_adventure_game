function startGame() {
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('startButton').style.display = 'none';

    displayStoryPart('start');
}
// Play music function
let state = false;
let btn = document.querySelector('.button');
let speaker = document.querySelector('.speaker');
let slider = document.querySelector('.slider');
let song = document.querySelector('.song');

btn.addEventListener("click", () => {
  if (state == false) {
    speaker.classList.add("on");
    setTimeout(() => {
      song.play();
    }, 1000);
  } else {
    speaker.classList.remove("on");
    song.pause();
  }
  state = !state;
});
slider.addEventListener("input", (e) => {
  song.volume = Number(e.target.value);
});

// Game function
function displayStoryPart(partId) {
    const part = storyData[partId];
    const storyContainer = document.getElementById('story');
    const choicesContainer = document.getElementById('choices');

    storyContainer.innerHTML = `<p>${part.text}</p>`;

    // Display the choices
    choicesContainer.innerHTML = '';
    part.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('btnChoose');
        button.textContent = choice.text;
        button.onclick = () => displayStoryPart(choice.next);
        choicesContainer.appendChild(button);
    });
}

//Story's choises
const storyData = {
    start: {
        text: "You wake up on a cruise ship in the middle of the Atlantic. It too quite you need some music to wake you up. Play the radio. as you listen to the music you notice a note under your door reads, 'Come outside, this is your ship now.' You find yourself alone on the entire ship.",
        choices: [
            { text: "Try to change the course of the ship", next: "changeCourse" },
            { text: "Call for help from the radio", next: "callHelp" }
        ]
    },
    changeCourse: {
        text: "You go to the wheelhouse and try to change the course of the ship, but the steering wheel is broken.",
        choices: [
            { text: "Call for help from the radio", next: "callHelp" }
        ]
    },
    callHelp: {
        text: "You try to use the radio to call for help, but there's no signal.",
        choices: [
            { text: "Freak out, think this is a dream and go to sleep", next: "sleep" },
            { text: "Look around to find who wrote the letter", next: "lookAround" }
        ]
    },
    sleep: {
        text: "You go back to your room and try to sleep, hoping this is just a dream. You wake up on your bed, but nothing has changed, except you now hear someone walking around.",
        choices: [
            { text: "Go look for them", next: "lookAround" }
        ]
    },
    lookAround: {
        text: "You decide to look around the ship to find who wrote the letter. First, you check out ...",
        choices: [
            { text: "the catpain's cabin", next: "captainsCabin" },
            { text: "the infirmary", next: "infirmary" }
        ]
    },
    captainsCabin: {
        text: "You find an enormous room (compared to yours) with a wooden table at the center, a lot of papers and an empty bed. There's no one on site.",
        choices: [
            {text: "You are looking around for clues", next: "captainsClues"},
            {text: "You look open the window and look outside", next: "captainsWindow"}
        ]
    },
    infirmary: {
        text: "You open the door hoping to see someone, maybe the passengers got injured. There's no sign of anyone being here. Everything is in place.",
        choices: [
            {text: "You take a few things, bandages, scissors and a few more things that may come in handy if you do find someone injured", next: "supplies"},
            {text: "You decide to look around the deck", next: "captainsWindow"}
        ]
    },
    captainsClues: {
        text: "You open a cabinet to read a few artifacts. The papers have a yellow-ish colour, they look old, like they've been here for decades. Next to the pages is a pack of painkillers. Your eye catches a glimpse of light from the bed. Under the pillow you find a small knife.",
        choices: [
            {text: "You take it with you and you go to check out the deck", next: "captainsWindow"},
            {text: "You take the painkillers. They could be expired but if need be they will be useful", next: "supplies"}
        ]
    },
    captainsWindow: {
        text: "The wind hits your face, making you forget your troubles for a moment. You look around, everything seems normal as you wish you could go back home or if this is a dream wake up from it. Your eyes drift under a window, the captain's window. There is a long piece of rope hanging from the window's edge. It looks like it was cut. Did someone try to get out of the window? There is no boat around.",
        choices: [
            {text: "You decide to take the rope with you", next: "supplies"},
            {text: "As you look around you feel an overwhelming feeling of loneliness and hopelessness", next: "noose"}
        ]
    },
    supplies: {
        text: "You walk in the hallway, looking around. You hear heavy breathing from around the corner. There is a person at the end of the long hall breathing with difficulty holding their hand, as if they're injred.",
        choices: [
            {text: "Call out to them", next: "callThem"},
            {text: "Turn around and leave quietly", next: "leaveThem"}
        ]
    },
    callThem: {
        text: "You call out 'Hello?'. They flinch and without looking at you they run away.",
        choices: [
            {text: "You follow them", next: "followThem"},
            {text: "You decide to stay away from them", next: "leaveThem"}
        ]
    },
    leaveThem: {
        text: "You walk back the way you came, you feel tired and decide to return to your cabin. The door is locked.",
        choices: [
            {text: "'They locked me outside, I'm going to find them and beat them up!", next:"findThem"},
            {text: "'I'll find them sooner or later. Now I'm just hungry'", next: "kitchen"}
        ]
    },
    followThem: {
        text: "You run after them and you almost lose them but the trail of blood they leave behind it helps you. You shout 'Let me help you!'but they run even faster and after a while you lose track of them. You decide to leave the medicine you have on the floor and say 'I have this medicine with me but it is oh so heavy. I'm going to leave it here!'.",
        choices: [
            {text: "You leave the medicine and walk away", next: "leaveThem"},
            {text: "Walk a few rooms down the hallway and hide, waiting for them to come and confront them", next: "findThem"}
        ]
    },
    findThem: {
        text: "After a few minutes that feel like hours, you see the person walking your way. They haven't seen you and you hide behind a corner.",
        choices: [{text: "Step...step...step", next: "steps"}]
    },
    steps: {
        text: "Steps...getting closer. Now! 'Aha!' you jump in front of them pointig at them. You are shocked. How could this be? You recognise this person, how could you not? It is you",
        choices:[
            {text: "Your brain feels like it's about to split in half. You can't say anything", next: "shocked"},
            {text: "'Is this a Spider-man meme?'", next: "shocked"}
        ]
    },
    kitchen:{
        text: "You go to the kitchen to find something to eat. You open up the fridge smiling and it welcomes you with wrotten fish and meat. You gag at the smell and close it. How is this possible, the cruise set sail only a week ago...",
        choices: [
            {text: "Turn around to leave before you vomit", next: "stab"},
            {text: "'Well...better than nothing', you say and take a bite from a fish", next: "medicine"}
        ]
    },
    medicine:{
        text: "You feel dizzy. This is not a surprise it was a pretty stupid move of you. You search in you pockets for any medicine you could have and take it without thinking. This may be the second most stupid thing you've done today, after eating that fish.",
        choices: [
            {text: "You sit in the dining room", next: "wait"},
            {text: "You go to a random room, you need to lie down", next: "mirror"}
        ]
    },
    wait: {
        text: "Trying to look cool in case they show up, while you feel like death. Time passes and you slowly fall asleep. When ou open your eyes you don't know how long you've been sleeping, you have lost sense of time. You realise why you woke up, there a sound somewhere behind you. Before you turn around...",
        choices: [
            {text: "*gasp*", next: "stab"}
        ]
    },
    stab: {
        text: "You've been stabbed on the shoulder. But by whom? You look up to see a pair of eyes. You recognise those eyes. In a state of shock it takes a few seconds to realise that they eyes that are looking back at you are your own.",
        choices: [
            {text: "'How?', you say in a trembling voice. But you (the other you) only whispers 'This is pay back. Good luck!'and walks away as they leave the knife with you", next: "mustDo"}
        ]
    },
    mustDo: {
        text:"You're going crazy, right? R1ght?? Why does it feel like you have to kill yourself? Your Otherself! Damn it, don't get paranoid now. If this is because of this get it together! If not...maybe this is the only way out, the only way to get back to the real ship",
        choices: [
            {text: "Go and find you", next: "findYou"},
            {text: "'This is crazy... Am I going to be a madman in a ghost ship?'", next: "noose"}
        ]
    },
    shocked: {
        text:"You (the other you) raises their hands as if to say 'wait'. They open their mouth to say something and thenthey sprint back the way they came. You start chasing them and shout 'Wait! What is this what is going on?'. They yell back 'Get away from me! There is only one way out of this loop and I am not going to die!'.",
        choices: [
            {text: "You stop running to consider what other-you said", next: "think"},
            {text: "Yes. Now it definetely is time to sleep. Go and find a room to lie down", next: "mirror"}
        ]
    },
    mirror:{
        text:"You find a random open room in first-class (nice). You enter a plain room, too small with no furniture, only a mirror on a wall. You walk in front of it, you look terrible. You go to find another room, open the door and is the same thing only now there is no mirror and you notice that there is a door to the previous bedroom, they're connected. 'I see, so this is the entrance...but if there was no mirror before, what did I see...?'",
        choices: [
            {text: "Go back to check the mirror", next:"checkMirror"}
        ]
    },
    checkMirror: {
        text: "You go to the last room and surely you notice there is no reflection. So what did you see before? You hear something behind you, but before you turn around you feel a cold metal piercing your shoulder. 'I am so sorry' the voice says behind you. They pull out the knife as you turn to see...yourself.",
        choices: [
            {text: "Start punching yourself", next: "punch"},
            {text: "Run out of the room", next: "getAway"}
        ]
    },
    punch: {
        text: "You try to punch your other-self, not paying attention to your wound. You punch their face strong enough to make them fall on thei back. You lip on top of them to hit them hard enough (what are you doing? Trying to kill you?). You fall on top of you to feel the cold metal again slashing you but this time in below you stomach. You look shocked at yourself and they are crying whispering something. You don't hear them as you lose consciousness.",
        choices:[
            {text: "end", next: "end"}
        ]
    },
    getAway:{
        text: "You run out of the room running, breathing heavily as you are bleeding. You run around the hallways, not knowing where you are anymore you hear a familiar voice call out to you. 'Oh hell no!', you go back to your room and lock yourself in there. The only reason for you to leave this room is to find food or get to the infirmary if needed... Maybe the best think to do is stay here, away from this doubleganger loonatic.",
        choices: [
            {text: "Try again", next: "start"}
        ]
    },
    think: {
        text: "'Only one way out..?' and they were running away bleeding... Could it be...that you have to...kill your own self (other self don't get confused). Then there is really only one way",
        choices: [
            {text: "Go get the knife",next: "getKnife"},
            {text: "You have the knife. Now find yourself", next: "findYou"}
        ]
    },
    getKnife: {
        text: "You walk back to the captain's cabin, careful not to find yourself. The knife is not on the bed, of course, the other-you took it and you find you stabbed. This is getting confusing. Where else could the knife be?",
        choices: [
            {text: "kitchen", next: "knifeKitchen"}
        ]
    },
    knifeKitchen: {
        text: "You go the kitchen to find a knife, surely there must be many here. WHY IS THERE NO KNIFE?? *thump*, you hear something from the dining room. You go out to find blood on a chair and (not so surprisingly) a bloodied knife.",
        choices: [
            {text: "You take the knife", next: "findYou"}
        ]
    },
    findYou: {
        text:"Where could you be? Hiding in a room probably. But what if you get there before the other-you does? You get in the first room you find, first-class because you deserve it. There is a small entrance and a door leading to a huge bedroom. You walk in the bedroom, there is no sign of anyone. You don't wait long until you hear the door opening, you get ready to face yourself. they walk in fron of you and you are still shocked, as shocked as they are actually. As simple as that they walk away. 'Well I got to wait more now', you say inder your breath.",
        choices: [
            {text: "wait more", next: "waitAttack"}
        ]
    },
    waitAttack: {
        text: "As you wait behind the door you are thinking if this is moral, logical even. Then the door opens again. A freaked-out you gets in the room, goes and stares at the place they where standing before, not sure what to do. This is your chance!",
        choices:[
            {text: "Attack", next: "attack"},
            {text: "You have second thoughts", next:"diningRoom"}
        ]
    },
    attack:{
        text: "Walk quietly and stab them on the shoulder. 'I am so sorry', you say as you pull out the knife. They punch you, you fall on your back and you don't fell the pain as you are about to cry (WHAT DID YOU DO?). The jump on top of you and without thinking you grip your knife ready to defend yourself, and you stab them. You can't hold the tears, you say 'I'm sorry' over and over again as they faint.",
        choices: [
            {text: "You feel hollow. This is what you have to do, to every version of you to get out", next: "end"},
            {text: "This isn't right... You can't keep doing this", next: "noose"}
        ]
    },
    noose: {
        text: "You take the rope, make a noose and hang yourself from the captain's cabin window",
        choices: [
            {text: "end", next: "end"}]
    },
    diningRoom: {
        text: "You go to the dining room knowing to find youserlf sitting on a chair sleeping. You can't get a rest! What if they attack you when they wake up? You feel paranoid.",
        choices: [
            {text: "Sneak behind them and stab them", next: "diningSneak"}
        ]
    },
    diningSneak: {
        text: "You leave quickly, this can't be happening. You did it, even though you tried to escape from it a few minutes before!",
        choices: [
            {text: "You feel hollow. This is what you have to do, to every version of you to get out", next: "end"},
            {text: "This isn't right... You can't keep doing this", next: "noose"}
        ]
    },
    end: {
        text: "I guess this is the end. But you try again and do things differently.",
        choices: [
            {text: "Try again", next: "start"},
            {text: "Fuck it, I'll drown myself", next: "drown"}
        ]
    },
    drown: {
        text: 'Well alright then. Please visit: <a href="https://www.psychologytoday.com/us/basics/suicide/suicide-prevention-hotlines-resources-worldwide" target="_blank">this link :)</a>.'
    }

};
