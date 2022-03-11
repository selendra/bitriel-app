import { Row, Menu, Input, Layout, Col } from "antd";
import { Link, useLocation } from "react-router-dom";
import Icon from "@ant-design/icons";
import logo from "../assets/logo.png";
import { ReactComponent as User } from "../assets/icons/user.svg";
import { ReactComponent as Card } from "../assets/icons/cards.svg";
import { ReactComponent as Trade } from "../assets/icons/trade.svg";
import { ReactComponent as Borrow } from "../assets/icons/money-recive.svg";
import { ReactComponent as Stake } from "../assets/icons/3dcube.svg";
import ButtonConnect from "./ButtonConnect";

const UserIcon = (props) => <Icon component={User} {...props} />;
const CardIcon = (props) => <Icon component={Card} {...props} />;
const TradeIcon = (props) => <Icon component={Trade} {...props} />;
const BorrowIcon = (props) => <Icon component={Borrow} {...props} />;
const StakeIcon = (props) => <Icon component={Stake} {...props} />;

export default function LayoutComponent({ children }) {
  const location = useLocation();

  return (
    <Layout>
      <Layout.Sider
        collapsible
        trigger={null}
        theme="light"
        breakpoint="lg"
        collapsedWidth="60"
        width={250}
      >
        <Row align="middle" justify="center">
          <Col xs={0} sm={0} md={0} lg={20} xl={20}>
            <img src={logo} alt="" className="layout__logo" />
          </Col>
        </Row>
        <Menu
          className="layout__menu"
          theme="light"
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
        >
          <Menu.Item key="/profile" icon={<UserIcon />}>
            Profile
            <Link to="/profile" />
          </Menu.Item>
          <Menu.Item key="/buy" icon={<CardIcon />}>
            Buy
            <Link to="/buy" />
          </Menu.Item>
          <Menu.Item key="3" icon={<TradeIcon />}>
            Exchange
            <Link to="/exchange" />
          </Menu.Item>
          <Menu.Item key="4" icon={<BorrowIcon />}>
            Borrow
            <Link to="/borrow" />
          </Menu.Item>
          <Menu.Item key="5" icon={<StakeIcon />}>
            Stake/Earn
            <Link to="/stake" />
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Header style={{ background: "#FFF" }}>
          <div className="container">
            <div className="top-menu">
              <Input
                placeholder="Search by address"
                className="layout__search"
                prefix={<i class="ri-search-line"></i>}
              />

              <ButtonConnect />
            </div>
          </div>
        </Layout.Header>
        <Layout.Content
          style={{
            minHeight: "85vh",
          }}
        >
          <div className="container">
            <div className="app-layout">{children}</div>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
