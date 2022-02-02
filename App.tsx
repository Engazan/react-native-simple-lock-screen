import React from "react";
import {StatusBar} from 'expo-status-bar';
import {Pressable, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import LockScreen from "./src/components/LockScreen";

export default function App() {
    const [showLockScreen, setShowLockScreen] = React.useState(false);

    return (
        <View style={styles.container}>

            {!showLockScreen && (
                <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Input: </Text>
                        <Text>{JSON.stringify(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>validInput: </Text>
                        <Text>{JSON.stringify(['1', '1', '1', '1'])}</Text>
                    </View>
                    <Pressable
                        style={{backgroundColor: 'coral', padding: 10, marginTop: 20, borderRadius: 25}}
                        onPress={() => {
                            setShowLockScreen(true)
                        }}
                    >
                        <Text>Show LockScreeen</Text>
                    </Pressable>
                </SafeAreaView>
            )}
            {showLockScreen && (
                <SafeAreaView style={{flex: 1}}>
                    <LockScreen
                        input={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']}
                        validInput={['1', '1', '1', '1']}
                        onValidInput={() => {
                            setShowLockScreen(false)
                        }}
                        errors={{
                            3: {
                                time: 120,
                                errorMessage: 'Error, too manny attempts, try again in #_BLOCKED_TIME_COUNTDOWN_#',
                            },
                            6: {
                                time: 360,
                                errorMessage: 'Error, too manny attempts, try again in #_BLOCKED_TIME_COUNTDOWN_#',
                            }
                        }}
                        buildInTopComponentOptions={{label: 'Welcome back, YourName'}}
                        buildInBottomComponentOptions={{bottomComponent: {label: 'Forgot your pin?', onPress: () => {alert('forgot pin pressed')}}}}
                    />
                </SafeAreaView>
            )}

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
