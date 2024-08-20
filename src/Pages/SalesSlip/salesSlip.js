import React from 'react';
// import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
// import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';


const SalesSlip = () => {
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


    return (
        <>
            <Titlebar title={title} />
                        {/* first button line  */}
                        <div className='flex justify-between ml-10' style={{width:'80%'}}>
                            <div className='flex mt-10 w-1/2' >
                                <div>
                                    <ButtonComponent children={'ソサイクルシヨシプへの買取依頼書へ'} className='!px-5 text-2xl' style={{backgroundColor:'#9bd195',height:'40px'}}/>
                                    <div className='flex justify-center'>
                                        <LabelComponent value={'行を選択してください'} />
                                    </div>
                                </div>
                                <div>
                                    <ButtonComponent children={'廃棄申請'} className='!px-5 text-2xl' style={{backgroundColor:'#9bd195',marginLeft:'30px',height:'40px'}} />
                                    <div className='flex justify-center'>
                                        <LabelComponent value={'行を選択してください'} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mt-10 w-1/2' >
                                <ButtonComponent children={'売上表'} className='!px-5 text-2xl' style={{backgroundColor:'#424242',height:'40px'}}/>
                                <ButtonComponent children={'業者査定シート'} className='!px-5 text-2xl' style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',marginLeft:'30px',height:'40px'}} />
                                <ButtonComponent children={'ヤフオク'} className='!px-5 text-2xl' style={{backgroundColor:'transparent',border:'1px solid #424242',color:'#424242',marginLeft:'30px',height:'40px'}} />
                            </div>
                        </div>

                        {/* second button line  */}
                        <div className='flex ml-10' style={{width:'80%'}}>
                            <div className='flex justify-between  mt-5 w-full' >
                                <ButtonComponent children={'全て'} className="!px-5  bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'貴金属'}  className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'ブランド'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'バシグ'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'時計'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'財布'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'アクセサリ'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'骨董品'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'洋酒'}  className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max"/>
                                <ButtonComponent children={'カメラ'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max"  />
                                <ButtonComponent children={'楽器'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max" />
                                <ButtonComponent children={'スマホノ夕ブレット'} className="!px-5 bg-[transparent] border border-[#424242] text-[#424242] h-8 rounded-lg !w-max"  />
                                <select id="classificatin" name="classificatin" className="!w-max h-8 rounded-lg text-[#70685a] text-[15px] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
                                            <option value="1">その他</option>
                                            <option value="2">Afghanistan</option>
                                            <option value="3">Åland Islands</option>
                                            <option value="4">Albania</option>
                                </select>
                            </div>
                        </div>

                        {/*  Tabe*/}
                        <div className='mt-10 pl-10 pr-10 pb-20 w-full flex'>
                            <div style={{width:'100%',overflow:'auto'}} >
                                <table style={Table}>
                                <thead>
                                    <tr> 
                                        <th rowSpan={2}>選択</th>
                                        <th width='5%' style={Th} rowSpan={2}>商品番号</th>
                                        <th width='5%' style={Th} rowSpan={2}>わかはNo.</th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>ステー夕ス</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>入金日</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>卸日</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>買取日</div></th>
                                        <th width='5%' style={Th} rowSpan={2}><div style={{border:'1px solid black',borderRadius:'5px',margin:'5%'}}>買取担当</div></th>

                                        <th style={Th} colSpan={6}>個人情報</th>

                                        <th  style={Th}  rowSpan={2}>カテゴリ-1</th>
                                        <th width='10%' style={Th} rowSpan={2} >カテゴリ-2</th>
                                        <th width='10%' style={Th} rowSpan={2} >カテゴリ-3</th>
                                        <th width='10%' style={Th} rowSpan={2} >カテゴリ-4</th>
                                        <th width='10%' style={Th} rowSpan={2} >画像</th>
                                        <th  style={Th} rowSpan={2} >商品 名</th>
                                        <th  style={Th} rowSpan={2} >個数</th>
                                        <th  style={Th} rowSpan={2} >粗利益</th>
                                        <th  style={Th} rowSpan={2} >買取額</th>
                                        <th width='10%' style={Th} rowSpan={2} >最高査定額</th>
                                        <th  style={Th} rowSpan={2} ><svg className='h-10'  focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowRightIcon" title="ArrowRight"><path d="m10 17 5-5-5-5z"></path></svg></th>
                                        <th  style={Th} rowSpan={2} >真贋</th>
                                    </tr>
                                    <tr>
                                        <th style={Th}>お名前</th>
                                        <th style={Th} >カナ</th>
                                        <th style={Th} >TEL</th>
                                        <th width='10%' style={Th} >任所</th>
                                        <th  style={Th} >来店種別-1</th>
                                        <th style={Th} >来店種別-2</th>
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
                        </div>
        </>
    );
};

export default SalesSlip;