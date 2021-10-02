import prettier from './configs/prettier'
import react from './configs/react'
import reactNative from './configs/react-native'
import recommended from './configs/recommended'
import tailwindcss from './configs/tailwindcss'

export default {
  configs: {
    recommended,
    react: react,
    'react-native': reactNative,
    prettier,
    tailwindcss,
  },
}
