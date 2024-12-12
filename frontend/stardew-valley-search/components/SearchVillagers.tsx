import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, ScrollView, SafeAreaView } from 'react-native';

type ComponentProps = {results: Array<any> }

export const SearchVillagers = ({results}:ComponentProps) => {

  // SearchBar handles search results,
  // VillagerResults takes results and adds info into JSX layout
  return (
    <SafeAreaView >

    {/* <ScrollView style={styles.scrollContainer}> */}
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
              <Text style={styles.title}>{result.name}</Text>
              <Text>
                {`${result.sex === 'Female' ? 'She' : 'He'} lives ${
                  house ? `at ${house.address}` : building ? `at ${building.name}` : 'at an unknown location'
                }.`}
                {'\n'}
                {`${result.sex === 'Female' ? 'She' : 'He'}${
                  result.marriage ? ' is open' : ' is not open'
                } to marriage.`}
              </Text>
              <View style ={{borderWidth:1, borderColor:'blue'}}>
                <Text style={styles.title}>{`Want to give ${result.name} a gift?`}</Text>
                {/* <View> */}

                {/* </View> */}
                {result.VillagerGifts ? (
                  Object.entries(
                    result.VillagerGifts.reduce((acc: any, gift: any) => {
                      const preference = gift.Preference.name;
                      if (!acc[preference]) {
                        acc[preference] = [];
                      }
                      acc[preference].push(gift.Gift.name);
                      return acc;
                    }, {})
                  ).map(([preference, gifts]) => (
                    <View key={preference}>
                      <Text style={styles.preference}>{preference}</Text>
                      {(gifts as string[]).map((gift, idx) => (
                        <Text style={styles.text} key={idx}>
                          {gift}
                        </Text>
                      ))}
                    </View>
                  ))
                ) : (
                  <View>
                  <Text style={{borderWidth:1, borderColor:'grey'}}>{result.name} has no gifts they want.</Text>
                  </View>
                )}
              </View>
            </View>
          ) : null;
        }
      )}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    // flex:1,
    // height: 150,
    // backgroundColor: 'lightblue',
    // margin: 10,
    // padding: 20,
  },
  // scrollContainer: {
  //   flexGrow: 1,
  // },
  box:{
    flex:1,
    // height: 150,
    justifyContent:'center',
    width:375,
    marginLeft:14,
  },
  title:{
    fontSize:20,
    textAlign:'center',
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    margin: 2,
    paddingLeft:20,
  },
  preference: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
})
