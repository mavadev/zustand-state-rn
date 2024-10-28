import {Pressable, Text, View} from 'react-native';
import {useCounterStore} from '../../store/counter-store';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/app-theme';

export default function CounterScreen() {
  const navigation = useNavigation();
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const decrementBy = useCounterStore(state => state.decrementBy);

  useEffect(() => {
    navigation.setOptions({
      title: `Contador: ${count}`,
    });
  }, [count]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Contador: {count}</Text>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => incrementBy(1)}>
        <Text style={globalStyles.title}>+1</Text>
      </Pressable>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => decrementBy(1)}>
        <Text style={globalStyles.title}>-1</Text>
      </Pressable>
    </View>
  );
}
