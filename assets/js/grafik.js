// script.js
let chart;

function generateChart(months, rate, button) {
  const nominal = parseFloat(document.getElementById("nominal").value);
  if (isNaN(nominal) || nominal <= 0) {
    alert("Masukkan nominal yang valid.");
    return;
  }

  document.querySelectorAll('.btn-grafik button').forEach(btn => {
    btn.classList.remove('active');
  });
  button.classList.add('active');

  const labels = [];
  const data = [];
  let total = nominal;
  const bungaPerBulan = (nominal * rate) / months;

  for (let i = 1; i <= months; i++) {
    total += bungaPerBulan;
    labels.push(`Bulan ${i}`);
    data.push(Math.round(total));
  }

  if (chart) {
    chart.destroy();
  }

  const ctx = document.getElementById("depositoChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Simulasi Saldo Deposito",
        data: data,
        fill: false,
        borderColor: "#4fc3f7",
        tension: 0.2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "white"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "white"
          }
        },
        y: {
          ticks: {
            color: "white"
          }
        }
      }
    }
  });
}
