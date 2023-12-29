import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '../screens/MainScreen';
import AboutScreen from '../screens/AboutScreen';
import Sidebar from '../components/SideBar';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: 'rgba(0,0,0,0.2)',
      }}
      drawerContent={(props) => {
        return <Sidebar {...props} />;
      }}
    >
      <Drawer.Screen name='Main' component={MainScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
