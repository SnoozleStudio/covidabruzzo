const table = document.getElementById("tableUp");
const up = document.getElementById("up");
window.addEventListener("scroll", () => {
    table.style.transform = "rotate("+(window.pageYOffset / 5)+"deg)";
    up.style.transform = "rotate("+(window.pageYOffset / 5)+"deg)";
  });

console.log(
  '\n' +
  'Hello lurker!\n' +
  'We are SnoozleStudio!\n' +
  'www.snoozle.studio\n' +
  '                                                                                                          \n' +
  '███████╗███╗   ██╗ ██████╗  ██████╗ ███████╗██╗     ███████╗███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ \n' +
  '██╔════╝████╗  ██║██╔═══██╗██╔═══██╗╚══███╔╝██║     ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗\n' +
  '███████╗██╔██╗ ██║██║   ██║██║   ██║  ███╔╝ ██║     █████╗  ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║\n' +
  '╚════██║██║╚██╗██║██║   ██║██║   ██║ ███╔╝  ██║     ██╔══╝  ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║\n' +
  '███████║██║ ╚████║╚██████╔╝╚██████╔╝███████╗███████╗███████╗███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝\n' +
  '╚══════╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ \n' +
  '                                                                                                          \n' +
  'Made in 🇮🇹 with ❤️ and some tools like Charts.js and Lodash\n' +
  '\n' +
  '— @snoozlestudio\n' +
  '— @paolomasonnet\n'
);