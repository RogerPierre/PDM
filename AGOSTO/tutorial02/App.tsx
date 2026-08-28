import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

const perfil = {
  nome: 'Roger Pierre Reis Silva',
  email: 'rogerpierrereis@gmail.com',
  foto: 'https://i.pinimg.com/736x/20/86/3b/20863bc13af74e5648db42bd9eb21e94.jpg',
  descricao:
    `Biografia

Eu sou estudante de Análise e Desenvolvimento de Sistemas no Instituto Federal do Piauí (IFPI), interessado pelo universo da tecnologia e do desenvolvimento de software.

Ainda no início de sua trajetória profissional, busco ampliar seus conhecimentos, aprender novas tecnologias e desenvolver experiências que contribuam para minha formação como programador.

Fora do ambiente acadêmico, gosto de jogar videogames e acompanhar séries e animes. Entre estudos, códigos e momentos de entretenimento, segue construindo aos poucos sua trajetória na área de tecnologia.
`,
};

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="light" />

      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.statusDot} />
          <Text style={styles.eyebrow}>PORTFOLIO PESSOAL</Text>
        </View>

        <Text style={styles.title}>Meu perfil</Text>
        <Text style={styles.subtitle}>Tecnologia, criatividade e evolução constante.</Text>

        <View style={styles.avatarFrame}>
          <Image source={{ uri: perfil.foto }} style={styles.avatar} />
        </View>

        <View style={styles.info}>
          <View style={styles.infoBlock}>
            <Text style={styles.label}>NOME</Text>
            <Text style={styles.value}>{perfil.nome}</Text>
          </View>

          <View style={styles.infoBlock}>
            <Text style={styles.label}>E-MAIL</Text>
            <Text style={styles.value}>{perfil.email}</Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <View style={styles.sectionHeading}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionTitle}>SOBRE MIM</Text>
          </View>
          <Text style={styles.description}>{perfil.descricao}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#050b1d',
    padding: 20,
  },

  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0a1530',
    borderColor: '#172f58',
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingVertical: 34,
    shadowColor: '#00e5ff',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00f5d4',
    marginRight: 9,
    shadowColor: '#00f5d4',
    shadowOpacity: 0.9,
    shadowRadius: 8,
  },

  eyebrow: {
    color: '#6e9bc9',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },

  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#f4fbff',
    letterSpacing: 0.5,
  },

  subtitle: {
    color: '#8da9c9',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 26,
  },

  avatarFrame: {
    width: 220,
    height: 220,
    borderRadius: 110,
    padding: 6,
    backgroundColor: '#071024',
    borderColor: '#00e5ff',
    borderWidth: 2,
    marginBottom: 30,
    shadowColor: '#00e5ff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 18,
    elevation: 12,
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 110,
  },

  info: {
    width: '100%',
    maxWidth: 350,
  },

  infoBlock: {
    backgroundColor: '#0e2041',
    borderLeftColor: '#00e5ff',
    borderLeftWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },

  label: {
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.5,
    color: '#00e5ff',
  },

  value: {
    fontSize: 16,
    color: '#edf8ff',
    marginTop: 5,
  },

  descriptionContainer: {
    width: '100%',
    maxWidth: 350,
    marginTop: 24,
  },

  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  sectionLine: {
    width: 24,
    height: 2,
    backgroundColor: '#00f5d4',
    marginRight: 10,
  },

  sectionTitle: {
    color: '#00f5d4',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.8,
  },

  description: {
    fontSize: 15,
    lineHeight: 25,
    color: '#b8cbe0',
  },
});

export default App;