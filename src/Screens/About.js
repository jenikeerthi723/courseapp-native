import { StyleSheet, Text, View,Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';


const About = () => {
  return (
    <View style ={styles.aboutContainer}>
      <Text style={styles.mainHeader}>The perfect platform to boost your technical skills
      </Text>
      <Text style={styles.paraStyle}>i am a Software Devloper😀</Text>
     <View>
       <Image
       style={styles.imgStyle}
       source={{
         uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IwSLZpjlZKGWZUqK63FfuuSrCIITalqbkA&usqp=CAU',
        }}
       />
     </View>
       <View style={styles.aboutLayout}>
         <Text style={styles.aboutSubHeader}>About me</Text>
         <Text style={[styles.paraStyle, styles.aboutpara]}>
         it is really nice to study,
         the students are very friendly and ready to help.
         The atmosphere cannot but make me want to go there every time.
         I like to receive and deal with challenging tasks. I am a very enthusiastic student and
         I think this is a strong point of mine.
         </Text>
       </View>
       <Text style={styles.mainHeader}> Follo me on Social networks</Text>
       <View style ={styles.menuContainer}>
         <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL('https://www.sololearn.com/learning')}
           >
             <Image style={styles.iconstyle}
             source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAACRCAMAAABNEixZAAAAbFBMVEX///8Yd/Ls8f0AZfEAbfEAcPL6+/8AafF/pvYLdPKlvvgAcvIAZ/Fdj/T8/f+/0vrz9/7d5/zH1vrJ2vtblPSuxfk8gfNmmvTR3/uQsfeMrvfk7P2XuPgzevI5hPNJifMAXfC1zPoAWfBwn/UbGKeQAAAELUlEQVR4nO2b7XKqMBBARRIkBhRR0PoBtb7/O161xTayyQbnlk1n9vxkZGaPIckm2UwmDMMwDMMwDMMwDMMwDMMwDMP8JYrDarU6FNRhvEJSlMdtfTpFN06nenssi4Q6KH8O5VsTZ0KrqENpkcXNvjxQh+bFOm2F+A7+GyVEm66pw8NYnBstofC/JKSuqwV1kA6KcxPbw/+SiJtzsF17nQuNxH9DizzMb2maSp/47w4ynVKH22cXzTzjvyGiHXXAz8wj3wb4RKk5dcgmWzEo/nszbKmD/sF0M1zgqrAJpjMkuXxBIIpkHsiwumheE7gq1EHMbsXmVYGrwiaEVki9BJTSWvXna5nSt8I8Q4OX6lQ3+XbT1nV9ikyPjHxQ3WHzmBLN/vzIqpPDbpkaM8eMeGqb5kgmJ0X1vCgojVZTOe2Y+oZMBFBXXZrNJvYEcT/YIZ1A7IGl5ZMB7XfUupOh2QUaaZ4NdDt63A/O7oFUt+Di/tkgktXYgXdMc3cTKHgh0zPQZJ25dHdjvYVnq55BJMqRI/8iQdIJuYTf6xvIDc1e0ip2CkTSkjCU/QEsXo0b+hd7pB9vnl/YVfMrFZBIiZRCYILMxjMz40mOMyHkDaj7KwqBEjHIjJEoSZ2Tn7L0mV/lDcmqYyMfWrrHLfk2vkCxRTYn4p+DfLJ1+yqCpc6qQb4iw2Dq/m2k6vFHozW2NDMNsHUQwaRWYUsb0wCZO6LZ+LkRtjIYaDD+KmFxGfYVYQbSkkT9HkmLHRQMM7Bk4r9pcPq/BkqNboDuEg0biyIxuoHlT1Wi48Mw+Hg8t4wAcSgGzbzj+HOWLY6P5xXcevHYk7LFQOX4q/Cb4xvA/6SHgaVTj98P4LHIw6AEJ3OCsQieDzwM5mBXVs3YBpY52cPgAmbl48/JlrzIwwDeKybYPYVzU9yggD8/gty0fPErWtXQexTrA3iNhhuUoADFGq3YvGYAT8kU62R4r0LlyQPj193DxREcASj2Kiz7RXXacTHyokv3GO7ImmK/yLJnJzvejdz0vXsMv0WyZ4ftmw5ZHxDtmyJ710PWaER718j5wQADnRPVorrPcAYY2M5Kfh33OZq/gaar0rEsGIca0J1lus+TvQ0oz5OddSHeBhlpbcje3pl9DWjrKly1LZ4GqiWuF7R/R54GM/IKZmuNl5/B7EgW+QNbnZ2XQQh1dtZaRx+DMGodJ4saVPAwCKTe9NoKYM0vbiDbIFrgBlh3jRoEVHc9AWvfMQPRqxyhZd4r6HUbKB3AMGqyi8QAgwDvgPTv4TgMtLyE1AW+Wec/HawGWuZEdXU4RVVnCjFQWV2F2QCfJFXd3QmEDO53AoO/Ydrdy+ztF93vZQb7/Rgcyn0TZ+Z58nsW13/lbuydpFimxr7pfvmX7iczDMMwDMMwDMMwDMMwDMMwDPO3+QfT2DRLrrJq0QAAAABJRU5ErkJggg=='}} />
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL('')}
           >
             <Image style={styles.iconstyle}
             source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/WVn/sbH/nJz/8fH/Kir/4uL/3t7/zs7/xsb/YGD/7e3/GBj/9fX/y8v/trb/19f/PT3/oaH/jIz/goL/fX3/c3P/bm7/paX/NDT/Dg7/SEj/+vr/wcH/vLz/VFT/IiL/aGj/k5P/UFD/LS3/X1//iYn/gID/Ojr/srL/nZ3/RUX/d3eHgOMVAAAEkklEQVR4nO2d22KiQAyGWdQFBRE84QnBc9ut7/96i9tuz4ZBAiPh/+560Zn8LTCTZCYxDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzSPyOq5l2UHQ7XYHg9469lut+ai9241Pk+k5nG23W8c5mmaSJKZ5dJz051l4nk5O492uPZq3Wn687g0G6W8HgW1ZbseLdKqJPNcKuuu4Nd9NQmf/PFwcNpv+8hcfy/5mc1gMn/dOONnNW/G6G1iuF5Ws2nPtgZ9qmiVDXjnKoofJLNXrD2zX4xbXsf3TcVG9qmssF8eTb3eY1LlxOLwfbR9ZDs+xW1Re1Nv2dQsh6W97hV7OONGtQIEkvllfJ9RtvCLhjW9k76DbcmUOvVsE+rrNzsU8v8C2bptz0pYuMPd/saXb3hvw8wgMdFt7E4G6QG+l29ibWKnvVk+6bb2Rk+xn9IKtqPBBt6E386Am0LpPT0KFpaWksH5L4Ttq6349P6QvrJQeUt1WFkLlMX3SbWQhWgoKJ7qNLITK13Sv28hCrLJjGu59x2Wy6GeHpga6bSxItrf/R7eJBcleEesSfbpGmCUwqvN6f2Gf9anxfus2sSC/s5zEGm+7X8jcfHd1W1iYbobCWLeBhcmK8Y90G1iYUYbCqW4DCzPNUHjUbWBhjhkKh7oNLMwwQ2Hdl8N0QaQFdlg9Cy1ra59OJvKGMEx/wTqeGvSSzxsMNo1oV727SacveqxzmZen4sw6pAK0h8ibVTP/jTmo2F2hg1G80WDzddSnSk8E0D7wmHWu/wqNzrjCz+qYVMi7aTPfB7ZnrCNT0Ns2XjvMj0P3nlnHvs6MVOiwzmV+HnxezYbJIRXynvL6otBwK0kuJ6RC3g/7V4XpjoL3IfkRMv8UPbLO9V2hYaxL38g9UtG2iHf6nxQa3mjDOsk3FpRC5ljijwrT17HcQAIZT+xsWOe6ojB9HctMcG0o94k58XRVoWGU6FeR6SeXd3NFKDS80vyqJaWQOYdPKUwnKysJRLnAlSosza+6I4WpP1rGRo5SaPNOla3QcEvwq6jTbcxn9hQUpn/VLe+kdKCGOfOkpJDfr6KyT7yBKFWFRjTfcE5LhaKYc2uqCtPXkfOcEpVf06Yw/QSYbNNSCplvkeRRmP55ubJC1KF95ksI+RSmfhXPRo4KmM5ZZngjp0KuADl1t0S3wtQChg3APSss/38o/z2U/y2Vvx7K39PI35fK9y3k+4fyfXz5cRrE2nJyh/FS+TFv+XkL+bkn+flD+Tlg+Xl8+WcxGnCeRv6ZKPnn2uSfTZR/vlT+GWH557zln9WXf99C/p0Z+fee5N9da8D9Q/l3SOXfA5Z/l1v+fXz5NRXk18WQX9tEfn0a+TWGGlAnSn6tL/n12uTX3GtA3UT5tS/l1y+VX4O2AXWEa7z5VqwFLb+eN/fptgpR7h0gvq5+A3oj1LR3QI7+Fg3oUVLHRTF3t6C6SczdK6gB/Z4a0LOrAX3XDPm984wG9D+8ILyH5Suy+5C+IbqX7GfE9gOmVYvq6QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBd/AeVenzu8wDl+AAAAAElFTkSuQmCC'}} />
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL('')}
           >
             <Image style={styles.iconstyle}
             source={{uri:'data:image/jpeg;base64,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'}} />
         </TouchableOpacity>
       </View>

    </View>
  );
};



const styles = StyleSheet.create({
  aboutContainer:{
    display:'flex',
    justifyContent:'center',
  alignItems:'center',
 },
 imgStyle:{
   width:150,
   height:150,
   borderRadius: 100,
   borderColor:'blue',
   borderWidth: 2,
 },
 mainHeader:{
   fontSize: 18,
   color:'#344055',
   textTransform: 'uppercase',
   fontWeight: '500',
  //  marginTop: 50,
  //  marginBottom: 10,
  margin:5,
  fontFamily: 'JosefinSans_500Medium',
   lineHeight: 30,
 },
 paraStyle:{
   fontSize: 16,
   color: '#7d7d7d',
   paddingBottom: 20,

 },
 aboutLayout:{
   backgroundColor:'#4c5dab',
   paddingHorizontal: 30,
   marginVertical:30,
   borderRadius:40,
 },
 aboutSubHeader:{
   fontSize: 18,
   color: '#fff',
   textTransform: 'uppercase',
   fontWeight: '500',
   marginVertical: 15,
   fontFamily: 'JosefinSans_500Medium',
   alignSelf: 'center',
 },
 aboutpara:{
  color:'#fff',

 },
 menuContainer:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    // alignItems:"center"
 },
 iconstyle:{
   width:'100%',
   height:50,
   aspectRatio:1,
  //  flexDirection:"row",
  //  justifyContent:"space-evenly",
  //  alignItems:"center"
 },


});


export default About;
