import React, { Component, useState } from 'react';
import { connect } from "react-redux";
import { addPlan } from '../redux/actions/plan'
import { View, TextInput, Text, StyleSheet, FlatList,Button, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';



const MedForm = (props) => {
  const [planData, setPlanData] = useState({
    name: "",
    medication: "",
    time: "",
    id: Math.random().toString()
  });

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('time');
  const [show, setShow] = useState(false);
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setPlanData({...planData,time:selectedDate.getHours()+":"+selectedDate.getMinutes()})
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>

  
        <TextInput
          style={styles.inputs}
          placeholder="Plan Name"
          onChangeText={text => setPlanData({ ...planData, name: text })}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Medication"
          onChangeText={text => setPlanData({ ...planData, medication: text })}
        />
         <View>
        <Button onPress={showTimepicker} title="Show date picker!" />
      </View>
        <TextInput
          style={styles.inputs}
          placeholder="Time"
          defaultValue={planData.time}
          onChangeText={text => setPlanData({ ...planData, time: text })}
        />
      </View>
      <TouchableOpacity
        style={styles.button}

        onPress={() => { props.addPlan(planData) }}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Add</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />

      )}
    </View>

  )
}
function mapStateToProps(state) {
  return {
    plans: state.plans
  };
}
const mapDispatchToProps = {

  addPlan: addPlan
};
export default
  connect(mapStateToProps, mapDispatchToProps)(MedForm)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%"

  },
  button: {
    width: "90%",
    backgroundColor: "#7799ff",
    alignItems: "center",
    elevation: 10,
    padding: 10,
    marginVertical: 5,
  },
  inputs: {
    margin: 2,
    justifyContent: "space-around",
    height: 40,
    width: "100%",
    borderColor: "#ccc",
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5
  },
  inputContainer: {
    width: "90%",

  }
});