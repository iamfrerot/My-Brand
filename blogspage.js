const buttonBackTop = document.querySelector('.backtop');
const blogs = document.querySelector('.blogs');

window.onload = function () {
 blogs.style.opacity = 1;
 blogs.style.transform = 'translateY(0)';
};
buttonBackTop.addEventListener('click', function (e) {
 e.preventDefault();
 blogs.scrollTo({ top: 0, behavior: 'smooth' });

 window.scrollTo({ top: 0, behavior: 'smooth' });
});

const humburger = document.querySelector(".humburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobilenav = document.querySelector(".mobilenav");

const mobileLinks = mobilenav.childNodes;

mobileLinks.forEach(cur => cur.addEventListener('click', function () {
 bar1.classList.toggle("animatebar1");
 bar2.classList.toggle("animatebar2");
 bar3.classList.toggle("animatebar3");
 mobilenav.classList.toggle("opendrawer");
}));

humburger.addEventListener("click", function () {
 bar1.classList.toggle("animatebar1");
 bar2.classList.toggle("animatebar2");
 bar3.classList.toggle("animatebar3");
 mobilenav.classList.toggle("opendrawer");
});