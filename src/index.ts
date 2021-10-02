import prettier from './configs/prettier'
import recommended from './configs/recommended'
import tailwindcss from './configs/tailwindcss'
import react from './configs/vals-react'
import reactNative from './configs/vals-react-native'

export default {
  configs: {
    recommended,
    react: react,
    'react-native': reactNative,
    prettier,
    tailwindcss,
  },
}
