import { ScrollView } from "react-native";
import Item from "./Item";

const ListItems = ({ cartItems }) => {
  return (
    <ScrollView>
      {cartItems.map((item) => {
        <Item item={item} />;
      })}
    </ScrollView>
  );
};

export default ListItems;
