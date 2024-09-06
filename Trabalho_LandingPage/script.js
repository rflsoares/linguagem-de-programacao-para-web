document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = event.target.email.value;
    alert(`Obrigado! O e-book será enviado para ${email}.`);
});
