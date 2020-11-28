const table = document.getElementById("tableUp");
const up = document.getElementById("up");
window.addEventListener("scroll", () => {
    table.style.transform = "rotate("+(window.pageYOffset / 360)+"deg)";
    up.style.transform = "rotate("+(window.pageYOffset / 360)+"deg)";
  });

console.log(
  '\n' +
  'Hello\n' +
  'We are SnoozleStudio!\n' +
  'https://snoozle.studio\n' +
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