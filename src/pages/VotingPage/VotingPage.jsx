import React, { useMemo } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import VotingComponent from '../../components/VotingComponent/VotingComponent';
import ActiveUserContext from '../../shared/ActiveUserContext';
import { Pie } from 'react-chartjs-2';

import './VotingPage.css'
import { Redirect } from 'react-router-dom';
function VotingPage({ allVoting,voting }) {

    const activeUser = useContext(ActiveUserContext);

    if (!activeUser) {
        return <Redirect to="/login" />
    }



    const votingContent = allVoting.filter(rVotes=>rVotes.communityId === activeUser.communityId).map(cv => <VotingComponent voting={cv} onAnswer={voting} allVoting={allVoting}/>)



    return (
        <div className="p-voting">
         
         {/* <VotingComponent voting={allVoting[0]} onAnswer={voting} allVoting={allVoting}/> */}
         {votingContent.length>0? votingContent:<span className="no-voting">You dont have any voiting.</span>}
        </div>
    );
}

export default VotingPage;