This React Native bug occurs when using the `FlatList` component with a large dataset and complex item rendering.  The issue manifests as slow scrolling, lag, or even crashes.  The root cause is often inefficient rendering of list items or excessive re-renders.

```javascript
// buggy code in componentDidMount
componentDidMount() {
  this.setState({ data: largeDataset });
}

// Inefficient renderItem
renderItem={({ item }) => (
  <View>
    <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
    <Text>{item.longDescription}</Text>
  </View>
)};
```