import { FlatList, ScrollView, View, Text } from "react-native"
import { styles } from "./style"
import { StoreSearch } from "../../components/storeSearch"
import { HomeHeaderTopics } from "../../components/HomeHeaderTopics"
import { LinearGradient } from "expo-linear-gradient"
import { GamesEdu } from "../../data/games"
import { GameRecommendedCard } from "../../components/GameRecommendedCard"

export const Home = () => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.homeHeader}>
        <View style={styles.searchWrapper}>
          <StoreSearch />
        </View>
        <HomeHeaderTopics />
      </View>
      <LinearGradient
        colors={['#19475A', '#20405F']}
        style={styles.recommendedSection}
      >
      <Text style={[styles.simpleText, styles.recommendedText]}>FEATURED & RECOMMENDED</Text>
        <FlatList
        horizontal={true}
        data={GamesEdu}
        renderItem={({ item }) => (
          <GameRecommendedCard game={item} />
        )}
        keyExtractor={(game) => String(game.id)}
        pagingEnabled
        />
      </LinearGradient>
    </ScrollView>
  )
}
