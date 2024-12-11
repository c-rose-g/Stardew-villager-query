import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, ScrollView, SafeAreaView } from 'react-native';
import { CollapsibleResults } from '@/components/CollapsibleResults';
import { useSearch } from '@/hooks/useSearch';
import Villagers from '../../../backend/db/models/villager'
type ComponentProps = {results: Array<any> }

export const SearchVillagers = ({results}:ComponentProps) => {

  // SearchBar handles search results,
  // VillagerResults takes results and adds info into JSX layout
  return(

    <SafeAreaView style={styles.container}>

    {/* <View style={styles.container}> */}
      {results.map((result: { id: number, name: string, Schedule: Array<{seasonId: number, description: string, startLocationId: number, endLocationId: number, startBuildingId: number, endBuildingId: number, time: number, weekday: string | null, weather: string | null, isFestival: boolean}>, buildingId: number, houseId: number, marriage: boolean, sex: string, Gifts: Array<{ name: string, Villager_Gift: { preferenceId: number } }> | null }, index) => (
        result.name ? (
          <>
          <View key={result.id}>
            <Text style={styles.title}>{result.name}</Text>
              <Text>
                {`${result.sex === 'Female' ? 'She' : 'He'} lives in ${result.buildingId? result.buildingId: result.houseId}.`}{"\n"}
              {`${result.sex === 'Female' ? 'She' : 'He'}${result.marriage ? 'are open' : 'are not open'} to marriage.`}
              </Text>
            </View>
            <View>

            <Text style={styles.title}>{`Want to give ${result.name} a gift?`}</Text>
            {result.Gifts ? (
              result.Gifts.map((gift, giftIndex) => (
                <Text style={styles.text} key={giftIndex}>
                  {gift.Villager_Gift.preferenceId === 1 && `${gift.name} (Loved)`}
                  {gift.Villager_Gift.preferenceId === 2 && `${gift.name} (Liked)`}
                  {gift.Villager_Gift.preferenceId === 3 && `${gift.name} (Neutral)`}
                  {gift.Villager_Gift.preferenceId === 4 && `${gift.name} (Disliked)`}
                  {gift.Villager_Gift.preferenceId === 5 && `${gift.name} (Hated)`}
                </Text>
              ))
            ) : (
              <Text>{result.name} has no gifts they want.</Text>
            )}
            </View>
        </>
      ) : null
    ))}
    {/* </View> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container:{
    borderWidth: 1,
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
})
