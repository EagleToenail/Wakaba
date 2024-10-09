
// import React, { useState, useCallback, useRef, Children } from 'react';
import React, { useState, useCallback, useRef} from 'react';
import '../Assets/css/MainContainer.css';

const MainContainer = ({children}) => {
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
        style={{ cursor: isDragging ? 'row-resize' : 'default' }}
      > 

      </div>
      <div className="bottom-pane" style={{ height: `${100 - position - 15}%` }}>
      </div>
    </div>
  );
}

export default MainContainer;

