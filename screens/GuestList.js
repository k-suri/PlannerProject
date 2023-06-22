import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { colors } from '../utils/Colors';

const GuestList = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [totalGuests, setTotalGuests] = useState('');
  const [familyGuests, setFamilyGuests] = useState('');
  const [friends, setFriends] = useState('');
  const [acquaintances, setAcquaintances] = useState('');
  const [otherGuests, setOtherGuests] = useState('');
  const [seatsPerTable, setSeatsPerTable] = useState('');
  const [numberOfTables, setNumberOfTables] = useState('');

  const handleNextStep = () => {
    if (step === 1 && totalGuests === '') {
      Alert.alert('Please enter the total number of guests.');
      return;
    } else if (step === 2 && familyGuests === '') {
      Alert.alert('Please enter the number of family guests.');
      return;
    } else if (step === 3 && friends === '') {
      Alert.alert('Please enter the number of friends.');
      return;
    } else if (step === 4 && acquaintances === '') {
      Alert.alert('Please enter valid number of acquaintances.');
      return;
    } else if (step === 5 && otherGuests === '') {
      Alert.alert('Please enter the number of other guests.');
      return;
    } else if (step === 6 && seatsPerTable === '') {
      Alert.alert('Please enter the number of seats per table.');
      return;
    } else if (step === 7 && numberOfTables === '') {
      Alert.alert('Please enter the number of tables.');
      return;
    }

    if (step < 7) {
      setStep(step + 1);
    } else {
      const isValidInput = validateInput();
      if (isValidInput) {
        const groups = splitIntoGroups(
          parseInt(totalGuests),
          parseInt(familyGuests),
          parseInt(friends),
          parseInt(acquaintances),
          parseInt(otherGuests),
          parseInt(seatsPerTable),
          parseInt(numberOfTables)
        );
        navigation.navigate('Seating Screen', { groups });
      }
    }
  };

  const splitIntoGroups = (total, family, friends, acquaintances, others, seatsPerTable, numberOfTables) => {
    const groups = [];
  
    // Split family members into groups
    for (let i = 1; i <= family; i++) {
      const groupName = `F${i}`;
      const person = `${groupName}${i}`;
      groups.push({ person, category: 'Family' });
    }
  
    // Split friends into groups
    for (let i = 1; i <= friends; i++) {
      const groupName = `FR${i}`;
      const person = `${groupName}${i}`;
      groups.push({ person, category: 'Friends' });
    }
  
    // Split acquaintances into groups
    for (let i = 1; i <= acquaintances; i++) {
      const groupName = `A${i}`;
      const person = `${groupName}${i}`;
      groups.push({ person, category: 'Acquaintances' });
    }
  
    // Split others into groups
    for (let i = 1; i <= others; i++) {
      const groupName = `O${i}`;
      const person = `${groupName}${i}`;
      groups.push({ person, category: 'Others' });
    }
  
    // Shuffle the groups randomly
    const shuffledGroups = shuffleArray(groups);
  
    const tables = [];
    const guestsPerTable = seatsPerTable;
    let currentIndex = 0;
  
    while (currentIndex < shuffledGroups.length) {
      const tableGroup = shuffledGroups.slice(currentIndex, currentIndex + guestsPerTable);
      tables.push(tableGroup);
      currentIndex += guestsPerTable;
    }
  
    return tables;
  };
  
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const validateInput = () => {
    if (
      parseInt(totalGuests) !==
      parseInt(familyGuests) + parseInt(friends) + parseInt(acquaintances) + parseInt(otherGuests)
    ) {
      Alert.alert('The sum of guests in each category should be equal to the total number of guests.');
      return false;
    }
    return true;
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <>
            <Text>Total Number of Guests:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setTotalGuests}
              value={totalGuests}
            />
          </>
        );
      case 2:
        return (
          <>
            <Text>Number of Family Guests:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setFamilyGuests}
              value={familyGuests}
            />
          </>
        );
      case 3:
        return (
          <>
            <Text>Number of Friends:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setFriends}
              value={friends}
            />
          </>
        );
      case 4:
        return (
          <>
            <Text>Number of Acquaintances:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setAcquaintances}
              value={acquaintances}
            />
          </>
        );
      case 5:
        return (
          <>
            <Text>Number of Other Guests:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setOtherGuests}
              value={otherGuests}
            />
          </>
        );
      case 6:
        return (
          <>
            <Text>Number of Seats per Table:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setSeatsPerTable}
              value={seatsPerTable}
            />
          </>
        );
      case 7:
        return (
          <>
            <Text>Number of Tables:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setNumberOfTables}
              value={numberOfTables}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>Step {step} of 7</Text>
      </View>
      <View style={styles.formContainer}>{renderStepContent()}</View>
      <View style={styles.buttonContainer}>
        {step > 1 && (
          <TouchableOpacity style={styles.previousButton} onPress={handlePreviousStep}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
          <Text style={styles.buttonText}>{step === 7 ? 'Start Seating' : 'Next'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  stepText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previousButton: {
    backgroundColor: colors.secondary,
    borderRadius: 25,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: 'Sofia-Regular',
    color: colors.action200,
  },
});

export default GuestList;
