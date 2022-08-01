import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  cityText: {textAlign: 'center', fontSize: 25, marginVertical: 5},
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

export default styles;
