$("#sidebar-close").click(function(){
    $('.left-side').addClass('marginLeft-100');
});
$("#sidebar-open").click(function(){
   $('.left-side').removeClass('marginLeft-100');
});

//for line js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: 'Total User',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'orange',
                ],
                borderColor: [
                    'orange'
                ],
                borderWidth: 1
            },{
                label: 'Total Viewer',
                data: [10, 12, 30, 51, 20, 31],
                backgroundColor: [
                    'skyblue'
                    
                ],
                borderColor: [
                    'skyblue'
                ],
                borderWidth: 1
            }]
        },
        options: {
            hover: {
                mode: 'point'
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display:false
                    },
                    ticks: {
                        display: false,
                    }
                },
                x: {
                    grid: {
                        display:false
                    }
                },

            }, 
            plugins: {
                title: {
                    display: true,
                    text: 'Chart Js'
                },
                subtitle: {
                    display: true,
                    text: 'Users and Viewer last ten days'
                },
                legend: {
                    position: 'bottom',
                    display: true,
                    labels: {
                        usePointStyle: true,
                    },
                },
            }
        }
    });


//line js end

//pie chart

    const mdc= document.getElementById('myDoughnutChart').getContext('2d');
    const myDoughnutChart = new Chart(mdc,{
        type: 'doughnut',
        data : {
            labels: ['Red','Blue','Yellow'],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        }
    });
  //end pie chart