function counter() {
    let inpt = document.getElementById('tweet');
    let countDisplay = document.querySelector('p');
    let tweetValue = inpt.value;
    let maxLength = 280;

    countDisplay.textContent = "Twitter character count: " + tweetValue.length;

    if (tweetValue.length > maxLength) {
        let extraCharacters = tweetValue.substring(maxLength);
        let highlightedText = tweetValue.substring(0, maxLength) + '<span style="color: red;">' + extraCharacters + '</span>';
        inpt.innerHTML = highlightedText;
    } else {
        inpt.innerHTML = tweetValue; // Reset input if within limit
    }
}
