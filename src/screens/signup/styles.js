import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  subContainer: {
    flex: 1,
    //   alignItems: 'center',
    //   alignSelf: 'center',
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  img: {
    alignSelf: "center",
    marginVertical: 2,
  },
  textInput: {
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
  },
  marginVertical: {
    marginVertical: 2,
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  full: {
    width: 100,
    height: 100,
  },
  selfCenter: {
    alignSelf: "center",
  },
  hPadding: {
    paddingHorizontal: 16,
  },
  flex: {
    flex: 1,
  },
  justifyCenter: {
    justifyContent: "center",
  },
  loginLink: {
    width: "95%",
    overflow: "hidden",
    marginVertical: 4,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  btn: {
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
  },
  colorWhite: {
    color: "#fff",
  },
});

export default styles;
