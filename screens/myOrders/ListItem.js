import { ScrollView } from "react-native";
import Item from "./Item";

const ListItem = ({ orderInfo }) => {
  return (
    <ScrollView>
      <Item />
      <Item />
      <Item />
      <Item />
    </ScrollView>
  );
};

export default ListItem;
