import { View, Text, Alert } from "react-native"
import { useEffect, useState } from "react"
import { PlaceProps } from "@/components/place"
import Places from "@/components/places"

import { api } from "@/services/api"
import { Categories, CategoriesProps } from "@/components/categories"

type MarketsProps = PlaceProps 

export default function Home() {
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [ category, setCategory] = useState("")
    const [ markets, setMarkets ] = useState<MarketsProps[]>([])

    async function fetchCategories(){
        try {
            const { data } = await api.get("/categories")
            setCategories(data)
            setCategory(data[0].id)
        } catch (error) {
            console.log(error)
            Alert.alert("Categorias", "Erro ao buscar categorias")
        }
    }

    async function fetchPlaces() {
        try {
            if (!category) {
                console.log("Categoria não definida");
                return; // Se a categoria não for válida, não faça a requisição
            }
            console.log("Fazendo requisição para a categoria:", category);
            const { data } = await api.get(`/markets/category/${category}`);
            setMarkets(data);
            console.log("Locais recebidos:", data);
        } catch (error) {
            console.log("Erro ao fazer requisição:", error);
            Alert.alert("Locais", "Erro ao buscar locais");
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchPlaces()
    }, [category])

    return <View style={{flex: 1}}>
        <Text>Home</Text>
        <Categories 
        data={categories} 
        onSelect={setCategory} 
        selected={category}
        />
        <Places data={markets} />
    </View>
}