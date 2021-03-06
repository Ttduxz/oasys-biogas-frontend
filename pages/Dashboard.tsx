import StatusCard from '../components/StatusCard';
// import ChartLine from '../components/ChartLine';
import dynamic from "next/dynamic";
// import ChartBar from '../components/ChartBar';

import Guage from '../components/Guage'

const ChartLine = dynamic(() => import("../components/ChartLine"),{ssr:false})

export default function Dashboard({
    station,
    date,
    temp,
    humi,
    pa,
    data,
    flow,
    time,

}) {
    let pa_int = Number(pa)
    let humi_int = Number(humi).toFixed(1)
    let temp_int = Number(temp).toFixed(1)
    temp = temp_int.toString()
    humi = humi_int.toString()
    
    if (pa_int <= 0) pa_int = 0
    let percent = ((pa_int/350)*100).toFixed(1)
    pa = pa_int.toString()

    return (
        <div className="h-full w-full" >
            <div className="bg-light-blue-500 px-3 md:px-8 h-20 self-center">
                <p className="pt-6 text-center text-4xl md:text-4xl text-white">
                    Station {station}
                </p>
            </div>

            <div className="px-3 pt-6 mt-12 md:px-8 -mt-13">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
                            <Guage date={date} percent={percent}/>
                        </div>
                        <div className="xl:col-start-3 xl:col-end-7 px-5 mb-14">
                            <ChartLine data={data}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3  pt-3 mt-6 mb-16 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="pink"
                            icon="Temp"
                            title=""
                            amount={temp + " °C"}
                        />
                        <StatusCard
                            color="orange"
                            icon="Humi"
                            title=""
                            amount={humi + " %"}
                        />
                        <StatusCard
                            color="purple"
                            icon="PA" 
                            title=""
                            amount={pa + " Pa"}
                        />
                         <StatusCard
                            color="red"
                            icon="Vol" 
                            title=""
                            amount={pa + " m³"}
                        />
                        <StatusCard
                            color="aut1"
                            icon="Flow" 
                            title={time}
                            amount={flow + " m³"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
