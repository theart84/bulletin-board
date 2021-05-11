import Bulletin from './Bulletin';
import templateEngine from './TemplateEngine';
import { createRequest } from './api/createRequest';

export default class BulletinBoard {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('This is not HTML element!');
    }
    this.container = container;
    this.currentBulletin = 0;
    this.step = 16;
    this.state = [];
  }

  init() {
    this.bindToDOM();
    this.registerEvents();
    this.subscribeOnEvents();
    this.initState();
  }

  bindToDOM() {
    this.container.appendChild(templateEngine.generate(this.markup()));
  }

  registerEvents() {
    const showMoreButton = this.container.querySelector('.board__link-show-more');
    showMoreButton.addEventListener('click', () => this.onShowMoreHandler());
  }

  subscribeOnEvents() {}

  onShowMoreHandler() {
    this.renderBulletin();
  }

  async initState() {
    this.state = await createRequest();
    await this.renderBulletin(this.step);
  }

  async renderBulletin() {
    for (let i = this.currentBulletin; i < this.currentBulletin + this.step; i++) {
      if (i === 100) {
        this.currentBulletin = 100;
        return;
      }
      const newBulletin = new Bulletin(this.state[i]);
      this.boardContentElement.appendChild(newBulletin.render());
    }
    this.currentBulletin += this.step;
  }

  get boardContentElement() {
    return this.container.querySelector('.board__content');
  }

  markup() {
    return {
      type: 'section',
      attr: {
        class: ['board'],
      },
      content: [
        {
          type: 'div',
          attr: {
            class: ['board__header'],
          },
          content: 'Похожие объявления',
        },
        {
          type: 'div',
          attr: {
            class: ['board__content'],
          },
          content: '',
        },
        {
          type: 'div',
          attr: {
            class: ['board__footer'],
          },
          content: {
            type: 'a',
            attr: {
              class: ['board__link-show-more'],
            },
            content: 'Показать еще',
          },
        },
      ],
    };
  }
}
