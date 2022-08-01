import React from 'react';
import {View, Text} from 'react-native';

import {convertTemp} from '../../helpers';
import styles from './styles';

interface WeatherItemProps {
  title: [];
}

const ItemWeather: React.FC<WeatherItemProps> = ({title}) => {
  return (
    <View style={styles.item}>
      {title?.map(i => {
        return (
          <Text key={i.dt} style={styles.text}>
            {convertTemp(i.main.temp_min)}
          </Text>
        );
      })}
    </View>
  );
};

export default ItemWeather;
