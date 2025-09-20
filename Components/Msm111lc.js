import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Platform,
  ProgressViewIOS,
  ProgressBarAndroid,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Application from 'expo-application';

const CloudinaryDownloader5= ({ contextId }) => {
  const [downloadedDocs, setDownloadedDocs] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [deviceId, setDeviceId] = useState(null);

  const cloudinaryUris = [
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426091/MSM111/LECTURE/QUADRATIC FUNCTIONS AND EQUATIONS LECTURE NOTES 5.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426075/MSM111/LECTURE/INTRODUCTION TO THE THEORY OF SETS LECTURE NOTES 1.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426073/MSM111/LECTURE/SET THEORY.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426072/MSM111/LECTURE/Relations and Functions.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426071/MSM111/LECTURE/QUADRATIC FUNCTIONS AND EQUATIONS LECTURE 7.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426071/MSM111/LECTURE/FUNCTIONS LECTURE NOTES 3.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426063/MSM111/LECTURE/SURDS LECTURE NOTES 2.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426060/MSM111/LECTURE/MATHEMATICAL INDUCTION LECTURE NOTES 9.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426060/MSM111/LECTURE/PARTIAL FRACTIONSN LECTURE NOTES 10.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426058/MSM111/LECTURE/Lecture 4: Binary Numbers.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426058/MSM111/LECTURE/Exponential And Logarithmic Functions LECTURE NOTES 7.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426055/MSM111/LECTURE/BINOMIAL EXPANSION LECTURE NOTES 8.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426052/MSM111/LECTURE/POLYNOMIAL FUNCTIONS OF DEGREE 3 and 4 LECTURE NOTES 6.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426049/MSM111/LECTURE/Beng Analytical Geometry and Vector Analysis.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426045/MSM111/LECTURE/COMPLEX NUMBERS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426035/MSM111/LECTURE/UNIT 11: PARTIAL FRACTIONS.pdf ",
    " https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426005/MSM111/LECTURE/UNIT 4 COMPLEX NUMBERS %E2%84%82.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426003/MSM111/LECTURE/Vectors.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738426002/MSM111/LECTURE/UNIT 15. MATRICES.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425999/MSM111/LECTURE/UNIT 14 .BINOMIAL THEOREM AND PROGRESSION.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425998/MSM111/LECTURE/UNIT 12 SEQUENCES AND SERIES %28ARITHMETIC AND GEOMETRIC SERIES  WITH APPLICATIONS%29 12.1 ARITHMETIC SEQUENCES.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425997/MSM111/LECTURE/UNIT 16. EXPONENTIAL AND LOGARITHMIC FUNCTIONS 16.1 EXPONENTIAL FUNCTIONS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425996/MSM111/LECTURE/ELEMENTARY NOTIONS OF PROBABILITY.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425994/MSM111/LECTURE/UNIT 5 BINARY OPERATIONS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425993/MSM111/LECTURE/TOPIC: Relations and Functions. LECTURERS: Dr. Obias M. Chimbola and Mr. Edwin Moyo.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425992/MSM111/LECTURE/3.2% Matrices.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425991/MSM111/LECTURE/1. Sets 1.1 Set Theory.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425991/MSM111/LECTURE/FUNCTIONS LECTURE 5.pdf ",
    " https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425991/MSM111/LECTURE/Partial fractions.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425990/MSM111/LECTURE/Chapter 9 Matrices and Determinants.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425990/MSM111/LECTURE/SETS%2C RELATIONS AND FUNCTIONS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425989/MSM111/LECTURE/UNIT 13 MATHEMATICAL INDUCTION.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425987/MSM111/LECTURE/Functions Notes.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425985/MSM111/LECTURE/TRANSCEDENTAL FUNCTIONS. 9.1 TRIGONOMETRIC FUNCTIONS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425984/MSM111/LECTURE/UNIT 8 QUADRATIC EQUATIONS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425983/MSM111/LECTURE/Quadratic Equations.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425983/MSM111/LECTURE/LECTURE NOTES 7. BINOMIAL EXPANSIONS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425979/MSM111/LECTURE/QUADRATIC FUNCTIONS AND EQUATIONS LECTURE 8.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425975/MSM111/LECTURE/UNIT 9 POLYNOMIALS 9.1 DIVISION ALGORITHM FOR POLYNOMIALS.pdf ",
    " https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425975/MSM111/LECTURE/Unit 19.4 Sum and difference formulas.pdf",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1738425974/MSM111/LECTURE/MSM Lecture 1.pptx ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425973/MSM111/LECTURE/Chapter 4 Partial Fractions.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425970/MSM111/LECTURE/INTRODUCTION TO THE THEORY OF SETS LECTURE.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425969/MSM111/LECTURE/DIVISION OF POLYNOMIALS.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425969/MSM111/LECTURE/Even and Odd Functions Mr. Kafunda Tuesday.pdf ",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1738425967/MSM111/LECTURE/Binomial Theorem.pdf ",
    
   //data
 ];

  useEffect(() => {
    const getDeviceId = async () => {
      try {
        let id = await AsyncStorage.getItem('@deviceId');
        if (!id) {
          id = Platform.OS === 'android'
            ? await Application.getAndroidId()
            : `ios_${Math.random().toString(36).substring(2, 15)}`;
          await AsyncStorage.setItem('@deviceId', id);
        }
        setDeviceId(id);
        loadDownloadedDocs(id, contextId);
      } catch (error) {
        console.error('Device ID error:', error);
        Alert.alert('Error', 'Failed to initialize device');
      }
    };

    getDeviceId();
  }, [contextId]);

  const loadDownloadedDocs = async (deviceId, id) => {
    try {
      const storedDocs = await AsyncStorage.getItem(`downloadedDocs_${deviceId}_${id}`);
      if (storedDocs) {
        const parsedDocs = JSON.parse(storedDocs);
        const now = Date.now();
        const validDocs = parsedDocs.filter((doc) => now - doc.timestamp <= 15 * 60 * 60 * 1000);
        setDownloadedDocs(validDocs);
        await AsyncStorage.setItem(`downloadedDocs_${deviceId}_${id}`, JSON.stringify(validDocs));
      }
    } catch (error) {
      console.error('Error loading downloaded documents:', error);
    }
  };

  const saveDownloadedDocs = async (docs) => {
    try {
      await AsyncStorage.setItem(`downloadedDocs_${deviceId}_${contextId}`, JSON.stringify(docs));
    } catch (error) {
      console.error('Error saving downloaded documents:', error);
    }
  };

  const downloadDocument = async (uri) => {
    const fileName = uri.split('/').pop();
    const isAlreadyDownloaded = downloadedDocs.some((doc) => doc.name === fileName);

    if (isAlreadyDownloaded) {
      Alert.alert('Already Downloaded', `"${fileName}" is in your downloads!`);
      return;
    }

    try {
      setIsDownloading(true);
      setProgress(0);

      const fileUri = `${FileSystem.documentDirectory}${fileName}`;
      const downloadResumable = FileSystem.createDownloadResumable(
        uri,
        fileUri,
        {},
        (downloadProgress) => {
          const progressPercentage =
            downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
          setProgress(progressPercentage);
        }
      );

      const { uri: downloadedUri } = await downloadResumable.downloadAsync();
      setIsDownloading(false);

      const newDoc = {
        uri: downloadedUri,
        timestamp: Date.now(),
        name: fileName,
      };

      const updatedDocs = [...downloadedDocs, newDoc];
      setDownloadedDocs(updatedDocs);
      saveDownloadedDocs(updatedDocs);

      Alert.alert('Success!', `${newDoc.name} is ready to view!`);
    } catch (error) {
      setIsDownloading(false);
      Alert.alert('Download Failed', 'Oops! Something went wrong.');
      console.error(error);
    }
  };

  const openDocument = async (fileUri) => {
    try {
      const contentUri = await FileSystem.getContentUriAsync(fileUri);
      await IntentLauncher.startActivityAsync('android.intent.action.VIEW', {
        data: contentUri,
        flags: 1,
      });
    } catch (error) {
      console.error('Error opening document:', error);
      Alert.alert('Error', 'Can’t open this file right now.');
    }
  };

  const renderDocumentItem = ({ item, onPress, iconColor, isDownloaded }) => (
    <TouchableOpacity style={styles.documentItem} onPress={onPress}>
      <Ionicons name={isDownloaded ? 'document' : 'cloud-download'} size={24} color={iconColor} />
      <View style={styles.docInfo}>
        <Text style={styles.documentText}>{item.name}</Text>
        {isDownloaded && (
          <Text style={styles.docSize}>
            {((Math.random() * 5 + 1).toFixed(1))} MB • {new Date(item.timestamp).toLocaleDateString()}
          </Text>
        )}
      </View>
      <Ionicons name="chevron-forward" size={20} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Study Resources</Text>
      </View>

      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.sectionTitle}>Available Downloads</Text>
            <FlatList
              data={cloudinaryUris.map((uri) => ({ uri, name: uri.split('/').pop() }))}
              renderItem={({ item }) =>
                renderDocumentItem({
                  item,
                  onPress: () => downloadDocument(item.uri),
                  iconColor: '#3498DB',
                  isDownloaded: false,
                })
              }
              keyExtractor={(item) => item.uri}
              style={styles.list}
            />

            <Text style={styles.sectionTitle}>Your Downloads</Text>
          </>
        }
        data={downloadedDocs}
        renderItem={({ item }) =>
          renderDocumentItem({
            item,
            onPress: () => openDocument(item.uri),
            iconColor: '#2ECC71',
            isDownloaded: true,
          })
        }
        keyExtractor={(item) => item.uri}
        style={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No downloads yet. Grab some study materials above!</Text>
        }
      />

      {isDownloading && (
        <View style={styles.downloadOverlay}>
          <View style={styles.downloadCard}>
            <ActivityIndicator size="large" color="#3498DB" />
            <Text style={styles.downloadText}>Downloading... {Math.round(progress * 100)}%</Text>
            {Platform.OS === 'ios' ? (
              <ProgressViewIOS
                style={styles.progressBar}
                progress={progress}
                progressTintColor="#3498DB"
              />
            ) : (
              <ProgressBarAndroid
                style={styles.progressBar}
                styleAttr="Horizontal"
                indeterminate={false}
                progress={progress}
                color="#3498DB"
              />
            )}
          </View>
        </View>
      )}
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
  list: {
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  documentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  docInfo: {
    flex: 1,
    marginLeft: 15,
  },
  documentText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  docSize: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    padding: 20,
    fontStyle: 'italic',
  },
  downloadOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  downloadText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
    fontWeight: '500',
  },
  progressBar: {
    width: '100%',
    height: 8,
  },
});

export default CloudinaryDownloader5;