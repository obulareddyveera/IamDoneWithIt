import React from 'react';
import {StyleSheet, Image, View, Button} from 'react-native';

const ViewImageScreen = () => {
  console.log('--== ViewImageScreen ==--');

  const handleOnPress = (event) => {
    console.log('--== handleOnPress ==--', event);
  };

  return (
    <View style={styles.container}>
      <View style={styles.btnWrapper}>
        <Button
          onPress={handleOnPress}
          title="Close"
          color="#fc5c65"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          onPress={handleOnPress}
          title="Delete"
          color="#4ecdc4"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
          source={require('./../assets/blue-sedan.jpg')}
          style={styles.image}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  btnWrapper: {
    flexBasis: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
