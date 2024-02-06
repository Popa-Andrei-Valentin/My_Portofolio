import './Jumbotron.css'
import {useState, useEffect, useRef} from "react";

export default function Jumbotron() {
    const mouseBubble = useRef(null);
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);

    useEffect(() => {
        /** Update gradient position in order to be under the cursor */
        window.addEventListener('mousemove', (event) => {
            setCurX(() => event.clientX);
            setCurY(() => event.clientY);
            mouseBubble.current.style.left = `${curX}px`
            mouseBubble.current.style.top = `${curY}px`
        });
    })

    return (
        <>
            <div className='jumbotron-container'>
                <div className='jumbotron-text'>
                    <h1>Hi, I'm Andrei</h1>
                    <span>creativity to connectivity</span>
                </div>
                <div className='gradient-bg'>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                    <div className='gradients-container'>
                        <div className='g1'></div>
                        <div className='g2'></div>
                        <div className='g3'></div>
                        <div className='g4'></div>
                        <div className='g5'></div>
                        <div ref={mouseBubble} className='interactive'></div>
                    </div>
                </div>
            </div>
        </>
    )
}