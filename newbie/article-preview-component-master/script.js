let shareBtn = document.querySelector('[data-btn-share]');
let shareBox = document.querySelector('[data-box-share]');

shareBtn.addEventListener('click', function () {
    shareBtn.classList.toggle('active');
    shareBox.classList.toggle('active');
});
