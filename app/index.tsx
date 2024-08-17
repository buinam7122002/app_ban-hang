import { View, Text } from 'react-native';
import tw from 'twrnc';

function App() {
    return (
        <View style={tw`p-4 bg-red-500 flex-1 items-center justify-center`}>
            <Text style={tw`text-black`}>Hello World</Text>
        </View>
    );
}

export default App;