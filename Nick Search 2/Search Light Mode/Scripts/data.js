

var nick = [
  {
    image: "imgs/shows/Nick/spongebobsquarepants.png",
    title: "Spongebob Squarepants",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/fairly.png",
    title: "The Fairly OddParents",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/jimmy.png",
    title: "The Adventures of Jimmy Neutron, Boy Genius",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/danny.png",
    title: "Danny Phantom",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/penquins.png",
    title: "The Penguins of Madagascar",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/panda.png",
    title: "Kung Fu Panda: Legends of Awesomeness",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/fanboy.png",
    title: "Kung Fu Panda: Legends of Awesomeness",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/sheen.png",
    title: "Planet Sheen",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/arnold.png",
    title: "Hey Arnold!",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/doug.png",
    title: "Doug",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  {
    image: "imgs/shows/Nick/wildthorn.png",
    title: "The Wild Thornberrys",
    link: "https://disneyplus.com/",
    gif: "https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif",
  },
  /*
  {
    image:
      "imgs/shows/Nick/rocket.png"
  },
  {
    image:
      "imgs/shows/Nick/rugrats.png"
  },
  {
    image:
      "imgs/shows/Nick/allgrownup.png"
  },
  {
    image:
      "imgs/shows/Nick/ginger.png"
  },
  {
    image:
      "imgs/shows/Nick/catdog.png"
  },
  {
    image:
      "imgs/shows/Nick/mightyb.png"
  },
  {
    image:
      "imgs/shows/Nick/tuff.png"
  },
  {
    image:
      "imgs/shows/Nick/chalkzone.png"
  },
  {
    image:
      "imgs/shows/Nick/avatar.png"
  },
  {
    image:
      "imgs/shows/Nick/korra.png"
  },
  {
    image:
      "imgs/shows/Nick/danger.png"
  },
  {
    image:
      "imgs/shows/Nick/invader.png"
  },
  {
    image:
      "imgs/shows/Nick/teenage.png"
  },
  {
    image:
      "imgs/shows/Nick/angrybeavers.png"
  },
  {
    image:
      "imgs/shows/Nick/rocko.png"
  },
  {
    image:
      "imgs/shows/Nick/ren.png"
  },
  {
    image:
      "imgs/shows/Nick/ahh.png"
  },
  {
    image:
      "imgs/shows/Nick/alvin.png"
  },
  {
    image:
      "imgs/shows/Nick/aceventura.png"
  }
  */
];




//######################  Details  ##########################

nick.map(function (element) {
  var anchor = document.createElement("a");
  anchor.setAttribute("class", "card");
  anchor.setAttribute("href", element.link);
  anchor.setAttribute("data-title", element.title);
  anchor.setAttribute("data-category", "");
  anchor.setAttribute("data-imgurl", element.image);
  anchor.setAttribute("data-gifurl", element.gif);
  var img = document.createElement("img");
  img.setAttribute("class", "card-img");
  img.setAttribute("src", element.image);
  anchor.append(img);
  document.querySelector("#nick .glider").append(anchor);
});




