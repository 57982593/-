import '../../assets/css/app.css';
import React, {useState, useEffect} from 'react';
import {Menu, Layout} from 'antd';
import {MailOutlined} from '@ant-design/icons';
import about from '../other/about';
import Dashboard from "../other/Dashboard";
import ExampleD3 from "../other/exampleD3";
import viewNum from '../redux-example/viewNum';
import {Switch, Route, useHistory} from 'react-router-dom';
import { useHomeRequest } from './request';
const {SubMenu} = Menu;
const {Sider, Content} = Layout;

export const Home = () => {
  const { sayHello } = useHomeRequest();
  const [list] = useState([{
    title: '老王与憨憨', id: 'start',
    child: [
      {title: '关于', id: 'about'},
      {title: '禁用', id: 'Dashboard'},
      {title: 'd3示例', id: 'exampleD3'},
      {title: 'redux示例', id: 'viewNum'},
      {title: '二零一九年十二月', id: '2019-12'},
      {title: '二零二零年一月', id: '2020-1'},
      {title: '二零二零年二月', id: '2020-2'},
      {title: '二零二零年三月', id: '2020-3'},
      {title: '二零二零年四月', id: '2020-4'},
      {title: '二零二零年五月', id: '2020-5'},
      {title: '二零二零年六月', id: '2020-6'},
      {title: '二零二零年七月', id: '2020-7'},
      {title: '二零二零年八月', id: '2020-8'},
      {title: '二零二零年九月', id: '2020-9'},
      {title: '二零二零年十月', id: '2020-10'},
      {title: '二零二零年十一月', id: '2020-11'},
      {title: '二零二零年十二月', id: '2020-12'}
    ]
  }])
  const history = useHistory()
  function menuEvent(e: any) {
    history.push(`/${e.key}`)
  }
  useEffect(() => {
    sayHello();
  });

  return (
      <div className="height-100">
        <Layout className="height-100">
          <Sider width={256}>
            <Menu
                onClick={menuEvent}
                style={{width: 256,height: '100%'}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['start']}
                mode="inline"
            >
              {list.map(value => <SubMenu key={value.id} icon={<MailOutlined/>} title={value.title}>
                {value.child.map(v => <Menu.Item key={v.id}>{v.title}</Menu.Item>)}
              </SubMenu>)}
            </Menu>
          </Sider>
          <Layout>
            <Content>
              <Switch>
                <Route path="/about" component={about}></Route>
                <Route path="/Dashboard" component={Dashboard}></Route>
                <Route path="/exampleD3" component={ExampleD3}></Route>
                <Route path="/viewNum" component={viewNum}></Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
  );
}
