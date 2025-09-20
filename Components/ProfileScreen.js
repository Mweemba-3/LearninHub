import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, BackHandler, Platform } from 'react-native';

const ProfileScreen = () => {
  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/+260961439127');
  };

  const handleLogout = async () => {
    try {
      // Attempt to sign out (if auth is defined elsewhere)
      if (typeof signOut === 'function' && auth) {
        await signOut(auth);
        console.log('User logged out');
      }
      // Exit the app on Android
      if (Platform.OS === 'android') {
        BackHandler.exitApp();
      } else {
        // On iOS, notify user that sign-out was successful (since we can't exit)
        console.log('Sign-out complete on iOS. App cannot be programmatically closed.');
        // Optionally, navigate to a login screen or reset app state here
        // For now, just log to avoid UI changes
      }
    } catch (error) {
      console.error('Error during logout:', error);
      // Exit anyway on Android, even if sign-out fails
      if (Platform.OS === 'android') {
        BackHandler.exitApp();
      } else {
        console.log('Sign-out failed on iOS, but logout process completed.');
      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>  
        <View style={styles.profileCard}>  
          <Image   
            source={require('../assets/images/icon.jpg')}  
            style={styles.profileImage}  
          />  
          <Text style={styles.userName}>Learning-Hub Scholar</Text>  
          <Text style={styles.userStatus}>Active Learner</Text>  
        </View>  

        <View style={styles.infoCard}>  
          <View style={styles.infoItem}>  
            <MaterialCommunityIcons name="account" size={24} color="#3498DB" />  
            <Text style={styles.infoText}>Student Account</Text>  
          </View>  
          <View style={styles.infoItem}>  
            <MaterialCommunityIcons name="school" size={24} color="#3498DB" />  
            <Text style={styles.infoText}>University Level</Text>  
          </View>  
          <TouchableOpacity   
            style={styles.linkButton}  
            onPress={() => Linking.openURL('https://mweemba-3.github.io/MS-CodeForge/')}  
          >  
            <MaterialCommunityIcons name="web" size={24} color="#ffffff" />  
            <Text style={styles.linkText}>MS CodeForge Portal</Text>  
          </TouchableOpacity>  
        </View>  

        <View style={styles.actionSection}>  
          <TouchableOpacity   
            style={styles.actionButton}   
            onPress={openWhatsApp}  
          >  
            <MaterialCommunityIcons name="whatsapp" size={24} color="#ffffff" />  
            <Text style={styles.actionText}>Contact IT (+260961439127)</Text>  
          </TouchableOpacity>  

          <TouchableOpacity   
            style={styles.logoutButton}   
            onPress={handleLogout}  
          >  
            <MaterialCommunityIcons name="logout" size={24} color="#ffffff" />  
            <Text style={styles.logoutText}>Sign Out</Text>  
          </TouchableOpacity>  
        </View>  

        <View style={styles.footerCard}>  
          <Image   
            source={require('../assets/images/MS CodeForge.jpg')}  
            style={styles.footerImage}  
          />  
          <Text style={styles.footerText}>Powered by MS CodeForge</Text>  
          <Text style={styles.footerSubtext}>Elevating your uni experience</Text>  
        </View>  
      </ScrollView>  
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  header: {
    backgroundColor: '#2C3E50',
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  profileCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#3498DB',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  userStatus: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 10,
    flex: 1,
  },
  linkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3498DB',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    marginLeft: 10,
  },
  actionSection: {
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25D366',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },
  actionText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E74C3C',
    padding: 15,
    borderRadius: 12,
    elevation: 2,
  },
  logoutText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
    marginLeft: 10,
  },
  footerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
  },
  footerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 5,
  },
  footerSubtext: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileScreen;