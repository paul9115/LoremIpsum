const text = [
    'Echo park waistcoat deserunt salvia ut. Tumeric helvetica aliquip, activated charcoal kale chips master cleanse irony.' +
    ' Knausgaard kinfolk hashtag authentic nulla williamsburg anim hexagon green juice yes plz aliqua.' +
    ' Cardigan sartorial lumbersexual, consequat next level scenester locavore hell of XOXO schlitz ramps irony' +
    ' brooklyn fugiat echo park. Forage vegan dreamcatcher, post-ironic shabby chic snackwave flexitarian typewriter.',
    'Laborum direct trade adaptogen blue bottle austin, ea keffiyeh godard. Before they sold out pabst ramps marfa,' +
    ' tousled dolore iceland messenger bag ullamco duis kombucha PBR&B street art do. Tofu quinoa gochujang,' +
    ' enim wolf subway tile enamel pin DSA fixie duis squid eu. Eu ex vape vinyl voluptate retro cold-pressed ' +
    'reprehenderit woke health goth. Beard eiusmod celiac quinoa gochujang, 8-bit pop-up lo-fi brooklyn banjo.' +
    ' Heirloom waistcoat meh fam mollit.',
    'Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors.' +
    ' Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on' +
    ' account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm' +
    ' spyglass sheet transom heave to.',
    'Shh! Knights, I bid you welcome to your new home. Let us ride to Camelot! And this isn\'t my nose. ' +
    'This is a false one. I have to push the pram a lot. Knights of Ni, we are but simple travelers ' +
    'who seek the enchanter who lives beyond these woods.',
    'I am the Doctor, and you are the Daleks! No, I\'ll fix it. I\'m good at fixing rot. Call me the Rotmeister. ' +
    'No, I\'m the Doctor. Don\'t call me the Rotmeister. Annihilate? No. No violence. I won\'t stand for it.' +
    ' Not now, not ever, do you understand me?! I\'m the Doctor, the Oncoming Storm ' +
    '- and you basically meant beat them in a football match, didn\'t you?',
    'You know when grown-ups tell you \'everything\'s going to be fine\' and you think they\'re probably lying ' +
    'to make you feel better? Sorry, checking all the water in this area; there\'s an escaped fish.' +
    ' It\'s art! A statement on modern society, \'Oh Ain\'t Modern Society Awful?\'!',
    'Remember the time he ate my goldfish? And you lied and said I never had goldfish. ' +
    'Then why did I have the bowl, Bart? *Why did I have the bowl?*',
    'Homer no function beer well without. I\'m allergic to bee stings. They cause me to, uh, die. ' +
    'I prefer a vehicle that doesn\'t hurt Mother Earth. It\'s a go-cart, powered by my own sense of self-satisfaction.',
];

const form = document.querySelector('.lorem-form');
const amount = document.querySelector('#amount');
const result = document.querySelector('.lorem-text');

form.addEventListener('submit', (e) => {
    result.innerHTML = '';
    e.preventDefault();
    const value = parseInt(amount.value, 10);
    if(isNaN(value) || value <= 0 || value > text.length) {
        const random = Math.floor(Math.random() * text.length);
            result.innerHTML += `<p class="result">${text[random]}</p>`;
    } else {
        const textArr = text.slice(0, value);
        textArr.forEach(ipsum => {
            result.innerHTML += `<p class="result">${ipsum}</p>`
        })
    }
})