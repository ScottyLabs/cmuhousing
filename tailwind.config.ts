import type { Config } from 'tailwindcss'

export default {
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#FF983E",
                    menugray: "#F5F8FA",
                    buttongray: "#E4EAED"
                }
            },

            fontFamily: {
                sans: ['var(--font-schibsted)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            }
        }
    }
} satisfies Config