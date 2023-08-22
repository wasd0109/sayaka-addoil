import React from 'react';
import Image from 'next/image';


export default function ImageWidget() {
    return (
        <Image className='rounded-md' src="/sayaka_1.jpg" height={300} width={300} alt={'Sayaka'} priority={true}></Image>
    );
}
