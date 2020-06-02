import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import {ImageResizeMode} from 'react-native/Libraries/Image/ImageResizeMode'

class GroupeDetail extends React.Component {
    constructor(props) {
        super(props);

        console.log(props)
        if (props.route.params && props.route.params.groupe) {
            console.log('Groupe:', props.route.params.groupe.group_name)
        }
      }


    render() {

        const groupe = this.props.route.params.groupe

        return (
            <View style={styles.main_container}>
                <View style={styles.image_container}>
                    <Image
                    style={styles.image}
                    //ici on récupère l'image, mais ne fonctionne pas encore en expo
                    // source={{uri:groupe.id + ".jpg"}}
                    source={require("../assets/groupesPics/3.jpg")}
                    />
                </View>
                <View style={styles.entete}>
                    <Text style={styles.gStyle}>{groupe.group_style}</Text> 
                    <Text> - </Text> 
                    <Text style={styles.gCountry}>{groupe.group_country}</Text>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.description}>{groupe.group_description}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        // backgroundColor: 'blue'
    },

    entete: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 10,
    },

    gStyle: {
        fontWeight: "bold",
    },

    image_container:{
        flex: 1,
        // backgroundColor: 'yellow',
        // flexDirection: "row"
    },

    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: "cover",
        // backgroundColor: 'gray',
        },

    text_container: {
        flex: 2,
        // backgroundColor: 'red',
    },

    description: {
        textAlign: "justify",
    },


})

export default GroupeDetail