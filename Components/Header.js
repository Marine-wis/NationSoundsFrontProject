// custom component qui fait le header (logo + icone menu)
import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
// Feather est la librairie qui a l'icone pour le menu hamburger
import { Feather } from '@expo/vector-icons';

class Header extends React.Component {
    render() {
        return (
            // la "boîte" qui contient tout le header, configurée en flex 1, donc faire attention à configurer le flex du container du dessous en flex: 10 pour que ce soit toujours le bon ratio
            <View style={styles.menu_bar}>
                {/* ici on on le contenant pour le logo */}
                <View style={styles.logo_container}>
                    <Image
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                    resizeMode="contain"
                />
                </View>
                {/* ici on on le contenant pour l'icone */}
                <View style={styles.icons_container}>
                    <Feather name="menu" size={35} color="black" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    // la config visuelle du container en dessous du header, ici j'ai mis la couleur rouge pour bien voir où sont les "boîtes"
    // main_container: {
    //     flex: 10,
    //     backgroundColor: 'red'
    // },

    menu_bar: {
        flex: 1,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        // backgroundColor: 'yellow',
    },

    logo: {
        flex:1, 
        height: undefined, 
        width: undefined,
    },

    icons_container: {
        flexDirection: "row",
        paddingRight: 5,
    },

    logo_container: {
        flex:0.5,
    }
})

export default Header