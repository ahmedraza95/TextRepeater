const addLi = document.querySelector('.addLi');
const formSubmit = document.querySelector('.formSubmit');



formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = e.target.children[0].children[0].children[1].value
    const inputValueNumber = e.target.children[0].children[1].children[1].value

    addLi.innerHTML = '';


    for (let i = 0; i < inputValueNumber; i++) {
        addLi.innerHTML += `<li class='' style='margin-left:10%;'>${inputValue}</li>`;
        console.log(inputValue, i);


    }


})