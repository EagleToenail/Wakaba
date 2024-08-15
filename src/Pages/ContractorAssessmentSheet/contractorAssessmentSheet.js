import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';


const ContractorAssementSheet = () => {
    const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color:'#70685a',
        textAlign: 'center',
        width:'100%',
        alignItem:'center'
      };
    
    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color:'#70685a',
        fontSize: '15px'
      };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color:'#70685a',
        fontSize: '15px'
      };

    //   const [isOpen, setIsOpen] = useState(false);
      const [isshow, setIsShow] = useState(true);
    
      const openSubtable = () => {
        // setIsOpen(true);
        setIsShow(false);
      };
    
      const closeSubtable = () => {
        // setIsOpen(false);
         setIsShow(true);
      };


    //   const firstTd = {
    //     borderCollapse: 'collapse',
    //     borderTop: '1px solid #fff',
    //     borderLeft: '1px solid #fff',
    //     borderBottom: '1px solid #fff'
    //   };

    //   const lastTd = {
    //     borderCollapse: 'collapse',
    //     borderTop: '1px solid #fff',
    //     borderRight: '1px solid #fff',
    //     borderBottom: '1px solid #fff'
    //   };

    return (
        <>
            <Titlebar title={title} />
                        {/* first button line  */}
                        <div className='flex justify-center ml-10 ' >
                            <div className='flex mt-10 mr-40' >
                                <ButtonComponent children={'sales table'} style={{backgroundColor:'#424242',}}/>
                                <ButtonComponent children={'vendor assessment sheet'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',marginLeft:'30px'}} />
                                <ButtonComponent children={'Yahoo Auction'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',marginLeft:'30px'}} />
                            </div>
                            <div className='flex mt-10 ' >
                                <div>
                                    <ButtonComponent children={'request application'} style={{backgroundColor:'#9bd195',marginLeft:'30px'}} />
                                    <div className='text-center'>
                                        <LabelComponent value={'adf'} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second button line  */}
                        <div className='flex ml-10'>
                            <div className='flex mt-5 w-full' >
                                <ButtonComponent children={'all'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',}}/>
                                <ButtonComponent children={'brand1'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}} />
                                <ButtonComponent children={'all'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}}/>
                                <ButtonComponent children={'brand1'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}} />
                                <ButtonComponent children={'all'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}}/>
                                <ButtonComponent children={'brand1'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}} />
                                <ButtonComponent children={'all'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}}/>
                                <ButtonComponent children={'brand1'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}} />
                                <ButtonComponent children={'all'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}}/>
                                <ButtonComponent children={'brand1'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}} />
                                <ButtonComponent children={'all'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}}/>
                                <ButtonComponent children={'all'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}}/>
                                <ButtonComponent children={'brand1'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',height:'10px',borderRadius:'5px',marginLeft:'30px'}} />
                            </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-20 pl-10 pr-10 pb-20 w-full flex'>
                            <table style={Table}>
                                <thead>
                                    <tr> 
                                        <th rowSpan={2}>select</th>
                                        <th width='5%' style={Th} rowSpan={2}>Last Name</th>
                                        <th width='5%' style={Th} rowSpan={2}>Points</th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>

                                        <th style={Th} rowSpan={2}>Points</th>
                                        <th style={Th} rowSpan={2} >Points</th>
                                        <th style={Th} rowSpan={2} >Points</th>
                                        <th style={Th} rowSpan={2} >Points</th>
                                        <th width='20%' style={Th} rowSpan={2} >Points</th>
                                        <th style={Th} rowSpan={2} >Points</th>

                                        <th  style={Th}  rowSpan={2}>Points</th>
                                        <th width='10%' style={Th} rowSpan={2} >
                                            {isshow? <button><img src={rightArrow} style={{width:'30px'}} alt='' onClick={openSubtable} ></img></button> :<button><img src={leftArrow} style={{width:'30px'}} alt='' onClick={closeSubtable}></img></button>} 
                                        </th>
                                        <th width='10%' style={Th} rowSpan={2} >Points33</th>

                                        {isshow?<th  style={Th} colSpan={4}>Points</th>:<th colSpan={4}  style={{display:'none'}}>Points</th>}

                                        {isshow?<th  style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}

                                        <th  style={Th}>Points</th>
                                        
                                        {/* <th  style={Th} >Points</th>
                                        <th  style={Th} >Points</th>
                                        <th  style={Th} >Points</th>
                                        <th  style={Th} >Points</th> */}

                                    </tr>
                                    <tr>
                                        {isshow?<th width='10%' style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th width='10%' style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points</th>:<th  style={{display:'none'}}>Points</th>}

                                        {isshow?<th  style={Th} >Points1</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points1</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points1</th>:<th  style={{display:'none'}}>Points</th>}
                                        {isshow?<th  style={Th} >Points1</th>:<th  style={{display:'none'}}>Points</th>}
                                        
                                        <th width='10%' style={Th} ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td style={Td}>as</td>
                                        <td style={Td}>Smith</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                        <td style={Td}>50</td>
                                    </tr>
                                   
                                </tbody>

                            </table>
                        </div>
        </>
    );
};

export default ContractorAssementSheet;