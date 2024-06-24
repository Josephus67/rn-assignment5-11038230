/*
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Card, Switch} from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather';

const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = {
    background: '#fff',
    text: '#000',
    cardBackground: '#fff',
    iconColor: '#000',
  };

  const darkTheme = {
    background: '#000',
    text: '#fff',
    cardBackground: '#333',
    iconColor: '#fff',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

export default function App() {
  return (

    <SafeAreaView style={styles.container}>

    <View>
    <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 50}}>Settings</Text>
    </View>
    <View style={{height: 20}}/>
    <View> 
<Card style={styles.card1}>
<Text style={styles.first_text}>Language </Text>
<Text style={styles.greater_than}>></Text>
</Card>
<View style={{height: 20}}/>
<Card style={styles.card1}>
<Text style={styles.first_text}>My Profile</Text>
<Text style={styles.greater_than}>></Text>
</Card>
<View style={{height: 20}}/>
<Card style={styles.card1}>
<Text style={styles.first_text}>Contact Us</Text>
<Text style={styles.greater_than}>></Text>
</Card>
<View style={{height: 20}}/>
<Card style={styles.card1}>
<Text style={styles.first_text}>Change password</Text>
<Text style={styles.greater_than}>></Text>
</Card>
<View style={{height: 20}}/>
<Card style={styles.card1}>
<Text style={styles.first_text}>Privacy policy</Text>
<Text style={styles.greater_than}>></Text>
</Card>
    </View>
    <View style={{height:30}}/>
    <View style={{flexDirection: 'row'}}>
    <Text style={{fontSize:25, fontWeight: 'bold'}}>Theme</Text>
<Switch style={{marginLeft: 220, transform: [{ scale: 1.8 }] }}/>
</View>
    <View style={styles.bottomBar}>
      <View>
    <Feather name="home" size={40} color="black" />
    <Text>Home</Text>
    </View>
    <View>
    <Feather name="credit-card" size={40} color="black" />
    <Text>My Cards</Text>
    </View>
    <View>
    <Feather name="pie-chart" size={40} color="black" />
    <Text>Statistics</Text>
    </View>
    <View>
    <Feather name="settings" size={40} color="black" />
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
    alignContent: 'space-evenly',
    marginLeft: 20,
    
  },
  first_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  card1: {
    height: 60,
    width: '100%',
   borderRadius: 10,
 backgroundColor: '#FFFFFF',

  shadowColor: 'transparent',
  borderBottomWidth: 0.2,
   
  },
  greater_than: {
marginLeft: 320,marginTop: -28, fontWeight: 'bold',fontSize:22
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


import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Switch } from 'react-native';
import { Card } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = {
    background: '#fff',
    text: '#000',
    cardBackground: '#fff',
    iconColor: '#000',
  };

  const darkTheme = {
    background: '#000',
    text: '#fff',
    //cardBackground: '#000',
    iconColor: '#fff',
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
      <View>
        <Text style={[styles.title, { color: theme.text }]}>Settings</Text>
      </View>
      <View style={styles.spacer} />
      <View>
        {["Language", "My Profile", "Contact Us", "Change password", "Privacy policy"].map((item, index) => (
          <React.Fragment key={index}>
            <Card style={[styles.card, { backgroundColor: theme.cardBackground }]}>
              <Text style={[styles.first_text, { color: theme.text }]}>{item}</Text>
              <Text style={[styles.greater_than, { color: theme.text }]}>></Text>
            </Card>
            <View style={styles.spacer} />
          </React.Fragment>
        ))}
      </View>
      <View style={styles.themeRow}>
        <Text style={[styles.themeText, { color: theme.text }]}>Theme</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
          thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
     style={{ transform: [{scale: 1.8}] }}
        />
      </View>
      <View style={styles.bottomBar}>
        {["home", "pie-chart", "credit-card", "settings"].map((icon, index) => (
          <Feather key={index} name={icon} size={40} color={theme.iconColor} />
        ))}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'space-evenly',
    marginLeft: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  spacer: {
    height: 20,
  },
  card: {
    height: 60,
    width: '100%',
    borderRadius: 10,
    shadowColor: 'transparent',
    borderBottomWidth: 0.2,
  },
  first_text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  greater_than: {
    position: 'absolute',
    right: 10,
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
  },
  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
  },
  themeText: {
    fontSize: 25,
    fontWeight: 'bold',
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
