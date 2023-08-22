import React from 'react'
import Image from 'next/image'


export default function ImageWidget() {
    return (
        <Image src="/sayaka_1.jpg" height={1000} width={1000} alt={'Sayaka'} priority={true}></Image>
    )
}
