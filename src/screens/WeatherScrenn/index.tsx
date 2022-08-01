import React, {useEffect, useState} from 'react';
import {Text, View, SectionList, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigationParamList} from '../../navigation';

import {sagaActions} from '../../store/sagaActions';

import ItemWeather from '../../components/ItemWeather';
import {Weather} from '../../store/weather/weatherSlice';
import {getWeathersSelector} from '../../store/weather/selectors';

import styles from './styles';

type Props = NativeStackScreenProps<AppNavigationParamList, 'Weather'>;

const WeatherScreen = ({navigation}: Props) => {
  const [weaterFievDays, setWeaterFievDays] = useState<Weather[]>([]);
  const [allWeather, setAllWeather] = useState([{title: '', data: []}]);
  const dispatch = useDispatch();
  const weathers = useSelector(getWeathersSelector);

  const navigateWeaterForDay = (weatherForDay: string) => () => {
    navigation.navigate('WeatherForDay', {weather: weatherForDay});
  };
  const convertTemp = (temp: number) => (temp - 273.15).toFixed(1);

  useEffect(() => {
    dispatch({type: sagaActions.FETCH_DATA_SAGA});
  }, [dispatch]);

  useEffect(() => {
    setWeaterFievDays(weathers?.slice(0, 5));
    const weatherWeeks = [
      {title: 'First Weak', data: [weathers?.slice(0, 7)]},
      {title: 'Secend Weak', data: [weathers?.slice(7)]},
    ];
    setAllWeather(weatherWeeks);
  }, [weathers]);

  return (
    <View style={styles.container}>
      <Text style={styles.cityText}>Uzhgorod</Text>
      <View style={styles.itemContainer}>
        {weaterFievDays?.map((item: any, index: number) => {
          return (
            <Pressable
              onPress={navigateWeaterForDay(item)}
              key={index.toString()}
              style={styles.itemCalendar}>
              <Text>{convertTemp(item.main.temp_min)}</Text>
            </Pressable>
          );
        })}
      </View>

      <SectionList
        bounces={false}
        sections={allWeather}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          return <ItemWeather title={item} key={item.dt} />;
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text key={title} style={styles.header}>
            {title}
          </Text>
        )}
      />
    </View>
  );
};

export default WeatherScreen;
