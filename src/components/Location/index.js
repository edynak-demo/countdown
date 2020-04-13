import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.4906123386713!2d-80.09417574900795!3d26.213243796078455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8fd83e563e491%3A0xd6c8a7913bb80cb7!2s1460%20S%20Ocean%20Blvd%2C%20Pompano%20Beach%2C%20FL%2033062!5e0!3m2!1sen!2sus!4v1586790375275!5m2!1sen!2sus"   width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen
      ></iframe>

      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
