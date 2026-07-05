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

export default function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert(
        "Missing Information",
        "Please enter email and password."
      );
      return;
    }

    try {
      setLoading(true);

      await login(email.trim(), password);

      router.replace("/(tabs)/dashboard");
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Back 👋
      </Text>

      <Text style={styles.subtitle}>
        Login to continue using NexusDocs
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

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>
            Login
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/register")}
      >
        <Text style={styles.register}>
          Don't have an account? Register
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
    fontFamily: "Inter_700Bold",
    color: "#F8FAFC",
    marginBottom: 10,
    letterSpacing: 0.3,
  },

  subtitle: {
    color: "#94A3B8",
    marginBottom: 36,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
    lineHeight: 24,
  },

  input: {
    backgroundColor: "#1F2937",
    color: "#F8FAFC",

    borderWidth: 1,
    borderColor: "#374151",

    borderRadius: 18,

    paddingVertical: 16,
    paddingHorizontal: 18,

    marginBottom: 18,

    fontSize: 16,
    fontFamily: "Inter_500Medium",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,

    elevation: 5,
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

  register: {
    marginTop: 24,
    textAlign: "center",
    color: "#60A5FA",
    fontSize: 15,
    fontFamily: "Inter_500Medium",
  },
});