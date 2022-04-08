/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { StyleSheet,ScrollView,View,Text,StatusBar,Image, Dimensions, TouchableOpacity } from 'react-native';


const images = [
    'https://media.istockphoto.com/vectors/welcome-to-online-education-concept-laptop-with-handdrawn-learning-vector-id1223317925',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDn9UuyasAT5UpcaE6Nm1ldbxKw6ikDtyoUg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7X85yQ8HpCE_s7gOHr3Yukk8IHeWkxNcGg&usqp=CAU',
];


const Slider = ({navigation}) => {
    const [imgActive, setimgActive] = useState(0);

  const   onchange = (nativeEvent) => {
        if (nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    };

    return (
        <View style={Styles.container}>
           <View style={Styles.wrap}>
               <ScrollView
               onScroll = {({nativeEvent}) => onchange(nativeEvent)}
               showsHorizontalScrollIndicator={false}
               pagingEnabled
               horizontal
               style={Styles.wrap}
               >
                   {
                       images.map((e,index) => (
                           <React.Fragment key={index} >
                            <Image

                                resizeMode="contain"
                                style={{width: 400, height: 500}}
                                source={{uri:e }}
                            />
                            </React.Fragment>

                       )
                       )
                   }

               </ScrollView>
               <View style={Styles.wrapDot}>
                   {
                       images.map((e,index) =>
                       <Text key={index}
                            style={imgActive == index ? Styles.dotActive : Styles.dot}
                       >
                           ●
                       </Text>)
                   }
               </View>

            </View>
            <View>
                   <TouchableOpacity
                   style={{backgroundColor:'skyblue',margin:70,padding:20,borderRadius:20}}
                   onPress={() => navigation.navigate('Login')}


                   >
                       <Text style={{color:'black',textAlign:'center'}}
                      >Get Started</Text>
                   </TouchableOpacity>
               </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'black',
    },
    wrap:{
        // width : width,
        // height: height
        width: 400,
        height: 500,
        marginTop:50,
    },
    wrapDot:{
        position:'absolute',
        //bottom:0,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:60,
    },
    dotActive:{
        margin : 3,
        color: 'blue',
    },
    dot:{
        margin : 3,
        color : 'white',
    },

});
export default Slider;
