import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, StyleSheet, Text } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

type ComponentProps = { results : Array <any>}

// interface IndexPath{
//   row: number
// }

export const SearchGifts = ({results}:ComponentProps)=> {
  const [selectedIdx, setSelectedIdx] = useState<IndexPath | IndexPath[]>(new IndexPath(0));

  const villagerPreference = (idx:any) =>{
    setSelectedIdx(idx)
    
  }

  console.log('this is selectedIdx =>', selectedIdx)
  return (
    <ScrollView style={styles.container}>
      {results.map((result:{
        id:number,
        name:string,
        VillagerGifts: Array<{
          villagerId:number,
          giftId:number,
          preferenceId:number,
          Villager: { name: string },
          Preference: { name: string }
        }> | null
      }, index) => (
        result.name ? (
        <View key={index}>
          <Text style={styles.title}>
            {`${result.name}`}
          </Text>
          <Text style={styles.resultsText}>
            {result.VillagerGifts?.length ? result.VillagerGifts.map(vg => (
            // create a drop down list using Select from react native UI kitten
            // that allows me to toggle between Loves, Likes, Neautral, Dislikes, Hates and shows the villager with the gift preference
            // `Villagers [select] this gift`
            <View key={index}>
            <Layout level="1">
              <Text>Villagers that
                <Select
                selectedIndex={selectedIdx}
                onSelect={idx => setSelectedIdx(idx)}
                >
                <SelectItem title='loves'/>
                <SelectItem title='likes'/>
                <SelectItem title='is neutral about'/>
                <SelectItem title='dislikes'/>
                <SelectItem title='hates'/>
              </Select> it: {}
                  </Text>
            </Layout>

                </View>
          )
            )


            : 'No villager preferences for this gift'}
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
  selectContainer:{
    minHeight:128
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
