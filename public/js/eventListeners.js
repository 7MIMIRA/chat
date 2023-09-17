function setupEventListeners() {
    intializeSubmitButton();
};

function intializeSubmitButton() {
    const submitButton = document.getElementById("chat-submit-button");
    submitButton.addEventListener("click", () => {
        const text = document.getElementById('chat-input').value;
        console.log(text);
        // TODO: add logic to send text to server
    });
}