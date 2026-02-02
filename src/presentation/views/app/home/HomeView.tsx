import { SafeAreaView } from "react-native-safe-area-context"
import { Image, ScrollView, TextInput, TouchableOpacity, View} from "react-native"
import { Text } from "react-native"
import {styles} from "./HomeStyle";
import {ButtonWithIcon} from "../../../sharedComponents/ButtonWithIcon";

const HomeView = () => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>


            <View style = {styles.headerContainer}>
                <Text style={styles.headerTitle}>Bienvenido de nuevo, NombreUsuario</Text>
                <ButtonWithIcon
                    iconName="shopping-cart"
                    fnDeOtroComponente={() => {}}
                    text=""
                />
            </View>


            <View>
                <Text style={{paddingHorizontal: 20, fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>Destacados</Text>
                <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScrollParams}>
                    <View style={styles.horizontalItemContainer}>
                        <View style={styles.horizontalImageContainer}>
                            <Image style={styles.horizontalImage} source={require("../../../../../assets/productos/white-cup-and-plate-of-tea-on-transparent-background-free-png.png")} resizeMode="cover"/>
                        </View>
                        <Text style={styles.horizontalTitle}>Té de Limón</Text>
                        <Text style={styles.horizontalPrice}>12.5€</Text>
                    </View>

                    <View style={styles.horizontalItemContainer}>
                        <View style={styles.horizontalImageContainer}>
                             <Image style={styles.horizontalImage} source={require("../../../../../assets/productos/white-cup-and-plate-of-tea-on-transparent-background-free-png.png")} resizeMode="cover"/>
                        </View>
                        <Text style={styles.horizontalTitle}>Té Verde</Text>
                        <Text style={styles.horizontalPrice}>10.5€</Text>
                    </View>

                    <View style={styles.horizontalItemContainer}>
                        <View style={styles.horizontalImageContainer}>
                             <Image style={styles.horizontalImage} source={require("../../../../../assets/productos/white-cup-and-plate-of-tea-on-transparent-background-free-png.png")} resizeMode="cover"/>
                        </View>
                        <Text style={styles.horizontalTitle}>Café con Leche</Text>
                        <Text style={styles.horizontalPrice}>8.0€</Text>
                    </View>

                    <View style={styles.horizontalItemContainer}>
                         <View style={styles.horizontalImageContainer}>
                             <Image style={styles.horizontalImage} source={require("../../../../../assets/productos/white-cup-and-plate-of-tea-on-transparent-background-free-png.png")} resizeMode="cover"/>
                         </View>
                        <Text style={styles.horizontalTitle}>Té Negro</Text>
                        <Text style={styles.horizontalPrice}>14.0€</Text>
                    </View>

                </ScrollView>
            </View>


            <ScrollView style={{flex: 1, paddingVertical: 20}}>

                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require("../../../../../assets/productos/white-cup-and-plate-of-tea-on-transparent-background-free-png.png")}
                        resizeMode={"cover"}></Image>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.titleProduct}>Titulo del proctuo 1</Text>
                        <Text style={styles.descProduct}>Descripcion corta del producto 1</Text>
                        <View style={styles.actionContainer}>
                            <Text style={styles.priceProducts}>17.0€</Text>
                            <ButtonWithIcon
                                text={"Comprar"}
                                fnDeOtroComponente={() => alert("Presionado")}
                                iconName="plus"
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeView;

{/*<TextInput*/}
{/*           placeholder="Search beverages or foods"*/}
{/*           keyboardType="default"*/}
{/*></TextInput>*/}
{/*<ScrollView horizontal>*/}
{/*    <Text> Beverages</Text>*/}
{/*    <Text> Beverages</Text>*/}
{/*    <Text> Beverages</Text>*/}
{/*</ScrollView>*/}

{/*<Image></Image>*/}

{/*<Text style={{textAlign: 'right', fontSize: 17}}>Sweet Lemon Indonesian Tea</Text>*/}
{/*<Text style={{textAlign: 'right', fontSize: 13, color : 'gray'}}>Tea, Lemon</Text>*/}
{/*<Text style={{textAlign: 'right', fontSize: 15}}>$12.6</Text>*/}
{/*<TouchableOpacity>*/}
{/*    <Text style={{textAlign: 'right', fontSize: 17}}>Buy</Text>*/}
{/*</TouchableOpacity>*/}
