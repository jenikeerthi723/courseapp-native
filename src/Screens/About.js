import { StyleSheet, Text, View,Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'


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
         uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3IwSLZpjlZKGWZUqK63FfuuSrCIITalqbkA&usqp=CAU",
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
            onPress={()=> Linking.openURL("https://www.sololearn.com/learning")}
           >
             <Image style={styles.iconstyle}
             source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///9HWZM9UY81S4z09fgxSIqkq8Xd4OpAU5CHkbU7T46Zob5EVpG+w9ZBVJBjcKB/ibBOYJjn6fGwt85ebZ/w8fZreabU1+RUZJrFytt0gKrl5+/N0eBZaZ1dbJ9LXZe5vtOTm7yhqcUVgHx+AAAEAUlEQVR4nO2d6XarIBRGDQ4xBI1mTlozvf9DtmmzbtNGUC6DHNe3fyfgXijo4QBRBAAAAAAAAAAAAAAAAAAAAAAAAAAAADAn8Ytnu+WqavLUJ+ft9d2f5eGY81JM/FLmcX1devGbLnjp2e6BYHzuoR3n6UB+X7B659gv2fIB/T4RfOVWcJEPK/hJ7FQxAEG3ihUb2u4L7uxZLOKh3b4RtaMeNfE9BEphVzeG8zDu0TvcydCfnIf2+sFNI14GHgmfcfMkHod8l/lL/G5fMAlhKPxH7uA23QUyVHxTbu0bhvQY3rH/IGbhjBV30vEb2h8RAzOMpzCEIQytI14Yj6HIORfn/eIvucqRjqFgfD27TDctNS7XCkUqhmW6zt6kVb4pXhRpGIp4q4641PJGJGHI110RJdqGgmeddZI2FKJHSJCyYXlu6z1HZFju+wgSNhR1v28fuoa8ZxyJrCG/9ayTqqHY962TqmH/WCdRw/LYu06ihn27GbKGYt2/TpqGrPt1lLghl38PvqCYCwrXsP9QEUUHxURCuIYdc5vJZrl5sFzRjNPwQl5FUZ3qn18KZYXhGsbSxzBLedkRQqRhKCu/0pufDNZQ2tHcNCdgwzWUzN1udGeYgzUsq/bSV7ozzMEayjIMtBM9wjWct5euXRA5Q+00CGqGCQxhCEMYwhCGMIQhDGEIQxiqEYw/kUoMU/4KoxEvLfdZ8Ywkx+RSvHLbU4jqi6ZX0kU7yZ7AzIzGZGELiomLYAxzo5T6TTp2w6k8ijoSw/HfpSt5nSMxnMvXy43EUBEJH4nhicB4aGZIYR7fzFA+HAZkqJFb8gKJ1QjMZIOHdwp3KTO5kIKCITe5kJuiymAMjdpwplggH4yhURtuKXwBG7VhQ2HtmkkbJrWi4HAMDUaLJYlIlCwzoQ/KHJtgDCf5f29bVSiz+MIxnLDmeW3vWpIxdHpZBdyo6wvI8PcibSbJ+ronXuos5Q7K8BeyvDbtwmEIQxjCEIYwhCEMYQhDGOobks6ngSEMYQhDGMJQFzbC/NLfjDGDFoYwhCEMYQhDGDozdLCvviIjeQhDZt9QtWmTf0PRWBfU31/FqaEsZmeEKkPJu6GT8+WsHPdky9As91jC1MaDaMnQxTEzkTpV0LMhPzgx3FloRDuG4uREMIoq8yOf7Bg6eKF5XMfEuDu1YsgN0gE7MD/VyoZh7qab+cb4xcaCYb5wemLuITa7Uc0N2cnxkcC7iVF3Y2wYV87PPE6q2GBcNDRkQrE5qD12W/VmAK4MSz7xcWj1F9N5k3LGcn1i2Z4KHf9jPObHi8Hafn02h1U206e6tBtW6r9ds8vO39nxAAAAAAAAAAAAAAAAAAAAAAAAAAAAjJcPriR27CHd9lQAAAAASUVORK5CYII="}}></Image>
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL("")}
           >
             <Image style={styles.iconstyle}
             source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX/////AAD/WVn/sbH/nJz/8fH/Kir/4uL/3t7/zs7/xsb/YGD/7e3/GBj/9fX/y8v/trb/19f/PT3/oaH/jIz/goL/fX3/c3P/bm7/paX/NDT/Dg7/SEj/+vr/wcH/vLz/VFT/IiL/aGj/k5P/UFD/LS3/X1//iYn/gID/Ojr/srL/nZ3/RUX/d3eHgOMVAAAEkklEQVR4nO2d22KiQAyGWdQFBRE84QnBc9ut7/96i9tuz4ZBAiPh/+560Zn8LTCTZCYxDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzSPyOq5l2UHQ7XYHg9469lut+ai9241Pk+k5nG23W8c5mmaSJKZ5dJz051l4nk5O492uPZq3Wn687g0G6W8HgW1ZbseLdKqJPNcKuuu4Nd9NQmf/PFwcNpv+8hcfy/5mc1gMn/dOONnNW/G6G1iuF5Ws2nPtgZ9qmiVDXjnKoofJLNXrD2zX4xbXsf3TcVG9qmssF8eTb3eY1LlxOLwfbR9ZDs+xW1Re1Nv2dQsh6W97hV7OONGtQIEkvllfJ9RtvCLhjW9k76DbcmUOvVsE+rrNzsU8v8C2bptz0pYuMPd/saXb3hvw8wgMdFt7E4G6QG+l29ibWKnvVk+6bb2Rk+xn9IKtqPBBt6E386Am0LpPT0KFpaWksH5L4Ttq6349P6QvrJQeUt1WFkLlMX3SbWQhWgoKJ7qNLITK13Sv28hCrLJjGu59x2Wy6GeHpga6bSxItrf/R7eJBcleEesSfbpGmCUwqvN6f2Gf9anxfus2sSC/s5zEGm+7X8jcfHd1W1iYbobCWLeBhcmK8Y90G1iYUYbCqW4DCzPNUHjUbWBhjhkKh7oNLMwwQ2Hdl8N0QaQFdlg9Cy1ra59OJvKGMEx/wTqeGvSSzxsMNo1oV727SacveqxzmZen4sw6pAK0h8ibVTP/jTmo2F2hg1G80WDzddSnSk8E0D7wmHWu/wqNzrjCz+qYVMi7aTPfB7ZnrCNT0Ns2XjvMj0P3nlnHvs6MVOiwzmV+HnxezYbJIRXynvL6otBwK0kuJ6RC3g/7V4XpjoL3IfkRMv8UPbLO9V2hYaxL38g9UtG2iHf6nxQa3mjDOsk3FpRC5ljijwrT17HcQAIZT+xsWOe6ojB9HctMcG0o94k58XRVoWGU6FeR6SeXd3NFKDS80vyqJaWQOYdPKUwnKysJRLnAlSosza+6I4WpP1rGRo5SaPNOla3QcEvwq6jTbcxn9hQUpn/VLe+kdKCGOfOkpJDfr6KyT7yBKFWFRjTfcE5LhaKYc2uqCtPXkfOcEpVf06Yw/QSYbNNSCplvkeRRmP55ubJC1KF95ksI+RSmfhXPRo4KmM5ZZngjp0KuADl1t0S3wtQChg3APSss/38o/z2U/y2Vvx7K39PI35fK9y3k+4fyfXz5cRrE2nJyh/FS+TFv+XkL+bkn+flD+Tlg+Xl8+WcxGnCeRv6ZKPnn2uSfTZR/vlT+GWH557zln9WXf99C/p0Z+fee5N9da8D9Q/l3SOXfA5Z/l1v+fXz5NRXk18WQX9tEfn0a+TWGGlAnSn6tL/n12uTX3GtA3UT5tS/l1y+VX4O2AXWEa7z5VqwFLb+eN/fptgpR7h0gvq5+A3oj1LR3QI7+Fg3oUVLHRTF3t6C6SczdK6gB/Z4a0LOrAX3XDPm984wG9D+8ILyH5Suy+5C+IbqX7GfE9gOmVYvq6QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBd/AeVenzu8wDl+AAAAAElFTkSuQmCC"}}></Image>
         </TouchableOpacity>

         <TouchableOpacity
            style={styles.buttonStyle}
            onPress={()=> Linking.openURL("")}
           >
             <Image style={styles.iconstyle}
             source={{uri:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png"}}></Image>
         </TouchableOpacity>
       </View>

    </View>
  )
}



const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    justifyContent:"center",
  alignItems:"center",
 },
 imgStyle:{
   width:150,
   height:150,
   borderRadius: 100,
   borderColor:"blue",
   borderWidth: 2,
 },
 mainHeader:{
   fontSize: 18,
   color:"#344055",
   textTransform: "uppercase",
   fontWeight: "500",
  //  marginTop: 50,
  //  marginBottom: 10,
  margin:5,
  fontFamily: "JosefinSans_500Medium",
   lineHeight: 30,
 },
 paraStyle:{
   fontSize: 16,
   color: "#7d7d7d",
   paddingBottom: 20,
  
 },
 aboutLayout:{
   backgroundColor:"#4c5dab",
   paddingHorizontal: 30,
   marginVertical:30,
   borderRadius:40
 },
 aboutSubHeader:{
   fontSize: 18,
   color: "#fff",
   textTransform: "uppercase",
   fontWeight: "500",
   marginVertical: 15,
   fontFamily: "JosefinSans_500Medium",
   alignSelf: "center"
 },
 aboutpara:{
  color:"#fff",
  
 },
 menuContainer:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",
    // alignItems:"center"
 },
 iconstyle:{
   width:"100%",
   height:50,
   aspectRatio:1,
  //  flexDirection:"row",
  //  justifyContent:"space-evenly",
  //  alignItems:"center"
 }


});


export default About