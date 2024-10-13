import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DATA } from "../../utils/data";
import { COLORS } from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.replace("Login");
  };

  const renderItemHorizontal = ({ index, item }) => {
    return (
      <View
        style={{
          backgroundColor: getRandomColor()?.hex,
          marginHorizontal: 4,
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 4,

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          // numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingVertical: 4,
            paddingHorizontal: 15,
          }}
        >
          {item.name}
        </Text>
        <Text
          // numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "normal",
            paddingVertical: 4,
            paddingHorizontal: 15,
          }}
        >
          {item.email}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            marginVertical: 8,
            marginHorizontal: 4,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            Users
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              horizontal
              data={DATA}
              renderItem={renderItemHorizontal}
              keyExtractor={(item) => item?.id}
              numColumns={1}
              contentContainerStyle={{ marginVertical: 4 }}
              showsHorizontalScrollIndicator={false}
            />

            {DATA.map((person) => (
              <View
                key={person.id}
                style={{
                  borderBottomWidth: 2,
                  // borderTopWidth: 2,
                  borderColor: getRandomColor()?.borderColor,
                  padding: 16,
                  marginVertical: 8,
                  width: "100%",
                }}
              >
                <Text
                  // numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingVertical: 3,
                  }}
                >
                  {person.id}. {person.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    fontWeight: "normal",
                    fontSize: 16,
                    paddingVertical: 5,
                  }}
                >
                  {person.email}
                </Text>
              </View>
            ))}
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={styles.loginButtonContainer}
                onPress={handleLogout}
              >
                <Text style={styles.loginButtonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  loginButtonContainer: {
    width: "90%",
    overflow: "hidden",
    backgroundColor: "red",
    paddingVertical: 16,
    paddingHorizontal: 6,
    marginVertical: 12,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
