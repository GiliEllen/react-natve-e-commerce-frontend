import { ScrollView } from "react-native";
import Item from "./Item";

const ListItem = ({ cartItems }) => {
  return (
    <ScrollView>
      {cartItems.map((item) => {
        <Item item={item} />;
      })}
    </ScrollView>
  );
};

export default ListItem;
