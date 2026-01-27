import { SafeAreaView } from "react-native-safe-area-context"
import { Image, ScrollView, TextInput, TouchableOpacity, View} from "react-native"
import { Text } from "react-native"
import {styles} from "./HomeStyle";
import {ButtonWithIcon} from "../../../sharedComponents/ButtonWithIcon";

const HomeView = () => {
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>


            {/* Titulo  y ver carrito*/}
            <View style = {{paddingTop: 20}}>
                <Text style={styles.titleView}>Tienda Online</Text>
            </View>



            {/* Scroll horizontal */}

            <ScrollView horizontal = {true}>
            </ScrollView>


            {/* Scroll vertical */}
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
                            <Text style={styles.priceProducts}>12.6€</Text>
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
