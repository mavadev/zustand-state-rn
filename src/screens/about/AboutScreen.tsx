import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/app-theme';
import {useProfileStore} from '../../store/profile-store';
import {useCounterStore} from '../../store/counter-store';

export default function AboutScreen() {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterStore(state => state.count);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{name}</Text>
      <Text style={globalStyles.subtitle}>{email}</Text>

      {/* Tarjeta contenedora para destacar el estado del contador */}
      <View
        style={{
          backgroundColor: '#E0F0FF',
          padding: 18,
          borderRadius: 14,
          marginTop: 12,
          borderWidth: 1,
          borderColor: '#B3D7FF',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#007AFF',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          🔢 Valor del Contador Global: {count}
        </Text>
      </View>
    </View>
  );
}
