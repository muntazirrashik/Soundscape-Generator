let sounds = {
    rain: new Audio('sounds/rain.mp3'),
    waves: new Audio('sounds/waves.mp3'),
    wind: new Audio('sounds/wind.mp3'),
    birds: new Audio('sounds/birds.mp3')
};

// Play or stop sound based on checkbox
function toggleSound(sound) {
    let checkbox = document.getElementById(`${sound}-checkbox`);
    if (checkbox.checked) {
        sounds[sound].loop = true; // Loop the sound
        sounds[sound].play(); // Play the sound
    } else {
        sounds[sound].pause(); // Stop the sound
        sounds[sound].currentTime = 0; // Reset to start
    }
}

// Adjust the volume for each sound
function adjustVolume(sound) {
    let volumeControl = document.getElementById(`${sound}-volume`);
    let volumeValue = volumeControl.value / 100;
    sounds[sound].volume = volumeValue; // Set the volume to the current slider value
}

// Reset all sounds and controls
function resetSounds() {
    for (let sound in sounds) {
        sounds[sound].pause(); // Stop the sound
        sounds[sound].currentTime = 0; // Reset to start
        document.getElementById(`${sound}-checkbox`).checked = false; // Uncheck the checkbox
        document.getElementById(`${sound}-volume`).value = 50; // Reset volume to 50
        sounds[sound].volume = 0.5; // Set volume to 50%
    }
}
