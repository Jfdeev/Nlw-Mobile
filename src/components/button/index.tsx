import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { Text, TextProps } from "react-native";
import { s } from "./style";
import { colors } from "@/styles/theme";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"
import React from "react";

type ButtonProps = TouchableOpacityProps & {
    isLoading?: boolean
}

function Button({children, style, isLoading = false, ...rest}: ButtonProps){
    return <TouchableOpacity 
    style={[s.container, style]} 
    activeOpacity={0.8}
    disabled={isLoading}
    {...rest}
    >
        {isLoading ? <ActivityIndicator 
        color={colors.gray[100]} 
        size={"small"}
        /> : children}
    </TouchableOpacity>
}

function Title({children}: TextProps){
    return <Text style={[s.title]}>
        {children}
    </Text>
}

type IconProps = TablerIconProps & {
    icon: React.ComponentType<TablerIconProps>
}

function Icon({icon: Icon}: IconProps){
    return <Icon size={24} color={colors.gray[100]} />
}

Button.Title = Title
Button.Icon = Icon

export { Button }