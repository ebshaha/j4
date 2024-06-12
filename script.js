const msg = [
   "Sua risada é a melodia mais bonita que já ouvi.",
   "Sua força é uma das coisas mais admiráveis que eu ja vi.",
   "Seu sorriso me ajuda até nos dias mais monótonos.",
   "Você é minha inspiração para ser uma pessoa melhor.",
   "O jeito como você preza por mim é muito lindo.",
   "Sua gentileza é impressionante.",
   "Eu amo a sua inteligência.",
   "Seu abraço é o lugar mais reconfortante do mundo.",
   "A maneira como você enfrenta os desafios com coragem me inspira.",
   "Você é a luz no fim do túnel em meus dias mais difíceis.",
   "Seus olhos transmitem uma calma que acalma minha alma.",
   "Sua presença traz um calor reconfortante ao meu coração.",
   "Você é meu tesouro que guardo em meu coração.",
   "Suas palavras têm o poder de acalmar qualquer tempestade em minha mente.",
   "Agradeço por cada momento compartilhado ao seu lado.",
   "Suas palavras são como bálsamo para minha alma cansada.",
   "Agradeço por sua paciência e compreensão em todos os momentos.",
   "Seu apoio inabalável é meu maior tesouro.",
   "Você é minha fonte de inspiração para seguir em frente.",
   "O mundo é um lugar mais brilhante com você nele.",
   "Sua presença torna qualquer lugar especial.",
   "O brilho em seus olhos reflete a beleza de sua alma.",
   "Sua sabedoria é um farol em meio à confusão da vida.",
   "Seu toque suave acalma minha alma inquieta.",
   "Seu compromisso com o crescimento pessoal é algo que admiro profundamente.",
   "Você é minha chama que aquece meu coração.",
   "Você é uma inspiração para mim em todos os sentidos.",
   "Sua presença traz uma sensação de calma e serenidade.",
   "Você é como um oásis em meio ao deserto da vida.",
   "Agradeço por ser a âncora que mantém minha vida no lugar.",
   "Seu senso de humor ilumina até os dias mais sombrios.",
   "Você é como um raio de esperança em um mundo turbulento.",
   "Sua compaixão pelo próximo é verdadeiramente inspiradora.",
   "O jeito como você cuida de si mesma é uma inspiração para mim.",
   "Você é uma obra-prima, cheia de beleza e graça.",
   "Seus conselhos são como um farol em meio à escuridão da incerteza.",
   "Estou sempre encantado com sua capacidade de encontrar soluções para os desafios que surgem.",
   "Seu sorriso contagia a todos ao seu redor, espalhando alegria por onde passa.",
   "Você é como um raio de esperança em um mundo cheio de incertezas.",
   "Sua presença traz paz e tranquilidade para minha vida.",
   "Estou sempre impressionado com sua habilidade de ver o melhor nas pessoas.",
   "Seu apoio incondicional é o que me dá forças para enfrentar qualquer desafio.",
   "Sua energia positiva é como um farol que me guia nos momentos mais escuros.",
   "Você é como um presente precioso que alegra meus dias.",
   "Estou constantemente fascinado pela profundidade de seus pensamentos e ideias.",
   "Seu entusiasmo pela vida é contagiante e inspirador.",
   "Sua presença é como um abraço caloroso que me faz sentir amado e protegido.",
   "Você é como uma fonte de inspiração constante em minha vida.",
   "Sua generosidade e bondade são qualidades que admiro profundamente em você.",
   "Estou tão grato por ter alguém tão especial como você ao meu lado, enchendo minha vida com amor e felicidade."
];

function updateTime() {
   const startDate = new Date('2024-06-06T13:14:00');
   const now = new Date();

   const elapsed = now - startDate;

   const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
   const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

   document.getElementById('timer').innerHTML = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
   document.getElementById('msg').innerHTML = `<b>Lembrete do dia:</b> ${msg[Math.floor(elapsed / (1000 * 60 * 60 * 24)) - 5]}`;
}

updateTime()

setInterval(updateTime, 1000);
