const button =document.querySelector('.watchButton');
const videoContainer = document.querySelector('.videoContainer');
const closeIcon = document.querySelector('.closeIcon');
const video = document.querySelector('video');


button.addEventListener('click', () => {
       videoContainer.classList.remove('active');
    });



closeIcon.addEventListener('click', () => {
    videoContainer.classList.add('active');
    video.pause();
    video.currentTime = 0;
});