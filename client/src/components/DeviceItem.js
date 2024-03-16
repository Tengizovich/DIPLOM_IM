import React from 'react';
import {Col, Image, Card} from "react-bootstrap"
import star from '../assets/star.png'
import {useHystory} from "react-router-dom"
import { Device_Route } from '../utils/consts';

const DeviceItem = ({ device }) => {
    const hystory = useHistory()
    console.log(history)
    return (
        <Col md={3} className={mt-3} onClick={() => hystory.push(Device_Route + '/' + device.id)}> 
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className=''>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
};

export default DeviceItem;