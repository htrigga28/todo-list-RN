import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Box, NativeBaseProvider } from 'native-base';
import AppTheme from './AppTheme';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={AppTheme}>
        <GestureHandlerRootView style={styles.container}>
          {children}
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
