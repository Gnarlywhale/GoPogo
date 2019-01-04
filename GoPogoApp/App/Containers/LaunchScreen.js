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


export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    // return fetch('https://facebook.github.io/react-native/movies.json')
    return fetch('https://fleet.invers.com/pogo/App/ItemsOnMap/ItemsOnMap.aspx')
      .then((response) => {

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
        <Text>
          {this.state.dataSource}
        </Text>
        </ScrollView>

    );
  }
}