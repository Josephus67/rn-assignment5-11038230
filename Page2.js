
/*
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Card, Switch } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import Page1 from './Page1';
import { NavigationContainer } from '@react-navigation/native';

export default function Page2() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 50 }}>Settings</Text>
      </View>
      <View style={{ height: 20 }} />
      <View>
        <Card style={styles.card1}>
          <Text style={styles.first_text}>Language </Text>
          <Text style={styles.greater_than}>></Text>
        </Card>
        <View style={{ height: 20 }} />
        <Card style={styles.card1}>
          <Text style={styles.first_text}>My Profile</Text>
          <Text style={styles.greater_than}>></Text>
        </Card>
        <View style={{ height: 20 }} />
        <Card style={styles.card1}>
          <Text style={styles.first_text}>Contact Us</Text>
          <Text style={styles.greater_than}>></Text>
        </Card>
        <View style={{ height: 20 }} />
        <Card style={styles.card1}>
          <Text style={styles.first_text}>Change password</Text>
          <Text style={styles.greater_than}>></Text>
        </Card>
        <View style={{ height: 20 }} />
        <Card style={styles.card1}>
          <Text style={styles.first_text}>Privacy policy</Text>
          <Text style={styles.greater_than}>></Text>
        </Card>
      </View>
      <View style={{ height: 30 }} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 30 }}>Theme</Text>
        <Switch style={{ marginLeft: 220, transform: [{ scale: 1.8 }] }} />
      </View>
      <View style={styles.bottomBar}>
        <View>
        <Image source={require('./assets/home.png')} style={{height: 30, width: 30}} />
          <Text>Home</Text>
        </View>
        <View>
        <Image source={require('./assets/myCards.png')} style={{height: 30, width: 30}} />
          <Text>My Cards</Text>
        </View>
        <View>
        <Image source={require('./assets/statictics.png')} style={{height: 30, width: 30}}/>
          <Text>Statistics</Text>
        </View>
        <View>
        <Image source={require('./assets/settings.png')} style={{height: 30, width: 30}}/>
          <Text>Settings</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
     alignContent: 'space-evenly',
   // marginLeft: 20,
    marginTop: -90,
  },

  first_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  card1: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: 'transparent',
    borderBottomWidth: 0.4,
  },
  greater_than: {
    marginLeft: 320,
    marginTop: -28,
    fontWeight: 'bold',
    fontSize: 22,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    position: 'absolute',
    height: 60,
    width: '100%',
  },
});
*/


import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, useColorScheme } from 'react-native';
import { Card, Switch, Provider as PaperProvider } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';

export default function Page2() {
  const colorScheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(colorScheme === 'dark');

  useEffect(() => {
    setIsDarkTheme(colorScheme === 'dark');
  }, [colorScheme]);

  const handleThemeToggle = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? DarkTheme : DefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
        <View>
          <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 30, color: theme.colors.text, }}>Settings</Text>
        </View>
        <View>
          <Card style={[styles.card1, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.first_text, { color: theme.colors.text }]}>Language </Text>
            <Text style={[styles.greater_than, { color: theme.colors.text }]}>></Text>
          </Card>
          <View style={{ height: 0 }} />
          <Card style={[styles.card1, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.first_text, { color: theme.colors.text }]}>My Profile</Text>
            <Text style={[styles.greater_than, { color: theme.colors.text }]}>></Text>
          </Card>
          <Card style={[styles.card1, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.first_text, { color: theme.colors.text }]}>Contact Us</Text>
            <Text style={[styles.greater_than, { color: theme.colors.text }]}>></Text>
          </Card>
          <Card style={[styles.card1, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.first_text, { color: theme.colors.text }]}>Change password</Text>
            <Text style={[styles.greater_than, { color: theme.colors.text }]}>></Text>
          </Card>
          <Card style={[styles.card1, { backgroundColor: theme.colors.card }]}>
            <Text style={[styles.first_text, { color: theme.colors.text }]}>Privacy policy</Text>
            <Text style={[styles.greater_than, { color: theme.colors.text }]}>></Text>
          </Card>
      
        <Card style={[styles.theme_card, { Color: theme.colors.text }]}>
        <View style={{ flexDirection: 'row' }}>
          
          <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 30, color: theme.colors.text }}>Theme</Text>
          <Switch style={{ marginLeft: 220, transform: [{ scale: 1.8 }] }} value={isDarkTheme} onValueChange={handleThemeToggle} />
        
        </View>
        </Card>
        </View>
        
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingRight: 20,
    paddingTop: 50,
    alignContent: 'space-evenly',
    marginTop: -90,
    backgroundColor: '#fff',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
  },
  first_text: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 30,
  },
  card1: {
    height: 100,
    width: '100%',
    borderRadius: 10,
    shadowColor: 'transparent',
    borderBottomWidth: 0.2,
  },
  greater_than: {
    marginLeft: 320,
    marginTop: -28,
    fontWeight: 'bold',
    fontSize: 22,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    position: 'absolute',
    height: 60,
    width: '100%',
  },
  theme_card: {
height: 180,
marginLeft: -20,
 width: 460, 
 borderRadius: -10,
 marginTop: 0,
 shadowColor: 'transparent',

 // backgroundColor: '#fff'
  }
});

