import {
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { BackIcon, SearchIcon } from "../myOrders/Svgs/icons";
import { useState } from "react";
import PasswordModal from "./PasswordModal";
import { useSelector } from "react-redux";
import { selectUserState } from "./userSlice";

const SettingPage = ({ navigation }) => {
  const [modalVis, setModalVis] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  const user = useSelector(selectUserState);

  const popUp = () => {
    setModalVis((prev) => {
      return !prev;
    });
  };
  return (
    <View>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            navigation.navigate(`ProfilePage`, {
              name: `ProfilePage`,
            });
          }}
        >
          <BackIcon />
        </Pressable>
        <SearchIcon />
      </View>
      <View style={styles.settingPage}>
        <View>
          <Text style={styles.SettingHeader}>Settings</Text>
        </View>
        <View>
          <Text style={styles.personalInfo}>Personal Information</Text>
        </View>
      </View>
      <View style={styles.settingPage}>
        <View>
          <Text style={styles.fullName}>{`Full name ${
            user.name ? user.name : null
          }`}</Text>
        </View>
        <View style={styles.changePassComp}>
          <View style={[styles.row, { paddingVertical: 24 }]}>
            <Text style={styles.passwordHead}>Password</Text>
            <Pressable onPress={popUp}>
              <Text style={styles.change}>Change</Text>
              <PasswordModal visible={modalVis} onClose={popUp} />
            </Pressable>
          </View>
          <View style={styles.passwordField}>
            <Text style={styles.passLabel}>password</Text>
            <Text>************</Text>
          </View>
        </View>
        <View>
          <Text style={styles.notification}>Notifications</Text>
          <View style={styles.row}>
            <Text style={styles.notificationSett}>Sales</Text>
            <Switch
              trackColor={{ false: "#e7ece9", true: "#e7ece9" }}
              thumbColor={isEnabled1 ? "#2AA952" : "#f4f3f4"}
              ios_backgroundColor="#e7ece9"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.notificationSett}>New arrivals</Text>
            <Switch
              trackColor={{ false: "#e7ece9", true: "#e7ece9" }}
              thumbColor={isEnabled2 ? "#2AA952" : "#f4f3f4"}
              ios_backgroundColor="#e7ece9"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
          </View>
          <View style={styles.row}>
            <Text style={styles.notificationSett}>Delivery status changes</Text>
            <Switch
              trackColor={{ false: "#e7ece9", true: "#e7ece9" }}
              thumbColor={isEnabled3 ? "#2AA952" : "#f4f3f4"}
              ios_backgroundColor="#e7ece9"
              onValueChange={toggleSwitch3}
              value={isEnabled3}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  settingPage: {
    padding: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "white",
  },
  SettingHeader: {
    paddingVertical: 5,
    fontSize: 34,
    fontWeight: "700",
  },
  personalInfo: {
    fontSize: 16,
    fontWeight: "700",
  },
  fullName: {
    backgroundColor: "white",
    paddingVertical: 32,
    paddingHorizontal: 16,
    color: "#9B9B9B",
    fontSize: 14,
  },
  changePassComp: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  passwordHead: {
    fontSize: 16,
    fontWeight: "700",
  },
  change: {
    fontSize: 14,
    color: "#9B9B9B",
  },
  passwordField: {
    backgroundColor: "white",
    borderRadius: 3,
    paddingHorizontal: 20,
    paddingVertical: 13,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  passLabel: {
    color: "#9B9B9B",
    paddingVertical: 5,
  },
  notification: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 24,
  },
  notificationSett: {
    fontSize: 14,
    fontWeight: 500,
    paddingVertical: 15,
  },
});

export default SettingPage;
