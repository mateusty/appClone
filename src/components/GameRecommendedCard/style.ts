import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 12,
    },

    cardGradient: {
        width: 386,
        height: 126,
        justifyContent: 'space-around',
        paddingHorizontal: 12,
        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)'
    },
    
    cardText: {
        color: '#F9FBFC'
    },

        cardPriceContainer: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#00121C', 
        marginTop: 8,
        marginLeft: 12
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
        lineHeight: 22,
        fontWeight: '600',
    },

    cardPrice: {
        padding: 8
    },

    previousGamePrice: {
        textDecorationLine: 'line-through',
        color: '#90959C'
    }
});