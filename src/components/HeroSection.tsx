import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import { ButtonCV } from './ButtonCV'
import {motion} from 'framer-motion'


function HeroSection() {



    return (
        
        

        <div className='hero-container'>   
        <video src='/videos/video-2.mp4' autoPlay loop muted />

     <svg id="text" width="631" height="124" viewBox="0 0 631 124" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12C9 28.054 13.0126 43.7498 14.2222 59.7778C15.4917 76.5984 19 93.0382 19 110" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M5 14H65" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M13 46C13.0969 46.7754 39.8684 44.2633 42 40" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M50 48C50 53.5087 54.8587 106.808 68.9444 92.7222C75.1983 86.4683 78.8889 73.2504 78.8889 64.5C78.8889 58.3585 76.6401 53.6713 75.2222 48C74.655 45.731 73.3695 38.7424 75.4444 45.3333C79.6292 58.6261 83.9072 73.3857 84.9444 87.3889C85.3564 92.9504 86 98.4529 86 104" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M103 10C103 17.0953 106.418 24.7255 108.222 31.4444C113.387 50.6825 118.356 69.7295 118.944 89.7222C119.187 97.975 121.873 111.69 117 119" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M146 10C144.003 12.7461 145.113 19.4426 145.222 22.3333C145.651 33.7096 147.378 44.9733 147.889 56.3333C148.441 68.6132 147 80.7227 147 92.9444C147 99.6296 147 106.315 147 113" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M245 22C242.797 9.88494 224.86 8.70722 216 11.4445C202.386 15.6504 196.512 44.2508 214.222 46.5556C226.414 48.1422 242.149 43.3373 252.611 51.5C258.034 55.7311 263.108 62.3046 265.778 68.6667C270.054 78.8567 258.771 87.9726 251.778 93.2222C235.133 105.716 211.113 117.338 189.611 112.5C186.94 111.899 185.628 110.512 185 108" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M275 7.99999C275 1.51216 277.815 20.6667 279.222 27C283.621 46.7947 287.072 66.9011 289.778 87C290.766 94.3403 291 101.62 291 109" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M265 35C265.416 31.6724 287.453 33.291 291.444 32.4444C295.501 31.584 299.822 30 304 30" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M318 48C313.455 47.6212 309.176 44.6788 304.667 47.1667C296.304 51.7804 300.88 71.7394 305.778 77.5556C312.043 84.995 318.222 75.5087 318.833 69.5C319.411 63.8182 319 57.9388 319 52.2222C319 51.7363 319.417 47.1111 318.5 47.1111C317.698 47.1111 323.946 60.4667 324.333 61.3333C326.057 65.191 328.496 69.2389 330 73C330.632 74.5808 331 75.1738 331 77" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M375 54C375 49.4481 371.975 46.4087 368 44.2222C364.181 42.1219 359.162 41.8058 354.889 42C349.342 42.2521 348.345 47.48 347.667 52.1667C345.821 64.9178 351.405 76.7655 362 84.3333C367.024 87.9221 373.682 87.3178 378 83" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M371 6C381.328 24.6705 386.887 47.2123 392.778 67.5556C394.895 74.8677 396 81.4913 396 89" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M391 55C391 50.3742 394.856 43.5497 396.5 39.1667C397.819 35.6505 399 33.8302 399 30" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M390 51C401.472 52.5295 413.135 68.0533 417.222 78C418.884 82.0441 420.629 85.8875 422 90" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M477 5C489.247 27.9626 494.757 54.5429 499 80C499.948 85.6898 501 91.238 501 97" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M458 13C458.562 8.50126 483.061 5.97006 487.222 6.22223C509.328 7.56199 530.945 28.3107 534.778 49.6667C536.204 57.6111 537.031 67.4144 533.556 74.9445C528.333 86.2605 516.262 94.9992 505.611 100.667C497.245 105.118 485.865 111 476 111" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M549 80C549.208 78.3387 553.254 77.2559 554.444 76.5556C558.478 74.1828 564.468 71.6644 566.333 67C569.959 57.9365 556.913 51.9864 551.778 59.2222C545.722 67.7553 548.539 81.0357 558.333 85C567.401 88.6701 577.415 88 587 88" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
<path d="M585 54C592.179 56.3929 596.911 68.3243 600.389 74.2222C601.614 76.2991 604.763 88.7846 607.056 89.1667C607.5 89.2408 618.206 62.3703 619.333 59.2222C621.277 53.7926 622.72 48.3211 625 43" stroke="#FEFEFE" strokeWidth="10" strokeLinecap="round"/>
</svg>

            <p>
            
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-react" href="https://react.dev/"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-js" href="https://www.javascript.com/"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-html5" href="https://developer.mozilla.org/en-US/docs/Web/HTML"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-css3" href="https://developer.mozilla.org/en-US/docs/Web/CSS"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-node" href="https://nodejs.org/en/about"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-python" href="https://www.python.org/"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-github" href="https://github.com/kaleb-skelton"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-raspberry-pi" href="https://www.raspberrypi.com/"></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} target="_blank" id="logo" className="fa-brands fa-free-code-camp" href="https://www.freecodecamp.org/"></motion.a>
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