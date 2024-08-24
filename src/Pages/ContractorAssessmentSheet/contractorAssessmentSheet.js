import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';

import leftArrow from '../../Assets/img/right-arrow.png';
import rightArrow from '../../Assets/img/left-arrow.png';


const ContractorAssementSheet = () => {
    // const title = 'タイトルタイトル';

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


    return (
        <>
            {/* <Titlebar title={title} /> */}
                        {/* first button line  */}
                        <div className='flex justify-center ml-10 ' >
                            <div className='flex mt-10 mr-40' >
                                <ButtonComponent children={'売上表'} className='bg-[#424242] h-11 !text-2xl '/>
                                <ButtonComponent children={'業者査定シート'} className='h-11 !bg-[transparent] border border-[#424242] !text-[#424242] !text-2xl !px-10' style={{marginLeft:'30px'}} />
                                <ButtonComponent children={'ヤフオク'} className='h-11 !bg-[transparent] border border-[#424242] !text-[#424242] !text-2xl' style={{marginLeft:'30px'}} />
                            </div>
                            <div className='flex mt-10 ' >
                                <div>
                                    <ButtonComponent children={'業者への買取依書へ'} className='h-11 bg-[#9bd195] !text-2xl text-[white] !px-10' style={{marginLeft:'30px'}} />
                                    <div className='text-center'>
                                        <LabelComponent value={'adf'} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* second button line  */}
                        <div className='flex ml-5 justify-center'>
                        <div className='flex justify-between  mt-5 w-full' >
                                <ButtonComponent children={'全て'} className="!px-5  bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'貴金属'}  className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'ブランド'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'バッグ'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'時計'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'財布'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'アクセサリ'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'骨董品'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'洋酒'}  className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max"/>
                                <ButtonComponent children={'カメラ'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'楽器'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'スマホ/タブレット'} className="!px-5 bg-[transparent] border border-[#424242] !text-[#424242] h-8 rounded-lg !w-max"  />
                                <select id="classificatin" name="classificatin" className="!w-max h-8 rounded-lg text-[#70685a] !text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                            <option value="1">その他</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                </select>
                            </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-20 pl-10 pr-10 pb-20 w-full flex'>
                        <div style={{width:'100%',overflow:'auto'}} >
                            <table style={Table}>
                                <thead>
                                    <tr> 
                                        <th rowSpan={2}>選択</th>
                                        <th width='5%' style={Th} rowSpan={2}>商品番号</th>
                                        <th width='5%' style={Th} rowSpan={2}>わかばNo.</th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>ステー夕ス</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>卸し先</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>発送日</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>入金日</div></th>
                                        
                                        <th width='5%' style={Th} rowSpan={2}>カテゴリ-1</th>
                                        <th style={Th} rowSpan={2}>カテゴリ-2</th>
                                        <th style={Th} rowSpan={2} >カテゴリ-3</th>
                                        <th style={Th} rowSpan={2} >カテゴリ-4</th>
                                        <th style={Th} rowSpan={2} >商品名</th>
                                        <th style={Th} rowSpan={2} >画像</th>
                                        <th style={Th} rowSpan={2} >個数</th>

                                        <th  style={Th}  rowSpan={2}>買取額</th>
                                        <th width='10%' style={Th} rowSpan={2} >最高査定額</th>
                                        <th width='10%' style={Th} rowSpan={2} >
                                            {isshow? <button><img src={rightArrow} style={{width:'30px'}} alt='' onClick={openSubtable} ></img></button> :<button><img src={leftArrow} style={{width:'30px'}} alt='' onClick={closeSubtable}></img></button>} 
                                        </th>
                                        <th width='10%' style={Th} rowSpan={2} >真贋</th>

                                        {isshow?<th  style={Th} colSpan={4}>業者名01 OOOOOOOOOOOO</th>:<th colSpan={4}  style={{display:'none'}}></th>}

                                        {isshow?<th  style={Th} >業者名02<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >業者名03<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >業者名04<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >ヤフオク<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>:<th  style={{display:'none'}}></th>}

                                        <th  style={Th}>備考<svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                                        
                                        {/* <th  style={Th} >Points</th>
                                        <th  style={Th} >Points</th>
                                        <th  style={Th} >Points</th>
                                        <th  style={Th} >Points</th> */}

                                    </tr>
                                    <tr>
                                        {isshow?<th width='10%' style={Th} >仮査定日</th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th width='10%' style={Th} >仮査定額</th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >本査定日</th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >本査定額</th>:<th  style={{display:'none'}}></th>}

                                        {isshow?<th  style={Th} >本査定日</th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >本査定額</th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >本査定日</th>:<th  style={{display:'none'}}></th>}
                                        {isshow?<th  style={Th} >最高落札額</th>:<th  style={{display:'none'}}></th>}
                                        
                                        <th width='10%' style={Th} ></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td style={Td}>9999</td>
                                        <td style={Td}>9999</td>
                                        <td style={Td}>
                                        <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                            <option value="1">宛先の名前</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                        </td>
                                        <td style={Td}>
                                        <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                            <option value="1">宛先の名前</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                        </td>
                                        <td style={Td}>2024/12/30</td>
                                        <td style={Td}>2024/12/30</td>
                                        <td style={Td}>
                                        <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                            <option value="1">宛先の名前</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                        </td>
                                        <td style={Td}>
                                        <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                            <option value="1">宛先の名前</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                        </td>
                                        <td style={Td}>
                                        <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                            <option value="1">宛先の名前</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>

                                        </td>
                                        <td style={Td}>
                                        <select id="gender" name="gender" className="w-full text-[#70685a] font-bold  px-4 py-2 outline-[#70685a]">
                                            <option value="1">宛先の名前</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                        </select>
                                        </td>
                                        <td style={Td}>グッチOOOO</td>
                                        <td style={Td}><ButtonComponent children="1" className='w-max !px-5 rounded-lg' style={{  backgroundColor: '#ebe5e1', color: '#626373'}} /></td>
                                        <td style={Td}>1</td>
                                        <td style={Td}>100</td>
                                        <td style={Td}>100</td>
                                        <td style={Td}>1</td>
                                        <td style={Td}>O</td>
                                        <td style={Td}>12/30</td>
                                        <td style={Td}>12/30</td>
                                        <td style={Td}></td>
                                        <td style={Td}></td>
                                        <td style={Td}></td>
                                        <td style={Td}></td>
                                        <td style={Td}></td>
                                        <td style={Td}></td>
                                        <td style={Td}></td>
                                    </tr>
                                   
                                </tbody>

                            </table>
                        </div>
                        </div>
        </>
    );
};

export default ContractorAssementSheet;