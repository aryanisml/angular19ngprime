import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';


// Modified preset based on the truck rental UI screenshots
const TruckRentalPreset = definePreset(Aura, {
  primitive: {
    // Customize border radius to match the UI in screenshots
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px"
    },
    // Add the color palette seen in the UI - deep blue for header, lighter blues for accents
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    // Adding other colors as in original preset for consistency
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
  },
  semantic: {
    // Adjust transition for smoother interactions
    transitionDuration: "0.2s",
    focusRing: {
      width: "2px",
      style: "solid",
      color: "{primary.color}",
      offset: "2px",
      shadow: "none"
    },
    // Set primary color to match the UI's blue
    primary: {
      50: "#f0f7ff",
      100: "#d6e8ff",
      200: "#add1ff",
      300: "#85baff",
      400: "#5c9eff",
      500: "#3376ff", // Main blue from the UI
      600: "#1e5ad0",
      700: "#1747a8",
      800: "#113380",
      900: "#0b2058",
      950: "#071338"
    },
    // Define form fields to match the clean UI style
    formField: {
      paddingX: "0.75rem",
      paddingY: "0.5rem",
      sm: {
        fontSize: "0.875rem",
        paddingX: "0.625rem",
        paddingY: "0.375rem"
      },
      lg: {
        fontSize: "1.125rem",
        paddingX: "0.875rem",
        paddingY: "0.625rem"
      },
      borderRadius: "{border.radius.xs}",
      focusRing: {
        width: "2px",
        style: "solid",
        color: "{primary.color}",
        offset: "-1px",
        shadow: "none"
      },
      transitionDuration: "{transition.duration}"
    },
    // Configure color schemes for light/dark modes
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff", // Card backgrounds
          50: "#f8fafc", 
          100: "#f1f5f9", // Light background areas
          200: "#e2e8f0", // Hover states and separators
          300: "#cbd5e1", // Borders and dividers
          400: "#94a3b8",
          500: "#64748b", // Secondary text
          600: "#475569",
          700: "#334155",
          800: "#1e293b", // Main text color
          900: "#0f172a", // Headers and important text
          950: "#020617"  // The darkest UI elements
        },
        primary: {
          color: "#1e5ad0", // Matches the blue seen in the UI
          contrastColor: "#ffffff",
          hoverColor: "#113380",
          activeColor: "#0b2058"
        },
        // Other color scheme settings retained from original
      },
      dark: {
        surface: {
          0: "#0f172a", // Dark mode background
          50: "#131c2e",
          100: "#1a2539",
          200: "#22304b",
          300: "#2d3f61",
          400: "#3d5280",
          500: "#4e659f",
          600: "#6377b7", 
          700: "#8699d0",
          800: "#aabde6",
          900: "#d2dcf5",
          950: "#eef3fc"
        },
        primary: {
          color: "#5c9eff", // Bright blue for dark mode
          contrastColor: "#020617",
          hoverColor: "#85baff",
          activeColor: "#add1ff"
        },
        // Other dark mode settings retained
      }
    }
  },
  components: {
    // Customize components to match the UI
    button: {
      root: {
        borderRadius: "4px", // Match the rounded buttons in UI
        gap: "0.5rem",
        paddingX: "0.75rem",
        paddingY: "0.5rem",
        iconOnlyWidth: "2.5rem",
        label: {
          fontWeight: "600" // Slightly bolder text for buttons
        },
        // Adjust shadow to match the UI
        raisedShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        focusRing: {
          width: "2px",
          style: "solid",
          offset: "2px"
        },
        transitionDuration: "0.2s"
      },
      colorScheme: {
        light: {
          root: {
            primary: {
              background: "#1e5ad0", // Main blue button color
              hoverBackground: "#113380",
              activeBackground: "#0b2058",
              borderColor: "#1e5ad0",
              hoverBorderColor: "#113380",
              activeBorderColor: "#0b2058",
              color: "#ffffff",
              hoverColor: "#ffffff",
              activeColor: "#ffffff",
              focusRing: {
                color: "#1e5ad0",
                shadow: "none"
              }
            },
            // Keep other button types from original
          }
        },
        // Keep dark mode settings
      }
    },
    // Card styling to match the clean UI in screenshots
    card: {
      root: {
        background: "#ffffff",
        borderRadius: "4px",
        color: "#1e293b",
        shadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
      },
      body: {
        padding: "1rem",
        gap: "0.5rem"
      },
      title: {
        fontSize: "1.25rem",
        fontWeight: "600"
      },
      subtitle: {
        color: "#64748b"
      }
    },
    // Table styling to match the reservation tables in screenshots
    datatable: {
      root: {
        transitionDuration: "0.2s"
      },
      header: {
        background: "#ffffff",
        borderColor: "#e2e8f0",
        color: "#1e293b",
        borderWidth: "0 0 1px 0",
        padding: "0.75rem 1rem"
      },
      headerCell: {
        background: "#ffffff",
        hoverBackground: "#f1f5f9",
        selectedBackground: "#dbeafe",
        borderColor: "#e2e8f0",
        color: "#1e293b",
        hoverColor: "#1e293b",
        selectedColor: "#1e5ad0",
        gap: "0.5rem",
        padding: "0.75rem 1rem",
        focusRing: {
          width: "2px",
          style: "solid",
          color: "#1e5ad0",
          offset: "-1px",
          shadow: "none"
        }
      },
      columnTitle: {
        fontWeight: "600"
      },
      row: {
        background: "#ffffff",
        hoverBackground: "#f8fafc",
        selectedBackground: "#dbeafe",
        color: "#1e293b",
        hoverColor: "#1e293b",
        selectedColor: "#1e5ad0"
      },
      bodyCell: {
        borderColor: "#e2e8f0",
        padding: "0.75rem 1rem"
      },
      // Other table settings retained
    },
    // Tabs styling for the top navigation tabs
    tabmenu: {
      root: {
        transitionDuration: "0.2s"
      },
      tablist: {
        borderWidth: "0 0 1px 0",
        background: "#ffffff",
        borderColor: "#e2e8f0"
      },
      item: {
        background: "#ffffff",
        hoverBackground: "#f1f5f9",
        activeBackground: "#1e5ad0", // Blue active tab
        borderWidth: "0 0 3px 0", // Bottom border for active indication
        borderColor: "transparent",
        hoverBorderColor: "#cbd5e1",
        activeBorderColor: "#1e5ad0",
        color: "#64748b",
        hoverColor: "#1e293b",
        activeColor: "#ffffff",
        padding: "0.75rem 1rem",
        fontWeight: "600",
        margin: "0",
        gap: "0.5rem"
      },
      // Other tab settings retained
    },
    // Form input styling to match clean UI
    inputtext: {
      root: {
        background: "#ffffff",
        disabledBackground: "#f1f5f9",
        filledBackground: "#f8fafc",
        filledHoverBackground: "#f1f5f9",
        filledFocusBackground: "#f8fafc",
        borderColor: "#cbd5e1",
        hoverBorderColor: "#94a3b8",
        focusBorderColor: "#3376ff",
        invalidBorderColor: "#ef4444",
        color: "#1e293b",
        disabledColor: "#94a3b8",
        placeholderColor: "#94a3b8",
        invalidPlaceholderColor: "#f87171",
        shadow: "none",
        paddingX: "0.75rem",
        paddingY: "0.5rem",
        borderRadius: "4px",
        focusRing: {
          width: "2px",
          style: "solid",
          color: "#3376ff",
          offset: "-1px",
          shadow: "none"
        },
        transitionDuration: "0.2s"
      }
    },
    // Dialog/Modal styling
    dialog: {
      root: {
        background: "#ffffff",
        borderColor: "#cbd5e1",
        color: "#1e293b",
        borderRadius: "6px",
        shadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      },
      header: {
        padding: "1rem",
        gap: "0.5rem"
      },
      title: {
        fontSize: "1.25rem",
        fontWeight: "600"
      },
      content: {
        padding: "0 1rem 1rem 1rem"
      },
      footer: {
        padding: "0 1rem 1rem 1rem",
        gap: "0.5rem"
      }
    },
    // Badge styling for status indicators
    badge: {
      root: {
        borderRadius: "4px",
        padding: "0 0.5rem",
        fontSize: "0.75rem",
        fontWeight: "600",
        minWidth: "1.5rem",
        height: "1.5rem"
      },
      colorScheme: {
        light: {
          primary: {
            background: "#1e5ad0",
            color: "#ffffff"
          },
          secondary: {
            background: "#e2e8f0",
            color: "#475569"
          },
          success: {
            background: "#16a34a",
            color: "#ffffff"
          },
          info: {
            background: "#0ea5e9",
            color: "#ffffff"
          },
          warn: {
            background: "#f97316",
            color: "#ffffff"
          },
          danger: {
            background: "#dc2626",
            color: "#ffffff"
          }
        }
      }
    }
    // Retain other component styling from original preset
  }
});

export default TruckRentalPreset;