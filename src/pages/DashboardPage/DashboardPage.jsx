import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import IssueModel from '../../model/IssueModel';
import jsonIssues from "../../data/issues.json"
import { Redirect } from 'react-router-dom';
import ActiveUserContext from '../../shared/ActiveUserContext';

function DashboardPage() {
    // useState(jsonUsers.map(plainUser => new UserModel(plainUser)));
    const [issues, setIssues] = useState(jsonIssues.map(plainIssue => new IssueModel(plainIssue)));
    const activeUser = useContext(ActiveUserContext);
    if (!activeUser) {
        return <Redirect to="/login" />
    }
    return (
        <div>
            <h1>DashboardPage</h1>
            <ul>{issues.filter(issue => issue.communityId === activeUser.communityId).map(title => <li>{title.title}</li>)}</ul>

        </div>
    );
}

export default DashboardPage;