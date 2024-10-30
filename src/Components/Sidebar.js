import React,{useState} from 'react';
// import { Link } from 'react-router-dom'
import '../Assets/css/sidebar.css'
// import rightArrow from '../Assets/img/right-arrow.png';
// import leftArrow from '../Assets/img/left-arrow.png';
import Tab from './Tab';
import MiniSidebar from './MiniSidebar';

const Sidebar = ({initialState}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isshow, setIsShow] = useState(true);
  const [isOpen, setIsOpen] = useState(initialState);
  const [isshow, setIsShow] = useState(!initialState);

  const openNav = () => {
    setIsOpen(true);
    setIsShow(false);
  };

  const closeNav = () => {
    setIsOpen(false);
    setIsShow(true);
  };

  return (
    <div>
      {/* Sidebar */}
        <div id="mySidebar" className="sidebar z-48" style={{ width: isOpen ? '250px' : '65px',  transition: '0.2s'}} >
            {isshow ?
                // <div  className="openbtn" onClick={openNav} ><img src={rightArrow} alt='aaa'></img></div> :
                <div  className="openbtn" onClick={openNav} >
                   <svg  fill="#655b4a" focusable="true" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg>
                </div> :
                // <div  className="closebtn" onClick={closeNav} ><img src={leftArrow} alt='aaa'></img></div>
                <div  className="closebtn" onClick={closeNav} >
                    <svg fill="#655b4a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowLeftIcon" title="ArrowLeft"><path d="m14 7-5 5 5 5z"></path></svg>
                </div>
                }
             {isshow ? <MiniSidebar/>:<Tab/>}  
        </div>
    </div>
  );
};

export default Sidebar;
