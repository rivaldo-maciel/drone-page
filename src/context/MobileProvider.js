import React, {useState} from 'react';
import mobileContext from './mobileContext.js';

function MobileProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <mobileContext.Provider value={{ showMenu, setShowMenu }}>
      {
        children
      }
    </mobileContext.Provider>
  );
}

export default MobileProvider;