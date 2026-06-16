import { Pressable, Text } from "react-native"
import { styles } from "./style"
import { ButtonProps } from "../../types/ButtonProps"

export const LoginButton = ({ onChange, isDisabled }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.7 : 1 },
        { backgroundColor: isDisabled ? '#216DAE' : '#2c91e6'},
        styles.button
      ]}
      onPress={onChange}
      disabled={isDisabled}
      >
      <Text style={[{ color: isDisabled ? '#84B5DC' : '#E3E4E9'}, styles.buttonText]}>Sign in</Text>
      </Pressable>
  )
}
