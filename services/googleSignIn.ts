import {
    GoogleSignin,
} from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,

  scopes: [
    "profile",
    "email",
    "https://www.googleapis.com/auth/drive.readonly",
  ],

  offlineAccess: false,

  forceCodeForRefreshToken: false,
});

export default GoogleSignin;