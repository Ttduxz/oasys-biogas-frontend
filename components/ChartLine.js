import { useEffect } from 'react';
import {Chart, registerables } from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import zoomPlugin from 'chartjs-plugin-zoom';

export default function ChartLine({
    data
}) {
    let mpxv_all = []
    let dateTime = []
    let time = []
    let sum = 0
    let count = 0
    let result = []
    let data_week
    let date = []
    let week = []
    let mpxv_week = []

    for (let i in data) {
        if (data[i].ID == 1) {
            if (data[i].MPXV <= 0 ) {
                mpxv_all.push(0)
            }
            else mpxv_all.push(data[i].MPXV)
            dateTime.push(data[i].TimeStamp)
        }
        else continue   
    }

    for (let i in dateTime) {
        time.push(dateTime[i].split(" "))
        date.push(time[i][0])
    }
    
    data_week = new Set(date)
    data_week = Array.from(data_week)
    

    console.log(data_week)
    // console.log(data)
    
    //จัดการเรื่องของวัน
    for (let i in time+1) {
        if (i == 0) {
            sum = mpxv_all[0]
            count ++
            continue
        }
        if (date[i] !== date[i-1]) {
            result.push(sum/count)
            sum = 0
            count = 0
        }
        sum += mpxv_all[i]
        count++
    }

    for(let i=0; i<7;i++){
        week[i] = data_week[i]
        mpxv_week[i] = result[i]
    }
    console.log(week)
    console.log(mpxv_week)

    useEffect(() => {
        week.reverse()
        mpxv_week.reverse()
        var config = {
            type: 'line',
            data: {
                labels: dateTime.reverse(),
                legend: {
                    display: true
                 },
                datasets: [
                    {
                        label: '',
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: mpxv_all.reverse(),
                        fill: true,
                    },
                ],
            },
            options: {
                plugins: {
                    zoom: {
                      zoom: {
                        wheel: {
                          enabled: true,
                        },
                        pinch: {
                          enabled: true
                        },
                        mode: 'x',
                      }
                    }
                  },
                tension: 0.3  ,
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Pressure',
                    fontColor: 'white',
                },
                legend: {
                    labels: {
                        fontColor: 'black',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(17,17,17,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                                fontColor: 'white',
                            },
                        },
                    ],
                },
            },
        };
        Chart.register(...registerables)
        Chart.register(zoomPlugin);
        var ctx = document.getElementById('line-chart').getContext('2d');
        const tricker = document.getElementById('tricker')
        tricker.addEventListener('change',dateTricker)
        function dateTricker() {
            if(tricker.value === 'all'){
                myLine.data.datasets[0].data = mpxv_all
                myLine.data.labels = dateTime
                myLine.update()
            }
            if(tricker.value === 'week'){
                myLine.data.datasets[0].data = mpxv_week,
                myLine.data.labels = week
                myLine.update()
            }
        }
        window.myLine = new Chart(ctx, config);
    }, []);

    return (
        <Card>
            <CardHeader color="orange" contentPosition="left">
                {/* <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6> */}
                <h2 className="text-white text-2xl">Pressure</h2>
            </CardHeader>
            <CardBody>
                <div>
                    <select id="tricker">
                        <option value='all'>All</option>
                        <option value='week'>Week</option>
                    </select>
                </div>
                <div className="relative h-96">
                    <canvas id="line-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
