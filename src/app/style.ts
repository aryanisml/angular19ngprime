import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

export const SwapnilPreset = definePreset(Lara, {
  // 1. COLOR SCHEMES
  semantic: {
    colorScheme: {
      light: {
        primary: {
          50: '{red.50}',
          100: '{red.100}',
          200: '{red.200}',
          300: '{red.300}',
          400: '{red.400}',
          500: '{red.500}', // Main primary color
          600: '{red.600}',
          700: '{red.700}',
          800: '{red.800}',
          900: '{red.900}'
        },
        // Set actual green colors for all secondary values
        secondary: {
          50: '{green.50}',
          100: '{green.100}',
          200: '{green.200}',
          300: '{green.300}',
          400: '{green.400}',
          500: '{green.500}', // Main secondary color
          600: '{green.600}',
          700: '{green.700}',
          800: '{green.800}',
          900: '{green.900}'
        }
      },
      // Dark mode colors remain unchanged
      dark: {
        primary: {
          50: '#001933',
          100: '#003366',
          200: '#004C99',
          300: '#0066CC',
          400: '#007FFF',
          500: '#3399FF',
          600: '#66B2FF',
          700: '#99CCFF',
          800: '#CCE5FF',
          900: '#EBF5FF'
        },
        secondary: {
          50: '#190033',
          100: '#330066',
          200: '#4C0099',
          300: '#6600CC',
          400: '#7F00FF',
          500: '#9933FF',
          600: '#B266FF',
          700: '#CC99FF',
          800: '#E5CCFF',
          900: '#F5EBFF'
        }
      }
    }
  },
  
  // DIRECT OVERRIDE OF SECONDARY BUTTON COLORS
  css: [
    // This directly targets secondary buttons and overrides their styles
    {
      selector: '.p-button.p-button-secondary:not(.p-button-outlined):not(.p-button-text)',
      styles: {
        'background': 'var(--green-500)',
        'border-color': 'var(--green-500)',
        'color': '#ffffff'
      }
    },
    {
      selector: '.p-button.p-button-secondary:not(.p-button-outlined):not(.p-button-text):enabled:hover',
      styles: {
        'background': 'var(--green-600)',
        'border-color': 'var(--green-600)',
        'color': '#ffffff'
      }
    },
    {
      selector: '.p-button.p-button-secondary:not(.p-button-outlined):not(.p-button-text):enabled:active',
      styles: {
        'background': 'var(--green-700)',
        'border-color': 'var(--green-700)',
        'color': '#ffffff'
      }
    },
    // Also handle outlined secondary buttons
    {
      selector: '.p-button.p-button-outlined.p-button-secondary',
      styles: {
        'color': 'var(--green-500)',
        'border-color': 'var(--green-500)'
      }
    },
    {
      selector: '.p-button.p-button-outlined.p-button-secondary:enabled:hover',
      styles: {
        'background': 'rgba(0, 128, 0, 0.04)',
        'color': 'var(--green-600)',
        'border-color': 'var(--green-600)'
      }
    }
  ],
  
  // The rest of your theme configuration stays unchanged...
  typography: {
    fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.25rem',    // 20px
      xl: '1.5rem',     // 24px
      '2xl': '2rem',    // 32px
      '3xl': '3rem'     // 48px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      xs: 1.2,
      sm: 1.4,
      md: 1.6,
      lg: 1.8,
      xl: 2
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    }
  },
  
  spacing: {
    none: '0',
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem'    // 64px
  },
  
  components: {
    button: {
      root: {
        padding: '0.75rem 1.5rem',
        borderRadius: '4.5rem',
        fontSize: 'var(--font-size-md)',
        fontWeight: 'var(--font-weight-semibold)',
        transition: 'all 0.2s ease'
      }
    },
    inputtext: {
      root: {
        padding: '0.75rem 1rem',
        borderRadius: '0.5rem',
        borderWidth: '1px',
        fontSize: 'var(--font-size-md)'
      }
    },
    panel: {
      header: {
        padding: 'var(--spacing-md) var(--spacing-lg)',
        borderRadius: 'var(--border-radius-md) var(--border-radius-md) 0 0',
        backgroundColor: 'var(--surface-50)'
      },
      content: {
        padding: 'var(--spacing-lg)',
        borderRadius: '0 0 var(--border-radius-md) var(--border-radius-md)'
      }
    },
    dialog: {
      header: {
        padding: 'var(--spacing-lg)',
        borderBottom: '1px solid var(--surface-200)'
      },
      content: {
        padding: 'var(--spacing-lg)',
        maxHeight: '70vh'
      },
      footer: {
        padding: 'var(--spacing-md) var(--spacing-lg)',
        borderTop: '1px solid var(--surface-200)'
      }
    }
  },
  
  visualEffects: {
    shadow: {
      none: 'none',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px'
    },
    transitions: {
      instant: 'all 0s',
      quick: 'all 0.1s ease',
      normal: 'all 0.2s ease-in-out',
      slow: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      elaborate: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  },
  
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px'
  },
  
  variants: {
    highContrast: {
      semantic: {
        colorScheme: {
          light: {
            primary: { 500: '#0047B3' },
            text: { primary: '#000000' },
            background: { surface: '#FFFFFF' }
          }
        }
      },
      components: {
        button: {
          root: {
            borderWidth: '2px'
          }
        },
        inputtext: {
          root: {
            borderWidth: '2px'
          }
        }
      }
    },
    
    compact: {
      spacing: {
        xs: '0.125rem',  // 2px
        sm: '0.25rem',   // 4px
        md: '0.5rem',    // 8px
        lg: '0.75rem',   // 12px
        xl: '1rem'       // 16px
      },
      components: {
        button: {
          root: {
            padding: '0.5rem 1rem',
            fontSize: 'var(--font-size-sm)'
          }
        },
        inputtext: {
          root: {
            padding: '0.5rem 0.75rem'
          }
        }
      }
    }
  }
});