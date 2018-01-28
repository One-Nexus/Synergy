/**
 * Get blacklisted modifers
 */
export default function getBlacklistedModifiers() {
    return (global && global.Synergy) ? global.Synergy.blacklistedModifiers : [];
}