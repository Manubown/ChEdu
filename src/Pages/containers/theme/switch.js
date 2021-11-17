import * as React from 'react';
import {Switch as RNSwitch} from 'react-native';
import {useTheme} from '../theme/ThemeContext';


export const Switch = () => {
    const {setScheme, isDark} = useTheme();

    const toggleScheme = () => {
        isDark ? setScheme('light') : setScheme('dark');
    }

    return (
        <RNSwitch value={isDark} onValueChange={toggleScheme}/>
    );
}