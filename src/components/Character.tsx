// import { getStatus } from '../functions/actions';
import { Status } from '../models';
import { useState, useEffect } from 'react';
import './Character.css';
import { standLeft } from "../contants";

async function preloadGif(src: any) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
    });
}

export default function Character(): React.JSX.Element {
    const [status, setStatus] = useState<Status>(standLeft);
    const [position, setPosition] = useState<number>(0);

    useEffect(() => {
        setTimeout( async() => {
            const nextStatus = status.nextStatuses[Math.floor(Math.random() * status.nextStatuses.length)];
            await preloadGif(nextStatus.src);
            setStatus(nextStatus);
        }, status.duration);
    }, [status])

    return (
        <div className={"container"}>
            {/* dock length: 100px - 1250px */}
            <img src={status.src} className={"character"} alt={"loading"} style={{ left: 700 + position }}></img>
        </div>);
}