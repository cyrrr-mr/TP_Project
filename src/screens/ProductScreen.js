import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import products from '../data/products';

const ProductScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
          </View>
        )}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  itemContainer: {
    width: '50%',
    padding: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default ProductScreen;