console.log('Hello World!');

let letReviewButton = document.getElementById('letReviewBtn');
let popupWrp = document.getElementById('popupWrp');
let popupClose = document.getElementById('popupClose');

letReviewButton.addEventListener('click', () => {
    popupWrp.classList.toggle('popup-close');
});

popupClose.addEventListener('click', () => {
    popupWrp.classList.toggle('popup-close');
})