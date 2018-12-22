// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Router, HashRouter } from 'react-router-dom'
import Header from './components/Header'
import NewProject from './components/NewProject'
import ProjectsList from './components/ProjectsList'
import NotFound from './components/404_NotFound'
import { Provider } from 'react-redux'
import store from './store'
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory()

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    {/* <HashRouter> */}
                    <Router history={history}>
                        <div>
                            <Header />
                            <Switch>
                                <Route exact path='/' component={ProjectsList} />
                                <Route path='/create' component={NewProject} />
                                <Route path='/create' component={NewProject} />
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </Router>
                    {/* </HashRouter> */}
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))