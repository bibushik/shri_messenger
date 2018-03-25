import {configure} from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./ChatField.js');
    require('./InstanceSummaryElement.js');
    require('./Footer.js');
    require('./ChatList.js');
}

configure(loadStories, module);
