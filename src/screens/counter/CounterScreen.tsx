import {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {globalStyles} from '../../theme/app-theme';
import {useCounterStore} from '../../store/counter-store';

export default function CounterScreen() {
  const navigation = useNavigation();
  const count = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const decrementBy = useCounterStore(state => state.decrementBy);

  useEffect(() => {
    navigation.setOptions({
      title: `Contador Activo: ${count}`,
    });
  }, [count, navigation]);

  return (
    <View style={globalStyles.centerContainer}>
      <Text
        style={{
          fontSize: 14,
          color: '#6C757D',
          textTransform: 'uppercase',
          letterSpacing: 2,
          fontWeight: '600',
        }}>
        Estado Global
      </Text>
      <Text
        style={{
          fontSize: 80,
          fontWeight: 'bold',
          color: '#212529',
          marginVertical: 8,
        }}>
        {count}
      </Text>
      <View
        style={{
          width: '100%',
          marginTop: 12,
          flexDirection: 'row',
          paddingHorizontal: 12,
          justifyContent: 'space-evenly',
        }}>
        <Pressable
          style={[
            globalStyles.primaryButton,
            {width: '45%', backgroundColor: '#FF3B30'},
          ]}
          onPress={() => decrementBy(1)}>
          <Text style={globalStyles.buttonText}>Restar -1</Text>
        </Pressable>

        <Pressable
          style={[
            globalStyles.primaryButton,
            {width: '45%', backgroundColor: '#34C759'},
          ]}
          onPress={() => incrementBy(1)}>
          <Text style={globalStyles.buttonText}>Sumar +1</Text>
        </Pressable>
      </View>
    </View>
  );
}
