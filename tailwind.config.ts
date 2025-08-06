import type { Config } from 'tailwindcss'

export default {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#FF983E"
                }
            },

            fontFamily: {
                sans: ['var(--font-schibsted)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            }
        }
    }
} satisfies Config