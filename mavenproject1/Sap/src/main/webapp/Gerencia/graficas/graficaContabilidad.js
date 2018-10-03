var ctx = document.getElementById("gContabilidad").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [ "Cargos", "Abonos"],
      datasets: [{
        label: "Dinero",
        backgroundColor: ["#e8c3b9","#c45850"],
        data: [784,1533]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Grafica general - Octubre 2018'
      }
    }
});

