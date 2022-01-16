AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;   
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "gorilla",
        title: "Gorilla",
        url: "../assets/gorrila.jpg",
      },
      {
        id: "lion",
        title: "Lion",
        url: "../assets/lion.jpg",
      },

      {
        id: "tiger",
        title: "Tiger",
        url: "../assets/tiger.jpg",
      },
      {
        id: "elephant",
        title: "Elephant",
        url: "../assets/elephant.jpg",
      },
    ];
    
    let prevoiusYPosition = -100;

    for (var item of thumbNailsRef) {
      const posY = prevoiusYPosition + 25;
      const posX = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusYPosition = posY;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "yellow",
      opacity: 1,
    });

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.x = -50;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});
