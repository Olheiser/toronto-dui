"use client"

import React, { useEffect, useState } from 'react';
import { PopupWidget } from 'react-calendly';

const CalendlyWidget = () => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded before setting the rootElement
    const root = document.getElementById('root');
    if (root) {
      setRootElement(root);
    }
  }, []);

    return (
        <div className="popup-widget">
          {rootElement && (
            <PopupWidget
                url="https://calendly.com/nicholas-robinson-criminal-lawyer/free-consultation"
                rootElement={rootElement} // Use the dynamically set rootElement
                text="Get a Free Consultation"
                textColor="#ffffff"
                color="#007B8B"
            />
            )}
        </div>
      );
    };

export default CalendlyWidget;