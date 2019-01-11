// import React, { Component } from 'react'
// import { ScrollView, Text, Image, View } from 'react-native'
// import { Images } from '../Themes'

// // Styles
// import styles from './Styles/LaunchScreenStyles'

// export default class LaunchScreen extends Component {
//   render () {
//     return (
//       <View style={styles.mainContainer}>
//         <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
//         <ScrollView style={styles.container}>
//           <View style={styles.centered}>
//             <Image source={Images.launch} style={styles.logo} />
//           </View>

//           <View style={styles.section} >
//             <Image source={Images.ready} />
//             <Text style={styles.sectionText}>
//               Test, should be fine.

//               Is maybe fine
//             </Text>
//           </View>

//         </ScrollView>
//       </View>
//     )
//   }
// }
import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Alert from 'react';
import geolocation from 'react';
import parse5 from 'parse5';
import geolib from 'geolib';
import ParamsForm from '../Components/ParamsForm'
export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
 
  componentDidMount(){
    // return fetch('https://facebook.github.io/react-native/movies.json')
    navigator.geolocation.getCurrentPosition(
      pos => {
        //Should set the state of current location - ONLY IF "Current location" is selected, else should use inputted address (probably out of scope without having to pay for an API key - check the limits).
        var crd = pos.coords;
        console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);

      }

    );
    
    return fetch('https://fleet.invers.com/pogo/App/ItemsOnMap/ItemsOnMap.aspx')
      .then((response) => {
        console.log('Position DL Complete')
        // const docFrag = parse5.parse(response._bodyText)
        console.log('YOooooooooooooooooooooooooooOOOOOOOOOO');
        // console.log(Object.keys(docFrag.childNodes[1].childNodes[2].childNodes[1].childNodes[45].tagName);
        // console.log(Object.keys(docFrag.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[44].childNodes[0].value));
// console.log(Object.keys(docFrag.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes));
        
        regexPattern = /"items":\[(.*)\]}/g;
        rawItems = response._bodyText.match(regexPattern);
        carray = JSON.parse("{"+rawItems);
        navigator.geolocation.getCurrentPosition(
          pos => {
            //Should set the state of current location - ONLY IF "Current location" is selected, else should use inputted address (probably out of scope without having to pay for an API key - check the limits).
            var crd = pos.coords;
        for (var i=0;i< carray.items.length; i++){
          // console.log("Lat: " + carray.items[i].Longitude +" Long: " +carray.items[i].Latitude);
          console.log( carray.items[i].Name);
          // distance = geolib.getDistance(crd, carray.items[i]);
          // distance = geolib.getDistance({latitude: crd.latitude,longitude: crd.longitude,}, {latitude: crd.latitude,longitude: crd.longitude,});
          
          console.log(geolib.getDistance({latitude:crd.latitude, longitude:crd.longitude}, {latitude:parseFloat(carray.items[i].Latitude), longitude:parseFloat(carray.items[i].Longitude)}));
          // console.log(geolib.getDistance({latitude: 51.5103, longitude: 7.49347},{latitude: 51.525, longitude: 7.4575}));
        }
      })
        // console.log(carray.items);
        this.setState({
          isLoading: false,
          dataSource: response._bodyText,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
        <ScrollView>
          <ParamsForm />
        </ScrollView>

    );
  }
}
