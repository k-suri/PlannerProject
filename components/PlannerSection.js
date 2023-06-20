import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/Colors';
import { PlannerContext } from '../contexts/PlannerContext';

const PlannerSection = ({ title }) => {
  const plannerContext = useContext(PlannerContext);

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={plannerContext.todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default PlannerSection;

const styles = StyleSheet.create({
  section: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    minHeight: 200,
    elevation: 4,
    shadowColor: '#5A5A5A',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  title: {
    fontSize: 28,
    borderBottomColor: colors.grayLight,
    borderBottomWidth: 3,
    paddingBottom: 2,
    fontFamily: 'Pacifico',
    color: colors.secondary200,
  },
  todoItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  separator: {
    height: 10,
  },
});
