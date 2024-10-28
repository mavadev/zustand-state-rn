import {Pressable, Text, View} from 'react-native';
import {useProfileStore} from '../../store/profile-store';
import {globalStyles} from '../../theme/app-theme';

export default function SettingsScreen() {
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Fernando Herrera'})}>
        <Text style={globalStyles.title}>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() =>
          useProfileStore.setState({email: 'fernando@correo.com'})
        }>
        <Text style={globalStyles.title}>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={globalStyles.primaryButton}
        onPress={() => changeProfile('Gianmarco', 'gianmarco@correo.com')}>
        <Text style={globalStyles.title}>Cambiar usuario</Text>
      </Pressable>
    </View>
  );
}
