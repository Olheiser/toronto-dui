"use client"

import React, { useEffect, useState } from 'react';
import { PopupButton  } from 'react-calendly';

const CalendlyPopupButton = () => {
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure the DOM is fully loaded before setting the rootElement
    const root = document.getElementById('root');
    if (root) {
      setRootElement(root);
    }
  }, []);

    return (
        <div className="popup-button">
          {rootElement && (
            <PopupButton 
                url="https://calendly.com/nicholas-robinson-criminal-lawyer/free-consultation"
                rootElement={rootElement} // Use the dynamically set rootElement
                text="Get a Free Consultation"
            />
            )}
        </div>
      );
    };

export default CalendlyPopupButton;