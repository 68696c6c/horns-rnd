import '@testing-library/jest-dom'
import { matchers } from '@emotion/jest'

// https://jestjs.io/docs/en/expect#expectextendmatchers
// https://emotion.sh/docs/jest-emotion#tohavestylerule
// Bringing in custom matchers from jest-emotion.
// e.g. toHaveStyleRule
expect.extend(matchers)
