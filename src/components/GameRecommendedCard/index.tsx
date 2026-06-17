import { LinearGradient } from "expo-linear-gradient"
import { Image, View, Text } from "react-native"
import { styles } from "./style"
import { GameTypes } from "../../types/GameTypes"

  interface GameRecommendedCardProps {
    game: GameTypes;
  }

export const GameRecommendedCard = ({ game }: GameRecommendedCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={game.image} style={{ width: '100%', height: 216 }}/>
      <LinearGradient
      colors={['#0F151C', '#1D3750', '#1E405C']}
      style={styles.cardGradient}
      >
        <Text style={[styles.cardText, {fontWeight: '600', fontSize: 24}]}>{game.title.length > 25 ? `${game.title.slice(0, 25)}...` : game.title}</Text>
        <View style={[{alignSelf: 'flex-start', padding: 6}, {backgroundColor: (!game.price || game.price === 0) ? 'transparent' : '#000E0C'}]}>
          <Text style={styles.cardText}>{!game.price || game.price === 0 ? 'Free to Play' : Number(game.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}</Text>
        </View>
      </LinearGradient>
    </View>
  )
}
