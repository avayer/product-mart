import _ from "lodash";
import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
} from "semantic-ui-react";

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible,
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, (item) => (
            <Menu.Item {...item} />
          ))}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    {_.map(leftItems, (item) => (
      <Menu.Item {...item} />
    ))}
    <Menu.Menu position="right">
      {_.map(rightItems, (item) => (
        <Menu.Item {...item} />
      ))}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false,
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  { as: "a", content: "Home", key: "home" },
  { as: "a", content: "Products", key: "products" },
  { as: "a", content: "My Products", key: "myproducts" },
  { as: "a", content: "My Products", key: "myproducts" },
  { as: "a", content: "Add Product", key: "addproducts" },
  { as: "a", content: "Statistics", key: "statistics" },
];
const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" },
  { as: "a", content: "My Profile", key: "myprofile" },
  { as: "a", content: "Logout", key: "logout" },
];


const NavbarComponent = () => {
    return (
      <NavBar leftItems={leftItems} rightItems={rightItems}>
        <Image src="data:image/png;base64,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" />
      </NavBar>
    );
};

export default NavbarComponent;