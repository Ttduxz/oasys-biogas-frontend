import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import CardBody from '@material-tailwind/react/CardBody';
import GaugeChart from 'react-gauge-chart'
import Icon from '@material-tailwind/react/Icon';

export default function Picture({
    date,
    percent,
}) {
    let x = (Number(percent))/100;
    return (
        <Card className="h-full">
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Biogas level</h2>
                    <p>{date}</p>
                </div>
            </CardHeader>
            <CardBody className="mt-12">
                <GaugeChart id="gauge-chart3"
                    nrOfLevels={4} 
                    colors={["#ff0000","#ffff00","#00ff00"]} 
                    arcWidth={0.2} 
                    percent={x} 
                    textColor={"#000000"}
                    hideText={true}
                />
                <div className=" grid grid-cols-3 w-full">
                    <p className="col-start-2 col-end-3 text-center text-3xl font-mono">{percent}%</p>
                </div>
            </CardBody>
        </Card>
    );
}
