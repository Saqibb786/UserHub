import { ActivityIndicator, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();

  const getLoggedinUser = async () => {
    let user = await AsyncStorage.getItem("user");
    if (user) {
      navigation.replace("Home");
    } else {
      navigation.replace("Login");
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.replace("Login");
    }, 3000);

    // return () => console.log("Unmounted");
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>University of Central Punjab</Text>
      </View>
      <View style={styles.loading}>
        {loading ? <ActivityIndicator size={"large"} color={"red"} /> : null}
      </View>
    </View>
  );
};

export default Splash;
