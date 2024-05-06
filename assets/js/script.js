function showPopup(title, subtitle, description, imageSrc, event) {
    // Prevent the default action of the event (e.g., following a link)
    event.preventDefault();

    // Get the popup elements and set their content dynamically
    var popup = document.getElementById('popup');
    var popupTitle = document.getElementById('popup-title');
    var popupSubtitle = document.getElementById('popup-subtitle');
    var popupDescription = document.getElementById('popup-description');
    var popupImage = document.getElementById('popup-image');

    popupTitle.textContent = title;
    popupSubtitle.textContent = subtitle;
    popupDescription.textContent = description;
    popupImage.src = imageSrc;

    // Display the popup
    // Your code to display the popup goes here
    popup.style.display = 'block';
    document.body.classList.add('popup-open'); // Add class to body
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Close the popup when clicking outside of it
window.onclick = function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}