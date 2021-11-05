import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from 'next/image'

export default function Picture({
    url
}) {
    let a = url.toString()
    return (
        <Card>
            <CardHeader color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Mae Wang Camera 1</h2>
                </div>
            </CardHeader>
            <CardBody>
                
            </CardBody>
        </Card>
    );
}
