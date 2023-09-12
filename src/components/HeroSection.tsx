import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { ButtonCV } from './ButtonCV'


function HeroSection() {
    return (
        
        <div className='hero-container'>            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1 className = "title">FULL STACK DEV</h1>
            <p>
            <a target="_blank" id="logo" className="fa-brands fa-react" href="https://react.dev/"></a>
            <a target="_blank" id="logo" className="fa-brands fa-js" href="https://www.javascript.com/"></a>
            <a target="_blank" id="logo" className="fa-brands fa-html5" href="https://developer.mozilla.org/en-US/docs/Web/HTML"></a>
            <a target="_blank" id="logo" className="fa-brands fa-css3" href="https://developer.mozilla.org/en-US/docs/Web/CSS"></a>
            <a target="_blank" id="logo" className="fa-brands fa-node" href="https://nodejs.org/en/about"></a>
            <a target="_blank" id="logo" className="fa-brands fa-python" href="https://www.python.org/"></a>
            <a target="_blank" id="logo" className="fa-brands fa-java" href="https://www.java.com/en/"></a>
            <a target="_blank" id="logo" className="fa-brands fa-raspberry-pi" href="https://www.raspberrypi.com/"></a>
            <a target="_blank" id="logo" className="fa-brands fa-free-code-camp" href="https://www.freecodecamp.org/"></a>
                        </p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    VIEW MY WORK <i className="fa-solid fa-person-digging"></i> 
                </Button>
                <ButtonCV className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    VIEW MY RESUME <i className='fa-solid fa-file' />
                </ButtonCV>
            </div>
        </div>
    )
}

export default HeroSection