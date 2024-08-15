import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import InputComponent from '../../Components/Common/InputComponent';


const SalesList = () => {
    const title = 'タイトルタイトル';

    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    const Th = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px'
    };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
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
            <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
            {/* title */}
            <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center mt-10">Sales List(by staff)</h2>
            {/* first letters line  */}
            <div className='flex justify-center'>
                <div className='flex justify-center' style={{width:'40%'}}>
                    <div className='flex justify-center mt-10 w-full text-[17px] text-[#70685a] font-bold' >
                        <div>
                            <label>Visit type1</label>
                            <div className='text-center mr-10'>
                                <label>45343433</label>
                            </div>
                        </div>
                        <div>
                            <label>Visit type2</label>
                            <div className='text-center mr-10'>
                                <label>45343433</label>
                            </div>
                        </div>
                        <div>
                            <label>Category 1</label>
                            <div className='text-center mr-10'>
                                <label>45343433</label>
                            </div>
                        </div>
                        <div>
                            <label>Category 2</label>
                            <div className='text-center mr-10'>
                                <label>45343433</label>
                            </div>
                        </div>
                        <div>
                            <label>Whole saler</label>
                            <div className='text-center mr-10'>
                                <label>45343433</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second button line  */}
            <div className='flex justify-center' >
            <div className='flex justify-center' >
                <div className='flex justify-center mt-5 w-full' >
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px',width:'150px', borderRadius: '5px', }} />
                    </div>
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    <div>
                        <div className='text-center text-[#70685a] font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    <div>
                        <div className='text-center font-bold mb-2'><label>45343433</label></div>
                        <InputComponent  style={{ backgroundColor: 'transparent', border: '1px solid #70685a', color: '#70685a', height: '10px', width:'150px',borderRadius: '5px', marginLeft: '30px' }} />
                    </div>
                    
                </div>
            </div>
            </div>
            {/* third line */}
            <div className='flex justify-center' >
            <div className='flex justify-center' >
                <div className='flex justify-center mt-5 w-full' >
                    <div className='flex'>
                        <div className='text-center text-[#70685a] font-bold pr-3 pt-2'><label>Under this condition</label></div>
                        <ButtonComponent children={'search'} style={{ backgroundColor: '#a3a1c8', color: '#fff', height: '40px',width:'120px', borderRadius: '5px', }} />
                        <div className='text-center text-[#70685a] font-bold pl-3 pt-2'><label>(and search)</label></div>
                    </div>
                </div>
            </div>                    
            </div>                    

            {/*  Tabe*/}
            <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                <table style={Table}>
                    <thead>
                        <tr>
                            <th>select</th>
                            <th width='5%'>Last Name</th>
                            <th width='5%'>Points</th>
                            <th width='5%'>point</th>
                            <th width='5%'>point</th>
                            <th width='5%'>point</th>
                            <th width='5%'>point</th>
                            <th width='5%'>point</th>

                            <th>Points</th>
                            <th >Points</th>
                            <th >Points</th>
                            <th >Points</th>
                            <th width='20%' >Points</th>
                            <th >Points</th>

                            <th >Points</th>
                            <th width='10%' >Points</th>
                            <th width='10%' >Points</th>
                            <th width='10%' >Points</th>
                            <th width='10%' >Points</th>
                            <th >Points</th>
                            <th >Points</th>
                            <th >Points</th>
                            <th >Points</th>
                            <th width='10%' >Points</th>
                            <th >Points</th>
                            <th >Points</th>
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

export default SalesList;