import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/app-theme';
import {useProfileStore} from '../../store/profile-store';

export default function HomeScreen() {
  const name = useProfileStore(state => state.name);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={{fontSize: 18, color: '#6C757D', fontWeight: '500'}}>
        Bienvenido de nuevo,
      </Text>
      <Text
        style={{
          fontSize: 34,
          fontWeight: 'bold',
          color: '#212529',
          marginTop: 6,
          textAlign: 'center',
          paddingHorizontal: 20,
        }}>
        {name}
      </Text>
    </View>
  );
}
