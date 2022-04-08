import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import WorldData  from './data/world.json'

class FlatListExample1 extends Component {

  state = {
    data: WorldData
  }


  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.textStyle}>
         FlatList Example 1
        </Text>
          <FlatList
          data={this.state.data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item,index}) =>
          <View style={[styles.flatviewStyle,
                {backgroundColor : index % 2 === 0 ? 'tomato':'mediumseagreen'}]}>
            <Text style={styles.textStyle}>{item.id}</Text>
            <Text style={styles.textStyle}>{item.country}</Text>
            <Text style={styles.textStyle}>{item.city}</Text>
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
  flatviewStyle: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  
});

export default FlatListExample1