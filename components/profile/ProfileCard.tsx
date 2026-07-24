import { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { loadProfileImage } from "@/services/profile/profileService";
import { useAuthStore } from "@/store/authStore";
import { useProfileStore } from "@/store/profileStore";

export default function ProfileCard() {
  const user = useAuthStore(
    (state) => state.user
  );

  const profileImage = useProfileStore(
    (state) => state.profileImage
  );

  const setProfileImage = useProfileStore(
    (state) => state.setProfileImage
  );

  useEffect(() => {
    async function restoreImage() {
      const image = await loadProfileImage();

      if (image) {
        setProfileImage(image);
      }
    }

    restoreImage();
  }, []);

  return (
    <View style={styles.card}>
      {profileImage ? (
        <Image
          source={{ uri: profileImage }}
          style={styles.avatar}
        />
      ) : (
        <View style={styles.avatar}>
          <Text style={styles.avatarEmoji}>
            👩
          </Text>
        </View>
      )}

      <Text style={styles.name}>
        {user?.displayName || "Welcome!"}
      </Text>

      <Text style={styles.role}>
        {user?.email || "Manage your documents"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1F2937",
    marginHorizontal: 24,
    marginTop: 24,
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 24,
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#374151",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.22,
    shadowRadius: 10,

    elevation: 6,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#1E3A8A",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2563EB",
  },

  avatarEmoji: {
    fontSize: 50,
  },

  name: {
    fontSize: 24,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
    marginTop: 18,
  },

  role: {
    marginTop: 8,
    fontSize: 15,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
    textAlign: "center",
  },
});