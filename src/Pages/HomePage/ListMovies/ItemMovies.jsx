import React from 'react';
import {NavLink} from "react-router-dom";

function ItemMovies({data}) {
    const stringShorthand = (string, number) => {
        return string.substring(0, number) + '...'
    }
    return (
        <div className='bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 ease-in-out duration-500 transition-all drop-shadow-2xl'>
            <img className='w-full h-52 object-cover' src={data.hinhAnh} alt=""/>
            <div className='mt-4 px-6'>
                <div className='h-20 w-full flex items-center justify-center'>
                    <h3 className='uppercase text-center text-amber-700 font-bold text-2xl'>{data.tenPhim}</h3>
                </div>
                <p>{stringShorthand(data.moTa, 100)}</p>
                <p className='text-right italic mr-3'>Đánh giá: {data.danhGia}/10</p>
                <div className='flex justify-center my-3'>
                    <NavLink to={`/movie/${data.maPhim}`}>
                        <button className='mx-auto bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg'>
                            Xem Chi Tiết
                        </button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
}

export default ItemMovies;