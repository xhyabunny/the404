var randomNumber = [ 234234,2352356346,326,554376345,7453745,3745374537,3457345747,534754373547,5473547487,453745375437,34574575437,45375437543745,375437345,734633];

var randomstuff = [
    randomNumber.ToString()+'th update',
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
                randomNumber = randomNumber[Math.floor(Math.random() * randomNumber.length)];
        document.getElementById('random').innerText = randomstuff[Math.floor(Math.random() * randomstuff.length)];
    }
});
