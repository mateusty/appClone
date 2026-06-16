import { Text } from "react-native"
import { styles } from './style'
import { LinkProps } from "../../types/LinkProps"

export const TextLink = ({ text, isHighlighted, fontSize }: LinkProps) => {
  return (
    <Text style=
    {[styles.linkText, 
    { color: isHighlighted ? '#F9FBFC' : '#90959C'},
    { fontSize: fontSize }]}>
      {text}
    </Text>
  )
}
