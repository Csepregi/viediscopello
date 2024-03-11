import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { icon } from '@fortawesome/fontawesome-svg-core';


type Props = {
	name: IconName,
    prefix?: IconPrefix,
    spin?: boolean,
};

const Icon = ({ name, prefix = 'fas', spin = false }: Props) => {
	const classes = [];
    
    if (spin) {
    	classes.push('fa-spin');
    }
    
	const iconHTML = icon({
    	prefix,
        iconName: name
    }, {
    	classes,
    }).html;
    
    return (
    	<span dangerouslySetInnerHTML={{ __html: iconHTML[0] }} />
    );
};

export default Icon;