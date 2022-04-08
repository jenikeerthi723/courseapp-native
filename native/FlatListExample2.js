import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import BirdsData  from './data/birds.json'

class FlatListExample2 extends Component {

  state = {
    data: BirdsData
  }


  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.textStyle}>
         FlatList Example 2
        </Text>
          <FlatList
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) =>
          <View style={[styles.flatviewStyle,
                {backgroundColor : index % 2 === 0 ? 'tomato':'mediumseagreen'}]}>
            <Image 
              source={{uri:item.imageURL}} 
              style={styles.ImageStyle}/>
          </View>
          } 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    color: '#41cdf4',
    fontSize:  30,
  },
  ImageStyle: {
    width: 300, 
    height: 300,
    margin:5
},
  flatviewStyle: {
    justifyContent: 'center',
    borderRadius: 2,
  },
  
});

export default FlatListExample2