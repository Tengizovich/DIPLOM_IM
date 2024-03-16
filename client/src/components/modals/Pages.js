import React from 'react';
import DeviceStore from '../../store/DeviceStore';
import context from 'react-bootstrap/esm/AccordionContext';
import { Pagination } from 'react-bootstrap';

const Pages = observer(() => {
    const { device } = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const page = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >{page}</Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;