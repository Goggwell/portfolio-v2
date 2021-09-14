export default function formFunc() {
    const contactForm = document.querySelector('.form');

    const formEvent = contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let mail = new FormData(contactForm);
        sendMail(mail);
    });

    const sendMail = (mail) => {
        fetch("INSERT_URL_HERE/send", {
            method: "post",
            body: mail,
        }).then((response) => {
            return response.json();
        });
    };
}