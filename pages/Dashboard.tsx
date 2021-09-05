import StatusCard from '../components/StatusCard';
import ChartLine from '../components/ChartLine';
import ChartBar from '../components/ChartBar';
import Picture from '../components/Picture'
import Guage from '../components/Guage'

export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 px-3 md:px-8 h-32">
                <p className="text-2xl md:text-4xl text-white">
                    BioGass-SmartFarm
                </p>
            </div>

            <div className="px-3 md:px-8 -mt-12">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-3 px-4 mb-14">
                            <Guage/>
                        </div>
                        <div className="xl:col-start-3 xl:col-end-5 px-5 mb-14">
                            <ChartLine/>
                        </div>
                        <div className="xl:col-start-5 xl:col-end-7 px-4 mb-14">
                            <Picture/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        <StatusCard
                            color="pink"
                            icon="Temp"
                            title="°C"
                            amount="26.91 "
                            date="Since 16-03-2021 23:48:35"
                        />
                        <StatusCard
                            color="orange"
                            icon="Humi"
                            title="%"
                            amount="38.5 "
                            date="Since 16-03-2021 23:48:35"
                        />
                        <StatusCard
                            color="purple"
                            icon="PA" 
                            title="Pa"
                            amount="252 "
                            date="Since 16-03-2021 23:48:35"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
