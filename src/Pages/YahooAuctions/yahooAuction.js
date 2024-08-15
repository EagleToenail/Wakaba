import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const YahooAuction = () => {
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
                        <div className='flex justify-between ml-10'>
                            <div className='flex justify-center mt-10 w-full' >
                                <ButtonComponent children={'sales table'} style={{backgroundColor:'#424242',}}/>
                                <ButtonComponent children={'vendor assessment sheet'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',marginLeft:'30px'}} />
                                <ButtonComponent children={'Yahoo Auction'} style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',marginLeft:'30px'}} />
                            </div>
                        </div>

                        <div className='flex justify-center mt-10 '>
                            <label className='flex flex-center'>(asd)</label>
                        </div>
                        
                        {/*  Tabe*/}
                        <div className='pl-10 pr-10 pb-20 w-full flex'>
                            <table style={Table}>
                                <thead>
                                    <tr> 
                                        <th  style={Th} rowSpan={2}>select</th>
                                        <th width='5%' style={Th} rowSpan={2}>Last Name</th>
                                        <th width='5%' style={Th} rowSpan={2}>Points</th>
                                        <th width='5%' style={Th} rowSpan={2}>point</th>
                                        <th width='5%' style={Th} rowSpan={2}>point</th>
                                        <th width='5%' style={Th} rowSpan={2}>point</th>
                                        <th width='5%' style={Th} rowSpan={2}>point</th>
                                        <th width='5%' style={Th} rowSpan={2}>point</th>

                                        <th style={Th} rowSpan={2}>Points</th>
                                        <th style={Th} rowSpan={2}>Points</th>
                                        <th style={Th} rowSpan={2}>Points</th>
                                        <th style={Th} rowSpan={2}>Points</th>
                                        <th width='20%' style={Th} rowSpan={2}>Points</th>
                                        <th style={Th} rowSpan={2}>Points</th>

                                        <th  style={Th}  rowSpan={2}>Points</th>
                                        <th width='10%' style={Th} rowSpan={2} >Points</th>
                                        <th width='10%' style={Th} rowSpan={2} >Points</th>
                                        <th width='10%' style={Th} rowSpan={2} ><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>
                                        <th width='10%' style={Th} rowSpan={2} ><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>
                                        <th width='10%'  style={Th} rowSpan={2} ><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>aaa</div></th>

                                        <th style={Th} colSpan={6}>Points</th>

                                    </tr>

                                    <tr>
                                        <th  style={Th} >Points</th>
                                        <th  style={Th}>Points</th>
                                        <th  style={Th} >Points</th>
                                        <th  style={Th}>Points</th>
                                        <th  style={Th} >Points</th>
                                        <th width='10%'  style={Th} >Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={Td}><input type="checkbox"></input></td>
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

export default YahooAuction;