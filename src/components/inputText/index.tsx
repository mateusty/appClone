import { Text, TextInput, View } from "react-native"
import { InputProps } from "../../types/InputProps"
import { styles } from './style'

export const InputText = ({text, password}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{text}</Text>
      <TextInput style={styles.inputField} secureTextEntry={password}></TextInput>
    </View>
  )
}
