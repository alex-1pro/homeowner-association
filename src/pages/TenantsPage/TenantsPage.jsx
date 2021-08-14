import React, { useContext } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import TenantComponent from '../../components/TenantComponent/TenantComponent';
import ActiveUserContext from '../../shared/ActiveUserContext';

function TenantsPage({ tenatsProps }) {

    const activeUser = useContext(ActiveUserContext);



    if (!activeUser) {
        return <Redirect to="/login" />
    }
    const tenants = tenatsProps.users.filter(user=>user.communityId===activeUser.communityId).map(tenant => <TenantComponent tenant={tenant} />);


    return (
        <div className="p-tenants">
            <Container >
                {tenants}
                {/* <Button onClick={()=> tenatsProps.onCheck()}>check!</Button> */}
            </Container>
        </div>
    );
}

export default TenantsPage;