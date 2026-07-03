import * as DocumentPicker from "expo-document-picker";
import { Button } from "react-native-paper";

import { saveFile } from "@/services/storage/storage";

type Props = {
  onUploadSuccess: () => void;
};

export default function QuickActionButton({
  onUploadSuccess,
}: Props) {
  async function uploadFile() {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: false,
      copyToCacheDirectory: true,
    });

    if (result.canceled) return;

    const file = result.assets[0];

    const extension =
      file.name.split(".").pop()?.toLowerCase() ?? "";

    const mimeType = file.mimeType ?? "unknown";

    function getCategory(ext: string) {
      if (["pdf"].includes(ext)) return "PDF";

      if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext))
        return "Image";

      if (["mp4", "mov", "avi", "mkv"].includes(ext))
        return "Video";

      if (["doc", "docx"].includes(ext))
        return "Document";

      if (["xls", "xlsx"].includes(ext))
        return "Spreadsheet";

      if (["ppt", "pptx"].includes(ext))
        return "Presentation";

      if (["mp3", "wav"].includes(ext))
        return "Audio";

      if (["zip", "rar"].includes(ext))
        return "Archive";

      return "Other";
    }

    await saveFile({
      id: Date.now().toString(),
      name: file.name,
      uri: file.uri,
      size: file.size ?? 0,
      mimeType,
      extension,
      category: getCategory(extension),

      // ✅ Fixed
      storage: "Local",

      isFavorite: false,
      uploadedAt: new Date().toISOString(),
      modifiedAt: new Date().toISOString(),
    });

    onUploadSuccess();

    alert("File Saved Successfully!");
  }

  return (
    <Button
      mode="contained"
      onPress={uploadFile}
      style={{
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 12,
      }}
      contentStyle={{
        height: 55,
      }}
    >
      Upload File
    </Button>
  );
}