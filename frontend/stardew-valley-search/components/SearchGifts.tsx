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
    // backgroundColor:'#d4e9f5',
    width: width / 4,
    // paddingLeft:3,
    // paddingBottom:5,
    // paddingRight: 30,
  };

  const textWidth ={
    width: width / 5,
    marginLeft:5,
  };

  const test = {
    width: width / 6.2,
  }
  const seasonInfoContainer ={
    marginTop: 2,
    marginRight:-10,
    // marginLeft:10,
    width:width / 1.5 , //------------> put this back
    backgroundColor:'#d4e9f5',
    // borderWidth:1,
    // borderWidth:1

  };
// Todo: ====> FIX WIDTH PROBLEM IN VILLAGER INFO CONTAINER AND TRY TO MOVE VILLAGER NAME IN THE MIDDLE OF GREEN CONTAINER (IDK IF IT'LL LOOK BETTER)
  const villagerInfoContainer = {
    marginTop: 2,
    marginRight:-10,
    // borderWidth:1,
    // marginLeft:10,
    width:width / 1.5, //------------> put this back
    backgroundColor:'#d4e9f5'
  }
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
    result.VillagerGifts.map(villager => {
                        const villagerNames = villager.Villager && villager.Villager.name ? villager.Villager.name : 'there is no villager';

                        return (
                        <View key={villager.giftId} style={{flexDirection:'row', paddingLeft:5}}>

                          <View style={{alignSelf:'center'}}>

                          <Text style={[infoContainer, {}]} key={villager.giftId} >{villagerNames}</Text>
                          </View>

                        </View>
                      )})
    */


  //  useSearch();

  }
  return (
    <SafeAreaView style={container}>
      <View>
        <Text style={[styles.title, styles.subContainer, {backgroundColor:'#d4e9f5', textAlign:'center', height: 30, }]}>Gift Information</Text>
        {results.map((result: {
          id: number;
          name: string;
          VillagerGifts: Array<{ villagerId: number; preferenceId:number; Villager: { name: string }; Preference: { name: string  | null}; }>;
          GiftSeasons: Array<{ giftId: number; Season: {name: string};}> }, index) => {

          return result.name ? (
          <View key={result.id} style={{marginTop:20,}}>
            {/* <Text key={`result-name-${result.id}`} style={[styles.title, styles.subContainer, {backgroundColor:'#d4e9f5', textAlign:'center', height: 30, }]}>{`${result.name}`}</Text> */}
            {/* <Image key={`result-image-${result.id}`} style={{}} resizeMode="contain" /> */}
            <View key={`result-facts-${index}`} style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text key={`result-facts-text-${index}`}  style={[styles.title, styles.textShadow, {color:'#fff', textAlign:'center'}]}>Facts</Text>
              </View>
              <View key={`result-gift-name-row-${index}`} style={{flexDirection:'row',}}>
                <View key={`result-gift-name-${index}`}  style={[styles.subContainer, greenContainer, { justifyContent:'center'}]}>
                  <Text key={`result-gift-name-text-title-${index}`} style={[styles.title, styles.textShadow, {textAlign:'center', justifyContent:'center', marginTop:2, marginBottom:2}]}>Name</Text>
                </View>
                  <View key={`result-gift-name-text-info${index}`} style={[seasonInfoContainer,{flexDirection:'row', paddingLeft:5, }]}>
                    <View style={{alignSelf:'center', }}>
                    <Text style={[infoContainer, {width:200} ]}>{`${result.name}`}</Text>
                    </View>
                  </View>
              </View>
              <View style={{flexDirection:'row' }}>
                <View key={`result-seasons-${index}`} style={[styles.subContainer, greenContainer, { justifyContent:'center' }]}>
                  <Text key={`result-seasons-text-${index}`} style={[styles.title, styles.textShadow, {textAlign:'center', justifyContent:'center', marginTop:2, marginBottom:2}]}>Seasons</Text>
                </View>
                <View style={[seasonInfoContainer, {flexDirection:'row', paddingLeft:5}]}>
                    {result.GiftSeasons.length ?
                    (result.GiftSeasons.map((season: any) => {
                        const seasonName = season.Season && season.Season.name ? season.Season.name : null ;

                        return (
                        <View key={season.id} style={{alignSelf:'center'}}>
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
                          <View style={{flexDirection:'row', paddingLeft:5}}>
                            <View style={{alignSelf:'center'}}>

                            <Text style={[infoContainer, {}]}>No Seasons associated with this gift</Text>
                            </View>
                          </View>
                        ) }
                        </View>
              </View>

              <View style={styles.row}>
              <View style={[styles.subContainer, greenContainer, ]}>
                  <Text style={[styles.title, styles.textShadow, {textAlign:'center',}]}>Villagers</Text>
                </View>
                <View style={[villagerInfoContainer, {marginTop:2, paddingLeft:5}]}>
                  <View style={[]}>
                  {
                    result.VillagerGifts.length ? (
                      Object.entries(
                        result.VillagerGifts.reduce((acc: any, villager: any) => {
                          const preference = villager.Preference?.name || "Unknown";
                          const villagerName = villager.Villager?.name || "Unknown";

                          if (!acc[preference]) {
                            acc[preference] = [];
                          }
                          console.log('this is acc[preference]', acc[preference])
                          acc[preference].push(villagerName);
                          console.log('this is acc ======>', acc)
                          return acc;
                        }, {})
                      )
                      .sort(([a], [b]) => {
                        const order = ["Loves", "Likes", "Neutrals", "Dislikes", "Hates"];
                        return order.indexOf(a) - order.indexOf(b);
                      })
                      .map(([preference, villagers]) => (
                        <View key={preference} style={{}}>
                          <Text key={`preference-container-${preference}`} style={styles.preference}>{preference}</Text>
                          <View style={{flexDirection:'row', }}>
                          {(villagers as string[]).map((villager: string, idx: number) => (

                            <View style={[test, {alignSelf:'center' }]} >
                            <Text style={[infoContainer, textWidth,  {marginTop:5,}]}  key={`${preference}-${idx}`}>{villager}</Text>
                            </View>
                          ))}
                          </View>
                        </View>
                      ))
                    ) : (
                    <Text>No villagers associated with this gift</Text>
                    )}
                  </View>
                </View>
              </View>
            </View>
            ) :
            <Text style={[infoContainer, {marginTop:2}]}>There is nothing in Gifts</Text>

            }

            )}
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
    // borderWidth:1,
    marginTop:3,
    marginRight:2,
    marginLeft:2,
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
    // backgroundColor:'#d4e9f5',
    // width:247,
    borderWidth:1,
    borderColor:'red',
    paddingBottom:5,
  },
  // box:{
    // justifyContent:'center',
  //   width:375,
  // },
  title:{
    fontSize:20,
    fontFamily: "Arial",
    fontWeight: 'bold',
    // marginTop:2,
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
