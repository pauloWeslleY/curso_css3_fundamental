const cards = [
   {
      description: "Descrição do Card, que descreve sua imagens",
      require: ("../image/city_1.jpg"),
      link: "Ver mais"
   },
   {
      description: "Descrição do Card, que descreve sua imagens",
      require: ("../image/city_2.jpg"),
      link: "Ver mais"
   },
   {
      description: "Descrição do Card, que descreve sua imagens",
      require: ("../image/city_3.jpg"),
      link: "Ver mais"
   },
   {
      description: "Descrição do Card, que descreve sua imagens",
      require: ("../image/city_4.jpg"),
      link: "Ver mais"
   },
   {
      description: "Descrição do Card, que descreve sua imagens",
      require: ("../image/city_5.jpg"),
      link: "Ver mais"
   },
   {
      description: "Descrição do Card, que descreve sua imagens",
      require: ("../image/city_6.jpg"),
      link: "Ver mais"
   },
]

const cards__box = document.querySelector("#card");

function createdCards(card) {
   const cards = document.createElement("section");

   cards.className = "card__image";

   const image = document.createElement("img");
   const description = document.createElement("div");
   const describe = document.createElement("p");
   const link = document.createElement("a");

   const text = document.createTextNode(card.description);
   description.appendChild(text);

   description.text = card.description;
   image.src = card.require;
   image.alt = card.description;

   link.text = "Ver Mais";

   cards.appendChild(image);
   cards.appendChild(description);
   cards.appendChild(describe);
   cards.appendChild(link);



   cards__box.appendChild(cards);
}

cards.forEach(createdCards);
