const links = document.querySelectorAll('.links');

function scrollSection(event) {
  event.preventDefault(); // faz com que os efeitos do "a", como o href não funcionem

  const href = event.currentTarget.getAttribute('href'); //no evento que eu to clicando, pego apenas o valor do href

  const section = document.querySelector(href); //ao clicar no botao, ira retornar o conteúdo do href, que é #section-X,  o mesmo id das sections, logo, vai puxar a section.

  const topSection = section.offsetTop;//demonstra para o console a posição inicial das sections. Ex: a section 1 inicia no pixel 80

  window.scrollTo({ //Comando que faz levar pra seção
    top: topSection - 80, //- 80 devido ao header
    behavior: 'smooth' //a animação que deixa bonito
  })
}

links.forEach(link => {
  link.addEventListener('click', scrollSection);
})


var typed = new typed("span",{
    strings:["Elizabeth Elmiz.","web Developer.","UX Designer.","Photographer."],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Adiciona um efeito de rolagem suave
    });
  }
