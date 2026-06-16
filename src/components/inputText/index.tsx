import { Text, TextInput, View } from "react-native"
import { InputProps } from "../../types/InputProps"
import { styles } from './style'

export const InputText = ({value, setValue, text, password}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputText}>{text}</Text>
      <TextInput value={value} onChangeText={setValue} style={styles.inputField} secureTextEntry={password}></TextInput>
    </View>
  )
}
