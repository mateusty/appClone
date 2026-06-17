import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 12,
        marginHorizontal: 12,
        width: 300,
        height: 230,
        backgroundColor: '#1A6A8A',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'
    },
    
    cardText: {
        color: '#ADC7D4'
    },

    cardPriceContainer: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: '#182B38', 
        marginTop: 8,
        marginRight: 12
    },

    cardDiscount: {
        height: '100%',
        padding: 8,
        justifyContent: 'center',
        backgroundColor: '#4B6922'
    },

    discountText: {
        color: '#A1C74E',
        fontSize: 28,
        fontWeight: '600',
        marginBottom: 4
    },

    cardPrice: {
        padding: 8
    },

    previousGamePrice: {
        textDecorationLine: 'line-through',
        color: '#90959C'
    }
});