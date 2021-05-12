import templateEngine from './TemplateEngine';
import { imgURL } from './api/createRequest';

export default class Bulletin {
  constructor({ id, oldPrice, price, title, seen, locality, date }) {
    this.id = id;
    this.oldPrice = oldPrice;
    this.price = price;
    this.title = title;
    this.seen = seen;
    this.locality = locality;
    this.date = date;
  }

  render() {
    const sourceDate = new Date(this.date);
    const date = `${sourceDate.toLocaleDateString()} ${sourceDate
      .toLocaleTimeString()
      .slice(0, 5)}`;

    return templateEngine.generate({
      type: 'div',
      attr: {
        class: ['bulletin'],
        'data-id': this.id,
      },
      content: [
        {
          type: 'div',
          attr: {
            class: ['bulletin__slider', `${this.seen ? 'seen' : ''}`],
          },
          content: [
            {
              type: 'div',
              attr: {
                class: ['slider__items'],
              },
              listener: [
                {
                  type: 'mouseenter',
                  cb: () => this.onMouseEnter(),
                },
                {
                  type: 'mouseleave',
                  cb: () => this.onMouseLeave(),
                },
              ],
              content: [
                {
                  type: 'div',
                  attr: {
                    class: ['slider__item', 'slider__item-active'],
                  },
                  content: {
                    type: 'img',
                    attr: {
                      class: ['slider__image'],
                      src:
                        imgURL[Math.floor(Math.random() * imgURL.length)] ||
                        'https://source.unsplash.com/random',
                      alt: 'bulletin_picture',
                    },
                    content: '',
                  },
                },
                {
                  type: 'div',
                  attr: {
                    class: ['slider__item'],
                  },
                  content: {
                    type: 'img',
                    attr: {
                      class: ['slider__image'],
                      src:
                        imgURL[Math.floor(Math.random() * imgURL.length)] ||
                        'https://source.unsplash.com/random',
                      alt: 'bulletin_picture',
                    },
                    content: '',
                  },
                },
                {
                  type: 'div',
                  attr: {
                    class: ['slider__item'],
                  },
                  content: {
                    type: 'img',
                    attr: {
                      class: ['slider__image'],
                      src:
                        imgURL[Math.floor(Math.random() * imgURL.length)] ||
                        'https://source.unsplash.com/random',
                      alt: 'bulletin_picture',
                    },
                    content: '',
                  },
                },
                {
                  type: 'div',
                  attr: {
                    class: ['slider__item'],
                  },
                  content: {
                    type: 'img',
                    attr: {
                      class: ['slider__image'],
                      src:
                        imgURL[Math.floor(Math.random() * imgURL.length)] ||
                        'https://source.unsplash.com/random',
                      alt: 'bulletin_picture',
                    },
                    content: '',
                  },
                },
              ],
            },
            {
              type: 'div',
              attr: {
                class: ['slider__navigation'],
              },
              content: {
                type: 'div',
                attr: {
                  class: ['slider__dots'],
                },
                content: [
                  {
                    type: 'div',
                    attr: {
                      class: ['slider__dot', 'slider__dot-active'],
                    },
                    listener: {
                      type: 'click',
                      cb: (event) => this.onClickDot(event),
                    },
                    content: '',
                  },
                  {
                    type: 'div',
                    attr: {
                      class: ['slider__dot'],
                    },
                    listener: {
                      type: 'click',
                      cb: (event) => this.onClickDot(event),
                    },
                    content: '',
                  },
                  {
                    type: 'div',
                    attr: {
                      class: ['slider__dot'],
                    },
                    listener: {
                      type: 'click',
                      cb: (event) => this.onClickDot(event),
                    },
                    content: '',
                  },
                  {
                    type: 'div',
                    attr: {
                      class: ['slider__dot'],
                    },
                    listener: {
                      type: 'click',
                      cb: (event) => this.onClickDot(event),
                    },
                    content: '',
                  },
                ],
              },
            },
          ],
        },
        {
          type: 'div',
          attr: {
            class: ['bulletin__body', `${this.seen ? 'seen' : ''}`],
          },
          content: [
            {
              type: 'div',
              attr: {
                class: ['bulletin__oldPrice'],
              },
              content: `${this.oldPrice} ₽`,
            },
            {
              type: 'div',
              attr: {
                class: ['bulletin__price'],
              },
              content: `${this.price} ₽`,
            },
            {
              type: 'div',
              attr: {
                class: ['bulletin__title'],
              },
              content: this.title,
            },
            {
              type: 'div',
              attr: {
                class: ['bulletin__wrapper'],
              },
              content: [
                {
                  type: 'div',
                  attr: {
                    class: ['bulletin__locality'],
                  },
                  content: this.locality.slice(0, 15),
                },
                {
                  type: 'div',
                  attr: {
                    class: ['bulletin__date'],
                  },
                  content: date,
                },
              ],
            },
          ],
        },
        {
          type: 'div',
          attr: {
            class: ['bulletin__service'],
          },
          content: [
            {
              type: 'div',
              attr: {
                class: ['bulletin__compare'],
              },
              content: '',
            },
            {
              type: 'div',
              attr: {
                class: ['bulletin__like', `${this.seen ? 'bulletin__like-success' : ''}`],
              },
              listener: {
                type: 'click',
                cb: (event) => this.onClickLike(event),
              },
              content: '',
            },
            {
              type: 'div',
              attr: {
                class: ['bulletin__delivery', `${this.seen ? 'bulletin__delivery-success' : ''}`],
              },
              listener: {
                type: 'click',
                cb: (event) => this.onClickDelivery(event),
              },
              content: '',
            },
            {
              type: 'div',
              attr: {
                class: ['bulletin__deal', `${this.seen ? 'bulletin__deal-success' : ''}`],
              },
              listener: {
                type: 'click',
                cb: (event) => this.onClickDeal(event),
              },
              content: '',
            },
          ],
        },
        {
          type: 'div',
          attr: {
            class: ['bulletin__seen', `${this.seen ? '' : 'hidden'}`],
          },
          content: 'Просмотрено',
        },
      ],
    });
  }

  onClickLike(event) {
    const likeElement = event.target;
    likeElement.classList.toggle('bulletin__like-success');
  }

  onClickDelivery(event) {
    const likeElement = event.target;
    likeElement.classList.toggle('bulletin__delivery-success');
  }

  onClickDeal(event) {
    const likeElement = event.target;
    likeElement.classList.toggle('bulletin__deal-success');
  }

  get bulletinContainer() {
    return document.querySelector(`.bulletin[data-id="${this.id}"]`);
  }

  get arraySliderItems() {
    return [...this.bulletinContainer.querySelectorAll('.slider__item')];
  }

  get arrayDotItems() {
    return [...this.bulletinContainer.querySelectorAll('.slider__dot')];
  }

  onClickDot(event) {
    const idx = this.arrayDotItems.findIndex((item) => item === event.target);
    this.changeSlide(idx);
  }

  changeSlide(count) {
    this.arraySliderItems.forEach((el) => el.classList.remove('slider__item-active'));
    this.arraySliderItems[count].classList.add('slider__item-active');
    this.arrayDotItems.forEach((el) => el.classList.remove('slider__dot-active'));
    this.arrayDotItems[count].classList.add('slider__dot-active');
  }

  onMouseEnter() {
    let counter = 0;
    this.timerID = setInterval(() => {
      if (counter > 3) {
        counter = 0;
      }
      this.changeSlide(counter);
      counter += 1;
    }, 2000);
  }

  onMouseLeave() {
    clearInterval(this.timerID);
    this.timerID = null;
  }
}
