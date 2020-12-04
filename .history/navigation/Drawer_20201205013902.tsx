import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './yourPathToSideBar';

export default class Drawer extends Component {
  closeDrawer () => {
    this.drawer._root.close()
  };