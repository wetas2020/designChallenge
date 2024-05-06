document.addEventListener('DOMContentLoaded', () => {
    // Event delegation for better performance
    document.querySelector('.container').addEventListener('click', (event) => {
        if (event.target.matches('.question') || event.target.matches('.question *')) {
            const question = event.target.closest('.question');
            const answer = question.nextElementSibling;
            const plusMinus = question.querySelector('img');

            question.classList.toggle('active');
            answer.classList.toggle('active');

            if (plusMinus) {
                plusMinus.classList.toggle('minus');
                plusMinus.src = plusMinus.classList.contains('minus')
                    ? './assets/images/icon-minus.svg'
                    : './assets/images/icon-plus.svg';
            }
        }
    });
});
