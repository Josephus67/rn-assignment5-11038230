
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Page1() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('./assets/Ellipse.png')} style={styles.prof_pic} />
        <View style={{marginTop: 60, marginLeft: 20}}>
          <Text style={{fontSize: 20}}>Welcome back</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 26}}>Eric Atsu</Text>
          <Card style={{height: 60, width: 60, borderRadius: 30, marginLeft: 180, marginTop: -55, justifyContent: 'space-around'}}>
            
            <Feather name="search" size={40} color="black" style={{marginLeft: 8}} />
          </Card>
        </View>
      </View>
      <View style={{height: 20}} />
      <Image source={require('./assets/Card.png')} 
      style={{height: 220, width: '95%', marginLeft: 15}}
      />
      <View style={{height: 20}} />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
        <Image source={require('./assets/send.png')} />
          <Text>Sent</Text>
        </View>
        <View>
        <Image source={require('./assets/recieve.png')} />
          <Text>Received</Text>
        </View>
        <View>
        <Image source={require('./assets/loan.png')} />
          <Text>Loan</Text>
        </View>
        <View>
        <Image source={require('./assets/moneyTransfer.png')} />
          <Text>Top UP</Text>
        </View>
      </View>
      <View style={{height: 5}} />
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Transaction</Text>
        <Text style={{color:'#0000FF', marginLeft: 210}}>See all</Text>
      </View>
      <View style={{height: 5}} />

     
  { /*     <ScrollView vertical showsVerticalScrollIndicator={false}>

        <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>

      <Card style={styles.card_apple}>
<AntDesign name="apple1" size={30} color="#000" style={{marginLeft: 8}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Apple store</Text>
    <Text style={{ marginLeft: 140, fontWeight: 'bold', fontSize: 20}}>-$5,99</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Entertainment</Text>
    </View>
    </Card>


<View style={{height:10}}/>


        <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>

      <Card style={styles.card_apple}>
<AntDesign name="apple1" size={30} color="#000" style={{marginLeft: 8}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Spotify</Text>
    <Text style={{ marginLeft: 140, fontWeight: 'bold', fontSize: 20}}>-$12,99</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Music</Text>
    </View>
    </Card> 
   <View style={{height:10,}} />

   <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>

      <Card style={styles.card_apple}>
<AntDesign name="apple1" size={30} color="#000" style={{marginLeft: 8}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Money Transfer</Text>
    <Text style={{ marginLeft: 140, fontWeight: 'bold', fontSize: 20}}>$300</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Transaction</Text>
    </View>
    </Card> 

    <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>


      <Card style={styles.card_apple}>
<AntDesign name="apple1" size={30} color="#000" style={{marginLeft: 8}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Grocery</Text>
    <Text style={{ marginLeft: 140, fontWeight: 'bold', fontSize: 20}}>-$88</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Entertainment</Text>
    </View>
    </Card>
        </ScrollView>
        </Card>
        */}
     
      
      {/*
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
      */}
      <Card style={{height:250, width:'100%'}}>
<ScrollView vertical showsVerticalScrollIndicator={false}>
    <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>

      <Card style={styles.card_apple}>
      <Image source={require('./assets/apple.png')} style={{marginLeft: 15, height: 30, width: 25}} />

</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Apple store</Text>
    <Text style={{ marginLeft: 140, fontWeight: 'bold', fontSize: 20}}>-$5,99</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Entertainment</Text>
    </View>
    </Card>

    <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>


      <Card style={styles.card_apple}>
<Image source={require('./assets/spotify.png')} style={{marginLeft: 10, height: 30, width: 30}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Spotify</Text>
    <Text style={{ marginLeft: 180, fontWeight: 'bold', fontSize: 20}}>-$12,99</Text>
    </View>

    <Text style={{marginTop: 30, marginLeft: -310}}>Music</Text>
    </View>
    </Card> 


    <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>

      <Card style={styles.card_apple}>
<Image source={require('./assets/moneyTransfer.png')} style={{marginLeft: 10, height: 30, width: 30}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Money Transfer</Text>
    <Text style={{ marginLeft: 105, fontWeight: 'bold', fontSize: 20}}>$300</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Transaction</Text>
    </View>
    </Card>

    <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>

      <Card style={styles.card_apple}>
<Image source={require('./assets/grocery.png')} style={{marginLeft: 10, height: 30, width: 30}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Grocery</Text>
    <Text style={{ marginLeft: 180, fontWeight: 'bold', fontSize: 20}}>-$88</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Shopping</Text>
    </View>
    </Card>

    <Card style={styles.card1}>
    <View style={{flexDirection: 'row'}}>

      <Card style={styles.card_apple}>
<AntDesign name="apple1" size={30} color="#000" style={{marginLeft: 8}}/>
</Card>
        <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', fontSize: 21, marginLeft: 10}}>Apple store</Text>
    <Text style={{ marginLeft: 140, fontWeight: 'bold', fontSize: 20}}>-$5,99</Text>
    </View>
    <Text style={{marginTop: 30, marginLeft: -300}}>Entertainment</Text>
    </View>
    </Card>
    </ScrollView>
    </Card>
      
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -50,
  },

  prof_pic: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginTop: 50,
    marginLeft: 20,
  },
  card: {
    height: 300,
    width: '95%',
    backgroundColor: '#040008',
    borderRadius: 40,
    marginLeft: 15,
    transparency: "80%",
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 0,
    position: 'absolute',
    height: 60,
    width: '100%',
  },
  card1: {
    height: 80,
    width: '100%',
    backgroundColor: '#fff',

    borderRadius: 3,
   // marginLeft: 1,
  },
  card_apple: {
    // backgroundColor: '#fff',
      height: 50, 
      width: 50,
      marginLeft: 4,
   justifyContent: 'space-evenly',
      borderRadius: 30
   }
   
  
});
