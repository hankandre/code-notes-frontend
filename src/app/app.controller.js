'use strict';

class AppController {
    constructor(CONFIG) {
        'ngInject';
        // this.gitService = gitService;
        Object.assign(this, CONFIG);
        console.log(this);
        
    }

    select(note) {
        // this.gitService.getCommand(note.id)
        //     .then(response => console.log(response.data));
    }

    remove(note){
        // this.gitService.deleteNote(note)
        //     .then(response => console.log(response.data));
    }
}

export default AppController;