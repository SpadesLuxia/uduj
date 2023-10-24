const carousel = document.querySelector("carousel1");

const dragging = (e) => {
	carousel.scrollLeft = e.pageX;
}

carousel1.addEventListener("mousemove", dragging);