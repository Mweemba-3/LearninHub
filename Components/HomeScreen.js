import React, { useState, useEffect } from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
  Modal,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';
                 

export default function HomeScreen() {
  const [dailyQuote, setDailyQuote] = useState('');
  const [timeOfDay, setTimeOfDay] = useState('');
  const [iconName, setIconName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const quotes = [
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "One of the secret's to a happy life is never force People, into your circle or anything. Just be your kinda people will locate you. - Mweemba Obvious",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The mind is everything. What you think you become. - Buddha",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
  ];

  useEffect(() => {
    const quoteIndex = new Date().getDate() % quotes.length;
    setDailyQuote(quotes[quoteIndex]);
  }, []);

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hours = new Date().getHours();
      if (hours >= 5 && hours < 12) {
        setTimeOfDay('Morning');
        setIconName('weather-sunny');
      } else if (hours >= 12 && hours < 18) {
        setTimeOfDay('Afternoon');
        setIconName('weather-partly-cloudy');
      } else {
        setTimeOfDay('Evening');
        setIconName('weather-night');
      }
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  const openImage = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const universityLinks = [
    { title: 'Coursera - University Courses', url: 'https://www.coursera.org' },
    { title: 'edX - Online Degrees', url: 'https://www.edx.org' },
    { title: 'ResearchGate - Academic Network', url: 'https://www.researchgate.net' },
    
  ];
  const universityPortals =[
    { title: 'Mulungushi Student`s Portal', url: 'https://edurole.mu.ac.zm' },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.appName}>Learning-Hub</Text>
      </View>

      <FlatList
        data={[]}
        ListHeaderComponent={
          <View style={styles.container}>
            <View style={styles.quoteCard}>
              <Text style={styles.dailyQuote}>Daily Inspiration</Text>
              <Text style={styles.quoteText}>{dailyQuote}</Text>
            </View>

            <View style={styles.timeCard}>
              <Text style={styles.timeText}>Hey, Good {timeOfDay}!</Text>
              <MaterialCommunityIcons name={iconName} size={40} color="#FFD700" />
            </View>

            <Swiper 
              autoplay 
              autoplayTimeout={5} 
              showsPagination={true}
              dotColor="#ffffff80"
              activeDotColor="#ffffff"
              style={styles.swiperContainer}
            >
              <TouchableOpacity onPress={() => openImage(require('../assets/images/icon.jpg'))} style={styles.slide}>
                <Image source={require('../assets/images/icon.jpg')} style={styles.slideImage} />
                <Text style={styles.slideText}>Welcome to LearningHub</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openImage(require('../assets/images/Mulungushi.jpg'))} style={styles.slide}>
                <Image source={require('../assets/images/Mulungushi.jpg')} style={styles.slideImage} />
                <Text style={styles.slideText}>Available Universities</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openImage(require('../assets/images/available.jpg'))} style={styles.slide}>
                <Image source={require('../assets/images/available.jpg')} style={styles.slideImage} />
                <Text style={styles.slideText}>Available Degree Programs</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openImage(require('../assets/images/appeal.jpg'))} style={styles.slide}>
                <Image source={require('../assets/images/appeal.jpg')} style={styles.slideImage} />
                <Text style={styles.slideText}>Try Again - HELSB</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openImage(require('../assets/images/WhatsApp.png'))} style={styles.slide}>
                <Image source={require('../assets/images/WhatsApp.png')} style={styles.slideImage} />
                <Text style={styles.slideText}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://chat.whatsapp.com/EHfg6EtV20ICG8hgh7A3IC')}>
                    <Text style={styles.link}>Join Our Community</Text>
                  </TouchableOpacity>
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openImage(require('../assets/images/MS CodeForge.jpg'))} style={styles.slide}>
                <Image source={require('../assets/images/MS CodeForge.jpg')} style={styles.slideImage} />
                <Text style={styles.slideText}>
                  <TouchableOpacity onPress={() => Linking.openURL('https://mweemba-3.github.io/MS-CodeForge/')}>
                    <Text style={styles.link}>MS CodeForge Hub</Text>
                  </TouchableOpacity>
                </Text>
              </TouchableOpacity>
            </Swiper>

            <View style={styles.infoContainer}>
              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <Image 
                    source={require('../assets/images/HELSB.jpg')}
                    style={styles.logo}
                  />
                  <Text style={styles.sectionTitle}>HELSB</Text>
                  
                </View>
              
                <Text style={styles.sectionTitle}>Who Qualifies?</Text>
                <Text style={styles.stepText}>Zambian students with a valid NRC</Text>
                <Text style={styles.stepText}>Accepted into a recognized university for the current year</Text>
                <Text style={styles.stepText}>Recent Grade 12 graduates (check HELSB FB for year range)</Text>
                <Text style={styles.stepText}>26 or younger at application deadline</Text>

                <Text style={styles.sectionTitle}>How to Apply</Text>
                <Text style={styles.stepText}>Submit your application per the latest advert</Text>
                <Text style={styles.stepText}>Include your university admission letter</Text>
                <Text style={styles.stepText}>Certified Grade 12 results or certificate</Text>
                <Text style={styles.stepText}>Your NRC + Parent/Guardian NRC copies</Text>
                <Text style={styles.stepText}>Recent passport photo (name on back)</Text>
                <Text style={styles.stepText}>Application form from NATSAVE</Text>
                <Text style={styles.stepText}>NATSAVE payment receipt</Text>

                <Text style={styles.sectionTitle}>Key Info</Text>
                <Text style={styles.stepText}>These are repayable loans, not grants</Text>
                <Text style={styles.stepText}>Funding varies based on need - state your requirement</Text>
                <Text style={styles.stepText}>Admission doesn't guarantee funding</Text>
                <Text style={styles.stepText}>No cash at HELSB - all payments via NATSAVE</Text>
                <Text style={styles.stepText}>Special consideration for rural & female students</Text>

                <TouchableOpacity onPress={() => Linking.openURL('https://www.helsb.gov.zm')}>
                  <Text style={styles.link}>Check HELSB Updates</Text>
                </TouchableOpacity>

                <Text style={styles.sectionTitle}>Level Up Your Studies</Text>
                {universityLinks.map((link, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => Linking.openURL(link.url)}
                    style={styles.linkButton}
                  >
                    <Text style={styles.linkText}>{link.title}</Text>
                  </TouchableOpacity>
                ))}

<Text style={styles.sectionTitle}>University Portals</Text>
                {universityPortals.map((link, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => Linking.openURL(link.url)}
                    style={styles.linkButton}
                  >
                    <Text style={styles.linkText}>{link.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View style={styles.sectionCard}>
                <View style={styles.sectionHeader}>
                  <Image 
                    source={require('../assets/images/MS CodeForge.jpg')}
                    style={styles.logo}
                  />
                  <Text style={styles.sectionTitle}>MS CodeForge</Text>
                </View>
                <Text style={styles.stepText}>Powering LearningHub for ambitious students</Text>
                <Text style={styles.stepText}>Discover more tools for your university journey above</Text>
              </View>
            </View>

            <TouchableOpacity 
              style={styles.fab} 
              onPress={() => alert("Is your your university,School of study or program Program Missing? Hit up IT support via WhatsApp!")}
            >
              <MaterialCommunityIcons name="information" size={24} color="#ffffff" />
            </TouchableOpacity>

            <Modal 
              visible={modalVisible} 
              transparent={true} 
              animationType="fade"
            >
              <View style={styles.modalContainer}>
                <TouchableOpacity 
                  style={styles.closeButton} 
                  onPress={() => setModalVisible(false)}
                >
                  <MaterialCommunityIcons name="close" size={30} color="#ffffff" />
                </TouchableOpacity>
                <Image 
                  source={selectedImage} 
                  style={styles.fullImage} 
                  resizeMode="contain" 
                />
              </View>
            </Modal>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    backgroundColor: '#2C3E50',
    padding: 15,
    paddingTop: 40,
    alignItems: 'center',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  quoteCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dailyQuote: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  quoteText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  timeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  timeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
  },
  swiperContainer: {
    height: 220,
    marginBottom: 15,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: 300,
    height: 150,
    borderRadius: 10,
  },
  slideText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: '500',
  },
  infoContainer: {
    marginBottom: 20,
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 10,
  },
  stepText: {
    fontSize: 15,
    color: '#444',
    marginVertical: 4,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#3498DB',
    lineHeight: 22,
  },
  link: {
    color: '#3498DB',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  linkButton: {
    padding: 10,
    backgroundColor: '#ECF0F1',
    borderRadius: 8,
    marginVertical: 4,
  },
  linkText: {
    color: '#3498DB',
    fontSize: 15,
    fontWeight: '500',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#E74C3C',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '90%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});