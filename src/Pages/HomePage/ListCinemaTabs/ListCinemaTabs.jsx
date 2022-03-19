import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getListCinemaAction} from "../../../redux/actions/moviesActions";
import {Tabs} from 'antd';
import ItemMovieTabs from "./ItemMovieTabs";

const {TabPane} = Tabs;

function callback(key) {
    // console.log(key);
}

function ListCinemaTabs() {
    const dispatch = useDispatch()

    let {listCinema} = useSelector(state => state.moviesReducer)
    useEffect(() => {
        dispatch(getListCinemaAction())
    }, [])
    return (
        <div className='px-20 my-12'>
            <Tabs tabBarGutter={0} defaultActiveKey="1" onChange={callback} tabPosition='left'>
                {
                    listCinema.map((listCinema, index) => {
                        return (
                            <TabPane tab={<div>{<img className='h-14' src={listCinema.logo} alt=""/>}</div>}
                                     key={index}>
                                <Tabs defaultActiveKey="0" tabPosition='left'>
                                    {
                                        listCinema.lstCumRap.map((cinema, index) => {
                                            return (
                                                <TabPane tab={
                                                    <div className='w-52 whitespace-normal text-left'>
                                                        <h4 className='text-red-600'>{cinema.tenCumRap}</h4>
                                                        <p>{cinema.diaChi}</p>
                                                    </div>
                                                } key={index}>
                                                    <ItemMovieTabs data={cinema}/>
                                                </TabPane>
                                            )
                                        })
                                    }
                                </Tabs>
                            </TabPane>
                        )
                    })
                }
            </Tabs>
        </div>
    );
}

export default ListCinemaTabs;