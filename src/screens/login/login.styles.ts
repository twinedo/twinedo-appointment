import { TWColors } from '@/styles/colors';
import { StyleSheet } from 'react-native';
import { TWSizes } from 'twrn-styles';

export const styles = StyleSheet.create({
    icSplash: { width: TWSizes.percentageWidth(35), height: TWSizes.percentageWidth(35), alignSelf: 'center' },
    txtLoginTo: { fontSize: 37, fontWeight: 'bold', color: TWColors.WHITE, maxWidth: 320 },
    viewAbsolute1: { height: TWSizes.percentageHeight(40), backgroundColor: TWColors.PRIMARY },
    txtCommandLoginPass: { fontSize: 16, color: TWColors.WHITE },
    containerForm: { marginTop: 24, paddingHorizontal: 28 },
    cardForm: { borderRadius: 30, padding: 28, rowGap: 28 },
    txtBtnGoogle: { color: TWColors.DARK, fontWeight: 'bold' },
    btnGoogle: { borderWidth: 1, borderColor: TWColors.GREYEDF, borderRadius: 13 },
});
