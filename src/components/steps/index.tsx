import { View, Text } from "react-native";
import { s } from "./style";
import { Steps as StepsComponent } from "../step";
import { IconQrcode, IconMapPin, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja  como funciona!</Text>
            <StepsComponent 
            icon={IconMapPin}
            title="Encontre Estabelecimento" 
            description="Veja locais perto de voce que são parceiros Nearby"/>
            <StepsComponent 
            icon={IconQrcode}
            title="Ative seu cupom com QR code" 
            description="Escaneieo código no estabelecimento para usar o benéficio"/>
            <StepsComponent  
            icon={IconTicket}
            title="Garanta as vantagens perto de você"  
            description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"/>
        </View>
    )
}