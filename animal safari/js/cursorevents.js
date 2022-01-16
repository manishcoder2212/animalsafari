AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handlePlacesListState: function () {
    const id = this.el.getAttribute("id");
    console.log("this is id"+id)
    const placesId = ["gorilla", "lion", "tiger", "elephant"];
    if (placesId.includes(id)) {
      console.log("working"+id)
      const placeContainer = document.querySelector("#places-container");
      placeContainer.setAttribute("cursor-listener", {
        selectedItemId: id,
      });
      this.el.setAttribute("material", {
        color: "red",
        opacity: 1,
      });
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      console.log("iam entering")
      this.handlePlacesListState();
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      console.log("i am leaving")
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        console.log(id)

        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", {
            color: "yellow",
            opacity: 1,
          });
        }
      }
    });
  },
});
