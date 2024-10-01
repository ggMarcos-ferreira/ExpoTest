import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";
import { Button } from "react-native-paper";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center'
    },
    header:{
        width:'100%',
        height:Dimensions.get('window').height/6,
        backgroundColor:themas.Colors.primary,
        // alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        
    },
    greeting:{
        fontSize:20,
        color:'#FFF',
        marginTop:20
    },
    boxInput:{
        width:'80%'
    },
    boxList:{
        flex:1,
        width:'100%',
        // backgroundColor:'red'
    },
    card:{
        width:'100%',
        height:60,
        backgroundColor:'#FFF',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:themas.Colors.lightGray
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    titleCard:{
        fontSize:16,
        fontWeight:'bold'
    },
    descriptionCard:{
        color:themas.Colors.gray
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },

    button: {
        backgroundColor:'#FF494C',
        paddingVertical: 12,        // Espaçamento vertical
        paddingHorizontal: 20,      // Espaçamento horizontal
        borderRadius: 5,            // Bordas arredondadas
        alignItems: 'center',       // Centraliza o texto
        marginVertical: 10,         // Margem vertical
      }
});