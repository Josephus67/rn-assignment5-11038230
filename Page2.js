

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Card, Switch } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

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
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Theme</Text>
        <Switch style={{ marginLeft: 220, transform: [{ scale: 1.8 }] }} />
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
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
     alignContent: 'space-evenly',
   // marginLeft: 20,
    marginTop: -90,
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
