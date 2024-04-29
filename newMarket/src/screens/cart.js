import React from "react";
import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "../styles/styles";
import "intl";
import 'intl/locale-data/jsonp/pt-BR'
import imagemTopo from '../../assets/topo.png';
import logo from '../../assets/logo.png';
import asadoTira from '../../assets/produtos/asado_tira.png';
import denver from '../../assets/produtos/denver_steak.png';
import flatIron from '../../assets/produtos/flat_iron.png';
import primeRib from '../../assets/produtos/prime_rib.png';
import tomahawk from '../../assets/produtos/tomahawk.png';

export default function Cart({navigation}){

    return <ScrollView>
        <View style={styles.fundoResumoCompras}>
            <Text style={styles.cestaCarnes}>
                Resumo das Compras
            </Text>

            <View style={styles.carnes}>
                <Image source={asadoTira} style={styles.imagemCarne} />
                <Text style={styles.itens}>
                    Asado de Tira
                </Text>
                    <Text style={styles.precoItens}>{
                    Intl.NumberFormat('pt-BR',{
                        style:'currency',currency: 'BRL'
                    }).format(146.98)
                    }
                    </Text>
                    <TouchableOpacity style={styles.botaoAdicionar}>
                        <Text style={styles.textoAdicionar}>
                            Remover
                        </Text>
                    </TouchableOpacity>
            </View>

            <View style={styles.carnes}>
                <Image source={tomahawk} style={styles.imagemCarne} />
                <Text style={styles.itens}>
                    Tomahawk
                </Text>
                <Text style={styles.precoItens}>{
                    Intl.NumberFormat('pt-BR',{
                        style:'currency',currency: 'BRL'
                    }).format(189.90)
                    }
                    </Text>
                    <TouchableOpacity style={styles.botaoAdicionar}>
                        <Text style={styles.textoAdicionar}>
                            Remover
                        </Text>
                    </TouchableOpacity>
            </View>

            <Text style={styles.nomeAcougue}>
                Total
            </Text>

            <Text style={styles.precoCesta}>{
                    Intl.NumberFormat('pt-BR',{
                        style:'currency',currency: 'BRL'
                    }).format(336.88)
                    }
            </Text>

            <TouchableOpacity style={styles.botaoComprar} onPress={()=>{
                navigation.navigate('Check')
            }}>
                <Text style={styles.textoBotao}>  
                    Finalizar Compra
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
}