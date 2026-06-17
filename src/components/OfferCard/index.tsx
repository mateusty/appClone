import { Image, View, Text } from "react-native"
import { styles } from "./style";
import { GameTypes } from "../../types/GameTypes";

interface OfferCardProps {
    game: GameTypes;
}

export const OfferCard = ({game}: OfferCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={game.image} style={{ width: '100%', height: 176 }}/>
        <View style={styles.cardPriceContainer}>
          {game.offer && (
            <View style={styles.cardDiscount}>
              <Text style={styles.discountText}>-{game.offer * 100}%</Text>
            </View>
          )}
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
        </View>
    </View>
  )
}
