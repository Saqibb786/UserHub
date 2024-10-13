import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* <ScrollView ></ScrollView> */}
        {/* image */}
        <View style={styles.img}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.full}
          />
        </View>
        {/* inputs */}
        <View style={styles.marginVertical}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={name}
            onChangeText={(e) => setName(e)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Number"
            value={number}
            onChangeText={(e) => setNumber(e)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
          />
        </View>

        <View style={styles.marginVertical}>
          <TouchableOpacity style={styles.btn}>
            <View>
              <Text style={[styles.boldText, styles.colorWhite]}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.marginVertical}>
          <TouchableOpacity style={styles.loginLink}>
            <View>
              <Text style={styles.boldText} onPress={navigateToLogin}>
                Login?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;
