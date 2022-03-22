import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <p className='footer-introduce'>Copyright by Quang Hiếu</p>
            <div className='footer-society'>
                <a className='footer-society__facebook' href="https://www.facebook.com/djdk.gui.5/">
                    <img className='footer-society__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png' />
                </a>
                <a className='footer-society__youtube' href="https://www.youtube.com/channel/UCxMXQ0vQxp4DxUOqi1LpXsg">
                    <img className='footer-society__logo' src='data:image/jpeg;base64,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' />
                </a>
                <a className='footer-society__github' href="https://github.com/hieu-svth">
                    <img className='footer-society__logo' src='data:image/png;base64,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' />
                </a>
            </div>
        </div>
    );
}

export default Footer;