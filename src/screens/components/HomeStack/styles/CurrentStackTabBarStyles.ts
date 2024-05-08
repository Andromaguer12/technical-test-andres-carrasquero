import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR} from '../../../../constants/styling/constants';

const styles = StyleSheet.create({
  buttonBroadcastStart: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: 15,
    position: 'absolute',
    bottom: 60,
  },
  buttonContainer: {
    backgroundColor: PRIMARY_COLOR,
    marginHorizontal: 'auto',
    width: 55,
    height: 55,
    borderRadius: 27.5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    paddingVertical: 10,
    position: 'relative',
    backgroundColor: '#ffffff',
  },
  tab: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  selectedText: {
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 12,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  selectedIcon: {
    color: PRIMARY_COLOR,
    fontSize: 28,
  },
  icon: {
    color: '#000',
    fontSize: 28,
  },
});

export default styles;
