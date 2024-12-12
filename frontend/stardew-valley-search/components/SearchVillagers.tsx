import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, ScrollView, SafeAreaView, Image } from 'react-native';

type ComponentProps = {results: Array<any> }

export const SearchVillagers = ({results}:ComponentProps) => {

  // SearchBar handles search results,
  // VillagerResults takes results and adds info into JSX layout
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.box}>
      {results.map((result:{
        id: number;
        name: string;
        sex: string;
        marriage: boolean;
        houseId: number | null;
        buildingId: number | null;
        VillagerGifts: Array<{
          villagerId: number;
          giftId: number;
          preferenceId: number;
          Villager:{
            name: string
          };
          Preference:{
            name: string
          };
          Gift:{
            name: string
          };
        }>;
        Building:{
          id: number;
          name: string;
          locationId: number
        } | null;
        House:{
          id: number;
          address: string;
          locationId: number
        } | null;
      }, index) =>
        {
          // Set Building and House to null if they are empty
          const building = result.Building && Object.keys(result.Building).length ? result.Building : null;
          const house = result.House && Object.keys(result.House).length ? result.House : null;

          return result.name ? (
            <View key={result.id}>
              <Text style={[ styles.title,styles.subContainer, {backgroundColor:'#d4e9f5', textAlign:'center'}]}>{result.name}</Text>
              <Image style={{ height:100, marginTop:5, marginBottom:5 }} resizeMode="contain" src='https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png'/>
              <View style={[ styles.subContainer, {backgroundColor:'#14a006',justifyContent:'center',}]}>
              <Text style={[styles.textShadow, styles.title, {color:'#fff', textAlign:'center'}]}>Facts</Text>
              </View>
              <View style={styles.row}>
                <View style={[styles.subContainer, styles.greenContainer, ]}>
                  <Text style={[styles.title, styles.textShadow, {textAlign:'center',}]}>Home</Text>
                </View>
                <Text style={[styles.infoContainer, {margin:2,}]}>
                  {`${result.sex === 'Female' ? 'She' : 'He'} lives ${house ? `at ${house.address}` : building ? `at ${building.name}` : 'at an unknown location'}.`}
                  </Text>
              </View>
              <View style={styles.row}>
                  <View style={[styles.subContainer, styles.greenContainer]}>
                    <Text style={[styles.title, styles.textShadow, {textAlign:'center',}]}>Marriage</Text>
                  </View>
                  <Text style={[styles.infoContainer, {margin:2,}]}>
                    {`${result.sex === 'Female' ? 'She' : 'He'}${result.marriage ? ' is open' : ' is not open'} to marriage. `}
                    </Text>
              </View>


                <View style={{flexDirection:'row'}}>
                  <View style={[styles.subContainer, styles.greenContainer]}>
                    <Text style={[styles.title, styles.textShadow, {textAlign:'center'}]}>{`Gift Ideas`}</Text>
                    </View>
                    <View style={[styles.infoContainer, {margin:2,}]}>

                      {result.VillagerGifts.length ? (
                        Object.entries(
                          result.VillagerGifts.reduce((acc: any, gift: any) => {
                            const preference = gift.Preference.name;
                            if (!acc[preference]) {
                              acc[preference] = [];
                            }
                            acc[preference].push(gift.Gift.name);
                            console.log(acc[preference], preference)
                            return acc;
                          }, {})
                        ).sort(([a], [b]) => {
                          const order = ["Loves", "Likes", "Neutrals", "Dislikes", "Hates"];
                          return order.indexOf(a) - order.indexOf(b);
                        })
                        .map(([preference, gifts]) => (
                          <View key={preference}>
                            <Text style={styles.preference}>{preference}</Text>

                            {(gifts as string[]).map((gift, idx) => (
                              <Text style={styles.text} key={idx}>{gift}</Text>))}
                              </View>
                              ))
                  ) : (
                    <View>
                    <Text>{result.name} has no gifts they want.</Text>
                    </View>
                  )}
                </View>
              </View>
            </View>

          ) : null;
        }
      )}

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    backgroundColor:"#97cbed",
    alignItems:'center',
    padding:20,

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
  greenContainer:{
    backgroundColor:'#14a006',
    justifyContent:'center',
    width:100,
  },
  infoContainer:{
    backgroundColor:'#d4e9f5',
    width:247,
    paddingBottom:5,
  },
  box:{
    // justifyContent:'center',
    width:375,
    borderWidth:10,
    borderColor:'#f99304',
  },
  title:{
    fontSize:20,
    fontFamily: "Arial",
    fontWeight: 'bold',
    marginTop:2,
    marginBottom:2,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
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
})
