import React from 'react';
import { Button } from 'react-bootstrap';
import './TenantComponent.css'
function TenantComponent({onCheck}) {
    return (
        <div>
            tenantComponent
            <Button onClick={()=>onCheck()}>Check!</Button>
        </div>
    );
}

export default TenantComponent;