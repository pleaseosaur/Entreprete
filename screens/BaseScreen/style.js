import { StyleSheet } from 'react-native';
import palette from '../../styles/Common.styles'; // Import the common styles

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.cream, // Use a common background color
    },
    header: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.cream, // Define a common header background color
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        // Add text styling here
    },
});
