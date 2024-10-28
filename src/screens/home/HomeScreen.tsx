import {Text, View} from 'react-native';
import {useProfileStore} from '../../store/profile-store';
import {globalStyles} from '../../theme/app-theme';

export default function HomeScreen() {
  const name = useProfileStore(state => state.name);

  return (
    <View
      style={{
        ...globalStyles.container,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{textAlign: 'center', fontSize: 20}}>Bienvenido,</Text>
      <Text style={{textAlign: 'center', fontSize: 40}}>{name}</Text>
    </View>
  );
}
