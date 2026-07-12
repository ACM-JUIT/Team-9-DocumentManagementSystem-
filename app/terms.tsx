import { router } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

export default function TermsScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        Terms & Conditions
      </Text>

      <Text style={styles.updated}>
        Effective: July 2026
      </Text>

      <Text style={styles.heading}>
        1. Acceptance
      </Text>

      <Text style={styles.body}>
        By using NexusDocs, you agree to these
        Terms & Conditions and all applicable
        laws.
      </Text>

      <Text style={styles.heading}>
        2. User Responsibilities
      </Text>

      <Text style={styles.body}>
        You are responsible for maintaining
        your account credentials and using the
        application responsibly.
      </Text>

      <Text style={styles.heading}>
        3. Google Drive
      </Text>

      <Text style={styles.body}>
        NexusDocs only accesses Google Drive
        after your permission and does not
        modify or delete your files without
        your action.
      </Text>

      <Text style={styles.heading}>
        4. Intellectual Property
      </Text>

      <Text style={styles.body}>
        The NexusDocs application, design and
        source code belong to its developers.
      </Text>

      <Text style={styles.heading}>
        5. Limitation of Liability
      </Text>

      <Text style={styles.body}>
        The application is provided "as is"
        without warranties. The developers are
        not liable for data loss resulting from
        misuse of the application.
      </Text>

      <Text style={styles.heading}>
        6. Updates
      </Text>

      <Text style={styles.body}>
        These Terms may be updated in future
        versions of NexusDocs.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          Back
        </Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        © 2026 NexusDocs
      </Text>

      <Text>{"\n"}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0F172A",
    padding:20,
  },

  title:{
    marginTop:50,
    fontSize:32,
    color:"#F8FAFC",
    fontFamily:"Inter_700Bold",
  },

  updated:{
    marginTop:10,
    marginBottom:30,
    color:"#60A5FA",
    fontFamily:"Inter_500Medium",
  },

  heading:{
    marginTop:20,
    marginBottom:8,
    color:"#F8FAFC",
    fontSize:20,
    fontFamily:"Inter_700Bold",
  },

  body:{
    color:"#CBD5E1",
    lineHeight:24,
    fontSize:16,
    fontFamily:"Inter_400Regular",
  },

  button:{
    marginTop:40,
    backgroundColor:"#2563EB",
    padding:18,
    borderRadius:16,
    alignItems:"center",
  },

  buttonText:{
    color:"#FFF",
    fontSize:16,
    fontFamily:"Inter_700Bold",
  },

  footer:{
    marginTop:30,
    textAlign:"center",
    color:"#94A3B8",
    fontFamily:"Inter_400Regular",
  }
});