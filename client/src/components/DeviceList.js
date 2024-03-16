import React from 'react';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;