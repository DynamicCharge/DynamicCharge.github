const filterBox = document.querySelectorAll('.box');
const filterItem = document.querySelectorAll('.filter_item');


document.querySelector('.filters').addEventListener('click', (event) => {

    event.target.classList.add('chosen');

    if (event.target.tagName !== 'LI') return false;
    let filterClass = event.target.dataset['f'];

    filterItem.forEach(elem => {
        elem.classList.remove('chosen');
        event.target.classList.add('chosen');
    });

    filterBox.forEach(elem => {
        elem.classList.remove('hide');
        if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
            elem.classList.add('hide');
        } else  if (elem.classList.contains(filterClass)){
            if (!elem.classList.contains('_active')) {
                elem.classList.add('_active');
            }
        }
    });

});

