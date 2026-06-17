import { ScrollView, View } from "react-native"
import { styles } from "./style"
import { StoreSearch } from "../../components/storeSearch"
import { HomeHeaderTopics } from "../../components/HomeHeaderTopics"

export const Home = () => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.homeHeader}>
        <View style={styles.searchWrapper}>
          <StoreSearch />
        </View>
        <HomeHeaderTopics />
      </View>
    </ScrollView>
  )
}
