import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

function Reports({ data }) {
    const list = [];
    const labels = data.map(item => item.game);
    var totalRevenue = 0, totalCost = 0, totalProfit = 0, totalUnitsSold = 0;
    for (var i in data){
        list.push(<li key={i}>{data[i].game}</li>)
        totalRevenue += data[i].units * data[i].price;
        totalCost += data[i].units * data[i].cost;
        totalUnitsSold += data[i].units;
    } 
    totalProfit = totalRevenue - totalCost;

    const generalOptions = {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            labels: {
                fontColor: "#FFFFFF"
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: "white",
                }
            }]
        }
    }

    const unitsData = {
        labels,
        datasets: [{
            data: data.map(item => item.units),
            label: "Units sold",
            backgroundColor: "#3399cc"
        }]
    }

    const incomeData = {
        labels,
        datasets: [
            
            {
                data: data.map(item =>  item.cost),
                label: "Cost",
                backgroundColor: "#FC3130"
            },
            {
                data: data.map(item =>  item.price),
                label: "Price",
                backgroundColor: "#89E65D"
            }   
        ]
    }

    const doughnutData = {
        labels: ["Total revenue", "Operational costs", "Profit"],
        datasets:[{
            data: [totalRevenue, totalCost, totalProfit],
            backgroundColor: ['#53C6FC', '#F6B534', '#7AD435']
        }]   
    }

    return (
        <div className="reportsContainer">
            <h2>This week we sold a total of {totalUnitsSold} games</h2>
            <Bar
                data={unitsData}
                options={{
                    ...generalOptions
                }}
            />
            <Bar
                data={incomeData}
                options={{
                    ...generalOptions
                }}
            />

            <Doughnut
                data={doughnutData}
                options={{
                    ...generalOptions,
                    scales: {
						xAxes: [{
                            stacked: true,
                            ticks: {
                                fontColor: "white",
                                display: false
                            }
						}],
					}
                }}
            />
        </div>
    )
}

export default Reports;