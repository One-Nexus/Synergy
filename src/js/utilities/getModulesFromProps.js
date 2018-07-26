/**
 * 
 */
export default function getModulesFromProps(props) {
    let classes;

    Object.entries(props).forEach(prop => {
        if (prop[0][0] === prop[0][0].toUpperCase()) {
            if (Object.keys(Synergy.modules).includes(prop[0].toLowerCase())) {
                const module = prop[0].toLowerCase();

                let modifiers = '';

                if (prop[1].constructor === Array) {
                    modifiers = '-' + prop[1].join('-');
                } else if (typeof prop[1] === 'string') {
                    modifiers = '-' + prop[1];
                }

                classes = classes + ' ' + module + modifiers;
            }
        }
    });

    return classes;
}