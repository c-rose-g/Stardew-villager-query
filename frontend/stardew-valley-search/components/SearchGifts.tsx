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
    <ScrollView style={styles.scrollViewContainer}>
      {results.map((result: {
        id: number,
        name: string,
        VillagerGifts: Array<{
          villagerId: number,
          giftId: number,
          preferenceId: number,
          Villager: { name: string },
          Preference: { name: string }
        }> | null
      }, index) => (
        result.name ? (
          <View key={index}>
            <Text style={styles.title}>{`${result.name}`}</Text>
            <Text>
              {result.VillagerGifts?.length ? (
                <>
                <View>

                </View>
                  <View style={styles.resultsContainer}>
                    <Text style={styles.resultsSubHeading}>
                      Villagers that <Layout level="1" >
                        <Select style={styles.selectContainer}  selectedIndex={selectedIdx} onSelect={handleSelect} value={selectedPreference} placeholder={'preference'}>
                          {preferences.map((preference, idx) => (
                            <SelectItem key={idx} title={preference} />
                          ))}
                        </Select>
                      </Layout> this gift:
                    </Text>
                    {getVillagersByPreference(result.VillagerGifts, selectedPreference as keyof typeof preferenceMap)
                      .map((vg, idx) => (
                        <View key={idx}>
                          <Text style={styles.villagerName}>{vg.Villager.name}</Text>
                        </View>
                      ))
                      .reduce((acc, curr, idx) => {
                        if (idx % 3 === 0) acc.push([]);
                        acc[acc.length - 1].push(curr);
                        return acc;
                      }, [] as any[][])
                      .map((row, rowIndex) => (
                        <View key={rowIndex} style={[styles.row, styles.resultsText]}>
                          {row.map((cell: any, cellIndex: number) => (
                            <View key={cellIndex} style={styles.column}>
                              {cell}
                            </View>
                          ))}
                        </View>
                      ))}
                  </View>
                </>
              ) :
              // ('No villager preferences for this gift')
              <View style={{paddingTop:10, borderTopWidth:1, width:375}}>
                <Text style={styles.resultsText}>No villager preferences for this gift</Text>
              </View>
              }
            </Text>
          </View>
        ) : <Text>There is nothing in Gifts</Text>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewContainer:{
    width: 375
  },
  container:{
    width: 375,
    height: 80,
    borderColor:'ccc',
  },
  selectContainer:{
    width: 112,
    alignContent:'space-between'
  },
  selectText:{
    textAlign:'center',
    fontSize:10,
  },
  resultsContainer:{
    paddingTop:10,
    borderWidth:1,
    borderColor:'#ccc',
    width: 375,
  },
  title:{
    fontWeight:"bold",
    fontSize:25,
    textAlign: 'center',
    paddingTop:10,
  },
  resultsSubHeading:{
    fontSize:18,
    textAlign: 'center',
    // borderTopWidth:1,
  },
  resultsText:{
    fontSize:20,
    textAlign: 'center',
    alignContent:"space-between",
  },
  row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginVertical:10,
    height:30,
    width: 375,
  },
  column: {
    flex: 1,
    alignItems: "center",
    // borderWidth:1,
  },
  villagerName: {
    fontWeight: "300",
  },
})
