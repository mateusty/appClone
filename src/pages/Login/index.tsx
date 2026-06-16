import { InputText } from "../../components/inputText"
import { LoginButton } from "../../components/loginButton"
import { TextLink } from "../../components/textLink"
import { styles } from "./style"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

export const Login = () => {

  const navigate = useNavigation();
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  

  return (
    <View style={styles.container}>
      <Text style={styles.singing}>SIGN IN</Text>
      <View style={styles.inputWrapper}>
        <InputText value={username} setValue={setUsername} text='STEAM ACCOUNT NAME' />
        <InputText value={password} setValue={setPassword} text='PASSWORD' password={true} />
        <LoginButton onChange={() => navigate.navigate('MainTabs')} isDisabled={username && password ? false : true}/>
      </View>
      <TextLink text='I need help signing in' isHighlighted={false} fontSize={14}/>
      <View style={styles.infoContainer}>
        <TextLink text="Don't have a steam account?" isHighlighted={true} fontSize={18}/>
        <Text style={styles.infoText}>It's free and easy. Discover thousands of PC games to play with millions of new friends.</Text>
        <TextLink text='Learn more about Steam' isHighlighted={false} fontSize={14}/>
      </View>
    </View>
  )
}
