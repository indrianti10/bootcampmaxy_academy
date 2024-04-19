import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const HomeScreen = () => {
  const github = () => {
    const githubURL = 'https://github.com/indrianti10';
    Linking.openURL(githubURL);
  };
  const instagram = () => {
    const instagramURL = 'https://www.instagram.com/indrii_anti/?hl=id';
    Linking.openURL(instagramURL);
  };
  const linkedin = () => {
    const linkedinURL = 'https://www.linkedin.com/in/widya-dwi-indrianti-31a4ba223/';
    Linking.openURL(linkedinURL);
  };
  const email = () => {
    const toEmail = 'widyaindrianti06@gmail.com';
    const mailTo = `mailto:${toEmail}`;
    Linking.openURL(mailTo);
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={{ 
        uri: 'https://images.unsplash.com/photo-1593720216156-7c5fdbaaffb9?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        }}
        style={{ flex:0.5 }}
        resizeMethod={'cover'}
        >

      </ImageBackground>
      <View style={{ flex: 1, backgroundColor: '#E3FEF7' }}>
        <View style={{justifyContent: 'center', alignItems: 'center', }}>
          <Image
            source={require('../assets/pp.jpeg')}
            style={styles.pp}
          />
        </View>
          <View>
              <Text style={styles.nama}>Widya Dwi Indrianti</Text>
              <Text style={styles.job}>Frontend Development</Text>
          </View>

          <View style={{ marginHorizontal:80, marginTop:20 }}>
            <View style={{ flexDirection: 'row' }}>
                <Icon name="university" size={20} style={{ color: '#7D7C7C' }} />
                <View style={{ marginLeft:8 }}>
                  <Text style={{ color: '#7D7C7C', fontSize:15, fontWeight:'400' }}>Universitas Pasundan</Text>
                </View>
             </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <Icon name="user-graduate"size={20} style={{ color: '#7D7C7C' }} />
                <View style={{ marginLeft:8}}>
                  <Text style={{ color: '#7D7C7C', fontSize:15, fontWeight:'400' }}>Mahasiswa | Semester 6</Text>
                </View>
             </View>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <Icon name="map-marker-alt" size={20} style={{ color: '#7D7C7C' }} />
                <View style={{ marginLeft:8 }}>
                  <Text style={{ color: '#7D7C7C', fontSize:15, fontWeight:'400' }}>Kota Cimahi</Text>
                </View>
             </View>
            
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity  onPress={github}>
              <View style={styles.icon}>
                <Icon name="github" size={35} color="black"/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={instagram}>
              <View style={styles.icon}>
                <Icon name="instagram" size={35} color="#D862BC"/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={linkedin}>
              <View style={styles.icon}>
                <Icon name="linkedin" size={35} color="#008DDA"/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={email}>
              <View style={styles.icon}>
                <Icon name="envelope" size={35} color="black"/>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <View style={styles.footer}>
              <Text style={styles.text}>Copyright &copy; 2024 Indrianti.</Text>
            </View>
          </View>
      </View>  
    </View>
  )
};

const styles = StyleSheet.create({
    pp: {
      width: 100,
      height : 100,
      borderRadius: 100 / 2,
      borderWidth:3,
      borderColor: 'white',
      position: 'absolute',
      zIndex: 2,
      

    },

    nama: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 60
    },

    job: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
        color:'gray',
        fontWeight: '400'
    },

    iconContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    icon: {
      marginRight: 8
    },
    footer: {
      paddingVertical: 115,
      alignItems: 'center',
    },
    text: {
      color: '#666',
    }
    

  });
export default HomeScreen;