import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, StyleSheet, Text } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

type ComponentProps = { results : Array <any>}

export const SearchGifts = ({results}:ComponentProps)=> {
  const [selectedIdx, setSelectedIdx] = useState<IndexPath>(new IndexPath(0));
  const [selectedPreference, setSelectedPreference] = useState<string>("loves");

  const preferences = ['loves', 'likes', 'is neutral about', 'dislikes', 'hates'];

  const handleSelect = (index: IndexPath | IndexPath[]) => {
    const selectedIndex = Array.isArray(index) ? index[0] : index;
    setSelectedIdx(selectedIndex);
    setSelectedPreference(preferences[selectedIndex.row]);
  };

  const preferenceMap = {
    'loves': 1,
    'likes': 2,
    'is neutral about': 3,
    'dislikes': 4,
    'hates': 5
  };

  const getVillagersByPreference = (villagerGifts: any[], preference: keyof typeof preferenceMap) => {
    return villagerGifts.filter(vg => vg.preferenceId === preferenceMap[preference]);
  };


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
            {result.VillagerGifts?.length ? (
            // create a drop down list using Select from react native UI kitten
            // that allows me to toggle between Loves, Likes, Neautral, Dislikes, Hates and shows the villager with the gift preference
            // `Villagers [select] this gift`
            <View>
              <Layout level="1">
                <Select
                selectedIndex={selectedIdx}
                onSelect={handleSelect}
                value={selectedPreference}
                style={styles.selectContainer}
                >
                  {preferences.map((preference, idx) =>(
                    <SelectItem key={idx} title={preference}/>
                  ))}
                </Select>
              </Layout>
              <Text>Villagers that {selectedPreference} this gift:</Text>
              {getVillagersByPreference(result.VillagerGifts, selectedPreference as keyof typeof preferenceMap).map((vg, idx) => (
                <Text key={idx}>{vg.Villager.name}</Text>
                ))}
                </View>
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
    borderColor:'blue'

  },
  selectContainer:{
    height:30,
    width:150,
  },
  title:{
    fontWeight:"bold",
    fontSize:20,
    textAlign: 'center',
  },
  resultsText:{
    fontSize:15,
  }
})
