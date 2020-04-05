import React from 'react'
import doc from '../assets/doc.jpg'
import logo from '../assets/splash.png'
import { StyleSheet, Text, View, Header, Button, Image } from 'react-native';



export default function Landing({ navigation }) {
    return (
        <> 
            <View style={styles.container}>
            <Image
                    source={logo}
                    style={{
                        width: "50%",
                        height: "35%",
                    }}
                />
                <Text style={{ marginTop:10,paddingLeft: 10, paddingRight: 10, fontSize: 18 }}>Keep track of all your medical treatments, medications, appointments ect. You can even set in app reminders to alert you when you should be doing a treatment or taking a medication.</Text>

            </View>
            <View style={styles.imageCont} >
                <Image
                    source={doc}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </View>
            <View style={styles.description}>
                <View
                    style={{
                        flexDirection: "row", justifyContent: "space-around", width: '100%',
                    }}>
                    <Button
                        title="Start New Plan"
                        onPress={() => navigation.navigate('NewPlan')}
                    />

                    <Button
                        onPress={() => navigation.navigate('Plans')}

                        title="Open Plan"
                        color="steelblue"
                    />


                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        width: "95%",
        marginLeft:"2.5%",
        marginTop:10,
        marginBottom:10

    },
    imageCont: {
        flex: 2,

    },
    description: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
    }
});