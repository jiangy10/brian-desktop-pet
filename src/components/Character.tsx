import {useState, useEffect, useRef} from 'react';
import {Status} from '../models';
import {standLeft, moveLeft, moveRight} from "../contants";
import './Character.css';

async function preloadGif(src: string) {
	return new Promise((resolve) => {
		const img = new Image();
		img.src = src;
		img.onload = resolve;
	});
}

function getNextStatus(position: number, status: Status): Status {
	let nextStatus = status.nextStatuses[Math.floor(Math.random() * status.nextStatuses.length)];
	if (position >= 1150) {
		nextStatus = moveLeft;
	}
	if (position <= 150) {
		nextStatus = moveRight;
	}
	return nextStatus;
}

export default function Character(): React.JSX.Element {
	const [status, setStatus] = useState<Status>(standLeft);
	const [position, setPosition] = useState<number>(700);
	const intervalRef = useRef<number | null>(null);
	const timeoutRef = useRef<number | null>(null);
	
	useEffect(() => {
		
		intervalRef.current = window.setInterval(() => {
			setPosition((prevPosition) => prevPosition + status.speed);
		}, 15);
		
		timeoutRef.current = window.setTimeout(() => {
			if (intervalRef.current !== null) {
				clearInterval(intervalRef.current);
			}
			
			const nextStatus = getNextStatus(position, status);
			
			preloadGif(nextStatus.src).then(() => {
				setStatus(nextStatus);
			});
		}, status.duration);
		
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
				style={{left: position}}
			/>
		</div>
	);
}
