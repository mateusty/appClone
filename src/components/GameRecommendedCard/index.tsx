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
      colors={['#0F151C', '#172531','#1D3750', '#1b3549']}
      style={styles.cardGradient}
      >
        <Text style={[styles.cardText, {fontWeight: '600', fontSize: 24}]}>{game.title.length > 25 ? `${game.title.slice(0, 20)}...` : game.title}</Text>
        <View style={styles.cardPriceContainer}>
          <View style={styles.cardPrice}>
            {!(game.offer && game.price) && (
              <Text style={styles.cardText}>{!game.price || game.price === 0 ? 'Free to Play' : Number(game.price).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}</Text>
            )}
            {(game.offer && game.price) && (
              <>
                <Text style={[styles.cardText, styles.previousGamePrice]}>{Number(game.price).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</Text>
                <Text style={styles.cardText}>{Number(game.price * (1 - game.offer)).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</Text>
              </>
            )}
          </View>
          {game.offer && (
            <View style={styles.cardDiscount}>
              <Text style={styles.discountText}>-{game.offer * 100}%</Text>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  )
}
