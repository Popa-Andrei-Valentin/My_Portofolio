import './Jumbotron.css'

export default function Jumbotron() {
    return (
        <>
            <div className='jumbotron-container'>
                <div className='jumbotron-text'>
                    <h1>Solution infrastructure for the internet</h1>
                    <span>Hi, I'm Andrei.</span>
										<div className='button-container'>
											<button className='btn-standard'>Contact me</button>
											<button className='btn-standard btn-cv'>CV</button>
										</div>
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
                        <div className='interactive'></div>
                    </div>
                </div>
            </div>
        </>
    )
}