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
    let data_day = []
    let time_day = []
    let data_week = []
    let time_week = []
    // day 288 week 2016
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

    for(let i = 0;i<287;i++){
        data_day.push(mpxv_all[i])
        time_day.push(dateTime[i])
    }

    for(let i = 0;i<2015;i++){
        data_week.push(mpxv_all[i])
        time_week.push(dateTime[i])
    }

    console.log(data_week)
    console.log(time_week)
    useEffect(() => {
        data_week.reverse()
        time_week.reverse()
        data_day.reverse()
        time_day.reverse()
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
                tension: 0 ,
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
        
        const rest = document.getElementById('button')
        rest.addEventListener('click',resetZoomChart)

        function dateTricker() {
            if(tricker.value === 'all'){
                myLine.data.datasets[0].data = mpxv_all
                myLine.data.labels = dateTime
                myLine.resetZoom()
                myLine.update()
            }
            if(tricker.value === 'week'){
                myLine.data.datasets[0].data = data_week,
                myLine.data.labels = time_week
                myLine.resetZoom()
                myLine.update()
            }
            if(tricker.value === 'day'){
                myLine.data.datasets[0].data = data_day,
                myLine.data.labels = time_day
                myLine.resetZoom()
                myLine.update()
            }
        }

        function resetZoomChart(){
            myLine.resetZoom()
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
                <div className="flex">
                    <div>
                        <select id="tricker">
                            <option value='all'>All</option>
                            <option value='day'>Day</option>
                            <option value='week'>Week</option>
                        </select>
                    </div>
                    <div>
                        <button id="button">Reset</button>
                    </div>
                </div>
                <div className="relative h-96">
                    <canvas id="line-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}
