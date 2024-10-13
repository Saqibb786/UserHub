import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Home from "../home/home";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateToSignup = () => {
    navigation.navigate("Signup");
  };
  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "All input fields are required",
        position: "bottom",
      });

      return;
    }
    try {
      let userData = { email, password };
      let finalUserData = JSON.stringify(userData);
      AsyncStorage.setItem("user", finalUserData);
      navigation.replace("Home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 16,
        }}
      >
        {/* image */}
        <View
          style={{
            alignSelf: "center",
            marginVertical: 2,
          }}
        >
          <Image
            source={require("../../assets/logo.png")}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </View>
        {/* inputs */}
        <View
          style={{
            marginVertical: 2,
          }}
        >
          <TextInput
            style={{
              width: "95%",
              backgroundColor: "#f7f7f7",
              paddingVertical: 16,
              paddingHorizontal: 6,
              marginVertical: 4,
              borderWidth: "#707070",
              borderWidth: 1,
              borderRadius: 4,
              fontSize: 16,
              alignSelf: "center",
            }}
            placeholder="Email"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            style={{
              width: "95%",
              backgroundColor: "#f7f7f7",
              paddingVertical: 16,
              paddingHorizontal: 6,
              marginVertical: 4,
              borderWidth: "#707070",
              borderWidth: 1,
              borderRadius: 4,
              fontSize: 16,
              alignSelf: "center",
            }}
            placeholder="Password"
            value={password}
            onChangeText={(e) => setPassword(e)}
            secureTextEntry
          />
        </View>

        <View
          style={{
            marginVertical: 2,
          }}
        >
          <TouchableOpacity
            style={{
              width: "95%",
              overflow: "hidden",
              backgroundColor: "red",
              paddingVertical: 16,
              paddingHorizontal: 6,
              marginVertical: 4,
              borderRadius: 4,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
            onPress={() => handleLogin()}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginVertical: 2,
          }}
        >
          <TouchableOpacity
            style={{
              width: "95%",
              overflow: "hidden",
              marginVertical: 4,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
            onPress={navigateToSignup}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Sign up?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default Login;
