const burger = document.querySelector(".hamburger");

const d1 = document.querySelector(".d1");
const d2 = document.querySelector(".d2");
const d3 = document.querySelector(".d3")
// const naked = document.querySelector(".naked");
// const ul = document.querySelector('ul')
const handleClick = (e) => {
    // naked.classList.toggle('hidden');
    d1.classList.toggle('change');
    d2.classList.toggle('change');
    d3.classList.toggle('change');
    console.log(e.target)
}

burger.addEventListener("click", handleClick);
