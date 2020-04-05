import React from 'react'
import { StyleSheet, Text, View, Header, Button } from 'react-native';
import MedForm from './MedForm'
import Plans from './Plans'


export default function NewPlan({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.description}>
                    <Text style={{ fontSize: 24, color: "#33aaff", fontWeight: "bold" }}>
                        Add Medical Plan
                    </Text>

                    <MedForm />
                </View>
                <View style={styles.plans}>
                </View>
                <View >
                <Button
                    
                    title="Go Home"
                    onPress={() => navigation.navigate('Landing')}
                /></View>

            </View>


        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:30,
        flex:1,
        width: "100%",
        backgroundColor: '#fff',
        justifyContent: 'space-around',


    },
    description: {
        flex: 2,
        alignItems: "center",
    },
    plans: {
        flex: 3,
    }
});