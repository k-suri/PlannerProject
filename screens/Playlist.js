import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, FlatList, TouchableOpacity} from "react-native";
import axios from 'axios';
import getSpotifyAccessToken from '../utils/SpotifyAccessToken';
import { colors } from '../utils/Colors';


const Playlist = ({ navigation }) => {
  
  const [text, onChangeText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const handleSearch = async () => {
    setPlaylists([]);
    onChangeText('')
    setErrorMessage('');

    if (text.length === 0) {
      setErrorMessage('Please enter playlist name!');
      return;
    }

    try {
      const spotifyToken = await getSpotifyAccessToken();
      const information = await getPlaylists(text, spotifyToken);

      const mappedPlaylists = information.playlists.items.map((playlist) => ({
        id: playlist.id,
        name: playlist.name,
        image: playlist.images[0]?.url,
        ownerName: playlist.owner.display_name,
      }));

      if (mappedPlaylists.length === 0) {
        setErrorMessage('No Playlist found!');
      } else {
        setPlaylists(mappedPlaylists);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPlaylists = async (text, accessToken) => {
    const informationUrl = `https://api.spotify.com/v1/search?q=${text}&type=playlist&limit=10&access_token=${accessToken}`;
    const response = await axios.get(informationUrl);
    return response.data;
  };



  const renderPlaylistItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePlaylistClick(item)}>
      <View style={styles.playlistItemContainer}>
        <Image source={{ uri: item.image }} style={styles.playlistItemImage} />
        <View style={styles.playlistItemTextContainer}>
          <Text style={styles.playlistItemName}>{item.name}</Text>
          <Text style={styles.playlistItemOwner}>By {item.ownerName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handlePlaylistClick = (playlist) => {
    navigation.navigate('Playlist Details', { playlist });
  };

  return (
    <>
      <View style={styles.itemsWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Search for Playlist"
          value={text}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require('../assets/icons/search.png')}
            style={{ width: 30, height: 30, tintColor: colors.action }}
          />
        </TouchableOpacity>
      </View>
      {errorMessage.length > 0 && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <FlatList
        data={playlists}
        renderItem={renderPlaylistItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.playlistContainer}
      />
      
    </>
  );
};

export default Playlist;

const styles = StyleSheet.create({
  playlistContainer: {
    paddingVertical: 10,
  },
  errorMessage: {
    color: 'red',
    padding: 20,
  },
  itemsWrapper: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: 350,
    height: 50,
    padding: 10,
    fontSize: 16,
  },
  playlistItemContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
  playlistItemImage: {
    width: '20%',
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  playlistItemTextContainer: {
    display: 'flex',
    width: '80%'
  },
  playlistItemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 20,
  },
  playlistItemOwner: {
    fontSize: 14,
    color: colors.action,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 25,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
