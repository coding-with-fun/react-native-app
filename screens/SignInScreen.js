import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Image, Input } from "react-native-elements";

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {};

    return (
        // TODO: Check for behaviour and if anything breaks, add <behaviour="padding"> in KeyboardAvoidingView
        <KeyboardAvoidingView style={styles.container}>
            <Image
                source={{
                    uri:
                        "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
                }}
                style={styles.image}
            />

            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    type="email"
                    autoFocus
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
                containerStyle={styles.button}
                title="Sign In"
                onPress={handleSignIn}
            />
            <Button
                containerStyle={styles.button}
                title="Sign Up"
                type="outline"
            />
        </KeyboardAvoidingView>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#ffffff",
        paddingBottom: 40,
    },
    image: {
        width: 170,
        height: 170,
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
