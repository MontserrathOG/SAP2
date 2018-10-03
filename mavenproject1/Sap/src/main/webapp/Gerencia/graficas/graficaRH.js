var ctx = document.getElementById("gRH").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Gerencia", "Contabilidad", "Recursos Humanos", "Compras", "Ventas", "Inventario"],
      datasets: [{
        label: "Prsonas por departamento",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#f8c4b3"],
        data: [154,162,42,187,433,178]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total de personal - Octubre 2018'
      }
    }
});

