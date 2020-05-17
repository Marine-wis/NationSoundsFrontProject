import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class GroupeItem extends React.Component {
    render() {
        //on crée le props qui s'appelle groupe, utilisé dans la flatlist de Groupe.js
        const groupe = this.props.groupe
        // const image = "../assets/groupesPics/" + groupe.id + ".jpg"
        // console.log(image)
        return (
            <View style={styles.main_container}>
                <Image
                style={styles.image}
                //ici on récupère l'image, mais ne fonctionne pas encore en expo
                source={{uri:groupe.id + ".jpg"}}
                />
                <View style={styles.content_container}>
                    {/* ici on récupère les infos nom du groupe et sa description */}
                    <Text style={styles.nom}>{groupe.group_name}</Text>
                    <Text style={styles.description} numberOfLines={4}>{groupe.group_description}</Text>  
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 120,
        flexDirection: "row",
        marginBottom: 5,
        
    },

    image: {
    width: 120,
    height: 120,
    backgroundColor: 'gray'
    },

    content_container: {
        flex: 1,
        marginLeft: 5,
        paddingVertical: 5,
        paddingRight: 15,
        width: undefined,
        // backgroundColor: "yellow"
        
    },

    nom: {
        flex: 0.5,
        fontSize: 20,
        fontWeight: "bold",
        flexWrap: "wrap",
        // color: 'red'
    },

    description: {
      flex: 1,  
    },

})

export default GroupeItem