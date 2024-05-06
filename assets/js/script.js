function showPopup(title, description, event) {
    event.preventDefault();
    var popup = document.getElementById('popup');
    var popupTitle = document.getElementById('popup-title');
    var popupDescription = document.getElementById('popup-description');

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popup.style.display = 'block';
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