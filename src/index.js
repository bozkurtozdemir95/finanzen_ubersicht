import '@/styles/index.scss'

let activeTab = 1;

const tabs = document.getElementsByClassName('tab-content');
const links = document.querySelectorAll('.tab-links li');

window.onload = () => {
    window.changeContent();

}
window.changeTab = (id) => {
    activeTab = id;
    window.changeContent();
}

window.changeContent = () => {
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    tabs[activeTab - 1].style.display = "flex";
    links[activeTab - 1].classList.add('active')
}
