
// import React, { useState, useCallback, useRef, Children } from 'react';
import React, { useState, useCallback, useRef} from 'react';
import '../Assets/css/MainContainer.css';
import InvoiceForPurchaseChat from '../Pages/InvoiceForPurchaseChat/invoiceForPurchaseChat';

const MainContainer = ({children,destinationURL}) => {
  const [position, setPosition] = useState(80); // percentage for the height of the top pane
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const startY = useRef(0); // Ref to store the initial click position

  // Handle mouse move event for dragging
  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      const containerHeight = containerRef.current.offsetHeight;
      const newPosition = ((e.clientY - containerRef.current.getBoundingClientRect().top) / containerHeight) * 100;
      setPosition(Math.max(10, Math.min(newPosition, 90))); // constrain between 10% and 90%
    }
  }, [isDragging]);

  // Handle mouse up event for dragging
  const handleMouseUp = useCallback(() => {
    if (isDragging) {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging, handleMouseMove]);

  // Handle mouse down event to start dragging
  const handleMouseDown = (e) => {
    startY.current = e.clientY; // Record the initial position
    setIsDragging(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

//   // Handle clicking to move the splitter to predefined positions
//   const handleClick = (e) => {
//     e.stopPropagation(); // Prevent the click from triggering dragging
//     const rect = containerRef.current.getBoundingClientRect();
//     const newPosition = ((e.clientY - rect.top) / rect.height) * 100;
//     setPosition(Math.max(10, Math.min(newPosition, 90))); // constrain between 10% and 90%
//   };

  const moveToTop = () =>{
    if(position<50) {
      setPosition(5); // Move the line to the top
    }else{
      setPosition(40); // Move the line to the top
    }
   
  } 
  const moveToBottom = () => {
    if(position<30) {
      setPosition(40); // Move the line to the top
    }else{
      setPosition(80); // Move the line to the top
    }
  }

  return (
    // <div className="main-container" ref={containerRef} onClick={handleClick}>
    <div className="main-container" ref={containerRef}>
      <div className="top-pane" style={{ height: `${position}%` }}>
        {children}
      </div>
      <div
        className="splitter"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? 'row-resize' : 'default' }}
      > 
      <div className='btn-back'>
        <button className="arrow-button1" onClick={(e) => { e.stopPropagation(); moveToTop(); }}>
            <svg  focusable="false" aria-hidden="true" fill="white" viewBox="0 0 24 24" data-testid="ArrowDropUpIcon" title="ArrowDropUp"><path d="m7 14 5-5 5 5z"></path></svg>
          </button>
      <button className="arrow-button2" onClick={(e) => { e.stopPropagation(); moveToBottom(); }}>
           <svg  focusable="false" aria-hidden="true" fill="white" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon" title="ArrowDropDown"><path d="m7 10 5 5 5-5z"></path></svg>
        </button>
      </div>


      </div>
      <div className="bottom-pane" style={{ height: `${100 - position - 15}%` }}>
        {destinationURL == 'invoiceforpurchaseofbrought' ? (<InvoiceForPurchaseChat/> ): ('Bottom')}
      </div>
    </div>
  );
}

export default MainContainer;

