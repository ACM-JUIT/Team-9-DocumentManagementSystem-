import { StyleSheet, Text, View } from "react-native";
export default function ProfileCard() {
    return (
        <View style={styles.card}>
            <View style={styles.avatar}>
                <Text style={styles.avatarEmoji}>👩
                 </Text>
                 </View>
                 <Text style={styles.name}>
                 Welcome!
                 </Text>
                 <Text style={styles.role}>
                 Manage your documents
                 </Text>
                 </View>
    );
}
const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 20,
        marginTop: 25,
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#DBEAFE",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarEmoji: {
        fontSize: 52,
    },
    name: {
        fontSize: 24,
        fontWeight: "700",
        marginTop: 18,
    },
    role: {
        fontSize: 16,
        color: "#6B7280",
        marginTop: 6,
    },
});