import { useState } from 'react'
import { TextInput, View, Image } from 'react-native'
import { styles } from './style'
import { Ionicons } from '@expo/vector-icons'

export const StoreSearch = () => {

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [textValue, setTextValue] = useState<string>('')

  return (
    <View style={styles.componentWrapper}>
      <View style={styles.searchInput}>
        {!(isFocused || textValue !== '') && (<Image source={require('../../assets/SteamLogoPlaceholder.png')} style={styles.searchPlaceholder} />)}
        <TextInput value={textValue} style={styles.inputField} onChangeText={setTextValue} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}></TextInput>
        <Ionicons name="search-outline" size={24} color={'#8A8D92'} style={styles.searchIcon}/>
      </View>
      <Image source={require('../../assets/PerfilImage.png')} style={styles.perfilImage} />
    </View>
  )
}
