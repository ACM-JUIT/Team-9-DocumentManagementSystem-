import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { AppFile } from "@/types/file";

type Props = {
  visible: boolean;
  file: AppFile | null;
  onClose: () => void;
  onOpen: () => void;
  onShare: () => void;
  onDownload: () => void;
  onFavorite: () => void;
  onDetails: () => void;
};

export default function FileActionMenu({
  visible,
  file,
  onClose,
  onOpen,
  onShare,
  onDownload,
  onFavorite,
  onDetails,
}: Props) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
    >
      <Pressable
        style={styles.overlay}
        onPress={onClose}
      >
        <View style={styles.sheet}>
          <Text
            numberOfLines={1}
            style={styles.title}
          >
            {file?.name}
          </Text>

          <TouchableOpacity
            style={styles.item}
            onPress={onOpen}
          >
            <Text style={styles.text}>
              📂 Open
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={onShare}
          >
            <Text style={styles.text}>
              📤 Share
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={onDownload}
          >
            <Text style={styles.text}>
              ⬇️ Download
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={onFavorite}
          >
            <Text style={styles.text}>
              ⭐ Favorite
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={onDetails}
          >
            <Text style={styles.text}>
              ℹ️ Details
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancel}
            onPress={onClose}
          >
            <Text style={styles.cancelText}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  sheet: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 22,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 18,
  },

  item: {
    paddingVertical: 18,
  },

  text: {
    fontSize: 18,
  },

  cancel: {
    alignItems: "center",
    marginTop: 15,
    padding: 18,
  },

  cancelText: {
    color: "#EF4444",
    fontWeight: "700",
    fontSize: 17,
  },
});