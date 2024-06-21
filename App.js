import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
      <Text style={{fontSize: 28, fontWeight: 'bold', textAlign: 'center', marginTop: 50}}>Settings</Text>
      </View>
      <View > 
<Text style={{fontSize: 22, fontWeight: 'bold'}}>Language</Text>
<Text style={{fontSize: 22, fontWeight: 'bold'}}>My Profile</Text>
<Text style={{fontSize: 22, fontWeight: 'bold'}}>Contact Us</Text>
<Text style={{fontSize: 22, fontWeight: 'bold'}}>Change password</Text>
<Text style={{fontSize: 22, fontWeight: 'bold'}}>Privacy policy</Text>
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
});
