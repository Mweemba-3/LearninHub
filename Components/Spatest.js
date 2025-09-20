import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as FileSystem from "expo-file-system";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import * as IntentLauncher from "expo-intent-launcher";
import { getAuth } from "firebase/auth";

const CloudinaryDownloader94= ({ contextId }) => {
  const [downloadedDocs, setDownloadedDocs] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const auth = getAuth();
  const user = auth.currentUser;

  const cloudinaryUris = [
      "https://res.cloudinary.com/dpxvpbtie/image/upload/v1739270250/Assignment Group work.pdf ",
      "https://res.cloudinary.com/dpxvpbtie/image/upload/v1739270311/Final Exam Strategic Management in The Public Sector.pdf ",
      "https://res.cloudinary.com/dpxvpbtie/image/upload/v1739270303/SPA 212 Final Exam.pdf ",
    
    //data
  ];
  useEffect(() => {
    if (user) {
      loadDownloadedDocs(user.uid, contextId);
    } else {
      Alert.alert("Error", "No user is currently logged in.");
    }
  }, [user, contextId]);

  const loadDownloadedDocs = async (uid, id) => {
    try {
      const storedDocs = await AsyncStorage.getItem(`downloadedDocs_${uid}_${id}`);
      if (storedDocs) {
        const parsedDocs = JSON.parse(storedDocs);
        const now = Date.now();
        const validDocs = parsedDocs.filter((doc) => now - doc.timestamp <= 15 * 60 * 60 * 1000);
        setDownloadedDocs(validDocs);
        await AsyncStorage.setItem(`downloadedDocs_${uid}_${id}`, JSON.stringify(validDocs));
      }
    } catch (error) {
      console.error("Error loading downloaded documents:", error);
    }
  };

  const saveDownloadedDocs = async (uid, id, docs) => {
    try {
      await AsyncStorage.setItem(`downloadedDocs_${uid}_${id}`, JSON.stringify(docs));
    } catch (error) {
      console.error("Error saving downloaded documents:", error);
    }
  };

  const downloadDocument = async (uri) => {
    if (!user) {
      Alert.alert("Error", "You must be logged in to download documents.");
      return;
    }

    const fileName = uri.split("/").pop();
    const isAlreadyDownloaded = downloadedDocs.some((doc) => doc.name === fileName);

    if (isAlreadyDownloaded) {
      Alert.alert("Already Downloaded", `The document "${fileName}" is already downloaded.`);
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
            (downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite) * 100;
          setProgress(Math.round(progressPercentage));
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
      saveDownloadedDocs(user.uid, contextId, updatedDocs);

      Alert.alert("Download Successful", `Document downloaded: ${newDoc.name}`);
    } catch (error) {
      setIsDownloading(false);
      Alert.alert("Download Failed", "Unable to download the document.");
      console.error(error);
    }
  };

  const openDocument = async (fileUri) => {
    try {
      const contentUri = await FileSystem.getContentUriAsync(fileUri);
      await IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: contentUri,
        flags: 1,
      });
    } catch (error) {
      console.error("Error opening document:", error);
      Alert.alert("Error", "Cannot open the document. Please try again.");
    }
  };

  const renderDocumentItem = ({ item, onPress, iconColor }) => (
    <TouchableOpacity style={styles.documentItem} onPress={onPress}>
      <Ionicons name="document-text-outline" size={30} color={iconColor} />
      <Text style={styles.documentText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Documents</Text>
      <FlatList
        data={cloudinaryUris.map((uri) => ({ uri, name: uri.split("/").pop() }))}
        renderItem={({ item }) =>
          renderDocumentItem({
            item,
            onPress: () => downloadDocument(item.uri),
            iconColor: "#007bff",
          })
        }
        keyExtractor={(item) => item.uri}
      />

      <Text style={styles.header}>Downloaded Documents</Text>
      <FlatList
        data={downloadedDocs}
        renderItem={({ item }) =>
          renderDocumentItem({
            item,
            onPress: () => openDocument(item.uri),
            iconColor: "#28a745",
          })
        }
        keyExtractor={(item) => item.uri}
      />

      {isDownloading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.text}>Downloading... {progress}%</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 5,
  },
  documentItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    elevation: 3,
  },
  documentText: {
    marginLeft: 15,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  loaderContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});
export default CloudinaryDownloader94;