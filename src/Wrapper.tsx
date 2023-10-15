import { RecoilRoot } from 'recoil';
import App from './App';
import { useEffect, useRef, useState } from 'react';

interface TrackingData {
    name: string;
    total: number;
    url: string | null; // Assuming it's a string or null
    isBrowser: boolean;
    lastActiveTime: Date; // Change the type to Date
    id: number;
    owner: {
        name: string;
        bundleId: string;
        path: string;
        processId: number;
    };
    memoryUsage: number;
    title: string;
    bounds: {
        y: number;
        height: number;
        x: number;
        width: number;
    };
    mode: string;
    platform: string;
}



const Wrapper = () => {
    const hasEffectRun = useRef(false);
    const [trackingData, setTrackingData] = useState<TrackingData[]>([]);

    useEffect(() => {
        const fetchTrackingData = async () => {
            if (!hasEffectRun.current) {
                hasEffectRun.current = true;
                try {
                    //@ts-ignore
                    const res = await window.getTrackingData.getTrackingData();

                    // Transform the tracking data object into an array
                    const transformedData: TrackingData[] = Object.entries(res).map(([appName, appData]) => ({
                        name: appName,
                        total: appData.totalDuration,
                        url: appData.windowInfo[0].url,
                        isBrowser: appData.isBrowser,
                        lastActiveTime: new Date(appData.lastActiveTime),
                        id: appData.windowInfo[0].id,
                        owner: appData.windowInfo[0].owner,
                        memoryUsage: appData.windowInfo[0].memoryUsage,
                        title: appData.windowInfo[0].title,
                        bounds: appData.windowInfo[0].bounds,
                        mode: appData.windowInfo[0].mode,
                        platform: appData.windowInfo[0].platform,
                    }));



                    console.log(transformedData)

                    setTrackingData(transformedData);
                } catch (error) {
                    console.error('Error fetching tracking data:', error);
                }
            }
        };

        fetchTrackingData();
    }, []);

    return (
        <RecoilRoot>
            <App /> {/* Pass trackingData as a prop to App */}
        </RecoilRoot>
    );
};

export default Wrapper;
