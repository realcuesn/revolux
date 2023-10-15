// window.d.ts
interface Window {
    getTrackingData: {
        getTrackingData: () => Promise<TrackingData[]>;
    };
}
