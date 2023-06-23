import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Seating = ({ route }) => {
  const { groups } = route.params;
  const [selectedTable, setSelectedTable] = useState(null);
  const [zoomAnim] = useState(new Animated.Value(1));

  const handleTablePress = (tableIndex) => {
    if (selectedTable === tableIndex) {
      setSelectedTable(null);
      Animated.timing(zoomAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setSelectedTable(tableIndex);
      Animated.timing(zoomAnim, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {groups.map((table, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tableContainer,
              selectedTable === index && {
                transform: [{ scale: zoomAnim }],
                zIndex: 1,
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              },
            ]}
            onPress={() => handleTablePress(index)}
            activeOpacity={0.9}
          >
            <Text style={styles.tableName}>Table {index + 1}</Text>
            {selectedTable === index && (
              <View>
                {table.map((person, personIndex) => (
                  <View key={personIndex} style={styles.guestBox}>
                    <Text style={styles.guestId}>{person.person}</Text>
                    <Text style={styles.guestCategory}>{person.category}</Text>
                  </View>
                ))}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tableContainer: {
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    padding: 10,
    backgroundColor: '#fff',
  },
  tableName: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  guestBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  guestId: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  guestCategory: {
    fontSize: 14,
  },
    
});

export default Seating;
