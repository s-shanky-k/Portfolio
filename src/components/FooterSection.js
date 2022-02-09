import React from 'react';
import './FooterSection.css'
import SocialMedia from './SocialMedia';

function FooterSection() {
  return (
        <div className="footer-container" id="footer">
                <div className="footer-text">
                    <p>Made with loads of <i className="fas fa-heart text-red-600 text-lg"></i></p>
                    <p>Developed by Shankar Kumar S</p>
                    <div className='w-40 mt-2'>
                      <SocialMedia />
                    </div>
                    <p className='text-xs mt-2 text-gray-600'>Copyright <i class="far fa-copyright text-xs"></i> 2022 Shankar Kumar S</p>
                </div>
        </div>
  );
}

export default FooterSection;