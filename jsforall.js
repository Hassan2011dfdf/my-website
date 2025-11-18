const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".links");

menuBtn.onclick = () => {
  links.classList.toggle("active");
};
window.onscroll = function () {
    if (window.scrollY > 300) {
        toTopBtn.style.display = "block";
    } else {
        toTopBtn.style.display = "none";
    }
};

toTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
const stars = document.querySelectorAll('.stars i');
const ratingText = document.getElementById('ratingText');

stars.forEach(star => {
    star.addEventListener('click', function() {
        let value = this.getAttribute('data-value');

        stars.forEach(s => s.classList.remove('active'));

        for (let i = 0; i < value; i++) {
            stars[i].classList.add('active');
        }

        ratingText.textContent = `لقد قمت بتقييم المنتج: ${value} نجوم`;
    });
});

