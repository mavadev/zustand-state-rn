import {TouchableOpacity, Text, View} from 'react-native';
import {globalStyles} from '../../theme/app-theme';
import {useProfileStore} from '../../store/profile-store';

export default function SettingsScreen() {
  const changeProfile = useProfileStore(state => state.changeProfile);

  return (
    <View style={globalStyles.container}>
      <Text style={[globalStyles.title, {marginBottom: 16}]}>
        Configuración de Cuenta
      </Text>
      <TouchableOpacity
        activeOpacity={0.7}
        style={globalStyles.primaryButton}
        onPress={() => useProfileStore.setState({name: 'Fernando Herrera'})}>
        <Text style={globalStyles.buttonText}>Asignar Autor: Fernando</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={globalStyles.primaryButton}
        onPress={() =>
          useProfileStore.setState({email: 'fernando@correo.com'})
        }>
        <Text style={globalStyles.buttonText}>Cambiar Correo de Soporte</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        style={globalStyles.secondaryButton}
        onPress={() => changeProfile('Gianmarco', 'gianmarco@correo.com')}>
        <Text style={globalStyles.secondaryButtonText}>
          🔄 Restablecer datos de Usuario
        </Text>
      </TouchableOpacity>
    </View>
  );
}
