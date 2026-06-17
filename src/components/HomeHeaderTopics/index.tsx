import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { styles } from "./style"

export const HomeHeaderTopics = () => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.headerText}>MENU <Ionicons name="chevron-down-outline" size={18} color={'#f0f0f0'} /></Text>
      <Text style={styles.headerText}>WISHLIST</Text>
      <Text style={styles.headerText}>WALLET <Text style={styles.textCurrency}>(R$ -10¹⁰⁰)</Text></Text>
    </View>
  )
}
