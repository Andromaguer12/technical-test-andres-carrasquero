import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CardItem = ({
  title,
  description,
  avatarUrl,
}: {
  title: string;
  description: string;
  avatarUrl: string;
}) => {
  const imageUrl = avatarUrl
    ? avatarUrl
    : 'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg';

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.avatar}
        testID="default-avatar-image"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default CardItem;
