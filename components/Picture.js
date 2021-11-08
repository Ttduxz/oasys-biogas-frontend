import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';

export default function Picture({
    url
}) {
    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Mae Wang Camera</h2>
                </div>
            </CardHeader>
            <CardBody className="flex justify-center mb-2">
                <img src={url} className="object-center "/>
            </CardBody>
        </Card>
    );
}
