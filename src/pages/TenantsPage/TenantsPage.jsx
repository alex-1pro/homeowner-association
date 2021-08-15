import './TenantsPage.css'
import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import TenantComponent from '../../components/TenantComponent/TenantComponent';
import UpdateFormComponent from '../../components/UpdateFormComponent/UpdateFormComponent';
import ActiveUserContext from '../../shared/ActiveUserContext';
import {BiUserPlus}  from 'react-icons/bi';
import { useState } from 'react';
import NewTenantModal from '../../components/NewTenantModal/NewTenantModal';

function TenantsPage({ tenatsProps }) {
    const [showModal,setShowModal]=useState(false);
    const activeUser = useContext(ActiveUserContext);



    if (!activeUser) {
        return <Redirect to="/login" />
    }
    const tenants = tenatsProps.users.filter(user=>user.communityId===activeUser.communityId).map(tenant => <TenantComponent tenant={tenant} tenantAction={tenatsProps} />);


    return (
        <div className="p-tenants">
            <Container >
                <div className="new-tenant" onClick={()=>setShowModal(true)}>Add New Tenant <BiUserPlus size="1.3em"/> </div>
                {tenants}
                {/* <Button onClick={()=> tenatsProps.onCheck()}>check!</Button> */}
               
            </Container>
           <NewTenantModal  onShow={showModal} onClose={()=>setShowModal(false)} onAddTenant={tenatsProps.onAddTenant}/>
        </div>
    );
}

export default TenantsPage;