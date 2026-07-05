import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useAuthStore } from "@/store/authStore";

export default function RegisterScreen() {
  const register = useAuthStore((state) => state.register);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Missing Information", "Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return;
    }

    if (password.length < 6) {
      Alert.alert(
        "Weak Password",
        "Password must be at least 6 characters long."
      );
      return;
    }

    try {
      setLoading(true);

      await register(email.trim(), password);

      Alert.alert("Success", "Account created successfully!");

      router.replace("/(tabs)/dashboard");
    } catch (error: any) {
      Alert.alert("Registration Failed", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account 🚀</Text>

      <Text style={styles.subtitle}>
        Join NexusDocs today
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        style={styles.input}
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            Create Account
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.back()}
      >
        <Text style={styles.login}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#111827",
  },

  title: {
    fontSize: 34,
    color: "#F8FAFC",
    marginBottom: 10,
    letterSpacing: 0.3,
    fontFamily: "Inter_700Bold",
  },

  subtitle: {
    color: "#94A3B8",
    marginBottom: 36,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_400Regular",
  },

  input: {
    backgroundColor: "#1F2937",
    color: "#F8FAFC",

    paddingVertical: 16,
    paddingHorizontal: 18,

    borderRadius: 18,

    fontSize: 16,
    fontFamily: "Inter_500Medium",

    borderWidth: 1,
    borderColor: "#374151",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,

    elevation: 5,

    marginBottom: 18,
  },

  button: {
    backgroundColor: "#1D4ED8",

    borderRadius: 18,

    paddingVertical: 17,

    alignItems: "center",

    marginTop: 12,

    borderWidth: 1,
    borderColor: "#3B82F6",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,

    elevation: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Inter_600SemiBold",
    letterSpacing: 0.3,
  },

  login: {
    marginTop: 24,
    textAlign: "center",
    color: "#60A5FA",
    fontSize: 15,
    fontFamily: "Inter_500Medium",
  },
});