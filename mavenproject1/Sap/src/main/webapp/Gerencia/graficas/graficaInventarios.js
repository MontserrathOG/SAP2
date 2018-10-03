var ctx = document.getElementById("gInventarios").getContext('2d');
var myChart = new Chart(ctx, {
   type: 'horizontalBar',
    data: {
      labels: ["Martillos", "Playeras", "Pants", "Gorras", "Tenis"],
      datasets: [
        {
          label: "Inventario por articulo",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,3267,734,784,1240]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Inventario de articulos en venta - Octubre 2018'
      }
    }
});

