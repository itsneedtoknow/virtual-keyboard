const body = document.querySelector('.body');
let wrapper = document.createElement('div');
header = document.createElement('h1');
textArea = document.createElement('textarea');
keyboard = document.createElement('div');
keyboardWrapper = document.createElement('div');
// массив букв
let keys =[
    {key1: '`', key2: 'ё', keyCode: 'Backquote'},
    {key1: '1', key2: '1', keyCode: 'Digit2'},
    {key1: '2', key2: '2', keyCode: 'Digit1'},
    {key1: '3', key2: '3', keyCode: 'Digit3'},
    {key1: '4', key2: '4', keyCode: 'Digit4'},
    {key1: '5', key2: '5', keyCode: 'Digit5'},
    {key1: '6', key2: '6', keyCode: 'Digit6'},
    {key1: '7', key2: '7', keyCode: 'Digit7'},
    {key1: '8', key2: '8', keyCode: 'Digit8'},
    {key1: '9', key2: '9', keyCode: 'Digit9'},
    {key1: '0', key2: '0', keyCode: 'Digit0'},
    {key1: '-', key2: '-', keyCode: 'Minus'},
    {key1: '=', key2: '=', keyCode: 'Equal'},
    {key1: 'Backspace', key2: 'Backspace', keyCode: 'Backspace'},
    {key1: 'Tab', key2: 'Tab', keyCode: 'Tab'},
    {key1: 'q', key2: 'й', keyCode: 'KeyQ'},
    {key1: 'w', key2: 'ц', keyCode: 'KeyW'},
    {key1: 'e', key2: 'у', keyCode: 'KeyE'},
    {key1: 'r', key2: 'к', keyCode: 'KeyR'},
    {key1: 't', key2: 'е', keyCode: 'KeyT'},
    {key1: 'y', key2: 'н', keyCode: 'KeyY'},
    {key1: 'u', key2: 'г', keyCode: 'KeyU'},
    {key1: 'i', key2: 'ш', keyCode: 'KeyI'},
    {key1: 'o', key2: 'щ', keyCode: 'KeyO'} ,
    {key1: 'p', key2: 'з', keyCode: 'KeyP'},
    {key1: '[', key2: 'х', keyCode: 'BracketLeft'},
    {key1: ']', key2: 'ъ', keyCode: 'BracketRight'},
    {key1: '\\', key2: '\\', keyCode: 'Backslash'},
    {key1: 'Del', key2: 'Del', keyCode: 'Delete'},
    {key1: 'CapsLock', key2: 'CapsLock', keyCode: 'CapsLock'},
    {key1: 'a', key2: 'ф', keyCode: 'KeyA'},
    {key1: 's', key2: 'ы', keyCode: 'KeyS'},
    {key1: 'd', key2: 'в', keyCode: 'KeyD'},
    {key1: 'f', key2: 'а', keyCode: 'KeyF'},
    {key1: 'g', key2: 'п', keyCode: 'KeyG'},
    {key1: 'h', key2: 'р', keyCode: 'KeyH'},
    {key1: 'j', key2: 'о', keyCode: 'KeyJ'},
    {key1: 'k', key2: 'л', keyCode: 'KeyK'},
    {key1: 'l', key2: 'д', keyCode: 'KeyL'},
    {key1: ';', key2: 'ж', keyCode: 'Semicolon'},
    {key1: "'", key2: 'э', keyCode: 'Quote'},
    {key1: 'Enter', key2: 'Enter', keyCode: 'Enter'},
    {key1: 'Shift', key2: 'Shift', keyCode: 'ShiftLeft'},
    {key1: 'z', key2: 'я', keyCode: 'KeyZ'},
    {key1: 'x', key2: 'ч', keyCode: 'KeyX'},
    {key1: 'c', key2: 'с', keyCode: 'KeyC'},
    {key1: 'v', key2: 'м', keyCode: 'KeyV'},
    {key1: 'b', key2: 'и', keyCode: 'KeyB'} ,
    {key1: 'n', key2: 'т', keyCode: 'KeyN'},
    {key1: 'm', key2: 'ь', keyCode: 'KeyM'},
    {key1: ',', key2: 'б', keyCode: 'Comma'},
    {key1: '.', key2: 'ю', keyCode: 'Period'},
    {key1: '/', key2: '.', keyCode: 'Slash'} ,
    {key1: 'ArrowUp', key2: 'ArrowUp', keyCode: 'ArrowUp'},
    {key1: 'Shift', key2: 'Shift', keyCode: 'ShiftRight'},
    {key1: 'Control', key2: 'Control', keyCode: 'ControlLeft'},
    {key1: 'Meta', key2: 'Meta', keyCode: 'MetaLeft'},
    {key1: 'Alt', key2: 'Alt', keyCode: 'AltLeft'},
    {key1: ' ', key2: ' ', keyCode: 'Space'},
    {key1: 'Alt', key2: 'Alt', keyCode: 'AltRight'},
    {key1: 'ArrowLeft', key2: 'ArrowLeft', keyCode: 'ArrowLeft'},            
    {key1: 'ArrowDown', key2: 'ArrowDown', keyCode: 'ArrowDown'},
    {key1: 'ArrowRight', key2: 'ArrowRight', keyCode: 'ArrowRight'},
    {key1: 'Control', key2: 'Control', keyCode: 'ControlRight'},
]


// создать клавиатуру
function createPage() {

  

    // wrapper
        wrapper.className = 'window-wrapper';
        body.appendChild(wrapper);

    // header
        header.className = 'page-title';
        header.innerHTML = 'RSS Виртуальная клавиатура';
        wrapper.appendChild(header);


    // textarea
        textArea.className='textarea';
        wrapper.appendChild(textArea);  

    // keyboard
    keyboard.className='keyboard eng';
    wrapper.appendChild(keyboard);

    // wrapper
    keyboardWrapper.className='keyboard-wrapper';
    keyboard.appendChild(keyboardWrapper);

//     //key
    if(keyboard.classList.contains('eng')){
//если англ раскладка
    for(let i = 0; i<keys.length;i++){

    let keyBtn = document.createElement('div');
    keyBtn.className='keyboard__key ' + keys[i].keyCode;
    keyBtn.innerHTML = keys[i].key1.toString();
    if(keyBtn.innerHTML == 'ArrowRight'){
        keyBtn.innerHTML = '►';
    }else if(keyBtn.innerHTML == 'ArrowUp'){
        keyBtn.innerHTML = '▲';
    }else if(keyBtn.innerHTML == 'ArrowLeft'){
        keyBtn.innerHTML = '◄';
    }else if(keyBtn.innerHTML == 'ArrowDown'){
        keyBtn.innerHTML = '▼';
    }else if(keyBtn.innerHTML == 'Control'){
        keyBtn.innerHTML = 'Ctrl';
    }else if(keyBtn.innerHTML == 'Meta'){
        keyBtn.innerHTML = 'Win';
    }
    keyboardWrapper.appendChild(keyBtn);


    if(i==13 || i ==28 || i == 41 || i==54){
        keyBtn = document.createElement('div');
        keyBtn.className='clearfix';
        keyBtn.innerHTML = '';
        keyboardWrapper.appendChild(keyBtn); 
    }

    
    }
    }
    else if(keyboard.classList.contains('rus')){
        for(let i = 0; i<keys.length;i++){

            let keyBtn = document.createElement('div');
            keyBtn.className='keyboard__key ' + keys[i].keyCode;
            keyBtn.innerHTML = keys[i].key2.toString();
            if(keyBtn.innerHTML == 'ArrowRight'){
                keyBtn.innerHTML = '►';
            }else if(keyBtn.innerHTML == 'ArrowUp'){
                keyBtn.innerHTML = '▲';
            }else if(keyBtn.innerHTML == 'ArrowLeft'){
                keyBtn.innerHTML = '◄';
            }else if(keyBtn.innerHTML == 'ArrowDown'){
                keyBtn.innerHTML = '▼';
            }else if(keyBtn.innerHTML == 'Control'){
                keyBtn.innerHTML = 'Ctrl';
            }else if(keyBtn.innerHTML == 'Meta'){
                keyBtn.innerHTML = 'Win';
            }
            keyboardWrapper.appendChild(keyBtn);
        
        
            if(i==13 || i ==28 || i == 41 || i==54){
                keyBtn = document.createElement('div');
                keyBtn.className='clearfix';
                keyBtn.innerHTML = '';
                keyboardWrapper.appendChild(keyBtn); 
            }
        
            
            }
    }
   
}
createPage(body);


window.addEventListener('keydown', function(keys){
    for(let i = 0; i < keys.length; i++){
        keys[i].classList.add('active');
        
    }
})




// переключение языка-не работает
function langSwitch(event){
    if(event.code == 'Alt' && (event.shiftkey)) {
       if ( keyboard.classList.contains('eng')){
        keyboard.classList.remove('eng');
        keyboard.classList.add('rus');
       }else{
        keyboard.classList.remove('rus');
        keyboard.classList.add('eng');
       }
      }
}

document.addEventListener('keydown', langSwitch);






















//     let keyboardKeys =[
//         {key1: '`', key2: 'ё', keyCode: 'Backquote'},
//         {key: '1', keyCode: 'Digit1'},
//         {key: '2', keyCode: 'Digit2'},
//         {key: '3', keyCode: 'Digit3'},
//         {key: '4', keyCode: 'Digit4'},
//         {key: '5', keyCode: 'Digit5'},
//         {key: '6', keyCode: 'Digit6'},
//         {key: '7', keyCode: 'Digit7'},
//         {key: '8', keyCode: 'Digit8'},
//         {key: '9', keyCode: 'Digit9'},
//         {key: '0', keyCode: 'Digit0'},
//         {key: '-', keyCode: 'Minus'},
//         {key: '=', keyCode: 'Equal'},
//         {key: 'Backspace', keyCode: 'Backspace'},
//         {key: 'Tab', keyCode: 'Tab'},
//         {key: 'q', keyCode: 'KeyQ'},
//         {key: 'w', keyCode: 'KeyW'},
//         {key: 'e', keyCode: 'KeyE'},
//         {key: 'r', keyCode: 'KeyR'},
//         {key: 't', keyCode: 'KeyT'},
//         {key: 'y', keyCode: 'KeyY'},
//         {key: 'u', keyCode: 'KeyU'},
//         {key: 'i', keyCode: 'KeyI'},
//         {key: 'o', keyCode: 'KeyO'} ,
//         {key: 'p', keyCode: 'KeyP'},
//         {key: '[', keyCode: 'BracketLeft'},
//         {key: ']', keyCode: 'BracketRight'},
//         {key: '\\', keyCode: 'Backslash'},
//         {key: 'CapsLock', keyCode: 'CapsLock'},
//         {key: 'a', keyCode: 'KeyA'},
//         {key: 's', keyCode: 'KeyS'},
//         {key: 'd', keyCode: 'KeyD'},
//         {key: 'f', keyCode: 'KeyF'},
//         {key: 'g', keyCode: 'KeyG'},
//         {key: 'h', keyCode: 'KeyH'},
//         {key: 'j', keyCode: 'KeyJ'},
//         {key: 'k', keyCode: 'KeyK'},
//         {key: 'l', keyCode: 'KeyL'},
//         {key: ';', keyCode: 'Semicolon'},
//         {key: "'", keyCode: 'Quote'},
//         {key: 'Enter', keyCode: 'Enter'},
//         {key: 'Shift', keyCode: 'ShiftLeft'},
//         {key: 'z', keyCode: 'KeyZ'},
//         {key: 'x', keyCode: 'KeyX'},
//         {key: 'c', keyCode: 'KeyC'},
//         {key: 'v', keyCode: 'KeyV'},
//         {key: 'b', keyCode: 'KeyB'} ,
//         {key: 'n', keyCode: 'KeyN'},
//         {key: 'm', keyCode: 'KeyM'},
//         {key: ',', keyCode: 'Comma'},
//         {key: ',', keyCode: 'Comma'},
//         {key: '.', keyCode: 'Period'},
//         {key: '/', keyCode: 'Slash'} ,
//         {key: 'Shift', keyCode: 'ShiftRight'},
//         {key: 'Control', keyCode: 'ControlLeft'},
//         {key: 'Meta', keyCode: 'MetaLeft'},
//         {key: 'Alt', keyCode: 'AltLeft'},
//         {key: ' ', keyCode: 'Space'},
//         {key: 'Alt', keyCode: 'AltRight'},
//         {key: 'Control', keyCode: 'ControlRight'},
//         {key: 'ArrowLeft', keyCode: 'ArrowLeft'},
//         {key: 'ArrowUp', keyCode: 'ArrowUp'},
//         {key: 'ArrowDown', keyCode: 'ArrowDown'},
//         {key: 'ArrowRight', keyCode: 'ArrowRight'},
//         {key: 'ArrowRight', keyCode: 'ArrowRight'},
//     ] 

//     keyboardKeys.forEach(key =>{
//         keyboard.appendChild(key);
//         key.className =key[keyCode];
//         key.innerHTML = key[key];
//         console.log(keyboard)
//     }
    
// )



// }
// createKeyboard(body);
 
// let keysRus=[];
// document.onkeydown = function(event){
//     keysRus.push({key: event.key, keyCode: event.code})
//     console.log(keysRus);
// }
