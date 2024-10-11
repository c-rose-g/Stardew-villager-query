import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
          {results.map((result, index) => (
            <Text key={index} style={styles.resultText}>{result}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginTop: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultsContainer: {
    marginTop: 10,
  },
  resultText: {
    fontSize: 14,
    padding: 5,
  },
});
