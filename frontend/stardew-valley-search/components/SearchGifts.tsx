import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, StyleSheet, Text } from "react-native";
import Gifts from '../../../backend/db/models/gift'
import Preferences from '../../../backend/db/models/preference'
import villager from "../../../backend/db/models/villager";
import preference from "../../../backend/db/models/preference";
import gift from "../../../backend/db/models/gift";
import { SearchVillagers } from "./SearchVillagers";

type ComponentProps = { results : Array <any>}

export const SearchGifts = ({results}:ComponentProps)=> {

  // const 
  return (
    <ScrollView style={styles.container}>
      {results.map((result:{id:number, name:string, VillagerGifts: Array<{villagerId:number, giftId:number, preferenceId:number, Preference:{name:string}}> | null}, index) => (
        result.name ? (
        <View key={index}>
          <Text style={styles.title}>
            {`${result.name}`}
          </Text>
          <Text style={styles.resultsText}>
          {result.VillagerGifts?.length ? (result.VillagerGifts.map(vg =>
            `this is villager id: ${vg.villagerId}, this is gift id: ${vg.giftId}, this is preference id:${vg.preferenceId}`).join(', ')) : null}

            </Text>
        </View>
        ):(<Text>there is nothing in Gifts</Text>)
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    borderWidth:1,
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    borderWidth:1,
    // borderColor:'red',
    // marginTop:30,
    // display:'flex',
    // justifyContent:'center'
  },
  resultsText:{
    // fontSize:15,

  }
})
