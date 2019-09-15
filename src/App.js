import React from 'react';
import './App.css';
import TokenListPage from "./pages/tokenListPage/TokenListPage";
import TokenHomePage from "./pages/tokenHomePage/TokenHomePage";
import IssueTokenPage from "./pages/issueTokenPage/IssueTokenPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <TokenHomePage>
              <Route exact path="/" component={TokenListPage} />
              <Route exact path="/tokens" component={TokenListPage} />
              <Route path="/tokens/issue-token" component={IssueTokenPage} />
          </TokenHomePage>
      </Router>

  );
}

export default App;
