import React from 'react';
import Image from 'next/image';


export default function ImageWidget() {
    return (
        <div className='card'>
            <Image className='card-body' src="/sayaka_1.jpg" height={1000} width={1000} alt={'Sayaka'} priority={true}></Image>
        </div>);
}
