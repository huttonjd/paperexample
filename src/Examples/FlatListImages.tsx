import React, { useState, useEffect  } from "react";
import { StyleSheet, SafeAreaView, FlatList, View, Image, TouchableOpacity} from "react-native";
import { Caption, List, Text, Chip, Divider } from 'react-native-paper';
import { DataTableRow } from "react-native-paper/lib/typescript/components/DataTable/DataTableRow";

function  FlatListImages() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const URI = 'https://api.thedogapi.com/v1/images/search?limit=10&page=1';

  
  const fetchData = async () => {
    const resp = await fetch(URI);
    const data = await resp.json();
    setData(data);
    setLoading(false);
  };

  

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={{ uri: item.url }} />
      </TouchableOpacity>
      );
  };

  const ItemSeparator = () => <View style={{
    height: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    marginLeft: 10,
    marginRight: 10,
  }}
  />

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        //refreshing={refreshing}
        //onRefresh={handleRefresh}
      />
    
  );
}

FlatListImages.title = 'FlatList Images';

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6,
  },
  image: {
    height: '100%',
    borderRadius: 4,
  },
});

export default FlatListImages;