import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Option from '../mainScreen/util/Option'


const ProfilePage = () => {
  return (
    <View style={{padding:15}}>
      <Text style={{fontWeight:"bold", fontSize:35, paddingBottom:18}}>My profile</Text>
      <View style={styles.profile}>
      <Image
        style={styles.img}
        source={{
          uri: 'https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp',
        }}
      />
      <View>
        <Text  style={{fontWeight:"bold", fontSize:18}}>Matilda Brown</Text>
        <Text style={{color:"gray"}}>matilda@gmail.com</Text>
      </View>
      </View>
      <Option label={"My orders"} span={"Already have 12 orders"}/>
      <Option label={"Shipping addresses"} span={"3 ddresses"}/>
      <Option label={"Payment methods"} span={"Visa **34"}/>
      <Option label={"Promocodes"} span={"You have special promocodes"}/>
      <Option label={"My reviews"} span={"Reviews for 4 items"}/>
      <Option label={"Settings"} span={"Notifications, password"}/>
      
    </View>
  )
}

export default ProfilePage


const styles = StyleSheet.create({
    profile:{
        display: "flex",
        flexDirection: "row",
        paddingBottom: 45
    },
    img:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginRight: 20,
    }
})