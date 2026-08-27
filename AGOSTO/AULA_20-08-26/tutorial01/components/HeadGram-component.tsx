import { Text,StyleSheet,ScrollView } from "react-native"



type HeaderGramProps={
    label:string
}
export const HeaderGram=(props:HeaderGramProps)=>{
    return(
    <ScrollView style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={true}
        >
            
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    scroll:{
        display:"flex",
        flexDirection:"row",
    },
    text:{
        fontFamily:"monospace",
        fontSize:20,
    },
})