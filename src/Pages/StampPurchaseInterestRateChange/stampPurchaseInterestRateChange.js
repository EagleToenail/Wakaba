import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import '../../Assets/css/showtable.css'


const StampPurchaseInterestRateChange = () => {
    const title = 'タイトルタイトル';
    const Table = {
        borderCollapse: 'collapse',
        color: '#70685a',
        textAlign: 'center',
        width: '100%',
        alignItem: 'center'
    };

    // const Th = {
    //     border: '1px solid #70685a',
    //     borderCollapse: 'collapse',
    //     color: '#70685a',
    //     fontSize: '15px'
    // };
    const Td = {
        border: '1px solid #70685a',
        borderCollapse: 'collapse',
        color: '#70685a',
        fontSize: '15px',
    };

    return (
        <>
            <Titlebar title={title} />
            <div className=" flex flex-col items-center justify-center py-3 px-4">
                <div className="w-full " style={{ maxWidth: '90em' }}>
                    <div className='flex justify-center mt-10 '>
                        <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center">Jaapanese stamp purchse interest rate change</h2>
                    </div>
                    {/*  Table*/}
                    <div className='pl-20 pr-20 pb-20 flex justify-center mt-10' >
                        <div style={{ width: '30%' }}>
                            <table className=' text-center w-full' style={Table}>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>Last Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={Td}>Stampsheet</td>
                                        <td style={Td}>50</td>
                                        <td><div className='ml-10 w-5'>
                                        <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4" fill="#70685a" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PercentIcon" tabIndex="-1" title="Percent"><path d="M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6M4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"></path></svg>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>

                            </table></div>

                    </div>
                    <div className='flex justify-around' style={{marginLeft:'30%'}}>
                        <ButtonComponent children="Apply" style={{width:'20%'}}/>
                        <ButtonComponent children="Allow change" style={{width:'20%',backgroundColor:'#9bd195'}}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StampPurchaseInterestRateChange;