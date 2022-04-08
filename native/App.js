import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import HelloWorld from './HelloWorld'
// import ViewStyleExample from './ViewStyleExample'
// import ViewClickExample from './ViewClickExample'
// import TextExample from './TextExample'
// import FixedDimensions from './FixedDimensions'
// import FlexTest from './FlexBox/Flex/FlexTest'
// import FlexDirectionTest from './FlexBox/FlexDirection/FlexDirectionTest'
// import FlexWrapTest from './FlexBox/FlexWrap/FlexWrapTest'
// import JustifyContent from './FlexBox/JustifyContent/JustifyContentTest'
// import AlignItemsTest from './FlexBox/AlignItems/AlignItemsTest'
// import JustifyContentAlignItems from './FlexBox/JustifyContentAlignItems/JustifyContentAlignItemsTest'
// import AlignContent from './FlexBox/AlignContent/AlignContentTest'
// import AlignSelf from  './FlexBox/AlignSelf/AlignSelfTest'
// import PositionTest from './PositionTest'
// import DimensionsTest from './DimensionsTest'
// import ButtonExample from './ButtonExample'
// import TouchableExample from './TouchableExample'
// import ScrollViewExample1 from './ScrollViewExample1'
// import ScrollViewExample2 from './ScrollViewExample2'
// import TextInputExample1 from './TextInputExample1'
// import TextInputExample2 from './TextInputExample2'
// import ImageExample1 from './ImageExample1'
// import ImageExample2 from './ImageExample2'
// import ImageExample3 from './ImageExample3'
// import ImageBackgroundExample from './ImageBackgroundExample'
// import PickerExample1 from './PickerExample1'
// import PickerExample2 from './PickerExample2'
// import SwitchExample from './SwitchExample'
// import ActivityIndicatorExample from './ActivityIndicatorExample'
// import ModalExample from './ModalExample'
// import FlatListExample1 from './FlatListExample1'
// import FlatListExample2 from './FlatListExample2'
// import PlatformTest from './PlatformTest'
// import OtherComponents from './OtherComponents'
// import StackNavigatorExample1 from './Navigation/StackNavigation/StackNavigatorExample1/StackNavigatorExample1'
// import StackNavigatorExample2 from './Navigation/StackNavigation/StackNavigatorExample2/StackNavigatorExample2'
// import TabNavigatorExample1 from './Navigation/TabNavigation/TabNavigatorExample1/TabNavigatorExample1'
// import TabNavigatorExample2 from './Navigation/TabNavigation/TabNavigatorExample2/TabNavigatorExample2'
// import TabNavigatorExample3 from './Navigation/TabNavigation/TabNavigatorExample3/TabNavigatorExample3'
// import TabNavigatorExample4 from './Navigation/TabNavigation/TabNavigatorExample4/TabNavigatorExample4'
// import DrawerNavigatorExample1 from './Navigation/DrawerNavigation/DrawerNavigatorExample1/DrawerNavigatorExample1'
// import DrawerNavigatorExample2 from './Navigation/DrawerNavigation/DrawerNavigatorExample2/DrawerNavigatorExample2'
import DrawerNavigatorExample3 from './Navigation/DrawerNavigation/DrawerNavigatorExample3/DrawerNavigatorExample3'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View  style={styles.container}>
         <DrawerNavigatorExample3 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});

export default App;
