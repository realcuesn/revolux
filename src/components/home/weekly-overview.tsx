import React, { useEffect, useState } from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import { Badge } from '../ui/badge';

const formatMilliseconds = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

    const timeParts = [];

    if (hours > 0) {
        timeParts.push(`${hours} hour${hours > 1 ? 's' : ''}`);
    }

    if (minutes > 0) {
        timeParts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    }

    if (seconds > 0) {
        timeParts.push(`${seconds} second${seconds > 1 ? 's' : ''}`);
    }

    return timeParts.join(' ');
};

const CustomTooltip = ({ active, payload, label }: { active: boolean, payload: any, label: string }) => {
    if (active && payload && payload.length) {
        return (
            <Badge className="p-2 rounded-lg ">
                <p className="text-center">{label}</p>
                <p className="text-center">{`Time: ${formatMilliseconds(payload[0].value)}`}</p>
            </Badge>
        );
    }

    return null;
};

// Define the type for tracking data
interface TrackingData {
    name: string;
    total: number;
}

const WeeklyOverview = () => {
    const [trackingData, setTrackingData] = useState<TrackingData[]>([]);

    useEffect(() => {
        const fetchTrackingData = async () => {
            try {
                // @ts-ignore
                const res = await window.getTrackingData.getTrackingData();

                // Transform the tracking data object into an array
                const transformedData = Object.keys(res).map((key) => ({
                    name: key,
                    // @ts-ignore
                    total: res[key].totalDuration,
                }));

                setTrackingData(transformedData);
            } catch (error) {
                console.error('Error fetching tracking data:', error);
            }
        };

        fetchTrackingData();
    }, []);

    return (
        <div className="w-full">
            <h2 className="px-5 mt-20 mb-10 font-semibold">Overview</h2>
            <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trackingData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => formatMilliseconds(value)} // Format time
                        />

                        <Tooltip content={<CustomTooltip active={true} payload={undefined} label="Label Value" />} />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#adfa1d" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyOverview;
