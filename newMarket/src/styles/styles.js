import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

export default StyleSheet.create({
    imagemTopo:{
        width: width,
        height: 578/768 * width,
    },
    tela:{
        flex:1
    },
    cestaCarnes:{
        color: "red",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign: "center",
    },
    acougue:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    nomeAcougue:{
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 12,
        lineHeight: 40
    },
    imagemAcougue:{
        width: 42,
        height: 42
    },
    descricaoAcougue:{
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
        paddingHorizontal:12
    },
    precoCesta:{
        color: "#8B0000",
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 8,
        lineHeight: 42,
        paddingHorizontal: 12
    },
    botaoComprar:{
        margin: 10,
        backgroundColor: "#8B0000",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao:{
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold'
    },
    descricaoLista:{
        fontWeight:'bold',
        fontSize: 16,
        textAlign: 'center'
    },
    itemCesta:{
        textAlign:'center',
        fontWeight: 'bold',
        fontSize: 12,
        paddingVertical:20
    },
    carnes:{
        //estilo da view
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent:'space-between'
    },
    imagemCarne:{
        //estilo da imagem carne 
        width:60,
        height:60,
        marginLeft: 5,
    },
    itens:{
        fontSize: 16,
        lineHeight: 55,
        marginLeft: 5,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    precoItens:{
        fontSize: 16,
        lineHeight: 55,
        marginLeft: 3,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'red',
    },
    botaoAdicionar:{
        width:75,
        height: 35,
        backgroundColor: "#8B0000",
        borderRadius: 6,
        marginRight: 1,
        marginVertical: 10,
    },
    textoAdicionar:{
        color: 'white',
        textAlign: 'center',
        fontSize: 12,
        padding: 10,
        fontWeight: 'bold', 
    },
    fundoResumoCompras:{
        backgroundColor: '#f0f8ff'
    },
    textoCheck:{
        color: "#8B0000",
        fontSize: 20,
        lineHeight: 42,
        fontWeight: 'bold',
        textAlign: "center",
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 6
    },
    logoLogin:{
        width: 200,
        height: 200,
    },
    textoCadastrar:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 60
    },
    logoRegister:{
        width: 100,
        height: 100,
    },
    botaoRegister:{
        margin: 10,
        backgroundColor: "#8B0000",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 6,
    },
    fundoBotaoRegister:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})