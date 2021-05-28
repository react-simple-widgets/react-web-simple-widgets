import * as React from "react";
import { Button } from "react-native";
import { useToast } from 'react-native-styled-paper/components/Toast';

export const ToastExample = () => {
    const { toast } = useToast();

    return (
        <>
            <Button
                title="Toast"
                onPress={() => {
                    toast({ message: "Hello" })
                }}
            />
        </>
    )
}
