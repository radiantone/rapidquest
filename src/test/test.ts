import { RapidQuest, Quest } from '../rapidquest/client'

const rapidquest : RapidQuest = new RapidQuest('http://localhost:8000','41c1ef3ff18edc7ed831ac32f7d6cd42', '941a6944-935b-4c46-a52f-8de9e096ccb3');

const promise : Promise<Quest> = rapidquest.getQuest('600193e66c1ee5658ac441db')

promise.then( quest => {
    if (quest.isAxiosError) {
        console.log("FAILURE: ", quest.stack)
    } else {
        console.log(JSON.stringify(quest.getData(), null, '\t'));
    }
}).catch( err => {
    console.log('catch:Error: ', err)
});

