document.addEventListener('DOMContentLoaded', () => {
    let audio1 = new Audio('mp3s/world_domination_1.mp3');
    let audio2 = new Audio('mp3s/world_domination_2.mp3');
    let audio3 = new Audio('mp3s/world_domination_3.mp3');
    let audio4 = new Audio('mp3s/world_domination_4.mp3');

    let index = 0;
    const reel = [audio1, audio2, audio3, audio4];

    const cockroachHandler = () => {
        try {
            reel[index].play();
            console.log('click');
            index++;
        } catch (error) {
            console.error(error)
        }
    }



    const button = document.querySelector(".button");
        button.addEventListener('click', cockroachHandler);
});