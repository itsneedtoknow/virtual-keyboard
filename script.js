const body = document.querySelector('.body');




function createPage() {

    let wrapper = document.createElement('div');
        header = document.createElement('h1');
        textArea = document.createElement('textarea');
        keyboard = document.createElement('div');
        keyboardWrapper = document.createElement('div');
    
        let keyboardKeys =[
            {key: '`', keyCode: 'Backquote'},
            {key: '1', keyCode: 'Digit1'},
            {key: '2', keyCode: 'Digit2'},
            {key: '3', keyCode: 'Digit3'},
            {key: '4', keyCode: 'Digit4'},
            {key: '5', keyCode: 'Digit5'},
            {key: '6', keyCode: 'Digit6'},
            {key: '7', keyCode: 'Digit7'},
            {key: '8', keyCode: 'Digit8'},
            {key: '9', keyCode: 'Digit9'},
            {key: '0', keyCode: 'Digit0'},
            {key: '-', keyCode: 'Minus'},
            {key: '=', keyCode: 'Equal'},
            {key: 'Backspace', keyCode: 'Backspace'},
            {key: 'Tab', keyCode: 'Tab'},
            {key: 'q', keyCode: 'KeyQ'},
            {key: 'w', keyCode: 'KeyW'},
            {key: 'e', keyCode: 'KeyE'},
            {key: 'r', keyCode: 'KeyR'},
            {key: 't', keyCode: 'KeyT'},
            {key: 'y', keyCode: 'KeyY'},
            {key: 'u', keyCode: 'KeyU'},
            {key: 'i', keyCode: 'KeyI'},
            {key: 'o', keyCode: 'KeyO'} ,
            {key: 'p', keyCode: 'KeyP'},
            {key: '[', keyCode: 'BracketLeft'},
            {key: ']', keyCode: 'BracketRight'},
            {key: '\\', keyCode: 'Backslash'},
            {key: 'Del', keyCode: 'Delete'},
            {key: 'CapsLock', keyCode: 'CapsLock'},
            {key: 'a', keyCode: 'KeyA'},
            {key: 's', keyCode: 'KeyS'},
            {key: 'd', keyCode: 'KeyD'},
            {key: 'f', keyCode: 'KeyF'},
            {key: 'g', keyCode: 'KeyG'},
            {key: 'h', keyCode: 'KeyH'},
            {key: 'j', keyCode: 'KeyJ'},
            {key: 'k', keyCode: 'KeyK'},
            {key: 'l', keyCode: 'KeyL'},
            {key: ';', keyCode: 'Semicolon'},
            {key: "'", keyCode: 'Quote'},
            {key: 'Enter', keyCode: 'Enter'},
            {key: 'Shift', keyCode: 'ShiftLeft'},
            {key: 'z', keyCode: 'KeyZ'},
            {key: 'x', keyCode: 'KeyX'},
            {key: 'c', keyCode: 'KeyC'},
            {key: 'v', keyCode: 'KeyV'},
            {key: 'b', keyCode: 'KeyB'} ,
            {key: 'n', keyCode: 'KeyN'},
            {key: 'm', keyCode: 'KeyM'},
            {key: ',', keyCode: 'Comma'},
            {key: '.', keyCode: 'Period'},
            {key: '/', keyCode: 'Slash'} ,
            {key: 'ArrowUp', keyCode: 'ArrowUp'},
            {key: 'Shift', keyCode: 'ShiftRight'},
            {key: 'Control', keyCode: 'ControlLeft'},
            {key: 'Meta', keyCode: 'MetaLeft'},
            {key: 'Alt', keyCode: 'AltLeft'},
            {key: ' ', keyCode: 'Space'},
            {key: 'Alt', keyCode: 'AltRight'},
            {key: 'ArrowLeft', keyCode: 'ArrowLeft'},            
            {key: 'ArrowDown', keyCode: 'ArrowDown'},
            {key: 'ArrowRight', keyCode: 'ArrowRight'},
            {key: 'Control', keyCode: 'ControlRight'},
        ] 



//     keyboardKeys.forEach(key =>{
//         keyboard.appendChild(key);
//         key.className =key[keyCode];
//         key.innerHTML = key[key];
//         console.log(keyboard)
//     }
    
// )
        

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
    keyboard.className='keyboard';
    wrapper.appendChild(keyboard);

    // wrapper
    keyboardWrapper.className='keyboard-wrapper';
    keyboard.appendChild(keyboardWrapper);
    //key
    for(let i =0; i<keyboardKeys.length;i++){

        let keyBtn = document.createElement('div');
        keyBtn.className='keyboard__key ' + keyboardKeys[i].keyCode;
        keyBtn.innerHTML = keyboardKeys[i].key.toString();
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
createPage(body);
























// function createKeyboard(){
//     let keyboard = document.createElement('div');
//     keyboard.className='keyboard';
//     wrapper.appendChild(keyboard);

//     let keyboardKeys =[
//         {key: '`', keyCode: 'Backquote'},
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
 
// document.onkeydown = function(event){
//     keyboardKeys.push({key: event.key, keyCode: event.code})
//     console.log(keyboardKeys);
// }
