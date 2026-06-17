import { FlatList, ScrollView, View, Text } from "react-native"
import { styles } from "./style"
import { StoreSearch } from "../../components/storeSearch"
import { HomeHeaderTopics } from "../../components/HomeHeaderTopics"
import { LinearGradient } from "expo-linear-gradient"
import { GamesEdu } from "../../data/games"
import { GameRecommendedCard } from "../../components/GameRecommendedCard"
import { OfferCard } from "../../components/OfferCard"
import { Ionicons } from "@expo/vector-icons"

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
      <Text style={[styles.simpleText, styles.emphasisText, {marginLeft: 12, marginBottom: 6}]}>FEATURED & RECOMMENDED</Text>
        <FlatList
        horizontal={true}
        data={GamesEdu.slice(0, 3)}
        renderItem={({ item }) => (
          <GameRecommendedCard game={item} />
        )}
        keyExtractor={(game) => String(game.id)}
        pagingEnabled
        />
      </LinearGradient>

      <View style={styles.offerSection}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12}}>
          <Text style={[styles.simpleText, styles.emphasisText]}>SPECIAL OFFERS</Text>
          <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#8C9CB7'}}>More</Text>
            <Ionicons name='chevron-forward-outline' color='#8C9CB7'/>
          </View>
        </View>

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
        >
          <FlatList
          contentContainerStyle={{alignSelf: 'flex-start'}}
          numColumns={4}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={GamesEdu.filter((game) => game.offer).slice(0, 8)} 
          renderItem={({ item }) => (
            <OfferCard game={item} />
          )}
          keyExtractor={(game) => String(game.id)}
          />
        </ScrollView>
      </View>
    </ScrollView>
  )
}
