import React from 'react';
import './BaiTapBookingTicket.css'
import  bg from './bgmovie.jpg'
import InfoBookingSeat from "./InfoBookingSeat";
import MapSeat from "./MapSeat";

function MovieBookingTicket() {
    return (
        <div className='fixed h-screen w-screen' style={{backgroundImage:`url('${bg}')`,backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
            <div className='fixed h-screen w-screen bg-black bg-opacity-70 grid grid-cols-3 pt-8'>
                <div className="col-span-2 text-center">
                    <h1 className='text-4xl text-amber-500'>Đặt Vé Xem Phim</h1>
                    <p className='text-center text-lg mt-5 text-white'>Màn Hình</p>
                    <div className='w-full flex justify-center mt-2'>
                        <div className="screen"></div>
                    </div>
                    <MapSeat/>
                </div>
                <div className="col-span-1 ">
                    <h1 className='text-3xl text-amber-500 text-center'>Ghế Đã Chọn</h1>
                    <InfoBookingSeat/>
                </div>
            </div>
        </div>
    );
}

export default MovieBookingTicket;