"use strict";

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}

const nominalInput = document.getElementById("nominal");
const bungaSpan = document.getElementById("bunga");
const totalSpan = document.getElementById("total");
const hasilBox = document.getElementById("hasil");

let durasiTerpilih = null;

function pilihDurasi(durasi, button) {
  durasiTerpilih = durasi;

  // Hapus semua class active dulu
  const buttons = document.querySelectorAll(".button-group button");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Tambahkan class active pada button yang dipilih
  button.classList.add("active");

  hitungSimulasi();
}

function hitungSimulasi() {
  const nominal = parseFloat(nominalInput.value);

  if (isNaN(nominal) || durasiTerpilih === null) {
    hasilBox.style.display = "none";
    return;
  }

  let persenBunga = 0;
  if (durasiTerpilih === 3) persenBunga = 3;
  else if (durasiTerpilih === 6) persenBunga = 5;
  else if (durasiTerpilih === 12) persenBunga = 6;

  const bunga = nominal * (persenBunga / 100);
  const total = nominal + bunga;

  bungaSpan.textContent = "Rp " + bunga.toLocaleString("id-ID");
  totalSpan.textContent = "Rp " + total.toLocaleString("id-ID");
  hasilBox.style.display = "block";
}

nominalInput.addEventListener("input", hitungSimulasi);

/**
 * back to top & header
 */

// const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
