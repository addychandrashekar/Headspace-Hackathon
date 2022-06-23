const silly = document.getElementById('silly');
const generous = document.getElementById('generous');
const angry = document.getElementById('angry');
const annoyed = document.getElementById('annoyed');
const sad = document.getElementById('sad');
const bored = document.getElementById('bored');
const determined = document.getElementById('determined');

const sillyArray = ['https://i.pinimg.com/originals/4e/ea/1b/4eea1b7c597368b260479b2fe78d6cd5.jpg', 'https://www.youtube.com/watch?v=4wEO_JuON9E', 'https://cat-bounce.com/'];
const generousArray = ['https://www.volunteermatch.org', 'https://freerice.com/categories/movies', 'https://support.rmhc.org/site/SPageNavigator/pw/Donation_Landing.htm'];
const angryArray = ['https://screamintothevoid.com/', 'https://funhtml5games.com/?play=angrybirds', 'https://www.youtube.com/watch?v=ie5yjNGLxfQ'];
const annoyedArray = ['https://www.youtube.com/watch?v=cZJAsW_5SRA', 'https://www.youtube.com/watch?v=nFkHV7LfVUc', 'https://www.youtube.com/watch?v=c1Ndym-IsQg'];
const sadArray = ['https://suicidepreventionlifeline.org/talk-to-someone-now/', 'https://www.youtube.com/watch?v=ZuRLOlB4N8U', 'https://www.youtube.com/watch?v=5sCF0NRoFas'];
const boredArray = ['https://hackertyper.com/', 'https://sudoku.com/', 'https://zoomquilt.org/'];
const determinedArray = ['https://www.youtube.com/watch?v=b5ZESpOAolU', 'https://www.youtube.com/watch?v=jpRqbP9Nv9k', 'https://www.youtube.com/watch?v=7sxpKhIbr0E'];

silly.addEventListener('click', function() {
    const link = sillyArray[Math.floor(Math.random() * 3)]
    silly.setAttribute('href', link);
})

generous.addEventListener('click', function() {
    const link = generousArray[Math.floor(Math.random() * 3)]
    generous.setAttribute('href', link);
})

angry.addEventListener('click', function() {
    const link = angryArray[Math.floor(Math.random() * 3)]
    angry.setAttribute('href', link);
})

annoyed.addEventListener('click', function() {
    const link = annoyedArray[Math.floor(Math.random() * 3)]
    annoyed.setAttribute('href', link);
})

sad.addEventListener('click', function() {
    const link = sadArray[Math.floor(Math.random() * 3)]
    sad.setAttribute('href', link);
})

bored.addEventListener('click', function() {
    const link = boredArray[Math.floor(Math.random() * 3)]
    bored.setAttribute('href', link);
})

determined.addEventListener('click', function() {
    const link = determinedArray[Math.floor(Math.random() * 3)];
    determined.setAttribute('href', link);
})


console.log(silly);