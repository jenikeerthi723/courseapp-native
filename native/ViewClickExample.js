import React, { Component } from 'react';
import { View,Alert, StyleSheet } from 'react-native';


class ViewClickExample extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height:100, width: '100%', 
                backgroundColor:'#00BCD4'}}
                // onPress={
                //     () => Alert.alert('OnPress','Clicked on View')
                // }
                onStartShouldSetResponder={
                    () => Alert.alert('onStartShouldSetResponder','Clicked on View')
                }
                >    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
});


export default ViewClickExample;