import prettier from './configs/prettier'
import recommended from './configs/recommended'
import tailwindcss from './configs/tailwindcss'
import valsReact from './configs/vals-react'
import valsReactNative from './configs/vals-react-native'

export default {
  configs: {
    recommended,
    'vals-react': valsReact,
    'vals-react-native': valsReactNative,
    prettier,
    tailwindcss,
  },
}
