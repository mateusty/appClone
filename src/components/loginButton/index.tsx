import { Pressable, Text } from "react-native"
import { styles } from "./style"

export const LoginButton = () => {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.7 : 1 },
        styles.button
      ]}>
      <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
  )
}
