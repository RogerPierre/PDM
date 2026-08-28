import { Text,StyleSheet,ScrollView } from "react-native"
import { StatusCard } from "./statusCardComponents"
import { useTransition } from "react"

type HeaderGramProps={
    label:string
    urisStatus:Array<string>
}
export const HeaderGram=(props:HeaderGramProps)=>{
    
    return(
    <ScrollView style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={true}
        >
            {props.urisStatus.map(i=>{
                return <StatusCard
                PhotoUri={i}
                IsActivate={true}
                key={`${Number(Math.random().toFixed(2))*100}`}
                
                />
            })}
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    scroll:{
        display:"flex",
        flexDirection:"row",
        marginTop:25,
    },
    text:{
        fontFamily:"monospace",
        fontSize:20,
    },
})