import './Button.css';
import { Link } from 'react-router-dom';


export const ButtonCV = ({children, type, onClick, buttonStyle, buttonSize}:any) => {
    const STYLES = ['btn--primary', 'btn--outline'];
    const SIZES = ['btn--medium', 'btn--large'];
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    
    return (
        <Link target="_blank" to='https://docs.google.com/document/d/e/2PACX-1vQudjabmmsyAD5c6seJ_lgLGPFLFR2mSG03rnByg1T1gJ4SNGsDp-M7GZxyl7l4N7-bJ1Imia2VTdvA/pub?embedded=true' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>{children}</button>
        </Link>
    )
}