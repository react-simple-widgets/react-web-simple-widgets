module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            "module-resolver",
            {
                "alias": {
                    "react-native-styled-paper": "./react-native-styled-paper",
                }
            }
        ]
    ]
};
