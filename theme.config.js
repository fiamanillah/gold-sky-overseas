const colors = {
    //********************/
    // Light Variant Colors
    //********************/

    // Primary Colors
    primary: '#46a0d5', // Sky Blue (Primary - Highlight and Links)
    primaryFocus: '#3787b5', // Darker Sky Blue (Primary Focus - Hover)
    primaryContent: '#ffffff', // White (Text on Primary)

    // Secondary Colors
    secondary: '#f65e6d', // Coral Red (Secondary - Highlight Buttons)
    secondaryFocus: '#d8505f', // Darker Coral Red (Secondary Focus - Hover)
    secondaryContent: '#ffffff', // White (Text on Secondary)

    // Accent Colors
    accent: '#283845', // Dark Blue-Gray (Accent - Suitable Highlight)
    accentFocus: '#1e2a34', // Darker Blue-Gray (Accent Focus - Hover)
    accentContent: '#ffffff', // White (Text on Accent)

    // Neutral Colors
    neutral: '#f4f8fb', // Light Grayish Blue (Neutral Background)
    neutralFocus: '#d9e3eb', // Slightly Darker Grayish Blue (Neutral Focus)
    neutralContent: '#002638', // Dark Blue (Text on Neutral)

    // Base Colors
    base100: '#ffffff', // White (Default Background)
    base200: '#f1f5f9', // Off White (Slightly Darker Background)
    base300: '#d7e4ee', // Light Grayish Blue (Even Darker Background)
    baseContent: '#002638', // Dark Blue (Text on Base)

    // Additional Colors
    info: '#318ce7', // Medium Blue (Info Alerts and Notifications)
    infoContent: '#ffffff', // White (Text on Info)
    success: '#4caf50', // Vibrant Green (Success Notifications)
    successContent: '#ffffff', // White (Text on Success)
    warning: '#fbbc05', // Bright Yellow (Warnings and Alerts)
    warningContent: '#002638', // Dark Blue (Text on Warning)
    error: '#e63946', // Bright Red (Error Notifications)
    errorContent: '#ffffff', // White (Text on Error)

    //********************/
    // Dark Variant Colors
    //********************/

    // Dark Primary Colors
    darkPrimary: '#3787b5', // Darker Sky Blue (Primary - Background Highlights)
    darkPrimaryFocus: '#285e85', // Even Darker Sky Blue (Primary Focus - Hover)
    darkPrimaryContent: '#e0eaf3', // Light Grayish Blue (Text on Primary)

    // Dark Secondary Colors
    darkSecondary: '#d8505f', // Darker Coral Red (Secondary - Background Highlights)
    darkSecondaryFocus: '#b6414e', // Even Darker Coral Red (Secondary Focus - Hover)
    darkSecondaryContent: '#fce4e4', // Light Red (Text on Secondary)

    // Dark Accent Colors
    darkAccent: '#1e2a34', // Dark Blue-Gray (Accent Highlights)
    darkAccentFocus: '#141c24', // Darker Blue-Gray (Accent Focus - Hover)
    darkAccentContent: '#e0eaf3', // Light Grayish Blue (Text on Accent)

    // Dark Neutral Colors
    darkNeutral: '#0f1b24', // Dark Grayish Blue (Neutral Background)
    darkNeutralFocus: '#1a2b3c', // Slightly Lighter Grayish Blue (Neutral Focus)
    darkNeutralContent: '#cad7e3', // Light Grayish Blue (Text on Neutral)

    // Dark Base Colors
    darkBase100: '#001824', // Very Dark Blue (Default Background)
    darkBase200: '#001b2d', // Even Darker Blue (Slightly Darker Background)
    darkBase300: '#001121', // Very Dark Grayish Blue (Even Darker Background)
    darkBaseContent: '#e0eaf3', // Light Grayish Blue (Text on Base)

    // Dark Additional Colors
    darkInfo: '#256bad', // Dark Blue (Info Alerts and Notifications)
    darkInfoContent: '#e0eaf3', // Light Grayish Blue (Text on Info)
    darkSuccess: '#388e3c', // Darker Vibrant Green (Success Notifications)
    darkSuccessContent: '#d0f3d8', // Light Green (Text on Success)
    darkWarning: '#f57c00', // Darker Yellow (Warnings and Alerts)
    darkWarningContent: '#fff3e0', // Light Yellow (Text on Warning)
    darkError: '#b71c1c', // Darker Bright Red (Error Notifications)
    darkErrorContent: '#f8d7da', // Light Pink (Text on Error)

    // Shadows
    lightShadow: '#d7e4ee', // Light Grayish Blue Shadow for Light Mode
    darkShadow: '#1a2f42', // Dark Blue-Gray Shadow for Dark Mode

    // Additional Custom Colors
    highlight: '#ffba08', // Bright Yellow-Orange (Highlighting Elements)
    positive: '#1aa153', // Emerald Green (Positive Actions)
    link: '#0066cc', // Vivid Blue (Hyperlinks)
    callToAction: '#e14a3b', // Bright Orange-Red (Call-to-Action Buttons)
    backdrop: '#f1f5f9', // Off White (Backdrop)
};

export default colors;

export const daisyThemes = [
    {
        light: {
            primary: colors.primary,
            'primary-focus': colors.primaryFocus,
            'primary-content': colors.primaryContent,
            secondary: colors.secondary,
            'secondary-focus': colors.secondaryFocus,
            'secondary-content': colors.secondaryContent,
            accent: colors.accent,
            'accent-focus': colors.accentFocus,
            'accent-content': colors.accentContent,
            neutral: colors.neutral,
            'neutral-focus': colors.neutralFocus,
            'neutral-content': colors.neutralContent,
            'base-100': colors.base100,
            'base-200': colors.base200,
            'base-300': colors.base300,
            'base-content': colors.baseContent,
            info: colors.info,
            'info-content': colors.infoContent,
            success: colors.success,
            'success-content': colors.successContent,
            warning: colors.warning,
            'warning-content': colors.warningContent,
            error: colors.error,
            'error-content': colors.errorContent,

        },
    },
    {
        dark: {
            primary: colors.darkPrimary,
            'primary-focus': colors.darkPrimaryFocus,
            'primary-content': colors.darkPrimaryContent,
            secondary: colors.darkSecondary,
            'secondary-focus': colors.darkSecondaryFocus,
            'secondary-content': colors.darkSecondaryContent,
            accent: colors.darkAccent,
            'accent-focus': colors.darkAccentFocus,
            'accent-content': colors.darkAccentContent,
            neutral: colors.darkNeutral,
            'neutral-focus': colors.darkNeutralFocus,
            'neutral-content': colors.darkNeutralContent,
            'base-100': colors.darkBase100,
            'base-200': colors.darkBase200,
            'base-300': colors.darkBase300,
            'base-content': colors.darkBaseContent,
            info: colors.darkInfo,
            'info-content': colors.darkInfoContent,
            success: colors.darkSuccess,
            'success-content': colors.darkSuccessContent,
            warning: colors.darkWarning,
            'warning-content': colors.darkWarningContent,
            error: colors.darkError,
            'error-content': colors.darkErrorContent,
        },
    },
];
