// const title="THIS IS WANDA'S ONLINE PORTFOLIO, WELCOME!";
//
// const marqueeText = new Array(50).fill(title).join(' 🤟🏾');
// console.log(marqueeText);
//
// const marquee = document.querySelector('.marquee span');
//
// marquee.innerHTML= marqueeText;
$(function () {
    $('.marquee').marquee({
         duration:5000,
         duplicated: true,
         gap: 50,
         direction: 'left',
         pauseOnHover: false

    });
});
