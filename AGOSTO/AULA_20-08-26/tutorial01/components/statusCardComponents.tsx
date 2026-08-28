import { Image,StyleSheet,View,Text } from "react-native"


type StatusCardProps={
    PhotoUri: string
    IsActivate:boolean,
    label:string
}
export const StatusCard= (props:StatusCardProps)=> {
    return(
        <View
        style={{alignItems:"center"}}
        >
        <View
        style={[styles.view,{borderWidth:props.IsActivate?2:0}]}
        >
        <Image
        
        style={[styles.Image]}
        source={{uri:props.PhotoUri}}
        />
        </View>
        <Text>{props.label}</Text>
        </View>
        
        
    )
}
const styles=StyleSheet.create({
    Image:{
        borderRadius:100,
        borderWidth:2,
        width:75,
        height:75,
    },
    view:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
        width:85,
        height:85,
        marginLeft:12
    }
})