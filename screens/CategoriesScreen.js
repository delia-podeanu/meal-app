import { CATEGORIES } from "../data/dummy-data";

import { Text, FlatList, StyleSheet } from "react-native";
import CategoryGridItem from "../components/CategoryGridItem";

const renderItem = (itemData) => (
  <CategoryGridItem title={itemData.item.title} color={itemData.item.color} />
);

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
