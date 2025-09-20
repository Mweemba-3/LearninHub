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

const CloudinaryDownloader13 = ({ contextId }) => {
  const [downloadedDocs, setDownloadedDocs] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [deviceId, setDeviceId] = useState(null);

  const cloudinaryUris = [
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587583/bio/bio111/Bio Lecture.ppt",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587583/bio/bio111/Bio111.ppt",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587578/bio/bio111/Bio 111 lecture.ppt",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587576/bio/bio111/Lecture Carbohydrates.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587572/BioMolecules.pdf",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587505/bio/bio111/Bio 111 lecture %2C.ppt",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587498/bio/bio111/Cell Membrane and Transport functions.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587498/bio/bio111/Cytology lecture 1.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587497/bio/bio111/Bio Molecules and Cells.pdf",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587496/bio/bio111/Biology lecture.docx",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587496/bio/bio111/Bio molecules cheat.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587495/bio/bio111/CarboHydrates detail.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587495/bio/bio111/Water%28H2O%29.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587493/bio/bio111/Enzymes.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587469/bio/bio111/Bio Lecture.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587452/bio/bio111/Cytology study of cells.pdf",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587451/bio/bio111/Bio Lecture...ppt",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587446/bio/bio111/Bio111...Lecture Slide.ppt",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587443/bio/bio111/Bio 111 Lecture.pdf",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587443/bio/bio111/Biology 111 Lecture.ppt",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587436/bio/bio111/Nucleic Acids1.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587437/bio/bio111/Nucleic Acids.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587434/bio/bio111/H20.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587434/bio/bio111/Lipids Bio.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587432/bio/bio111/BioMolecules and Cells.pdf",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587432/bio/bio111/Biology Lectureussb.ppt",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587428/bio/bio111/Cell Membrane lect.pdf",
    "https://res.cloudinary.com/dpxvpbtie/image/upload/v1737587428/bio/bio111/LECTURE%20%21.pdf",
    "https://res.cloudinary.com/dpxvpbtie/raw/upload/v1737587423/bio/bio111/Bio111 Lecture.ppt"
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

export default CloudinaryDownloader13;