import * as Linking from "expo-linking";
import * as Sharing from "expo-sharing";

import { openLocalFile } from "./openLocalFile";

import { AppFile } from "@/types/file";

export async function openFile(file: AppFile) {
  try {
    if (file.storage === "Local") {
      if (!file.uri) return;

      await openLocalFile(file.uri);

      return;
    }

    if (file.storage === "Google Drive") {
      const url =
        file.webViewLink ??
        `https://drive.google.com/file/d/${file.driveId}/view`;

      await Linking.openURL(url);

      return;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function shareFile(file: AppFile) {
  try {
    if (
      file.storage === "Local" &&
      file.uri
    ) {
      await Sharing.shareAsync(file.uri);
    }
  } catch (error) {
    console.log(error);
  }
}