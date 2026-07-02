import * as FileSystem from "expo-file-system/legacy";
import * as IntentLauncher from "expo-intent-launcher";

export async function openLocalFile(uri: string) {
  try {
    const contentUri = await FileSystem.getContentUriAsync(uri);

    await IntentLauncher.startActivityAsync(
      "android.intent.action.VIEW",
      {
        data: contentUri,
        flags: 1,
      }
    );
  } catch (error) {
    console.log(error);
  }
}