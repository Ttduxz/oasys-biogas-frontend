import { useEffect } from 'react';
import Chart from 'chart.js';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function ChartLine() {
    useEffect(() => {
        var config = {
            type: 'line',
            data: {
                labels: [
                    '1st hour',
                    '2nd hour',
                    '3rd hour',
                    '4th hour',
                    '5th hour',
                    '6th hour',
                    '7th hour',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [250, 253, 247, 252, 250, 244, 252],
                        fill: true,
                    },
                ],
            },
            options: {
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
                            scaleLabel: {
                                display: false,
                                labelString: 'Hour',
                                fontColor: 'white',
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(0, 0, 0, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
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
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: 'rgba(17, 17, 17, 0.15)',
                                zeroLineColor: 'rgba(33, 37, 41, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById('line-chart').getContext('2d');
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
                <div className="relative h-96">
                    <canvas id="line-chart"></canvas>
                </div>
            </CardBody>
        </Card>
    );
}