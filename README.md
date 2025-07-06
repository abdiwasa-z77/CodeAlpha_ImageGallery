# CodeAlpha_ImageGallery
Frontend Internship Project for CodeAlpha
# Image Gallery Slider

A responsive, modern image gallery slider built with HTML, CSS, and JavaScript. This project features horizontal scrolling, custom draggable scrollbar, and navigation buttons for a smooth user experience.

## Features

- **Horizontal Image Slider:** Scroll through images horizontally.
- **Navigation Buttons:** Easily move to the next or previous set of images.
- **Custom Scrollbar:** Drag the scrollbar thumb to scroll images.
- **Responsive Design:** Adapts to different screen sizes; navigation buttons hide on smaller screens.
- **Smooth Animations:** Uses smooth scrolling for transitions.

## Project Structure

```
Image Gallery/
│
├── IMAGE GALLERY SLIDER/
│   ├── index.html        # Main HTML file for the gallery
│   ├── style.css         # All gallery and slider styles
│   ├── file.js           # JavaScript for slider functionality
│   └── Images/           # Folder containing gallery images
```

## How It Works

- **index.html:**  
  Contains the gallery structure, navigation buttons, image list, and custom scrollbar.  
  Loads Font Awesome for arrow icons and links to the CSS and JS files.

- **style.css:**  
  Styles the gallery layout, images, buttons, and custom scrollbar.  
  Includes responsive rules for smaller screens.

- **file.js:**  
  Handles slider logic:  
  - Navigation button clicks  
  - Dragging the scrollbar thumb  
  - Syncing thumb position with image scroll  
  - Showing/hiding navigation buttons as needed

## Usage

1. **Clone or Download** this repository.
2. **Add your images** to the `Images/` folder and update the `<img>` tags in `index.html` if needed.
3. **Open `index.html`** in your browser to view and use the gallery.

## Customization

- **Add/Remove Images:**  
  Edit the `<img>` elements inside the `.image-list` div in `index.html`.

- **Change Styles:**  
  Modify `style.css` for colors, sizes, or layout.

- **Adjust Scroll Amount:**  
  In `file.js`, change how much the gallery scrolls per button click by editing the `scrollAmount` calculation.

## Dependencies

- [Font Awesome](https://fontawesome.com/) for navigation icons (loaded via CDN).


## License

This project is for educational and personal use.

---

**Created by Abdiwasa Abdilahi Abdi**
