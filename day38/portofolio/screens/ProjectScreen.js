import React, { useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, ScrollView } from 'react-native';

const ProjectCard = ({ title, description, imageSource }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      <Image source={imageSource} style={styles.image} onLoad={fadeIn} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </Animated.View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Copyright &copy; 2024 Indrianti.</Text>
    </View>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.projectsTitle}>My Projects</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <ProjectCard 
          title="Cich"
          description=" Sebuah Website E-commerce "
          imageSource={require('../assets/project1.png')}
        />
        <ProjectCard
          title="Wheelsrent"
          description="Sebuah Website tentang rental mobil yang tersebar di daerah bandung"
          imageSource={require('../assets/project2.png')}
        />
        <ProjectCard
          title="Aurora"
          description="Sebuah website restoran yang dengan nuansa aurora yang indah"
          imageSource={require('../assets/project3.png')}
        />

        
      </ScrollView>
      <Footer/> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3FEF7',

  },
  projectsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center'
  },
  footer: {
    marginTop: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
});

export default App;
