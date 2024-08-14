import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Titlebar from '../../Components/Common/Titlebar';
import '../../Assets/css/table.css'
import InputComponent from '../../Components/Common/InputComponent';
import ButtonComponent from '../../Components/Common/ButtonComponent';
import LabelComponent from '../../Components/Common/LabelComponent';


const CustomerIndividual = () => {
    const title = 'タイトルタイトル';


    return (
            <>
            <div className='flex justify-center border border-[black] h-10'>
                <div style={{width:'60%'}}  className='flex border border-[black] h-10'>
                    <div style={{width:'50%'}} className='flex'>
                        <div style={{width:'20%'}} className='flex justify-center'>
                            asdf
                        </div>
                        <div style={{width:'80%'}}>
                            asdfghjklqwert
                        </div>
                    </div>
                    <div style={{width:'50%'}}></div>
                </div>
            </div>    
            </>
    );
};

export default CustomerIndividual;