import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Text, Input } from "react-native-elements";

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {};

    return (
        // TODO: Check for behaviour and if anything breaks, add <behaviour="padding"> in KeyboardAvoidingView
        <KeyboardAvoidingView style={styles.container}>
            <Text h3 style={styles.title}>
                Create New Account
            </Text>

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    type="text"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
            </View>

            <Button
                raised
                containerStyle={styles.button}
                title="Sign Up"
                onPress={handleSignUp}
            />
            <Button
                containerStyle={styles.button}
                title="Sign In"
                type="outline"
                onPress={() => navigation.navigate("Sign In")}
            />
        </KeyboardAvoidingView>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#ffffff",
        paddingBottom: 40,
    },
    title: {
        marginBottom: 50,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
