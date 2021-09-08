// ---------header--------
// ---------menu---------
let moon = document.querySelector(".fa-moon-o");
let sun = document.querySelector(".fa-sun-o");
let header = document.querySelector(".header");
let wordsH2 = document.querySelector("#wordsH2");
let menu__bars = document.querySelector("#menu__bars");
let menu__times = document.querySelector("#menu__times");
let ul__menu = document.querySelector("#ulMenu");
menu__bars.addEventListener("click", function() {
    menu__bars.style.display = "none"
    menu__times.style.display = "block"
    ul__menu.style.display = "block"

});
menu__times.addEventListener("click", function() {
    menu__bars.style.display = "block"
    menu__times.style.display = "none"
    ul__menu.style.display = "none"
})

moon.addEventListener("click", function() {
    moon.style.display = "none";
    sun.style.display = "block";
    header.style.backgroundImage = "url(imgs/img1.jpg)"
    wordsH2.innerHTML = "Day Trips"
})
sun.addEventListener("click", function() {
        sun.style.display = "none";
        moon.style.display = "block";
        header.style.background = "linear-gradient(rgba(45, 45,46, 0.8),rgba(17, 40, 66, 0.5)),url(imgs/img1.jpg)"
        wordsH2.innerHTML = "Night Trips"
    })
    // ------menu search------
let search1 = document.querySelector("#search1");
let times1 = document.querySelector("#times1");
let menuSesrchInput = document.querySelector(".menu-search-input");
search1.addEventListener("click", function() {
    search1.style.display = "none";
    times1.style.display = "block"
    menuSesrchInput.style.display = "flex";
})
times1.addEventListener("click", function() {
        search1.style.display = "block";
        times1.style.display = "none";
        menuSesrchInput.style.display = "none";

    })
    // ---------menu button---------
let btn = document.querySelector("#btn");
let btnI = document.querySelector("#btnI");
let ulMenu = document.querySelector("#ulMenu");
// --------- text move ---------
let wordsI = document.querySelector("#wordsI");
let i = 0;
let text = "Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet consectetur";

function func() {
    if (i < text.length) {
        wordsI.innerHTML += text.charAt(i);
        i++;
        setTimeout(func, 100);
    } else {
        i = 0;
        wordsI.innerHTML = ".";
        setTimeout(func, 100);
    }
}
func();
// --------- heder words ---------
let twitter1 = document.querySelector("#twitter1");
let twitter2 = document.querySelector("#twitter2");
let instagram1 = document.querySelector("#instagram1");
let instagram2 = document.querySelector("#instagram2");
let facebook1 = document.querySelector("#facebook1");
let facebook2 = document.querySelector("#facebook2");
let chanel1 = document.querySelector(".chanel1");
let chanel2 = document.querySelector(".chanel2");
let chanel3 = document.querySelector(".chanel3");
let chanel4 = document.querySelector(".chanel4");
let chanel5 = document.querySelector(".chanel5");
let chanel6 = document.querySelector(".chanel6");
let headerblock = document.querySelector(".header-block");
headerblock.style.display = "flex"
twitter1.addEventListener("click", function() {
    twitter1.style.display = "none"
    twitter2.style.display = "block"
    chanel1.style.display = "flex"
    chanel2.style.display = "flex"
    chanel3.style.display = "none"
    chanel4.style.display = "none"
    chanel5.style.display = "none"
    chanel6.style.display = "none"
    headerblock.style.display = "flex"
    facebook1.style.display = "block";
    facebook2.style.display = "none";
    instagram1.style.display = "block";
    instagram2.style.display = "none";
    headerblock.style.border = "2px solid red";
});
twitter2.addEventListener("click", function() {
    twitter1.style.display = "block"
    twitter2.style.display = "none"
    headerblock.style.display = "flex"
    chanel1.style.display = "none"
    chanel2.style.display = "none"
    headerblock.style.border = "none";
});
instagram1.addEventListener("click", function() {
    instagram1.style.display = "none"
    instagram2.style.display = "block"
    headerblock.style.display = "flex"
    chanel1.style.display = "none"
    chanel2.style.display = "none"
    chanel3.style.display = "flex"
    chanel4.style.display = "flex"
    chanel5.style.display = "none"
    chanel6.style.display = "none"
    facebook1.style.display = "block";
    facebook2.style.display = "none";
    twitter1.style.display = "block";
    twitter2.style.display = "none";
    headerblock.style.border = "2px solid red";
});
instagram2.addEventListener("click", function() {
    instagram1.style.display = "block"
    instagram2.style.display = "none"
        // headerblock.style.display = "none"
    headerblock.style.display = "flex"
    chanel3.style.display = "none"
    chanel4.style.display = "none"
    headerblock.style.border = "none"

});
facebook1.addEventListener("click", function() {
    facebook1.style.display = "none"
    facebook2.style.display = "block"
    headerblock.style.display = "flex"
    chanel1.style.display = "none"
    chanel2.style.display = "none"
    chanel3.style.display = "none"
    chanel4.style.display = "none"
    chanel5.style.display = "flex"
    chanel6.style.display = "flex"
    twitter1.style.display = "block";
    twitter2.style.display = "none";
    instagram1.style.display = "block";
    instagram2.style.display = "none";
    headerblock.style.border = "2px solid red";
});
facebook2.addEventListener("click", function() {
    facebook1.style.display = "block"
    facebook2.style.display = "none"
    headerblock.style.display = "none"
    headerblock.style.display = "flex"
    chanel5.style.display = "none"
    chanel6.style.display = "none"
    headerblock.style.border = "none"

});