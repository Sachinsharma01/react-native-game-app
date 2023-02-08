import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import config from '../../config';
import Carousel from 'react-native-snap-carousel';
import {freeGames, paidGames, sliderData} from '../models/data';
import {windowWidth, windowHeight} from '../utils/Dimensions';
import BannerSlide from '../components/BannerSlide';
import ToggleButton from '../components/ToggleButton';
import ListItem from '../components/ListItem';

const Home = () => {
  const [type, setType] = useState(1);
  const [games, setGames] = useState(freeGames);
  const renderBanner = ({item, idx}: any) => {
    return <BannerSlide data={item} />;
  };
  const selection = (value: number) => {
    setType(value);
    if (value === 1) setGames(freeGames);
    else setGames(paidGames);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.salutation}>
          <Text style={styles.salutationText}>Hello, Welcome Back!</Text>
          <Image
            style={styles.avatar}
            source={require('../assets/images/user-profile.jpg')}
          />
        </View>
        <View style={styles.input}>
          <Feather
            name="search"
            size={20}
            color="#C6C6C6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" style={{color: "black"}} />
        </View>
        <View style={styles.upcoming}>
          <Text style={styles.salutationText}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: config.constants.primaryColor}}>See all</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth={300}
          loop={true}
        />
        <View style={{marginVertical: 10}}>
          <ToggleButton
            option1="Free Games"
            option2="Paid Games"
            onSelect={selection}
            selectionMode={1}
          />
          <View style={{marginVertical: 15}}>
            {games.map((game: any) => {
              return (
                <ListItem
                  key={game.id}
                  image={game.poster}
                  title={game.title}
                  subtitle={game.subtitle}
                  price={game.price}
                  isFree={game.isFree}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  avatar: {
    height: 35,
    width: 35,
    borderRadius: 25,
  },
  salutation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  upcoming: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  salutationText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto-medium',
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderColor: config.constants.borderColor,
  },
});
