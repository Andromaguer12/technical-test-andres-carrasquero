import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

import styles from './styles/listPageStyles';
import CardItem from './components/Card';

export interface Users {
  createdAt: Date;
  name: string;
  avatar: string;
  id: string;
  username?: string;
  password?: string;
}

const ListPage: React.FC = () => {
  const [apiData, setApiData] = useState([{} as Users]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://6172cfe5110a740017222e2b.mockapi.io/elements',
        );
        const data: Users[] = await response.json();
        setApiData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderCardItem = (item: Users) => (
    <CardItem
      title={item.name}
      description={item?.createdAt?.toString()}
      avatarUrl={
        'https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg' /*item.avatar*/
      }
      key={item.id + item?.createdAt?.toString()}
    />
  );

  return (
    <View style={styles.pageContainer}>
      <Text style={styles.pageTitle}>Listado</Text>
      {!loading ? (
        <FlatList
          data={apiData}
          renderItem={({item}) => renderCardItem(item)}
          keyExtractor={item => item.id + item?.createdAt?.toString()}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default ListPage;
