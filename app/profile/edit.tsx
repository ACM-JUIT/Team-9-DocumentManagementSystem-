import { auth } from "@/services/auth/firebase";
import {
    loadProfileImage,
    pickProfileImage,
} from "@/services/profile/profileService";
import { useProfileStore } from "@/store/profileStore";

import { router } from "expo-router";
import { updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function EditProfileScreen() {
  const user = auth.currentUser;

  const profileImage = useProfileStore(
    (state) => state.profileImage
  );

  const setProfileImage = useProfileStore(
    (state) => state.setProfileImage
  );

  const [displayName, setDisplayName] = useState(
    user?.displayName ?? ""
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function restoreImage() {
      const image = await loadProfileImage();

      if (image) {
        setProfileImage(image);
      }
    }

    restoreImage();
  }, []);

  async function handlePickImage() {
    try {
      const image = await pickProfileImage();

      if (image) {
        setProfileImage(image);
      }
    } catch (error: any) {
      Alert.alert(
        "Image Picker",
        error.message
      );
    }
  }

  async function handleSave() {
    if (!user) {
      Alert.alert("Error", "No user found.");
      return;
    }

    if (!displayName.trim()) {
      Alert.alert(
        "Missing Name",
        "Please enter your display name."
      );
      return;
    }

    try {
      setLoading(true);

      await updateProfile(user, {
        displayName: displayName.trim(),
      });

      Alert.alert(
        "Success",
        "Profile updated successfully."
      );

      router.back();
    } catch (error: any) {
      Alert.alert(
        "Update Failed",
        error.message
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarSection}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={handlePickImage}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={styles.avatar}
            />
          ) : (
            <Image
              source={{
                uri:
                  user?.photoURL ??
                  "https://ui-avatars.com/api/?name=User",
              }}
              style={styles.avatar}
            />
          )}
        </TouchableOpacity>

        <Text style={styles.photoText}>
          Tap photo to change
        </Text>
      </View>

      <Text style={styles.label}>
        Display Name
      </Text>

      <TextInput
        value={displayName}
        onChangeText={setDisplayName}
        style={styles.input}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>
        Email
      </Text>

      <TextInput
        editable={false}
        value={user?.email ?? ""}
        style={[styles.input, styles.disabled]}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            Save Changes
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancel}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelText}>
          Cancel
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  avatarSection: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E5E7EB",
  },

  photoText: {
    marginTop: 12,
    color: "#2563EB",
    fontWeight: "600",
    fontSize: 15,
  },

  label: {
    marginBottom: 8,
    marginTop: 20,
    fontSize: 15,
    fontWeight: "600",
    color: "#374151",
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 16,
  },

  disabled: {
    backgroundColor: "#F3F4F6",
    color: "#6B7280",
  },

  button: {
    marginTop: 35,
    backgroundColor: "#2563EB",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 16,
  },

  cancel: {
    marginTop: 18,
    alignItems: "center",
    marginBottom: 40,
  },

  cancelText: {
    color: "#EF4444",
    fontWeight: "600",
    fontSize: 16,
  },
});