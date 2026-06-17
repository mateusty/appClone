import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    componentWrapper: {
        justifyContent: 'center',
        height: '100%',
        padding: 22,
        paddingHorizontal: 28,
        flexDirection: 'row',
        gap: 16
    },

    searchInput: {
        backgroundColor: '#292C35',
        height: 40,
        justifyContent: 'center',
        width: '90%'
    },

    inputField: {
        zIndex: 10, 
        width: '100%', 
        height: '100%', 
        padding: 12, 
        color: '#f0f0f0'
    },

    perfilImage: {
        width: 40,
        height: 40,
        borderRadius: 18
    },

    searchPlaceholder: {
        zIndex: 1,
        position: 'absolute',
        height: 40,
        width: 80,
        marginLeft: 12
    },

    searchIcon: {
        zIndex: 1,
        position: 'absolute',
        right: 10
    }
})