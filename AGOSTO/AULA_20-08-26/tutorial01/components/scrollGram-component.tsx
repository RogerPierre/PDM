import { Text,StyleSheet,ScrollView } from "react-native"
import { StatusCard } from "./statusCardComponents"
import { useTransition } from "react"
import { IUserData } from "../core/user"

type HeaderGramProps={
    label:string
    userData:IUserData[]
}
export const HeaderGram=(props:HeaderGramProps)=>{
    
    return(
    <ScrollView style={styles.scroll}
        horizontal
        showsHorizontalScrollIndicator={true}
        >
            {props.userData.map(i=>{
                return <StatusCard
                PhotoUri={i.urlImage}
                IsActivate={true}
                key={`${Number(Math.random().toFixed(2))*100}`}
                label={i.name}
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