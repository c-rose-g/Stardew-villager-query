import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Text, ScrollView } from 'react-native';
import { CollapsibleResults } from '@/components/CollapsibleResults';
import { useSearch } from '@/hooks/useSearch';
import Villagers from '../../../backend/db/models/villager'
type ComponentProps = {results: Array<any> }

export const VillagerResults = ({results}:ComponentProps) => {

  // SearchBar handles search results,
  // VillagerResults takes results and adds info into JSX layout
  return(
    <ScrollView style={styles.container}>
      {results.map((result: { name: string, Schedule: Array<{seasonId:number, description:string, startLocationId: number, endLocationId:number, startBuildingId:number, endBuildingId:number, time:number, weekday:string | null, weather:string | null, isFestival:boolean}>, buildingId: number, houseId:number, marriage: boolean, sex: string, Gifts: Array<{ name: string, Villager_Gift: { preferenceId: number } }> | null }, index) => (
          result.name ? (
          <View key={index}>
            <Text>
              {`${result.name} is a villager.`}{"\n"}
              {`${result.sex === 'Female' ? 'She' : 'He'} lives in ${result.buildingId? result.buildingId: result.houseId}.`}{"\n"}
              {`They ${result.marriage ? 'are open' : 'are not open'} to marriage.`}
            </Text>
            <Text>{`Want to give ${result.name} a gift?`}</Text>
            {result.Gifts ? (
              result.Gifts.map((gift, giftIndex) => (
                <Text key={giftIndex}>
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
      ) : null
    ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  container:{
    borderColor:'#ffffff',
    // borderWidth: 1,
    // height:50,
  }
})
