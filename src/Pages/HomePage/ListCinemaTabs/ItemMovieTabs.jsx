import React from 'react';


function ItemMovieTabs({data}) {
    console.log(data.danhSachPhim)
    return (
        <div className='flex flex-col gap-3'>
            {
                data.danhSachPhim.map((movie, index) => {
                    return (
                        <div key={index} className='h-28 flex gap-3'>
                            <div className='w-28'>
                                <img className='h-28 w-28 object-cover' src={movie.hinhAnh} alt=""/>
                            </div>
                            <div className='flex flex-col'>
                                <h4>{movie.tenPhim}</h4>
                                <div>
                                    {movie.lstLichChieuTheoPhim.map((item,index) => {
                                        return (
                                            <></>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ItemMovieTabs;