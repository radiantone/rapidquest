import { RapidQuest, Quest } from '../rapidquest/api'

const rapidquest : RapidQuest = new RapidQuest('http://localhost:8000','41c1ef3ff18edc7ed831ac32f7d6cd42', '941a6944-935b-4c46-a52f-8de9e096ccb3');

const quest : Promise<Quest> = rapidquest.getQuest('600193e66c1ee5658ac441db')

quest.then( quest => {
    console.log(JSON.stringify(quest.getData(), null, '\t'));
}).catch( err => {
    console.log('catch:Error: ', err)
});

