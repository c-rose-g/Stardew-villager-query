import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

interface CollapsibleResultsProps {
  results: string[];
}

export const CollapsibleResults: React.FC<CollapsibleResultsProps> = ({ results }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.header}>
        <Text style={styles.headerText}>{isOpen ? 'Hide Results' : 'Show Results'}</Text>
      </TouchableOpacity>
      {isOpen && (

        <View style={styles.resultsContainer}>
          <Text>results is {results}</Text>

        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 5,
    marginTop: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#FFFFFF',
  },
  resultsContainer: {
    marginTop: 10,
    backgroundColor:'#FFFFFF'
  },
  resultText: {
    fontSize: 14,
    padding: 5,
  },
});
