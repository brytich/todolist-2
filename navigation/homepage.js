import React from 'react';
import { View, Text , TextInput, Button, StyleSheet, Alert } from 'react-native';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    render(){
        return (
            <View>
                <Text style={styles.text}>                    
                Créer un compte
                </Text>
                <TextInput style={styles.emailInput} placeholder="E-mail" 
                            onChangeText={(email) => {
                            this.setState({ email: email})}} 
                            value={this.state.email}/>
                <TextInput style={styles.passwordInput} placeholder="Mot de passe" 
                            onChangeText={(password) => {
                            this.setState({ password: password})}} 
                            value={this.state.password}/>
                <TextInput style={styles.passwordInput} placeholder="Confirmer le mot de passe" 
                            onChangeText={(password2) => {
                            this.setState({ confirmpassword: password2})}} 
                            value={this.state.confirmPassword}/>
                <Button title="S'inscrire"/>

                <Button title="Se connecter"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        borderBottomColor: "rgba(255, 255, 255, 255)"
    },

    text: {
        textAlign: 'center',
        fontSize: 18,
        margin: 14
    },

    emailInput: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200
        
    },
    passwordInput: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        width: 200
    }
})