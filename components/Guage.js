import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import GaugeChart from 'react-gauge-chart'

export default function Picture() {
    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Biogas level</h2>
                </div>
            </CardHeader>
            <CardBody>
                <GaugeChart id="gauge-chart3"
                    nrOfLevels={4} 
                    colors={["#00FF00", "#ffff00" ,"#ff0000"]} 
                    arcWidth={0.2} 
                    percent={0.4} 
                    textColor={"#000000"}
                    hideText={true}
                />
                <div className=" grid grid-cols-3 w-full">
                    <p className="col-start-2 col-end-3 text-center text-3xl font-mono">Medium</p>
                </div>
            </CardBody>
        </Card>
    );
}
