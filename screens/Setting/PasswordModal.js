import { useEffect, useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { changePassword } from "../../api/userPasswordApi";
import { useSelector } from "react-redux";
import { selectUserState } from "../../reducers/user/userSlice";

const PasswordModal = ({ visible, onClose }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [samePass, setSamePass] = useState(false);
  const user = useSelector(selectUserState);

  useEffect(() => {
    if (newPass === repeatPass) setSamePass(true);
    if (newPass === "" || repeatPass === "") setSamePass(false);
  }, [newPass, repeatPass]);

  const resetForm = () => {
    setOldPass("");
    setNewPass("");
    setRepeatPass("");
  };

  const onSubmit = async () => {
    try {
      const changedSuccessfully = await changePassword(
        user._id,
        oldPass,
        newPass,
        repeatPass
      );
      if (!changedSuccessfully) {
        resetForm();
      } else {
        resetForm();
        onClose();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Pressable
            onPress={() => {
              onClose();
              resetForm();
            }}
          >
            <Text style={styles.line}>____</Text>
          </Pressable>
          <Text style={styles.modalHeader}>Password Change</Text>
          <TextInput
            style={styles.input}
            onChangeText={setOldPass}
            secureTextEntry={true}
            value={oldPass}
            textContentType={"password"}
            placeholder="Old Password"
          />
          <Text style={styles.forgetYP}>Forget your password?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setNewPass}
            secureTextEntry={true}
            value={newPass}
            textContentType={"password"}
            placeholder="New Password"
          />
          {newPass.length > 0 && newPass.length < 8 ? (
            <Text style={styles.red}>Password must be at least 8 chars.</Text>
          ) : null}
          <TextInput
            style={styles.input}
            onChangeText={setRepeatPass}
            secureTextEntry={true}
            value={repeatPass}
            textContentType={"password"}
            placeholder="Repeat New Password"
          />
          {!samePass && repeatPass.length > 0 ? (
            <Text style={styles.red}>Passwords needs to be equal.</Text>
          ) : null}

          <TouchableOpacity
            style={samePass ? styles.subBtn : styles.subBtnUnused}
            onPress={() => {
              if (!samePass) return;
              onSubmit();
            }}
          >
            <Text style={styles.subBtnText}>SAVE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalComp: {
    width: "100%",
    padding: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    backgroundColor: "#F9F9F9",
    padding: 30,
    borderRadius: 40,
    elevation: 5,
    position: "absolute",
    top: "40%",
    left: "0%",
    bottom: 0,
  },
  input: {
    height: 40,
    marginVertical: 12,
    height: 60,
    backgroundColor: "white",

    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    borderRadius: 4,
    padding: 10,
  },
  modalHeader: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "700",
  },
  forgetYP: {
    color: "#9B9B9B",
    textAlign: "right",
    marginBottom: 15,
  },
  subBtn: {
    backgroundColor: "#D32626",
    width: "100%",
    height: 48,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: "#D32626",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },
  subBtnUnused: {
    backgroundColor: "#0033",
    width: "100%",
    height: 48,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: "#00000033",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 5,
  },

  subBtnText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 18,
  },
  line: {
    fontWeight: "bold",
    fontSize: 40,
    color: "gray",
    lineHeight: 8,
    marginBottom: 18,
    textAlign: "center",
  },
  red: {
    color: "red",
  },
});
export default PasswordModal;
