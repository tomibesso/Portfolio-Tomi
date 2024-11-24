emailjs.init({
    publicKey: "eyPu-i_puaahmtEzd",
});

const form = document.getElementById("contact_content_form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_p2rb67d', 'form_portfolio', form)
        .then(function(response) {
            Swal.fire({
                title: 'Correo enviado con éxito',
                text: 'Se envió el correo a Tomas Besso. Gracias por contactarte.',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            form.reset();
        }, function(error) {
            alert('Hubo un error al enviar el correo: ' + JSON.stringify(error));
        });
})