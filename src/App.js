import React, {memo} from 'react';
import TokenListPage from "./pages/tokenListPage/TokenListPage";
import TokenHomePage from "./pages/tokenHomePage/TokenHomePage";
import IssueTokenPage from "./pages/issueTokenPage/IssueTokenPage";
import {BrowserRouter as Router, Route} from "react-router-dom";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <TokenHomePage>
                    <Route exact path="/" component={TokenListPage} />
                    <Route exact path="/tokens" component={TokenListPage} />
                    <Route path="/tokens/issue-token" component={IssueTokenPage} />
                </TokenHomePage>
            </Router>
        </ErrorBoundary>
    );
}

export default memo(App);
