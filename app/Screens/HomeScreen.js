import React from "react";
import {View, FlatList, Text} from 'react-native'
import RowItem from "../Components/RowItem";
import { getVideoLabels } from "../Services/APIService";
import styles from "../Styles/HomeStyles";
import SearchBar from "../Components/Searchbar";
import Icon from 'react-native-vector-icons/Ionicons';
import PopUp from "../Components/PopUp";

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            orginalData: [],
            labels:[],
            genres:[],
            isPopupVisible:false,
            selectedValues: [],
            searchText:''
        }
    }
    componentDidMount(){
        this.fetchLabels();
    }
    fetchLabels = async() =>{
        const response = await getVideoLabels();
        if(response != null){
            this.setState({
                orginalData:response.videos,
                labels:response.videos,
                genres: response.genres
            })
        }
    }
    renderRow = (item) =>{
        return <RowItem name={item.title}
                        artist={item.artist}
                        image={item.image_url}/>;
    }
    emptyComponent = () => {
        return(
            <View style={styles.emptyListContainer}>
                <Icon name="cloud-offline"
                      style={styles.emptyListIcon}
                      color="white"
                      size={180}/>
                <Text style={styles.emptyListText}>We could'nt get the videos for you this time, but we are working on it!!</Text>
            </View>
        )
    }
    setPopupVisibility = (visibility) =>{
        this.setState({
            isPopupVisible: visibility
        })
    }
    toggleGenre = (itemid) =>{
        const { selectedValues } = this.state;
        const index = selectedValues.indexOf(itemid);
        if(index > -1){
            selectedValues.splice(index, 1);
        }
        else{
            selectedValues.push(itemid);
        }
        this.setState({
          selectedValue: {...selectedValues},
        })
    }
    setSearchPhrase = (searchText) =>{
        const filteredData = this.searchFilter(searchText); 
        const filteredLabels = this.genreFilter(filteredData);
        this.setState({
            isPopupVisible:false,
            labels: filteredLabels,
            searchText: searchText
        })
    }
    applyFilter = () =>{
        const filteredData = this.searchFilter(this.state.searchText) 
        const filteredLabels = this.genreFilter(filteredData);
        this.setState({
            isPopupVisible:false,
            labels: filteredLabels
        })
    }
    onPopupClose = () =>{
        this.setState({
            isPopupVisible:false,
        })
    }
    onClearFilter = () => {
        const filteredLabels = this.searchFilter(this.state.searchText);
        this.setState({
            isPopupVisible:false,
            labels: filteredLabels,
            selectedValues:[]
        })
    }
    searchFilter = (searchText) => {
        const {orginalData} = this.state;
        const filterText = searchText.toUpperCase();
        let filteredData;
        if(searchText){
            filteredData = orginalData.filter(label => 
            {
                return label.title.toString().toUpperCase().indexOf(filterText) > -1 
                        || label.artist.toString().toUpperCase().indexOf(filterText) > -1 ;
    
            });   
        }
        else{
            filteredData = orginalData;
        }
        return filteredData;   
    }
    genreFilter = (filteredData) =>{
        const {selectedValues} = this.state;
        let filteredLabels;
        if(selectedValues.length > 0){
            filteredLabels = filteredData.filter((label) => selectedValues.indexOf(label.genre_id) > -1);
        }else{
            filteredLabels = filteredData;
        }
        return filteredLabels;
    }
    render(){
        const currentTime = new Date();
        let greeting;
        if(currentTime.getHours() < 12){
            greeting = 'Good Morning !!'    
        }
        else{
            greeting = 'Good Evening !!'
        }
        return(
            <View style={{backgroundColor:'black'}}>
                <View style={styles.logoContainer}>
                    <Icon name="musical-notes"
                                    style={styles.logo}
                                    color="white"
                                    onPress={()=>this.setPopupVisibility(true)}
                                    size={40}/>
                    <Text style={styles.greeting}>{greeting}</Text>
                </View>
                
                <View style={styles.toolbar}>
                    <SearchBar setSearchPhrase={this.setSearchPhrase}  />
                    <Icon name="filter"
                          style={styles.filter}
                          color="white"
                          onPress={()=>this.setPopupVisibility(true)}
                          size={40}/>
                </View>
                <PopUp isVisible={this.state.isPopupVisible}
                       genres={this.state.genres}
                       onClear={this.onClearFilter}
                       applyFilter={this.applyFilter}
                       onClose={this.onPopupClose}
                       selectedValues={this.state.selectedValues}
                       onValueChange={this.toggleGenre}
                       setVisibility={this.setPopupVisibility}/>
                <FlatList data={this.state.labels}
                          renderItem={({item}) => this.renderRow(item)}
                          keyExtractor={item => item.id}
                          numColumns={2}
                          ListEmptyComponent={this.emptyComponent}
                          extraData={this.state.orginalData} />

            </View>
        );
    }
}   