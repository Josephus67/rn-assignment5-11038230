import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Card} from 'react-native-paper'
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
<Text style={styles.greater_than}></Text>
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
    <Text style={{fontSize:25, fontWeight: 'bold'}}>Theme</Text>
   
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
    height: 50,
    width: '100%',
   // backgroundColor: '#FF00FF',
   borderRadius: 10,
  },
  greater_than: {
marginLeft: 320,marginTop: -28, fontWeight: 'bold',fontSize:22
  }
});