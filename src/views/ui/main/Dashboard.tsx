import Wrapper from '@/app/wrapper'
import React from 'react'
import Button from '../shared/Button'

function Dashboard() {
    return (
        <div className='bg-[#F5E0E5] lg:py-[102px] py-[78px]'>
             {/* <img src="/main.png" alt="mian"  className=''/> */}

            <Wrapper>
                <div className='lg:max-w-[562px]  max-w-[212px]'>
                    <p className=' lg:text-[36px] text-[18px] font-bold  text-[#383838]'> Discover your inner beauty with Blossom Glow Kit</p>
                    <p className=' lg:text-[24px] text-[14px] font-normal'>Great gift for yourself and loved ones</p>
                    <Button className='max-w-[246px] lg:mt-[54px] mt-[30px] lg:p-[10px] px-[10px] py-[8px] '>Shop Now</Button>
                </div>
            </Wrapper>
        </div>
    )
}

export default Dashboard


