import React, {Component} from 'react';  
import {StyleSheet, Text, View, Button, Modal} from 'react-native';  
  
class ModalExample extends Component {  
  state = {  
    show: false,  
  }  

  showModal ()  {
    this.setState({ show: true })
  }

  hideModal () {
    this.setState({ show: false })
  }

  render() {  
    return (  
      <View style = {styles.container}>  
        <Button   
           title="Open Modal"   
           onPress = {() => this.showModal()}  
        />  
        <Modal            
          animationType = {"slide"}  
          transparent = {false}  
          visible = {this.state.show}  
          >
         
              <View style = {styles.modalStyle}>  
              <Text style = {styles.textStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Text>  
              <Button title="Close Modal" onPress = {() => this.hideModal()}/>  
          </View>  
        </Modal>  
       
      </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    backgroundColor: '#ecf0f1',  
  },  
  modalStyle: {  
  justifyContent: 'center',  
  alignItems: 'center',   
  backgroundColor : "#00BCD4",   
  height: 300 ,  
  width: '80%',  
  borderRadius:10,  
  borderWidth: 1,  
  borderColor: '#fff',    
  marginTop: 80,  
  marginLeft: 40,  
   }, 

 textStyle: {  
      color: '#3f2949',
      fontSize:24,
      marginTop: 10  
   }  
});  

export default ModalExample