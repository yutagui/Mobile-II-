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

export default function Market(){
    return<ScrollView>
        <Image source={imagemTopo} style={styles.imagemTopo}/>
        <Text style={styles.cestaCarnes}> Cesta de Carnes </Text>

        <View style={styles.acougue}>
            <Image source={logo} style={styles.imagemAcougue}/>
            <Text style={styles.nomeAcougue}>Açougue do Osmar</Text>
        </View>

        <Text style={styles.descricaoAcougue}>
            As melhores e mais selecionadas carnes, com produção própria, direto do nosso 
            pasto para a sua mesa!
        </Text>

        <Text style={styles.precoCesta}>{
            Intl.NumberFormat('pt-BR',{
                style:'currency',currency: 'BRL'
            }).format(278)
        }
        </Text>

        <TouchableOpacity style={styles.botaoComprar}>
            <Text style={styles.textoBotao}>  
                Comprar
            </Text>
        </TouchableOpacity>

        <br></br>
        
        <Text style={styles.descricaoLista}>
            Itens da Cesta de Compras
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
                        Adicionar
                    </Text>
                </TouchableOpacity>
        </View>

        <View style={styles.carnes}>
            <Image source={denver} style={styles.imagemCarne} />
            <Text style={styles.itens}>
                Denver Steak
            </Text>
            <Text style={styles.precoItens}>{
                Intl.NumberFormat('pt-BR',{
                    style:'currency',currency: 'BRL'
                }).format(149)
                }
                </Text>
                <TouchableOpacity style={styles.botaoAdicionar}>
                    <Text style={styles.textoAdicionar}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
        </View>

        <View style={styles.carnes}>
            <Image source={flatIron} style={styles.imagemCarne} />
            <Text style={styles.itens}>
                Flat Iron
            </Text>
            <Text style={styles.precoItens}>{
                Intl.NumberFormat('pt-BR',{
                    style:'currency',currency: 'BRL'
                }).format(130)
                }
                </Text>
                <TouchableOpacity style={styles.botaoAdicionar}>
                    <Text style={styles.textoAdicionar}>
                        Adicionar
                    </Text>
                </TouchableOpacity>
        </View>        

        <View style={styles.carnes}>
            <Image source={primeRib} style={styles.imagemCarne} />
            <Text style={styles.itens}>
                Prime Rib
            </Text>
            <Text style={styles.precoItens}>{
                Intl.NumberFormat('pt-BR',{
                    style:'currency',currency: 'BRL'
                }).format(125)
                }
                </Text>
                <TouchableOpacity style={styles.botaoAdicionar}>
                    <Text style={styles.textoAdicionar}>
                        Adicionar
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
                        Adicionar
                    </Text>
                </TouchableOpacity>
        </View>
        
    </ScrollView>
}   