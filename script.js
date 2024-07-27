
let audio1 = new Audio('mp3s/world_domination_1.mp3');
let audio2 = new Audio('mp3s/world_domination_2.mp3');
let audio3 = new Audio('mp3s/world_domination_3.mp3');
let audio4 = new Audio('mp3s/world_domination_4.mp3');

let index = 0;

let clips = [audio1, audio2, audio3, audio4];

const cockroachHandler = () => {
    clips[index].play();
    index++
}

const button = document.getElementById("button");

button.addEventListener('click', cockroachHandler);