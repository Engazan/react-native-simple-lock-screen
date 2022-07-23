# react-native-simple-lock-screen

expo 44+
reanimated 

<img src="react-native-simple-lock-screen.gif" width="400" height="800" >

# tested
- expo 45.0.0 with react-native-reanimated 2.8.0

# Props

| Name             | Type                            |Description    |
| :--------------- | :------------------------------ | :------- |
| `initBlockTime`   | `?number`          | init blocktime ( good when app reopen and u want to remember block time ) |
| `initErrorMsg`   | `?string`          | init Error msg ( good when app reopen and u want to remember error msg ) |
| `input`   | `string[]`               | User inputs |
| `validInput`   | `string[]`          | User valid input, when passed by user **onValidInput** is triggered |
| `onValidInput`   | `?() => void`          | triggered when user pass validInput |
| `errors`   | `{[key: number]: {time: number, errorMessage: string}}`          | key - number of wrongattempts, time - block time in secounds, errorMessage - error when blocked |
| `buildInTopComponentOptions`   | `?{label: string, filledColor?: string, unfilledColor?: string }`          | basic settings for buildin top component |
| `buildInBottomComponentOptions`   | `?{bottomComponent: {label: string, onPress: () => void}}`          | basic settings for buildin bottom component |
| `customTopComponent`   | `?React.FC<{currentInput: string[], wrongAttempts: number}>`          |  |
| `customBottomComponent`   | `?React.FC<{currentInput: string[], setCurrentInput: Dispatch<string[]>, wrongAttempts: number, blockedInput: boolean}>`          |  |
| `containerStyle`   | `ViewStyle`          | custom styles for main wrapper |


# Example
```tsx
<SafeAreaView style={{flex: 1}}>
    <LockScreen
        input={['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']}
        validInput={['1', '1', '1', '1']}
        onValidInput={() => {
            alert('valid pin')
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
```
