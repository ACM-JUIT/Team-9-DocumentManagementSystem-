import { Button, View } from "react-native";

import { connectGoogleDrive } from "@/services/googleDrive";

export default function Test() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      <Button
        title="Connect Google"

        onPress={async () => {
          const user =
            await connectGoogleDrive();

          console.log(user);
        }}
      />
    </View>
  );
}