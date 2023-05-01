

const Keyboard = {
    elements: {
      title: null,
      textarea: null,
      main: null,
      keyBoardContainer:null,
      keys: [],
      description: null,
      language: null
    },

   eventHandlers: {
      oninput: null,
      onclose: null
   },

   properties: {
      value: "",
      capsLock: false
},

init() {



this.elements.title = document.createElement('h1');
this.elements.textarea = document.createElement('textarea');
this.elements.main = document.createElement('div');
this.elements.keyBoardContainer = document.createElement('div');
this.elements.description = document.createElement('p');
this.elements.language = document.createElement('p');

this.elements.title.classList.add('title');
this.elements.title.textContent = 'RSS Virtual Keyboard';
this.elements.textarea.classList.add('textarea');
this.elements.main.classList.add('wrapper');
this.elements.keyBoardContainer.classList.add('keyboard');
this.elements.description.classList.add('description');
this.elements.description.textContent = 'Клавиатура создана в операционной системе Windows';
this.elements.language.classList.add('language');
this.elements.language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

document.body.appendChild(this.elements.title);
document.body.appendChild(this.elements.textarea);
this.elements.main.appendChild(this.elements.keyBoardContainer);
this.elements.keyBoardContainer.appendChild(this.createKeys());
document.body.appendChild(this.elements.main);
document.body.appendChild(this.elements.description);
document.body.appendChild(this.elements.language);

this.elements.keys = document.querySelectorAll('.keyboard__key');


},

createKeys() {
const fragment = document.createDocumentFragment();
const keyLayout = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Arrow_up', 'Shift',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Arrow_left', 'Arrow_down', 'Arrow_right','Ctrl'];

    const createIconHTML = (icon_name) => {
        return `<i class="material-icons">${icon_name}</i>`
    }

    keyLayout.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('keyboard__key');
        
        switch (key) {
            case 'Backspace':
                keyElement.classList.add('keyboard__key_wide', 'keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('backspace');
                keyElement.addEventListener('click', ( ) => {
                    this.properties.value = this.properties.value.substring(0, this.properties.value.length-1);
                    this.triggerEvent(oninput);
                    document.querySelector('.textarea').textContent = this.properties.value;
                });
                break;

            case 'Del':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.textContent = key;
                keyElement.addEventListener('click', ( ) => {
                    this.properties.value = this.properties.value.substring(1);
                    this.triggerEvent(oninput);
                    document.querySelector('.textarea').textContent = this.properties.value;
                });
                break;

            case 'CapsLock':
                keyElement.classList.add('keyboard__key_wide', 'keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('keyboard_capslock');
                keyElement.addEventListener('click', ( ) => {
                    this.toggleCapsLock();
                    keyElement.classList.toggle('keyboard__key_active', this.properties.capsLock);
                    document.querySelector('.textarea').textContent = this.properties.value;
                });
                break;

            case 'Enter':
                keyElement.classList.add('keyboard__key_wide', 'keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('keyboard_return');
                keyElement.addEventListener('click', ( ) => {
                    this.properties.value +="\n";
                    this.triggerEvent(oninput);
                    document.querySelector('.textarea').textContent = this.properties.value;
                });
                    
                 break;

            case 'Tab':
                keyElement.classList.add('keyboard__key_wide', 'keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('sync_alt');
                keyElement.addEventListener('click', ( ) => {
                    /*this.properties.value +=' ';*/
                    this.triggerEvent(oninput);
                });
                    
                 break;

            case 'Space':
                keyElement.classList.add('keyboard__key_extra-wide');
                keyElement.innerHTML = createIconHTML('space_bar');
                keyElement.addEventListener('click', () => {
                    this.properties.value +=' ';
                    this.triggerEvent(oninput);
                    document.querySelector('.textarea').textContent = this.properties.value;
                    });
                        
                break;
            case 'Shift':
                keyElement.classList.add('keyboard__key_wide', 'keyboard__key_dark');
                keyElement.textContent = key;    
                break;

            case 'Shift':
                keyElement.classList.add('keyboard__key_wide', 'keyboard__key_dark');
                keyElement.textContent = key;    
                break;

            case 'Win':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.textContent = key;    
                break;

            case 'Alt':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.textContent = key;    
                break;

            case 'Ctrl':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.textContent = key;    
                break;

            case 'Arrow_up':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('arrow_drop_up');
                break;

            case 'Arrow_down':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('arrow_drop_down');
                break;

            case 'Arrow_right':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('arrow_right');
                break;

            case 'Arrow_left':
                keyElement.classList.add('keyboard__key_dark');
                keyElement.innerHTML = createIconHTML('arrow_left');
                break;

                

            default:
                keyElement.textContent = key;
                keyElement.addEventListener('click', () => {
                    this.properties.value += this.properties.capsLock ? key.toLocaleUpperCase() : key.toLocaleLowerCase();
                    this.triggerEvent(oninput);
                    document.querySelector('.textarea').textContent = this.properties.value;
                    });
                break;

                
        }
        
        fragment.appendChild(keyElement)
           })


           return fragment;
    },

    triggerEvent() {

},

toggleCapsLock() {
this.properties.capsLock = !this.properties.capsLock;

for (const key of this.elements.keys) {

    if (!(key.classList.contains('keyboard__key_dark') || key.classList.contains('keyboard__key_extra-wide'))) {
        key.textContent = this.properties.capsLock ? key.textContent.toLocaleUpperCase() : key.textContent.toLocaleLowerCase();
    }
}

},

open(initialValue, oninput, onclose) {

},

close() {

}

}

window.addEventListener('DOMContentLoaded', function () {
    Keyboard.init();
}

)