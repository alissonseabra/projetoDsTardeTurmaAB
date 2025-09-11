import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Curtida = () => {
    return (
      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerText}>Meu App</Text>
        </View>
 
        <View style={styles.content}>
          <Text style={styles.contentText}>Conteúdo da tela principal</Text>
        </View>
  
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Player</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Curtidas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navText}>Perfil</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    header: {
      backgroundColor: '#909090',
      padding: 20,
      alignItems: 'center',
    },
    headerText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    nav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#E0E0E0',
      paddingVertical: 10,
    },
    navItem: {
      padding: 10,
    },
    navText: {
      fontSize: 16,
      color: '#333',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentText: {
      fontSize: 18,
    },
    footer: {
      backgroundColor: '#4A90E2',
      padding: 15,
      alignItems: 'center',
    },
    footerText: {
      color: '#fff',
    },
  });
  
  export default Curtida;
  