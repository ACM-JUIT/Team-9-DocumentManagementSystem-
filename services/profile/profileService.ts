import * as ImagePicker from "expo-image-picker";
import * as SecureStore from "expo-secure-store";

const PROFILE_IMAGE_KEY = "profile_image";

export async function pickProfileImage(): Promise<string | null> {
  const permission =
    await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (!permission.granted) {
    throw new Error(
      "Please allow photo library permission."
    );
  }

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"],
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.8,
  });

  if (result.canceled) {
    return null;
  }

  const imageUri = result.assets[0].uri;

  await SecureStore.setItemAsync(
    PROFILE_IMAGE_KEY,
    imageUri
  );

  return imageUri;
}

export async function loadProfileImage(): Promise<string |null> {
  return await SecureStore.getItemAsync(
    PROFILE_IMAGE_KEY
  );
}

export async function removeProfileImage() {
  await SecureStore.deleteItemAsync(
    PROFILE_IMAGE_KEY
  );
}