import React from 'react'
import { StyleSheet, View, FlatList, TextInput, Button } from 'react-native'
import { groupes } from '../Helpers/groupesData'
//barre de header avec logo+icone menu
import Header from './Header'
//objet pour afficher les infos du groupe dans la liste
import GroupeItem from './GroupeItem'
//import de la librairie pour faire une searchbar
import { createFilter } from 'react-native-search-filter'
import { TouchableOpacity } from 'react-native-gesture-handler'

//constante qui nous servira à désigner quel(s) item(s) du groupesData servira pour filtrer la recherche
const KEYS_TO_FILTERS = ['group_name']

class Groupe extends React.Component {

    constructor(props) {
        super(props);
        //ici on initialise le state, qu'on appelle searchTerm
        this.state = {
          searchTerm: ''
        }

        console.log(props)
        if (props.route.params && props.route.params.groupId) {

            console.log('GroupeId:', props.route.params.groupId)
        }
      }
      // méthode qui permet de mettre à jour le state
      searchUpdated(term) {
        this.setState({ searchTerm: term })
      }

      //permet de gérer la naviation vers DetailGroupe qui est défini dans le stack navigator de App.js
      handleOnPress = (item) => {
          this.props.navigation.navigate("DetailGroupe", {
            
            groupe: item
        })
      }

    render() {

        //liste des groupes qui est filtrée
        const filteredGroupes = groupes.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <React.Fragment>
            {/* ici on appelle le header */}
                {/* <Header/> */}
                {/* ici on a le contenant principal */}
                <View style={styles.main_container}>
                    {/* champ de recherche */}
                    <TextInput 
                    style={styles.textinput} 
                    placeholder='Chercher un groupe' 
                    placeholderTextColor="darkgray"
                    //onChangeText -> appelle de la méthode pour mettre à jour le state
                    onChangeText={(text) => this.searchUpdated(text)}
                    />
                    {/* le bouton est désactivé car inutile pour l'instant, car c'est une recherche instantanée */}
                    {/* <Button title='Chercher' onPress={() => {}}/> */}
                    {/* ici on a la liste */}
                    <FlatList
                    data={filteredGroupes}
                    keyExtractor={(item) => item.id.toString()}
                    //avec le TouchableOpacity on permet de naviguer vers le GroupeDetail
                    renderItem={({item}) => <TouchableOpacity onPress={() => this.handleOnPress(item)}><GroupeItem groupe={item} /></TouchableOpacity> }/>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 10,
        marginLeft: 5,
        marginRight: 5,
    },

    textinput: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 0.5,
        paddingLeft: 5,
        backgroundColor: 'white',
        marginBottom: 5,
      }

})

export default Groupe