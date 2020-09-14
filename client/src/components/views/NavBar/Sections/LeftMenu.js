import React from "react";
import { Menu } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>
      <SubMenu title={<span>Cateogries</span>}>
        <MenuItemGroup title="Fashion">
          <Menu.Item key="setting:1">Mens</Menu.Item>
          <Menu.Item key="setting:2">Womens</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Furniture">
          <Menu.Item key="setting:3">Bed</Menu.Item>
          <Menu.Item key="setting:4">Chair</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
