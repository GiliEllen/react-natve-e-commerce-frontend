const stack = createStackNavigator();
import CompleteOrder from '../screens/completeOrderScrn/CompleteOrder';
import UserCart from './../screens/userCart/UserCart';
import { createStackNavigator } from "@react-navigation/stack";

const BagStackNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="UserCart"
        component={UserCart}
        options={{ headerShown: false }}
      />
      <stack.Screen name="CompleteOrder" component={CompleteOrder} />
    </stack.Navigator>
  );
};

export default BagStackNavigator;