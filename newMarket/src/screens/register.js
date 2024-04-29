import React, {useState} from "react";
import { TextInput, Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles";
import logo from '../../assets/logo.png';

export default function Register({navigation}){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [senhaConfirmada, setSenhaConfirmada] = useState("");

    return<ScrollView>
    <View style={{ alignItems: 'center'}}>
        <Image source={logo} style={styles.logoRegister}/>
    </View>
    
    <Text style={styles.textoCheck}>Açougue do Osmar</Text>

    <View>
        <TextInput style={styles.input} placeholder="Digite seu nome" placeholderTextColor={'#A9A9A9'} onChangeText={novoLogin => setLogin(novoLogin)}/>
        <TextInput style={styles.input} placeholder="Digite a sua senha" placeholderTextColor={'#A9A9A9'} secureTextEntry={true} onChangeText={novaSenha => setSenha(novaSenha)}/>
        <TextInput style={styles.input} placeholder="Confirme a sua senha" placeholderTextColor={'#A9A9A9'} secureTextEntry={true} onChangeText={novaSenhaConfirmada => setSenhaConfirmada(novaSenhaConfirmada)}/>
    </View>

    <View style={styles.fundoBotaoRegister}>
        <TouchableOpacity style={styles.botaoRegister} onPress={() => {
            console.log("Login:", login, '\n', "Senha:", senha, '\n', "Senha confirmada: ", senhaConfirmada)
            if(senha != senhaConfirmada){
                alert("As senhas não podem ser diferentes!")
                navigation.navigate('Register')
            }
            else{
                navigation.navigate('RegisterLogin')
            }
        }}>
                        <Text style={styles.textoBotao}>
                            Registrar
                        </Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.botaoRegister} onPress={() => {
            navigation.navigate('Market')
        }}>
                        <Text style={styles.textoBotao}>
                            Cancelar
                        </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
}