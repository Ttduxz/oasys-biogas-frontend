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
                <img src={"https://firebasestorage.googleapis.com/v0/b/biogas-2f0c0.appspot.com/o/show.jpg?alt=media&token=124b280b-e139-442d-8176-aa1e2108c099"} alt="Picture of the author"> </img>
            </CardBody>
        </Card>
    );
}
