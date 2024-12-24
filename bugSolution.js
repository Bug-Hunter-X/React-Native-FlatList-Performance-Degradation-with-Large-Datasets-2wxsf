// Optimized component with React.memo and useMemo
import React, { useMemo } from 'react';
import { FlatList, View, Image, Text } from 'react-native';

const Item = React.memo(({ item }) => (
  <View>
    <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} resizeMode="cover" />
    <Text>{item.title}</Text>
  </View>
));

const MyComponent = ({ data }) => {
  const memoizedData = useMemo(() => data, [data]);

  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};
export default MyComponent;

// Example usage
<MyComponent data={largeDataset}/>