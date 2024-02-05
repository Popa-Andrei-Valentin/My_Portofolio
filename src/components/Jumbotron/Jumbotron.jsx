import './Jumbotron.css'
import {useState, useEffect} from "react";

export default function Jumbotron() {
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);
    const [tgX, setTgX] = useState(0);
    const [tgY, setTgY] = useState(0);

    let moveGradient = (element) => {
        setCurX(currentX => currentX + (tgX - currentX) / 20);
        setCurY(curY => curY + (tgY - curY) / 20);
        element.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
        requestAnimationFrame(() => {
            moveGradient();
        })
    }

    useEffect(() => {
        const interBubble = document.querySelector('.interactive');

        window.addEventListener('mousemove', (event) => {
            setTgX(event.clientX);
            setTgY(event.clientY);
        });

        moveGradient(interBubble);
    })

    return (
        <>
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
                    <div className='interactive'></div>
                </div>
            </div>
        </>
    )
}