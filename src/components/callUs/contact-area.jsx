import React from 'react';
import { InlineWidget } from 'react-calendly';

const CalendlyInlineWidget = ({ url = "https://calendly.com/rpnglobal/30min?view=week" }) => {
  return (
    <section className='pb-50' style={{background:"#f2f2f2"}}>
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-12 mt-50">
            <h1>Book a <span className="text_highlight">Call</span></h1>
            <p>Choose a time that works best for you and book your session.</p>
          </div>
          <div className="col-12 calendar-widget">
            <InlineWidget
              url={url}
              
              pageSettings={{
                backgroundColor: 'white',  
                hideEventTypeDetails: false,  
                hideLandingPageDetails: true, 
                
              }}
              styles={{overflowY:"hidden"}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyInlineWidget;
