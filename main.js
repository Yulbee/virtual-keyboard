const keyLayout = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del',
'CapsLog', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►','Ctrl'];

/*for (let i=0; i<keyboard.length;i++) {
keys.push(String.fromCharCode(keyboard[i]));
        //console.log(String.fromCharCode(keyboard[i]));
    }
console.log(keys)*/

const createWrapper = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
return wrapper;
  };
  
const createTitle = () => {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'RSS Virtual Keyboard';
return title;
  };
  
const createTextarea = () => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
return textarea;
  };
  
const createKeyboard = () => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
return keyboard;
  }

const createDescription = () => {
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = 'Клавиатура создана в операционной системе Windows';
return description;
    }

const createLanguageDescription = () => {
    const language = document.createElement('p');
    language.classList.add('language');
    language.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';
return language;
        }   



  const wrapper = createWrapper();
  document.body.append(wrapper);
  const title = createTitle();
  wrapper.append(title);
  const textarea = createTextarea();
  wrapper.append(textarea);
  const keyboard = createKeyboard();
  wrapper.append(keyboard);
  const description = createDescription();
  wrapper.append(description);
  const language = createLanguageDescription();
  wrapper.append(language);
  
  keyLayout.forEach(key => {
    const keyElement = document.createElement('div');
    keyElement.classList.add('keyboard__key');
    keyElement.textContent = key;
    keyboard.append(keyElement);
    keyElement.addEventListener('click', () => {
    const textarea = document.querySelector('.textarea');
    textarea.textContent += key;
       })
});





