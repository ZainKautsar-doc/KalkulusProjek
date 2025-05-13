const scriptURL =
  "https://script.google.com/macros/s/AKfycbxgpCvhU2-CqbCk3M_6allJ_vqEnT36ImXQ2fwhy0jlKcr0-nL0kGyg4Y3ruNexVCrjHw/exec"; // GANTI DENGAN LINK KAMU

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        alert("Pesan berhasil dikirim!");
        form.reset();
      })
      .catch((error) => {
        alert("Gagal mengirim pesan.");
        console.error("Error!", error.message);
      });
  });
