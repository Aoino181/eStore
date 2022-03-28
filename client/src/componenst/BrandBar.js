import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import { Context } from '../index';
import {Card} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <div className="d-flex mt-2">
            {device.brands.map(brand =>
                <Card
                    style={{cursor: "pointer"}}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    className="p-2"
                    onClick={() => device.setSelectedBrand(brand)}
                    key={brand.id}
                >
                    {brand.name}
                </Card>
            )}
        </div>
    );
});

export default BrandBar;