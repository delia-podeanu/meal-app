import { View, Pressable, Text, StyleSheet } from "react-native";

const CategoryGridItem = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridItem;

const styles = StyleSheet.create({});
