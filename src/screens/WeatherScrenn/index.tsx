import React, {useEffect, useState} from 'react';
import {Text, View, SectionList, StyleSheet, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppNavigationParamList} from '../../navigation';
import {fetchTodoRequest} from '../../store/todo/action';

import {getTodosSelector} from '../../store/todo/selectors';
type Props = NativeStackScreenProps<AppNavigationParamList, 'Weather'>;

const WeatherScreen = ({navigation}: Props) => {
  const [weaterFievDays, setWeaterFievDays] = useState();
  const [allWeather, setAllWeather] = useState([{title: '', data: []}]);
  const dispatch = useDispatch();
  const todos = useSelector(getTodosSelector);

  const navigateWeaterForDay = (weatherForDay: any) => () => {
    navigation.navigate('WeatherForDay', {weather: weatherForDay});
  };
  const convertTemp = (temp: number) => (temp - 273.15).toFixed(1);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  useEffect(() => {
    const [list] = todos;
    setWeaterFievDays(list?.slice(0, 5));
    const weatherWeeks = [
      {title: 'First Weak', data: [list?.slice(0, 7)]},
      {title: 'Secend Weak', data: [list?.slice(7)]},
    ];
    setAllWeather(weatherWeeks);
  }, [todos]);

  const Item = ({title}) => {
    return (
      <View style={styles.item}>
        {title?.map(i => {
          return (
            <Text style={{marginTop: 5, backgroundColor: 'red'}}>
              {convertTemp(i.main.temp_min)}
            </Text>
          );
        })}
      </View>
    );
  };

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
        style={{flex: 1}}
        bounces={false}
        sections={allWeather}
        keyExtractor={(item, index) => item + index}
        renderItem={({item, index}) => <Item title={item} index={index} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  cityText: {textAlign: 'center', fontSize: 25, marginVertical: 5},
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  itemContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    height: 200,
    alignContent: 'center',
  },
  itemCalendar: {
    width: '23%',
    height: '40%',
    backgroundColor: 'gray',
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default WeatherScreen;
