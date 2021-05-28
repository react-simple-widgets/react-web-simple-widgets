import * as React from "react";
import Button from "react-native-styled-paper/components/Button";
import { Text } from "react-native-styled-paper/components/Typography";
import { useRouter } from "next/router";
import Layout from "components/layout";

export default function ProfilePage(props) {

    const router = useRouter();

    return (
        <Layout>
            <Text>Profile Page</Text>
            <Button
                onPress={() => {
                    router.back();
                }}
            >
                    Go Back
            </Button>
        </Layout>
    );
}
