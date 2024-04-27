import './Jumbotron.css'
import CV from '../../assets/CV.pdf'

export default function Jumbotron() {
    return (
        <>
            <div className='jumbotron-container'>
                <div className='jumbotron-text'>
                    <h1>Solution infrastructure for the internet</h1>
                    <h2>Hi, I'm Andrei.</h2>
                    <div className='button-container'>
                        <button className='btn-standard'>Contact me</button>
                    <a href={CV} download='CV'>
                        <button className='btn-standard btn-cv'>CV</button>
                    </a>
                </div>
            </div>
            <div className='gradient-bg'>
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                                    result="goo"
                                />
                                <animate attributeName="values" from="0" to="360" dur="20s" repeatCount="indefinite"/>
                            </filter>
                        </defs>
                    </svg>
                    <div className='gradients-container'>
                        <div className='g1'></div>
                        <div className='g2'></div>
                    </div>
                </div>
            </div>
        </>
    )
}
