import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import TenantComponent from '../../components/TenantComponent/TenantComponent';
import ActiveUserContext from '../../shared/ActiveUserContext';

function TenantsPage({tenatsProps}) {

    const activeUser = useContext(ActiveUserContext);
    


    if (!activeUser) {
        return <Redirect to="/login" />
    }
    console.log(tenatsProps);

    return (
        <div>
            Tenans Page
            <TenantComponent onCheck={tenatsProps.onCheck}/>
            {/* <Button onClick={()=> tenatsProps.onCheck()}>check!</Button> */}
        </div>
    );
}

export default TenantsPage;