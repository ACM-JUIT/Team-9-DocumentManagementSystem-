import { changePassword } from "@/services/auth/authService";
import { auth } from "@/services/auth/firebase";
import { router } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ChangePasswordScreen() {
  const user = auth.currentUser;

  const isGoogleUser =
    user?.providerData.some(
      (provider) => provider.providerId === "google.com"
    ) ?? false;

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleChangePassword() {
    if (isGoogleUser) {
      return;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert(
        "Missing Information",
        "Please fill all the fields."
      );
      return;
    }

    if (newPassword.length < 6) {
      Alert.alert(
        "Weak Password",
        "Password must be at least 6 characters."
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert(
        "Passwords Don't Match",
        "Please confirm your new password."
      );
      return;
    }

    try {
      setLoading(true);

      await changePassword(currentPassword, newPassword);

      Alert.alert(
        "Success",
        "Your password has been updated successfully."
      );

      router.back();
    } catch (error: any) {
      Alert.alert(
        "Update Failed",
        error.message || "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>
          Change Password
        </Text>

        <Text style={styles.subtitle}>
          Keep your account secure
        </Text>
      </View>

      {isGoogleUser ? (
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            Google Account
          </Text>

          <Text style={styles.infoText}>
            Your password is managed by your Google Account.
            {"\n\n"}
            To change it, open your Google Account Security settings.
          </Text>

          <TouchableOpacity
            style={styles.googleButton}
            onPress={() =>
              Linking.openURL(
                "https://myaccount.google.com/security"
              )
            }
          >
            <Text style={styles.googleButtonText}>
              Open Google Account Settings
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <Text style={styles.label}>
            Current Password
          </Text>

          <TextInput
            style={styles.input}
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder="Enter current password"
            placeholderTextColor="#94A3B8"
          />

          <Text style={styles.label}>
            New Password
          </Text>

          <TextInput
            style={styles.input}
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="Enter new password"
            placeholderTextColor="#94A3B8"
          />

          <Text style={styles.label}>
            Confirm Password
          </Text>

          <TextInput
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm new password"
            placeholderTextColor="#94A3B8"
          />

          <TouchableOpacity
            style={styles.button}
            disabled={loading}
            onPress={handleChangePassword}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                Update Password
              </Text>
            )}
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelText}>
          Back
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 55,
    marginBottom: 25,
  },

  title: {
    fontSize: 32,
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    color: "#94A3B8",
  },

  infoCard: {
    backgroundColor: "#1F2937",
    borderRadius: 18,
    padding: 22,
    borderWidth: 1,
    borderColor: "#374151",
    marginTop: 10,
  },

  infoTitle: {
    fontSize: 22,
    color: "#F8FAFC",
    fontFamily: "Inter_700Bold",
  },

  infoText: {
    marginTop: 12,
    fontSize: 16,
    color: "#CBD5E1",
    lineHeight: 24,
    fontFamily: "Inter_400Regular",
  },

  googleButton: {
    marginTop: 24,
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  googleButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },

  label: {
    marginTop: 20,
    marginBottom: 8,
    color: "#F8FAFC",
    fontSize: 15,
    fontFamily: "Inter_600SemiBold",
  },

  input: {
    backgroundColor: "#1F2937",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#374151",
    color: "#F8FAFC",
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },

  button: {
    marginTop: 35,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    padding: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter_700Bold",
  },

  cancelButton: {
    marginTop: 20,
    alignItems: "center",
  },

  cancelText: {
    color: "#EF4444",
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
  },
});