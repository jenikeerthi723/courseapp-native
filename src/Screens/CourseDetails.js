/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image} from "react-native";
import React from "react";
import Courses from "../api/Course";

const CourseDetails = ({ navigation, route }) => {
  const id = route.params.courseId;
  console.log(id);

  const selectedCourse = Courses.find((element) => {
    return id === element.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.courseContainer}>

        <Text style={styles.mainHeader}>{selectedCourse.title}</Text>
        <View>
          <Text style={[styles.text,{fontSize:25,fontWeight:"bold",color:"black"}]}>
            Available Courses
          </Text>
        </View>
        <ScrollView>
        <View style={{flexDirection:"row",height:400,width:400,flexWrap:"wrap"}}>


        <TouchableOpacity
        onPress={()=> navigation.navigate("Screen1",selectedCourse.course1.link)}>
        <Text style={styles.description}>{selectedCourse.course1.name}</Text>
      
        </TouchableOpacity>


        <TouchableOpacity
        onPress={()=> navigation.navigate("Screen1",selectedCourse.course2.link)}>
        <Text style={styles.description}>{selectedCourse.course2.name}</Text>
       
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> navigation.navigate("Screen1",selectedCourse.course3.link)}>
        <Text style={styles.description}>{selectedCourse.course3.name}</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> navigation.navigate("Screen1",selectedCourse.course4.link)}>
        <Text style={styles.description}>{selectedCourse.course4.name}</Text>
        </TouchableOpacity>



       </View>
       </ScrollView>
        <View style={styles.buttonContainer}>
          <Text style={styles.price}>{selectedCourse.price}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("Courses")}
          >
            <Text style={styles.buttonText}>Join Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    width: "50%",
    height: undefined,
    aspectRatio: 1,
    borderRadius:600,
    flexDirection:"column",
  },
  mainContainer: {
    paddingHorizontal: 20,
  },

  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.90)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
    //justifyContent:"space-evenly"
  },
  // tinyLogo:{
  //   width:100,
  //   height:100
  // },
  mainHeader: {
    fontSize: 22,
    color: "blue",
    textTransform: "uppercase",
    paddingBottom:20,
    textAlign: "center",
    fontFamily: "Nunito_600SemiBold",
    // height: 200,
    // justifyContent:"space-evenly",
    // width:100
  },
  description: {
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 50,
    marginTop:50,
    marginRight:40,
    lineHeight: 90,
    width:120,
    height:120,

    // flexWrap:flex-start,
    fontSize: 19,
    color: "black",
    backgroundColor:"skyblue",
    borderRadius:20,
    borderColor:"white",
    borderWidth:1,
    flexDirection:"row",
  },
  description1:{
    textAlign: "center",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 70,
    lineHeight: 50,
    fontSize: 16,
    color: "black",
    backgroundColor:"#CCCCFF",
    borderRadius:20,
    borderColor:"black",
    borderWidth:1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

  },
  price: {
    backgroundColor: "#344055",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: "JosefinSans_400Regular",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#809fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    color: "#eee",
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  text:{
    fontSize: 20,
    fontFamily:"GideonRoman-Regular",
    color:"black",
    opacity: 0.4,
  },
});

export default CourseDetails;
