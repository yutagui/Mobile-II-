import React, {useState} from "react";
import { TextInput, Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles";
import logo from '../../assets/logo.png';

export default function Login({navigation}){
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    
    return<ScrollView>
    <View style={{ alignItems: 'center'}}>
        <Image source={logo} style={styles.logoLogin}/>
    </View>
    
    <Text style={styles.textoCheck}>Açougue do Osmar</Text>

    <View>
        <TextInput style={styles.input} placeholder="Digite seu login aqui" placeholderTextColor={'#A9A9A9'} onChangeText={novoLogin => setLogin(novoLogin)} />
        <TextInput style={styles.input} placeholder="Digite a sua senha aqui" placeholderTextColor={'#A9A9A9'} secureTextEntry={true} onChangeText={novaSenha => setSenha(novaSenha)}/>
    </View>

    <View>
        <TouchableOpacity style={styles.botaoComprar} onPress={() =>{
             console.log("Login:", login, '\n', "Senha:", senha)
             navigation.navigate('Market')
        }}>
                        <Text style={styles.textoBotao}>
                            Logar
                        </Text>
        </TouchableOpacity>
    </View>

    <View style={{alignItems:"center"}}>
        <Text>
            Crie sua conta agora mesmo! 
        </Text>

        <Text style={styles.textoCadastrar} onPress={() =>{
            navigation.navigate('Register')
        }}>
            Cadastre-se
        </Text>
    </View>
    </ScrollView>
}