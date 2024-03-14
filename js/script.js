// Alterar altura do header quando a tela for scrolada
window.addEventListener('scroll', function() {
    var header = document.getElementsByTagName("header")[0];
    if (window.scrollY > 100) {
        header.style.height = '3rem';
    } else {
        header.style.height = '5rem';
    }
});

// Alterar img dos personagens quando passar o cursor
var imagemP1 = document.getElementsByClassName("p1")[0];
imagemP1.onmouseover = function () {
    this.src = "/img/select_character21_over.png";
};
imagemP1.onmouseout = function () {
    this.src = "/img/select_character21.png";
};

var imagemP2 = document.getElementsByClassName("p2")[0];
imagemP2.onmouseover = function () {
    this.src = "/img/select_character20_over.png";
};
imagemP2.onmouseout = function () {
    this.src = "/img/select_character20.png";
};

var imagemP3 = document.getElementsByClassName("p3")[0];
imagemP3.onmouseover = function () {
    this.src = "/img/select_character19_over.png";
};
imagemP3.onmouseout = function () {
    this.src = "/img/select_character19.png";
};

var imagemP4 = document.getElementsByClassName("p4")[0];
imagemP4.onmouseover = function () {
    this.src = "/img/select_character18_over.png";
};
imagemP4.onmouseout = function () {
    this.src = "/img/select_character18.png";
};


// Transition do titulo
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').classList.add('transicaoh1');
});

// Transition das imagens dos personagens
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.p1').classList.add('transicaoimg');
    document.querySelector('.p2').classList.add('transicaoimg');
    document.querySelector('.p3').classList.add('transicaoimg');
    document.querySelector('.p4').classList.add('transicaoimg');
});
