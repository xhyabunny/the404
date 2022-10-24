
var randomstuff = [
    '34543535th update',
    'imagine having to update your page',
    'big update???',
    'i have to rewrite everything...',
    'please stop',
    'no',
    'arriba españa',
    'version 3.53452345235',
    'i agree',
    'i am probably doing a mess rn',
    'maybe im fucking up the code',
    'i MIGHT be doing something wrong',
    'SanicBTW was here',
    'xhyabunny is thicc',
    'help',
    'bonndubz on all socials (except on twitter because twitter sucks)',
    '@TwtBonn on twitter',
    'yeah i took this idea from sanic',
    'el pollo',
    '?',
    'visual studio sucks',
    'get outta here',
    'h',
    'im probably updating something really stupid',
    'Lunes',
    'coding.',
    'uwu',
    'pain'
];

document.getElementById('random').innerText = randomstuff[Math.floor(Math.random() * randomstuff.length)];

document.body.addEventListener('keydown', (key) => {
    if(key.key == "r")
    {
        document.getElementById('random').innerText = randomstuff[Math.floor(Math.random() * randomstuff.length)];
    }
});
