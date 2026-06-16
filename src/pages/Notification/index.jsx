import { Text, View } from "react-native"
import { styles } from "./style"

export const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.wipText}>🚧 Página Interditada 🚧</Text>
    </View>
  )
}
