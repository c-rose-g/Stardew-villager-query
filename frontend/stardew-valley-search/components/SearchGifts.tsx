import React, {useState} from "react";
import { Dimensions, SafeAreaView, View, StyleSheet, Text, Image, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSearch } from "@/hooks/useSearch";
import DropDownPicker from 'react-native-dropdown-picker';
import { SearchVillagers } from "./SearchVillagers";

type ComponentProps = { results : Array <any>}

export const SearchGifts = ({results}:ComponentProps) => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');

  const container = {
    width: width,
    backgroundColor:"#97cbed",
    // padding:20,
  };

  const greenContainer = {
    backgroundColor:'#14a006',
    width:width /3.9,
  };

  const infoContainer = {
    backgroundColor:'#d4e9f5',
    // width: width / 3.7,
    paddingLeft:3,
    paddingBottom:5,
    paddingRight: 30,
  };

  const seasonInfoContainer ={
    marginTop: 2,
    width:width,
    backgroundColor:'#d4e9f5'
  };

  const box = {
    width:375,
  };

  const resultsContainer = {
    paddingTop:10,
    borderBottomWidth:5,
    borderColor:'#ccc',
    width: 375,
  };

  const QueerBar = (x: any) => {
    /*
    change query from searchGift to searchVillager/villager
    need to link villager
    */

  //  useSearch();

  }
  return (
    <SafeAreaView style={container}>
      <View>
        {results.map((result: {
          id: number;
          name: string;
          VillagerGifts: Array<{ giftId: number; Villager: { name: string }; Preference: { name: string  | null}; }>;
          GiftSeasons: Array<{ giftId: number; Season: {name: string};}> }, index) => {

          return result.name ? (
          <View key={result.id}>

            <Text style={[styles.title, styles.subContainer, {backgroundColor:'#d4e9f5', textAlign:'center'}]}>{`${result.name}`}</Text>
            <Image style={{ paddingBottom:3, paddingTop:3, }} resizeMode="contain" />

            <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text style={[styles.title, styles.textShadow, {color:'#fff', textAlign:'center'}]}>Facts</Text>
              </View>

              <View style={{flexDirection:'row' }}>
                <View style={[styles.subContainer, greenContainer, { justifyContent:'center' }]}>
                  <Text style={[styles.title, styles.textShadow, {textAlign:'center', justifyContent:'center'}]}>Seasons</Text>
                </View>
                <View style={[seasonInfoContainer, {flexDirection:'row',}]}>
                    {result.GiftSeasons.length ?
                    (result.GiftSeasons.map((season: any) => {
                        const seasonName = season.Season.name;

                        return (
                        <View key={season.id} >
                            <Text key={season.id} style={[infoContainer, {} ]}>
                              {seasonName}
                            </Text>
                            </View>
                        )
                      }))
                      .reduce((acc: any[], season: any, idx: number) => {
                        if (idx % 3 === 0) {
                          acc.push([]);
                        }
                        acc[acc.length - 1].push(season);
                        return acc;
                      }, [])

                        :
                        (
                        <Text style={[infoContainer]}>no seasons associated to this gift</Text>
                        )}
                        </View>
              </View>

              <View style={styles.row}>
              <View style={[styles.subContainer, greenContainer, ]}>
                  <Text style={[styles.title, styles.textShadow, {textAlign:'center',}]}>Villagers</Text>
                </View>
                <View style={[infoContainer, {marginTop:2}]}>
                  <View style={[seasonInfoContainer, {marginTop:2}]}>
                    {result.VillagerGifts.length ? (
                      result.VillagerGifts.map(villager => (
                        <View key={villager.giftId}>
                          {/* link villager name to villager page  */}
                          <Text key={villager.giftId} >{villager.Villager?.name}</Text>

                        </View>
                      ))
                    ) : (
                      <Text >No villagers associated with this gift</Text>
                    )}
                  </View>
                </View>
              </View>
            </View>
            ) :
            <Text style={[infoContainer, {marginTop:2}]}>There is nothing in Gifts</Text>

            })}
      </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    // backgroundColor:"#97cbed",
    // alignItems:'center',
    // margin:20,
    // flex:1,

  },
  subContainer:{
    // borderWidth:.5,
    margin:2,
    // borderColor:'#95c1da',
    borderColor:'#12185b',
    shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .5,
    shadowRadius: .5,

  },
  // greenContainer:{
  //   backgroundColor:'#14a006',
  //   justifyContent:'center',
  //   width:100,
  // },
  infoContainer:{
    backgroundColor:'#d4e9f5',
    width:247,
    paddingBottom:5,
  },
  // box:{
  //   // justifyContent:'center',
  //   width:375,
  // },
  title:{
    fontSize:20,
    fontFamily: "Arial",
    fontWeight: 'bold',
    marginTop:2,
    marginBottom:2,
    // alignContent:'center'
  },
  row:{
    flexDirection: 'row',
  },
  text: {
    margin: 2,
    paddingLeft:20,
  },
  textShadow:{
    shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    color:'#fff'
  },
  upperTextShadow:{ shadowColor: '#12185b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    color:'#fff'
  },
  preference: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: "Arial",
  },
  selectContainer:{
    minWidth: 128,
    // marginRight:50,
    // paddingRight:5,
    // width:'auto',
    // alignContent:'space-between'
  },
  selectText:{
    textAlign:'center',
    fontSize:10,
  },
  resultsContainer:{
    paddingTop:10,
    // borderTopWidth:2,
    borderBottomWidth:5,
    borderColor:'#ccc',
    width: 375,
  },
  noVillager:{
    paddingTop:10,
    borderTopWidth:1,
    width:375,
  },
  // title:{
  //   fontWeight:"bold",
  //   fontSize:25,
  //   textAlign: 'center',
  //   paddingTop:10,
  // },
  resultsSubHeading:{
    fontSize:20,
    textAlign: 'center',
    // borderTopWidth:1,
  },
  resultsText:{
    fontSize:20,
    textAlign: 'center',
    alignContent:"space-between",
  },
  // row:{
  //   flexDirection: 'row',
  //   justifyContent:'space-between',
  //   marginVertical:10,
  //   height:30,
  //   width: 375,
  // },
  column: {
    flex: 1,
    alignItems: "center",
    // borderWidth:1,
  },
  villagerName: {
    fontWeight: "300",
    // width:119,
  },
})
