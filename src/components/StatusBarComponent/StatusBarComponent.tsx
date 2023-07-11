import { StatusBar } from "react-native";
import { colors } from "../../utils/color";

function StatusBarComponent() {
    return (
        <StatusBar backgroundColor={colors.black} animated={true} />
    )
}

export default StatusBarComponent;