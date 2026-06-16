import { View, Text } from "react-native"
import { styles } from "./style"

export const Guard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wipText}>🚧 Página Interditada 🚧</Text>
    </View>
  )
}
