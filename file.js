// Initialize the image slider functionality when the page loads
const initslider = () => {
    // Select the image list container
    const imageList = document.querySelector(".slider-wrapper .image-list");
    // Select both slide buttons (previous and next)
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    // Select the custom scrollbar container
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    // Select the draggable scrollbar thumb
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    // Calculate the maximum scroll distance for the image list
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // Enable dragging the scrollbar thumb to scroll the image list
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX; // Mouse X position at drag start
        const thumbPosition = scrollbarThumb.offsetLeft; // Thumb's initial position

        // Handle thumb movement as the mouse moves
        const handleMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - startX; // Change in X position
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
            
            // Clamp the thumb position within the scrollbar track
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            // Calculate corresponding scroll position for the image list
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            // Move the thumb and scroll the images
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        };

        // Remove mousemove and mouseup listeners when drag ends
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        // Listen for mouse movement and release
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Handle click events for previous and next slide buttons
    slideButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Determine direction: -1 for previous, 1 for next
            const direction = button.id === "prev-slide" ? -1 : 1;
            // Amount to scroll equals the visible width of the image list
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });
    });

    // Show/hide slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    // Update the scrollbar thumb position to match image list scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        // Calculate thumb position as a ratio of scroll
        const thumbPosintion = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosintion}px`;
    };

    // Listen for image list scroll to update UI
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
}

// Initialize slider when window loads
window.addEventListener("load", initslider);
