import React, { Component } from 'react';
import {BrowserRouter,NavLink,Route,Switch} from 'react-router-dom';

import Calculator from './tab1/Calculator';
import Top from './top/Top';
import List from './tab2/List';
//redux相关
import {createStore} from 'redux';
import {Provider} from "react-redux";
import combineReducers from '../reducer/combineReducers';

let store=createStore(combineReducers);//获取store

class Index extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Top />
                    <div style={{height:20}}></div>
                    <div className="content">
                        <BrowserRouter>
                            <nav className="tab_nav">
                                <NavLink exact activeClassName="tab_nav_selected" to="/">首页</NavLink>
                                <NavLink activeClassName="tab_nav_selected" to="/list">收入分析</NavLink>
                                <NavLink activeClassName="tab_nav_selected" to="/analyse">营销转化分析</NavLink>
                                <NavLink activeClassName="tab_nav_selected" to="/manage">广告管理</NavLink>
                            </nav>
                            <div className="tab_div">
                                <Switch>
                                    <Route exact path="/" activeClassName="tab_div_block" component={Calculator}></Route>
                                    <Route path="/list" activeClassName="tab_div_block" component={List}></Route>
                                    <Route path="/analyse" activeClassName="tab_div_block" >营销转化分析</Route>
                                    <Route path="/manage" activeClassName="tab_div_block" >广告管理</Route>
                                </Switch>
                            </div>
                        </BrowserRouter>  
                    </div>
                </Provider>
            </div>
        );
    }
}

export default Index;