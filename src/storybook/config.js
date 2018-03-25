import {configure} from '@storybook/react';

function loadStories() {
    require('./Avatar.js');
    require('./ChatField.js');
    require('./ChatPage.js');
    require('./InstanceSummaryElement.js');
    require('./ChatList.js');
}

configure(loadStories, module);