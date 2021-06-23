var prompt = ["A cult intends to sacrifice you to awaken their goddess. What they don\'t know is that you ARE their goddess.", 
"When the world's most beloved superhero died defending them, the people mourned. Little did they know, the hero\'s secret identity was an organ donor, and people who received one of the hero\'s organs are starting to exhibit some of the same powers.", 
"You are part of the league, the superheroes who save the world, yet you never go on missions. You are only called for one thing only. Total annihilation, for when they don\'t want survivors.", "You don\'t have an Angel or a Devil on your shoulder. You have an Angry Viking and 50\'s House Wife.", 
"You rescue many different animals not knowing they are mythical creatures. That weird bird you rescued a month ago was a Phoenix. Your dog? Cerberus. That fox you impulsively got was a kitsune. They also all agree to look over you.", 
"One night while sleeping, you let your hand dangle off the bed. Seeing the opportunity the demon grabs your hand and tries to pull you down to hell, however, you, in your panic, pull the demon out. Now it\'s a little awkward...", 
"Your entire life you have failed at everything you do. Wanting to get some happiness in your life you decide to summon the devil and sell your soul. Except your even fail at this and summon the archangel Michael", 
"Vampires could be majestic and handsome. The problem is that they constantly mix all the slang from the past five centuries together into unholy abominations that they call sentences and they don't even try to hide it anymore.", 
"Both of your parents made deals with fae about giving them their firstborn. Different fae... Now you live under the joint custody of two faeries who don\'t like this situation one bit.", 
"You\’re immortal. The only problem is, you\’ve lived so long humanity died out and a new intelligent species evolved. Now you\’re forced to live in the forest as a cryptid.", 
"You are part of a city guard that has enjoyed peace for over a century. The money is good and the job is easy … until one morning you notice worn chainmail through the rags that the well-fed beggars in the street are wearing, and many are discreetly hiding weapons.", 
"You have the ability to look at what genre a person\'s life will fit into. For example, both your parents are Romanic comedy. Your best friend is action adventure. Thing\'s became worrying when you look yourself in a mirror and see your genre is horror thriller.",
"A year ago you noticed that the day before a natural disaster, your thumbs start to ache. You\'ve used the ability to predict storms, tornados etc and you\'ve never been wrong. This morning you wake up with your thumbs in so much pain you're blind with it. Something very very bad is coming.",
"Studies have shown that humans are terrible at recognizing flirtatious behavior in other humans. We\’re even worse at recognizing it in aliens.",
"You are on the run from a dragon. Not because it wants to kill you, quite the opposite in fact. This dragon hoards powerful adventurers and unfortunately your skills caught its eye. Now it will stop at nothing until you are a part of its guild.",
"A witch keeps casting spells on you, to make you more kind or teach you a lesson. She made you poor, changed your sex ,an animal, a ghost, a car, with another look... but every time you adapt to the spell and you manage to live your live very well, without learning anything. The witch hates you.",
"A depressed hero sits alone, gazing at a scrapbook full of newspaper clippings entailing his past battles and rise to fame, which all seem meaningless now as he considers retirement, he hears a knock at the door and finds his arch-nemesis, with a pack of beer and the goal of changing his mind.",
"You are a professor who assigns his students an essay on what it means to be a dictator. 30 years later one of your students actually becomes one and you find a 20 page thesis written by him on your desk.",
"Aliens have captured you, and placed you in one of their nature preserves. However, they have sorely miscalculated on two issues: The amount of calories needed to keep a persistence predator sated, and the lethality/brutality of a hangry human.",
"One day, every person spontaneously gains a superpower based on their job. Psychologists gain telepathy, Firefighters can waterbend or firebend, Pilots can fly. Your job, previously looked down upon, yields the strongest power of them all.",
"You found a lamp with a genie and get three wishes. But instead of twisting your wishes into bad fortune, this genie twists them to have unexpectedly positive impacts on everyone around you, too.",
"Your friend begs you to drive out to the middle of nowhere and take their picture with their phone. As soon as you do, they disappear. You check the phone and find hundreds of photos of different smiling strangers all in the exact same spot.",
"At every household in the world, at the very same time, penguins appeared. Mostly harmless. But everyone who talked about it disappeared. We learned after the newscasters disappeared, and then the friend who mentioned it first, then everyone who posted it on FB. It's beside me as I wri-",
"You woke up in a hospital recovery room handcuffed to the bed. The nervous nurse didn\'t make eye contact when she came in to check on you. She was accompanied by two very large solders in full combat gear. The last thing you remember was teaching your 3rd grade class about photosynthesis.",
"Working as a world renowned therapist you have uncovered far more about secret conspiracies, horrific monsters, barely failed schemes to destroy the world and dark magical cults from your myriad of heroic patients than you could have bargained for, and you might need therapy yourself.",
"Working as a world renowned therapist you have uncovered far more about secret conspiracies, horrific monsters, barely failed schemes to destroy the world and dark magical cults from your myriad of heroic patients than you could have bargained for, and you might need therapy yourself.",
"A local bartender regularly hosts monsters and demons at his pub. When someone kidnaps his children, they learn the hard way just how close they are to him.",
"Your girlfriend would do anything for you. Unfortunately as a knight from a medieval fantasy realm she tends to accomplish these tasks with sword and armour donned. Now she has gone a step further and decided to vanquish your tryannical liege. Your Boss.",
"Bartenders serve drinks as a side job. Their real profession? Hunting down every person named Bart. You are the last Bart alive, and they will stop at nothing to kill you.",
"Just like all mobsters are part of the mob, all lobsters are part of the lob",
"Each time you put on a different hat you take on a different persona. Now your cowboy hat persona, and your deer stalker hat persona, are trying to solve the crimes of your fedora hat persona.",
"You are a part of a cult that believes the end of the world is near. Unlike most doomsday cults your group is made up of ex-scientists who discovered an ancient evil deep within the earth, and found that it was due to awaken in a few weeks time.", 
"You\'re a sci-fi writer obsessed with making your stories as scientifically accurate as possible. Your latest work became massively popular and got picked up by the scientific community. One day while you were writing, you receive a call saying you\'ve won a Nobel Prize."
]

//store submissions on localStorage for now
//store in data base eventually
document.getElementById("saveWork").addEventListener('click', function(event){
    let newContent = document.getElementById("writingPieces").value;
    localStorage.setItem("newContent", newContent);
    console.log("saved")
});

//recall button maybe to continue work?
document.getElementById("loadWork").addEventListener('click', function(event){
    let newContent = localStorage.getItem("newContent");
    document.getElementById("writingPieces").value = newContent;
});

//submit button 
//or maybe have it put onto stories.html?


// generator code

document.getElementById("randomGen").addEventListener('click', function(event) {
    var randomNumber = Math.floor (Math.random() * (prompt.length));
    document.getElementById("storyDisplay").innerHTML = prompt[randomNumber];
    console.log("randomized");
});

//try to copy the text 
/*
document.getElementById("copy").addEventListener('click', function(event){
    let copyText =  document.getElementById("storyDisplay");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}); */

