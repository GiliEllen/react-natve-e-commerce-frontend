import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { getAllProducts, getUsersOrder } from "../../api/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { setActiveOrder } from "../../reducers/cart/userCartSlice";
import { selectUserState } from "../../reducers/user/userSlice";

const MainScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUserState);

  const handleGetOrder = async () => {
    try {
      const userId = user._id;
      const data = await getUsersOrder(userId);
      dispatch(setActiveOrder(data.order));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleGetOrder();
  }, []);
  return (
    <View>
      <Text>MainScreen</Text>
      <Pressable onPress={() => getAllProducts()}>
        <Text>TEST</Text>
      </Pressable>
    </View>
  );
};

export default MainScreen;
