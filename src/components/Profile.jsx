import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Stats from './Stats';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 40,
          borderRadius: 15,
          paddingBottom: 20,
        }}
      >
        <Image
          source={{
            uri: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
          }}
          style={{ width: 180, height: 180 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: -20,
          }}
        >
          @Yousefalm
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'light',
            color: 'grey',
            marginTop: 2,
          }}
        >
          Kuwait
        </Text>

        <View
          style={{
            height: 1,
            width: 207,
            backgroundColor: 'lightgrey',
            marginTop: 15,
            marginBottom: 10,
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}
        >
          <Stats text="Followers" numberText="80K" />
          <Stats text="Likes" numberText="803K" />
          <Stats text="Photos" numberText="1.4K" />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
