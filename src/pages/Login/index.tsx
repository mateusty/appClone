import { InputText } from "../../components/inputText"
import { LoginButton } from "../../components/loginButton"
import { TextLink } from "../../components/textLink"
import { styles } from "./style"
import { Text, View } from "react-native"

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.singing}>SIGN IN</Text>
      <InputText text='STEAM ACCOUNT NAME' />
      <InputText text='PASSWORD' password={true} />
      <LoginButton />
      <TextLink text='I need help signing in' isHighlighted={false} fontSize={14}/>
      <View style={styles.infoContainer}>
        <TextLink text="Don't have a steam account?" isHighlighted={true} fontSize={18}/>
        <Text style={styles.infoText}>It's free and easy. Discover thousands of PC games to play with millions of new friends.</Text>
        <TextLink text='Learn more about Steam' isHighlighted={false} fontSize={14}/>
      </View>
    </View>
  )
}
