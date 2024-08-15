import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/showtable.css'
import '../../Assets/css/firstTd.css'
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
// import LabelComponent from '../../Components/Common/LabelComponent';


const PurchaseInvoiceForBroughtInItems = () => {
    const title = 'タイトルタイトル';

    // const [isOpen, setIsOpen] = useState(false);

    // const handleClick = () => {
    //     setIsOpen(prevState => !prevState);
    // };

    // const [text, setText] = useState('');

    // const handleChange = (event) => {
    //     setText(event.target.value);
    // }


    return (<>
        <Titlebar title={title} />
        <div className="bg-[trasparent] font-[sans-serif]">
            <div className='flex justify-center'>
                <div className="w-full pt-3" style={{ maxWidth: '80em' }}>
                    <h2 className="text-[#70685a] text-center font-bold text-[15px] flex justify-end mt-3" style={{ paddingRight: '1%' }}>2023/12/01(金)&nbsp;&nbsp;21:51</h2>
                    {/* header */}
                    <div className='flex justify-between'>
                        <div className='' style={{ width: '25%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-left mr-10 !mb-0">Purchase invoice No. 00000</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">Business name</label>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left text-[13px] !mb-0">(as **************)</label>
                                </div>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">Business name</label>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: '50%' }}>
                            <div className='flex justify-center'>
                                <label className="text-[#70685a] font-bold mb-2 text-[20px] block text-left !mb-0">Purchase invoice for brought-in items</label>
                            </div>
                        </div>
                        <div style={{ width: '25%' }}>
                            <div className='flex pt-3'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">Business name</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">Business name</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 !mb-0">Business name</label>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">OOOO OOOO OOOOOO</label>
                            </div>
                        </div>
                    </div>
                    {/* first line */}
                    <div className='flex'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Business name</label>
                        </div>
                        <div style={{ width: '80%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">VIP</label>
                            <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0">MAN</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">Name</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">Katakana name</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">birth</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0 mr-10">OOOO OOO</label>
                            </div>
                        </div>
                    </div>
                    {/* second line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Phone number</label>
                        </div>
                        <div style={{ width: '60%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">Email</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                            </div>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">Occupation</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            </div>
                        </div>
                    </div>
                    {/* third line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Phone number</label>
                        </div>
                        <div style={{ width: '60%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</label>
                        </div>
                    </div>
                    {/* forth line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Phone number</label>
                        </div>
                        <div style={{ width: '60%' }} className='flex justify-between'>
                            <label className="text-[#70685a]  mb-2 block text-left !mb-0">OOOO OO</label>
                            <div className='flex'>
                                <label className="text-[#70685a] font-bold mb-2 block text-left !mb-0 mr-5">Email</label>
                                <label className="text-[#70685a]  mb-2 block text-left !mb-0 ">OOOO OOO</label>
                            </div>
                        </div>
                    </div>
                    {/* fifth line */}
                    <div className='flex mt-1'>
                        <div style={{ width: '20%' }}>
                            <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Phone number</label>
                        </div>
                    </div>
                    {/* table */}
                    <div className="flex justify-center">
                        <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>
                            <table className='text-center' style={{ width: '65%' }}>
                                <thead>
                                    <tr>
                                        <th width='2%'>section</th>
                                        <th width='25%'>Cuckoo 1</th>
                                        <th width='40%'>phone number</th>
                                        <th>Points1</th>
                                        <th>Purchase amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type='checkbox' /></td>
                                        <td><InputComponent type="text" /></td>
                                        <td>OOOOOOOOOOO</td>
                                        <td>1</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                    {/* total */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '65%' }} className='flex justify-end'>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Total number</label>
                                    <div className='flex justify-end'>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Phone number</label>
                                        <label className="text-[#70685a] font-bold mb-2 block text-right mr-3 !mb-0">Phone number</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* lettes */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-5 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '50%' }} className='flex justify-center'>
                                <div>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0">- Once sold, no claims for refunds will be accepted</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0">- All items sold are woodan.</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0">- I have agreed to the handling of personal informaion.</label>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 !mb-0">- I hereby declare and guarntee that i am not an antisocial person.</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* check text */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '55%',paddingLeft:'6.3%' }} className='flex'>
                                <div className='flex'>
                                    <input type='checkbox' style={{ marginTop: '5px' }}/>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> Once sold, no claims for refunds will be accepted</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Area */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '39%',height:'150px'}} className='flex'>
                                <div className='border border-[black] h-wull w-full'>   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* check text */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '55%',paddingLeft:'6.3%' }} className='flex'>
                                <div className='flex'>
                                    <input type='checkbox' style={{ marginTop: '5px' }}/>
                                    <label className="text-[#70685a] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> Once sold, no claims for refunds will be accepted</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* text */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                            <div>
                                <div className='flex justify-center'>
                                    <label className="text-[#70685a] text-[20px] font-bold mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> I agree to all of the above and will sign to sell.</label>
                                </div>
                                <div className='flex justify-center pt-2'>
                                    <label className="text-[#70685a] font-bold text-[20px] mb-2 block text-left mr-3 pt-1 mr-30 ml-2 !mb-0"> Customer signature</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Area */}
                    <div className="flex justify-center" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                        
                            <div style={{ width: '70%',height:'150px'}} className='flex'>
                                <div className='border border-[black] h-wull w-full'>   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="flex justify-center pt-5 mb-10" >
                        <div className='w-full pt-1 flex justify-center' style={{ maxWidth: '80em' }}>
                               <ButtonComponent children={'OK'} className="w-40"/> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
    );
};

export default PurchaseInvoiceForBroughtInItems;