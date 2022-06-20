import { CATEGORIES } from "../data/dummy-data";

import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";

const CategoriesScreen = ({ navigation }) => {
  const numColumns = 2;

  const renderItem = (itemData) => {
    console.log(itemData.item.id);
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };
    return (
      <CategoryGridItem
        title={itemData.item.title}
        color={itemData.item.color}
        id={itemData.item.id}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      numColumns={numColumns}
      style={styles.container}
    />
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
