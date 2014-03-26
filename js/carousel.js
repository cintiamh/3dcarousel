(function(){
    var carousel,
        theta = 0;

    carousel = {
        init: function() {
            var parent = document.getElementById("carousel");
            carousel.addButtonListener();
            carousel.getImageSize(parent);

            var parent = document.createElement("ul")
            var child = document.createElement("li")
            var image = new Image()
            image.src = "https://s.yimg.com/dh/ap/it/disney/carousel/3/1024x692_frozen.jpg"
            child.appendChild(image)
            parent.appendChild(child)
            document.body.appendChild(parent)
            console.log(parent);
        },
        getImageSize: function(parent) {
            if (parent && parent.children && parent.children.length > 0) {
                var image = parent.children[0].children[0];
                console.log(image);
                return { width:image.width,
                            height: image.height }
            }
            return null
        },
        addButtonListener: function() {
            var buttons = document.getElementsByClassName("control"),
                i = 0;

            if (buttons.length > 0) {
                for (i = 0; i < buttons.length; i++) {
                    buttons[i].addEventListener("click", carousel.movePanels, false);
                }
            }
        },
        movePanels: function(event) {
            var parent = document.getElementById("carousel"),
                panelCount = parent.children.length,
                transformProp = "-webkit-transform",
                increment = parseInt(event.target.getAttribute("data-increment"));

            theta += (360 / panelCount) * increment * -1;
            carousel.style[transformProp] = "translateZ( -288px ) rotateY(" + theta + "deg)";
        }
    };

    window.carousel = carousel;
})();