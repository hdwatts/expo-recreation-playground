import React, { useState } from "react";
import { Button, Pressable, StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";

import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Pressable style={styles.button}>
          <Button
            onPress={async () => {
              try {
                const resp = await fetch("http://localhost:8081/cookie");
                const data = await resp.json();
                alert("Hello " + data.hello);
              } catch (e) {
                alert("Error making request, is expo running?");
              }
            }}
            title="Expo API Route"
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Button
            onPress={async () => {
              try {
                const resp = await fetch("http://localhost:8082/cookie");
                const data = await resp.json();
                alert("Hello " + data.hello);
              } catch (e) {
                alert("Error making request, is the express server running?");
              }
            }}
            title="Express Route"
          />
        </Pressable>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
