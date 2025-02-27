# sandbox.md

1. Tables:
   - Villagers - done
   - Gifts
   - Seasons
   - Schedules
   - Categories
   - Locations
   - Villager Locations (Many-to-Many)
   - Villager Preferences (Many-to-Many)
   - Festivals
   - Buildings
   - Rooms
   - Villager Rooms (Many-to-Many)
   - Calendar
   - Gift Locations (Many-to-Many)
   - Gift Preferences (Many-to-Many)

2. Table definitions:
   1. Villagers:
      - `id` INT PRIMARY KEY
      - `villager_name` VARCHAR(255) NOT NULL
      - `sex` ENUM('female',male') NOT NULL
      - `marriage` BOOLEAN NOT NULL
      - `birthday_season_id` INT NOT NULL
      - `birthday_day` INT NOT NULL
      - FOREIGN KEY (birthday_season_id) REFERENCES Seasons(id)

   2. Gifts
      - `id` INT PRIMARY KEY
      - `gift_name` VARCHAR(255) NOT NULL
      - `category_id` INT NOT NULL
      - FOREIGN KEY (category_id) REFERENCES Categories(id)
   3. Seasons
      - `id` INT PRIMARY KEY
      - `season_name` ENUM('Spring','Summer',Fall,Winter,Year-Round) NOT NULL
   4. Schedules
      - `id` INT PRIMARY KEY
      - `villager_id` INT NOT NULL
      - `location_id` INT NOT NULL
      - `time` TIME NOT NULL
      - `weekday` STRING('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday') NOT NULL
      - `weather` STRING('Sunny', 'Rainy', 'Snowy') NOT NULL
      <!-- - `hearts_required` INT NOT NULL DEFAULT 0 -->
      - `locations_unlocked` BOOLEAN NOT NULL DEFAULT FALSE
      <!-- - `schedule_type` STRING('regular', 'festival') DEFAULT 'regular', -->
      - `is_festival` BOOLEAN NOT NULL DEFAULT FALSE
      - `is_regular` BOOLEAN NOT NULL DEFAULT TRUE
      - FOREIGN KEY (villager_id) REFERENCES Villagers(id),
      - FOREIGN KEY (season_id) REFERENCES Seasons(id),
      - FOREIGN KEY (location_id) REFERENCES Locations(id)
      - FOREIGN KEY (festival_id) REFERENCES Festivals(id)
   5. Categories
      - `id` INT PRIMARY KEY
      - `category_name` VARCHAR(255) NOT NULL
   6. Locations
      - `id` INT PRIMARY KEY
      - `location_name` VARCHAR(255) NOT NULL
   7. Villager Locations (Many-to-Many)
      - `villager_id` INT NOT NULL
      - `location_id` INT NOT NULL
      - PRIMARY KEY (villager_id, location_id)
      - FOREIGN KEY (villager_id) REFERENCES Villagers(id)
      - FOREIGN KEY (location_id) REFERENCES Locations(id)
   8. Villager Preferences (Many-to-Many)
      - `villager_id` INT NOT NULL
      - `gift_id` INT NOT NULL,
      - `preference_level` ENUM('Loved', 'Liked', 'Neutral', 'Disliked', 'Hated'),
      - PRIMARY KEY (villager_id, gift_id)
      - FOREIGN KEY (villager_id) REFERENCES Villagers(id)
      - FOREIGN KEY (gift_id) REFERENCES Gifts(id)
   9. Festivals
        - `id` INT PRIMARY KEY
        - `festival_name` VARCHAR(255) NOT NULL
        - `season_id` INT NOT NULL
        - `festival_date` INT NOT NULL
        - FOREIGN KEY (season_id) REFERENCES Seasons(id)
   10. Buildings
        - `id` INT PRIMARY KEY
        - `building_name` VARCHAR(255) NOT NULL
        - `location_id` INT NOT NULL
        <!-- - `building_type` ENUM('Shop', 'Farm', 'Public', 'Residental') -->removing
        - FOREIGN KEY (location_id) REFERENCES Locations(id)
   11. Houses
        - `id` INT PRIMARY KEY
        - `house_name` VARCHAR(255)
        - `location_id` INT NOT NULL
        - FOREIGN KEY (location_id) REFERENCES Locations(id)
   12. Villager Houses
        - `villager_id` INT NOT NULL
        - `house_id` INT NOT NULL
        - PRIMARY KEY (villager_id, room_id)
        - FOREIGN KEY (villager_id) REFERENCES Villagers(id)
        - FOREIGN KEY (room_id) REFERENCES Rooms(id)
   13. Calendar
        - `id` INT PRIMARY KEY,
        - `season_id` INT NOT NULL,
        - `day_of_season` INT NOT NULL, -- Days 1 to 28
        - `event_name` VARCHAR(255), -- Optional event
        - `villager_birthday_id` INT, -- Optional villager birthday
        - UNIQUE(season_id, day_of_season), -- Ensures only one event or birthday per day
        - FOREIGN KEY (season_id) REFERENCES Seasons(id),
        - FOREIGN KEY (villager_birthday_id) REFERENCES Villagers(id)
   14. Gift Locations (Many-to-Many)
        - `gift_id` INT NOT NULL
        - `location_id` INT NOT NULL
        - PRIMARY KEY (gift_id, location_id)
        - FOREIGN KEY (gift_id) REFERENCES Gifts(id)
        - FOREIGN KEY (location_id) REFERENCES Locations(id)
   15. Gift Seasons (Many-to-Many)
        - `gift_id` INT NOT NULL
        - `season` INT NOT NULL
        - PRIMARY KEY (gift_id, season)
        - FOREIGN KEY (gift_id) REFERENCES Gifts(id)
        - FOREIGN KEY (season_id) REFERENCES Seasons(id)
    16 Gift Location Seasons
        - `gift_id` INT NOT NULL,
        - `location_id` INT NOT NULL,
        - `season_id` INT NOT NULL,
        - PRIMARY KEY (gift_id, location_id, season_id),
        - FOREIGN KEY (gift_id) REFERENCES Gifts(id),
        - FOREIGN KEY (location_id) REFERENCES Locations(id),
        - FOREIGN KEY (season_id) REFERENCES Seasons(id)


<!-- {submitted && results.length > 0 && (
          <Animated.View style={[animatedStyles]}>
            <View style={[resultsContainer, box]}>
              <ScrollView>

              <Text>
                { model === 'villagers' ? (<SearchVillagers results={results} />)
                : model === 'gifts' ? (<SearchGifts results={results}/>)
                : model === 'schedules' ? 'schedules results' : 'no'}
              </Text>
                </ScrollView>
            </View>
          </Animated.View>
        )}

        {submitted && !results.length && searchError && (
          <Animated.View style={[styles.resultsContainer, animatedStyles]}>
            <View>
              {/* <ScrollView> */}
                <Text style={{ color: 'red' }}>{searchError}</Text>
              {/* </ScrollView> */}
            </View>
          </Animated.View>







          Object.keys(result.groupedPreferences).length === 0 ? (
                    <View style={{ flexDirection:'row', paddingLeft:5, alignContent:'center', height:135}} >
                        <View style={{alignSelf:'center', }}>
                          <Text style={{}}>No villagers associated with this gift</Text>
                          </View>
                          </View>                    )
                          : (Object.entries(result.groupPreferences).map(([preference, villagers]) =>{
                    const rows = groupByFour(villagers)

                    return(
                      <View key={preference} style={{}}>
                        <Text key={`preference-container-${preference}`} style={[styles.preference,{}]}></Text>
                        {rows.map((row,rIdx) =>(
                          <View key={`${preference}-row-${rowIndex}`} style={{flexDirection:'row'}}>
                            {row.map((villager) =>(
                              <View key={villager} style={[villagerInfoWidth,{ width:'auto',}]}>
                                <Text style={[ styles.villagerText, {marginTop:5, textAlign:'center', }]}></Text>
                              </View>
                            ))}

                          </View>
                        ))}
                      </View>
                    )
                  )
        )} -->
