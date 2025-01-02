import { useState, useEffect, useRef } from 'react';
import { Status } from '../models';
import { standLeft } from "../contants";
import './Character.css';

async function preloadGif(src: string) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
    });
}

export default function Character(): React.JSX.Element {
    const [status, setStatus] = useState<Status>(standLeft);
    const [position, setPosition] = useState<number>(700);
    const intervalRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);
    
    useEffect(() => {
        if (status.speed) {
            intervalRef.current = window.setInterval(() => {
                setPosition((prevPosition) => prevPosition - 0.08);
            }, 15);
            
            timeoutRef.current = window.setTimeout(() => {
                if (intervalRef.current !== null) {
                    clearInterval(intervalRef.current);
                }
                
                const nextStatus =
                  status.nextStatuses[
                    Math.floor(Math.random() * status.nextStatuses.length)
                    ];
                
                preloadGif(nextStatus.src).then(() => {
                    setStatus(nextStatus);
                });
            }, status.duration);
        } else {
            timeoutRef.current = window.setTimeout(() => {
                const nextStatus =
                  status.nextStatuses[
                    Math.floor(Math.random() * status.nextStatuses.length)
                    ];
                
                preloadGif(nextStatus.src).then(() => {
                    setStatus(nextStatus);
                });
            }, status.duration);
        }
        
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [status]);
    
    return (
      <div className={"container"}>
          {/* dock length: 100px - 1250px */}
          <img
            src={status.src}
            className={"character"}
            alt={"loading"}
            style={{ left: position }}
          />
      </div>
    );
}
