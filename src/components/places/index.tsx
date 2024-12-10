import { View, Text, useWindowDimensions } from "react-native";
import { Place, PlaceProps } from "../place";
import { useRef } from "react";
import  BottmSheet, {BottomSheetFlatList}  from "@gorhom/bottom-sheet";

type Props = {
    data: PlaceProps[]
}

export default function Places({data}: Props){
    const dimensions = useWindowDimensions()
    const bottomSheetRef= useRef<BottmSheet>(null)
    return <BottmSheet>
        <BottomSheetFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Place data={item}/>}
        />
    </BottmSheet>

}