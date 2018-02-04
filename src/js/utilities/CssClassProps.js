/**
 * Get props to be used to add CSS classes
 */
export default function CssClassProps(global) {
    return (global && global.Synergy) ? global.Synergy.CssClassProps : [];
}