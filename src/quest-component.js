import {entity} from "./entity.js";


export const quest_component = (() => {

  const _TITLE = 'Welcome Adventurer!';
  const _TEXT = `Welcome to DurhamVille adventurer, please make your way to...
  wait... are you the new mayor replacing Josh Durham? I'm sorry I did not realize it was you.
  Well in this case, Mr. Josh has assigned me to have you complete a couple tasks to learn more about him.
  Lets see here.... where is it... AH here it is, okay so it says here that you must kill 10 purple vampire bats
  and you shall recieve your first piece of knowledge, there are three pieces in total. Come back
  to me once you have completed this! Good Luck... don't die, we're really excited to have you here and we would hate to see
  you leave so soon. `;

  class QuestComponent extends entity.Component {
    constructor() {
      super();

      const e = document.getElementById('quest-ui');
      e.style.visibility = 'hidden';
    }

    InitComponent() {
      this._RegisterHandler('input.picked', (m) => this._OnPicked(m));
    }

    _OnPicked(msg) {
      // HARDCODE A QUEST
      const quest = {
        id: 'foo',
        title: _TITLE,
        text: _TEXT,
      };
      this._AddQuestToJournal(quest);
    }

    _AddQuestToJournal(quest) {
      const ui = this.FindEntity('ui').GetComponent('UIController');
      ui.AddQuest(quest);
    }
  };

  return {
      QuestComponent: QuestComponent,
  };
})();