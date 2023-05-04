const body = document.querySelector('body'); 
let wrapper = document.createElement('div');
header = document.createElement('h1');
textArea = document.createElement('textarea');
keyboard = document.createElement('div');
keyboardWrapper = document.createElement('div');
// массив букв
keys =[
    {keyEng: '`', keyEngCaps: '`', keyRus: 'ё', keyRusCaps: 'Ё', keyCode: 'Backquote'},
    {keyEng: '1', keyEngCaps: '1', keyRus: '1', keyRusCaps: '1', keyCode: 'Digit1'},
    {keyEng: '2', keyEngCaps: '2', keyRus: '2', keyRusCaps: '2', keyCode: 'Digit2'},    
    {keyEng: '3', keyEngCaps: '3', keyRus: '3', keyRusCaps: '3', keyCode: 'Digit3'},
    {keyEng: '4', keyEngCaps: '4', keyRus: '4', keyRusCaps: '4', keyCode: 'Digit4'},
    {keyEng: '5', keyEngCaps: '5', keyRus: '5', keyRusCaps: '5', keyCode: 'Digit5'},
    {keyEng: '6', keyEngCaps: '6', keyRus: '6', keyRusCaps: '6', keyCode: 'Digit6'},
    {keyEng: '7', keyEngCaps: '7', keyRus: '7', keyRusCaps: '7', keyCode: 'Digit7'},
    {keyEng: '8', keyEngCaps: '8', keyRus: '8', keyRusCaps: '8', keyCode: 'Digit8'},
    {keyEng: '9', keyEngCaps: '9', keyRus: '9', keyRusCaps: '9', keyCode: 'Digit9'},
    {keyEng: '0', keyEngCaps: '0', keyRus: '0', keyRusCaps: '0', keyCode: 'Digit0'},
    {keyEng: '-', keyEngCaps: '-', keyRus: '-', keyRusCaps: '-', keyCode: 'Minus'},
    {keyEng: '=', keyEngCaps: '=', keyRus: '=', keyRusCaps: '=', keyCode: 'Equal'},
    {keyEng: 'Backspace', keyEngCaps: 'Backspace', keyRus: 'Backspace', keyRusCaps: 'Backspace', keyCode: 'Backspace'},
    {keyEng: 'Tab', keyEngCaps: 'Tab', keyRus: 'Tab', keyRusCaps: 'Tab', keyCode: 'Tab'},
    {keyEng: 'q', keyEngCaps: 'Q', keyRus: 'й', keyRusCaps: 'Й', keyCode: 'KeyQ'},
    {keyEng: 'w', keyEngCaps: 'W', keyRus: 'ц', keyRusCaps: 'Ц', keyCode: 'KeyW'},
    {keyEng: 'e', keyEngCaps: 'E', keyRus: 'у', keyRusCaps: 'У', keyCode: 'KeyE'},
    {keyEng: 'r', keyEngCaps: 'R', keyRus: 'к', keyRusCaps: 'К', keyCode: 'KeyR'},
    {keyEng: 't', keyEngCaps: 'T', keyRus: 'е', keyRusCaps: 'Е', keyCode: 'KeyT'},
    {keyEng: 'y', keyEngCaps: 'Y', keyRus: 'н', keyRusCaps: 'Н', keyCode: 'KeyY'},
    {keyEng: 'u', keyEngCaps: 'U', keyRus: 'г', keyRusCaps: 'Г', keyCode: 'KeyU'},
    {keyEng: 'i', keyEngCaps: 'I', keyRus: 'ш', keyRusCaps: 'Ш', keyCode: 'KeyI'},
    {keyEng: 'o', keyEngCaps: 'O', keyRus: 'щ', keyRusCaps: 'Щ', keyCode: 'KeyO'} ,
    {keyEng: 'p', keyEngCaps: 'P', keyRus: 'з', keyRusCaps: 'З', keyCode: 'KeyP'},
    {keyEng: '[', keyEngCaps: '[', keyRus: 'х', keyRusCaps: 'Х', keyCode: 'BracketLeft'},
    {keyEng: ']', keyEngCaps: ']', keyRus: 'ъ', keyRusCaps: 'Ъ', keyCode: 'BracketRight'},
    {keyEng: '\\', keyEngCaps: '\\', keyRus: '\\', keyRusCaps: '\\', keyCode: 'Backslash'},
    {keyEng: 'Del', keyEngCaps: 'Del', keyRus: 'Del', keyRusCaps: 'Del', keyCode: 'Delete'},
    {keyEng: 'CapsLock', keyEngCaps: 'CapsLock', keyRus: 'CapsLock', keyRusCaps: 'CapsLock', keyCode: 'CapsLock'},
    {keyEng: 'a', keyEngCaps: 'A', keyRus: 'ф', keyRusCaps: 'Ф', keyCode: 'KeyA'},
    {keyEng: 's', keyEngCaps: 'S', keyRus: 'ы', keyRusCaps: 'Ы', keyCode: 'KeyS'},
    {keyEng: 'd', keyEngCaps: 'D', keyRus: 'в', keyRusCaps: 'В', keyCode: 'KeyD'},
    {keyEng: 'f', keyEngCaps: 'F', keyRus: 'а', keyRusCaps: 'А', keyCode: 'KeyF'},
    {keyEng: 'g', keyEngCaps: 'G', keyRus: 'п', keyRusCaps: 'П', keyCode: 'KeyG'},
    {keyEng: 'h', keyEngCaps: 'H', keyRus: 'р', keyRusCaps: 'Р', keyCode: 'KeyH'},
    {keyEng: 'j', keyEngCaps: 'J', keyRus: 'о', keyRusCaps: 'О', keyCode: 'KeyJ'},
    {keyEng: 'k', keyEngCaps: 'K', keyRus: 'л', keyRusCaps: 'Л', keyCode: 'KeyK'},
    {keyEng: 'l', keyEngCaps: 'L', keyRus: 'д', keyRusCaps: 'Д', keyCode: 'KeyL'},
    {keyEng: ';', keyEngCaps: ';', keyRus: 'ж', keyRusCaps: 'Ж', keyCode: 'Semicolon'},
    {keyEng: "'", keyEngCaps: "'", keyRus: 'э', keyRusCaps: 'Э', keyCode: 'Quote'},
    {keyEng: 'Enter', keyEngCaps: "Enter", keyRus: 'Enter', keyRusCaps: 'Enter', keyCode: 'Enter'},
    {keyEng: 'Shift', keyEngCaps: "Shift", keyRus: 'Shift', keyRusCaps: 'Shift', keyCode: 'ShiftLeft'},
    {keyEng: 'z', keyEngCaps: "Z", keyRus: 'я', keyRusCaps: 'Я', keyCode: 'KeyZ'},
    {keyEng: 'x', keyEngCaps: "X", keyRus: 'ч', keyRusCaps: 'Ч', keyCode: 'KeyX'},
    {keyEng: 'c', keyEngCaps: "C", keyRus: 'с', keyRusCaps: 'С', keyCode: 'KeyC'},
    {keyEng: 'v', keyEngCaps: "V", keyRus: 'м', keyRusCaps: 'М', keyCode: 'KeyV'},
    {keyEng: 'b', keyEngCaps: "B", keyRus: 'и', keyRusCaps: 'И', keyCode: 'KeyB'} ,
    {keyEng: 'n', keyEngCaps: "N", keyRus: 'т', keyRusCaps: 'Т', keyCode: 'KeyN'},
    {keyEng: 'm', keyEngCaps: "M", keyRus: 'ь', keyRusCaps: 'Ь', keyCode: 'KeyM'},
    {keyEng: ',', keyEngCaps: ",", keyRus: 'б', keyRusCaps: 'Б', keyCode: 'Comma'},
    {keyEng: '.', keyEngCaps: ".", keyRus: 'ю', keyRusCaps: 'Ю', keyCode: 'Period'},
    {keyEng: '/', keyEngCaps: "/", keyRus: '.', keyRusCaps: '.', keyCode: 'Slash'} ,
    {keyEng: 'ArrowUp', keyEngCaps: "ArrowUp", keyRus: 'ArrowUp', keyRusCaps: 'ArrowUp', keyCode: 'ArrowUp'},
    {keyEng: 'Shift', keyEngCaps: "Shift", keyRus: 'Shift', keyRusCaps: 'Shift', keyCode: 'ShiftRight'},
    {keyEng: 'Control', keyEngCaps: "Control", keyRus: 'Control', keyRusCaps: 'Control', keyCode: 'ControlLeft'},
    {keyEng: 'Meta', keyEngCaps: "Meta", keyRus: 'Meta', keyRusCaps: 'Meta',keyCode: 'MetaLeft'},
    {keyEng: 'Alt', keyEngCaps: "Alt", keyRus: 'Alt', keyRusCaps: 'Alt', keyCode: 'AltLeft'},
    {keyEng: ' ', keyEngCaps: " ", keyRus: ' ', keyRusCaps: ' ', keyCode: 'Space'},
    {keyEng: 'Alt', keyEngCaps: "Alt", keyRus: 'Alt', keyRusCaps: 'Alt', keyCode: 'AltRight'},
    {keyEng: 'ArrowLeft', keyEngCaps: "ArrowLeft", keyRus: 'ArrowLeft', keyRusCaps: 'ArrowLeft', keyCode: 'ArrowLeft'},            
    {keyEng: 'ArrowDown', keyEngCaps: "ArrowDown", keyRus: 'ArrowDown', keyRusCaps: 'ArrowDown', keyCode: 'ArrowDown'},
    {keyEng: 'ArrowRight', keyEngCaps: "ArrowRight", keyRus: 'ArrowRight', keyRusCaps: 'ArrowRight', keyCode: 'ArrowRight'},
    {keyEng: 'Control', keyEngCaps: "Control", keyRus: 'Control', keyRusCaps: 'Control', keyCode: 'ControlRight'},
];
key = document.querySelectorAll('.keyboard__key');
notifyMsg = document.createElement('p');


// создать клавиатуру и поле ввода
function createPage() {
    
    // wrapper
        wrapper.className = 'window-wrapper';
        body.appendChild(wrapper);

    // header
        header.className = 'page-title';
        header.innerHTML = 'RSS Виртуальная клавиатура';
        wrapper.appendChild(header);


    // textarea
        textArea.className='textarea autofocus';
        wrapper.appendChild(textArea);  

    // keyboard
    keyboard.className='keyboard rus';
    wrapper.appendChild(keyboard);

    // wrapper
    keyboardWrapper.className='keyboard-wrapper';
    keyboard.appendChild(keyboardWrapper);

    //key
   
    keyBoardMake();

   notifyMsg.className = 'message';
   notifyMsg.innerHTML = "Клавиатура создана в операционной системе fndows.<br>Для переключения языка комбинация: левыe shift + alt";
   wrapper.appendChild(notifyMsg);
};
createPage();


// клавиатуры разных языков
function keyBoardMake(){
for (let i = 0; i<keys.length;i++) {

    let keyBtnEng = document.createElement('button');
    let keyBtnRus = document.createElement('button');
    let keyBtnEngCaps = document.createElement('button');
    let keyBtnRusCaps = document.createElement('button');

    keyBtnEng.className='keyboard__key eng eng_lower lang_hidden ' + keys[i].keyCode;
    keyBtnEng.innerHTML = keys[i].keyEng.toString();    
    keyBtnRus.className='keyboard__key rus_lower rus ' + keys[i].keyCode;
    keyBtnRus.innerHTML = keys[i].keyRus.toString();

    keyBtnEngCaps.className='keyboard__key eng eng_caps hidden lang_hidden ' + keys[i].keyCode;
    keyBtnEngCaps.innerHTML = keys[i].keyEngCaps.toString();    
    keyBtnRusCaps.className='keyboard__key rus rus_caps hidden ' + keys[i].keyCode;
    keyBtnRusCaps.innerHTML = keys[i].keyRusCaps.toString();

 if(keyBtnEng.innerHTML == 'ArrowRight' || keyBtnRus.innerHTML == 'ArrowRight'|| keyBtnEngCaps.innerHTML == 'ArrowRight' || keyBtnRusCaps.innerHTML == 'ArrowRight'){
        keyBtnEng.innerHTML = '►';
        keyBtnRus.innerHTML = '►';
        keyBtnEngCaps.innerHTML = '►';
        keyBtnRusCaps.innerHTML = '►';
    }else if(keyBtnEng.innerHTML == 'ArrowUp'|| keyBtnRus.innerHTML == 'ArrowUp' || keyBtnEngCaps.innerHTML == 'ArrowUp'|| keyBtnRusCaps.innerHTML == 'ArrowUp'){
        keyBtnEng.innerHTML = '▲';
        keyBtnRus.innerHTML = '▲';
        keyBtnEngCaps.innerHTML = '▲';
        keyBtnRusCaps.innerHTML = '▲';
    }else if(keyBtnEng.innerHTML == 'ArrowLeft'||keyBtnRus.innerHTML == 'ArrowLeft' || keyBtnEngCaps.innerHTML == 'ArrowLeft'|| keyBtnRusCaps.innerHTML == 'ArrowLeft'){
        keyBtnEng.innerHTML = '◄';
        keyBtnRus.innerHTML = '◄';
        keyBtnEngCaps.innerHTML = '◄';
        keyBtnRusCaps.innerHTML = '◄';
    }else if(keyBtnEng.innerHTML == 'ArrowDown' ||keyBtnRus.innerHTML == 'ArrowDown' || keyBtnEngCaps.innerHTML == 'ArrowDown' ||keyBtnRusCaps.innerHTML == 'ArrowDown'){
        keyBtnEng.innerHTML = '▼';
        keyBtnRus.innerHTML = '▼';
        keyBtnEngCaps.innerHTML = '▼';
        keyBtnRusCaps.innerHTML = '▼';
    }else if(keyBtnEng.innerHTML == 'Control'||keyBtnRus.innerHTML == 'Control' || keyBtnEngCaps.innerHTML == 'Control'||keyBtnRusCaps.innerHTML == 'Control'){
        keyBtnEng.innerHTML = 'Ctrl';
        keyBtnRus.innerHTML = 'Ctrl';
        keyBtnEngCaps.innerHTML = 'Ctrl';
        keyBtnRusCaps.innerHTML = 'Ctrl';
    }else if(keyBtnEng.innerHTML == 'Meta' || keyBtnRus.innerHTML == 'Meta' || keyBtnEngCaps.innerHTML == 'Meta' || keyBtnRusCaps.innerHTML == 'Meta'){
        keyBtnEng.innerHTML = 'fn';
        keyBtnRus.innerHTML = 'fn';
        keyBtnEngCaps.innerHTML = 'fn';
        keyBtnRusCaps.innerHTML = 'fn';
    }


    keyboardWrapper.appendChild(keyBtnEng);
    keyboardWrapper.appendChild(keyBtnRus);
    keyboardWrapper.appendChild(keyBtnEngCaps);
    keyboardWrapper.appendChild(keyBtnRusCaps);

    if(i==13 || i ==28 || i == 41 || i==54){
        keyBtnEng = document.createElement('div');
        keyBtnRus = document.createElement('div');
        keyBtnEngCaps = document.createElement('div');
        keyBtnRusCaps = document.createElement('div');
        keyBtnEng.className='clearfix lang_hidden eng_lower eng';
        keyBtnRus.className='clearfix rus_lower rus';
        keyBtnEngCaps.className='clearfix eng eng_caps lang_hidden hidden';
        keyBtnRusCaps.className='clearfix rus rus_caps hidden';
        keyBtnEng.innerHTML = '';
        keyBtnRus.innerHTML = '';
        keyBtnEngCaps.innerHTML = '';
        keyBtnRusCaps.innerHTML = '';
        keyboardWrapper.appendChild(keyBtnEng); 
        keyboardWrapper.appendChild(keyBtnRus);
        keyboardWrapper.appendChild(keyBtnEngCaps); 
        keyboardWrapper.appendChild(keyBtnRusCaps); 
    }
}
}

// подсветка нажатой клавиши путем добавления класса active
function addActive (event){
    let target = event.target;
    if(target.classList.contains('keyboard__key')) {
        document.querySelectorAll('.keyboard__key').forEach(element => element.classList.remove('active'));
        target.classList.add('active');
        target.classList.remove('active');
    }
    // else if(target.classList.contains('.ShiftLeft') || target.classList.contains('ShiftRight')||target.classList.contains('AltLeft')||target.classList.contains('AltRight')){
    //     target.classList.toggle('active');
    // }
    
};


// переключение языка
function langSwitch (event){
    let target = event.target;
    console.log(document.querySelector('.ShiftLeft').classList)
    if(target.textContent == 'Alt' && (document.querySelector('.ShiftLeft').classList.contains('shift_active'))) {
        

        if(keyboard.classList.contains('rus')){
            keyboard.classList.remove('rus');
            document.querySelectorAll('.keyboard__key.rus').forEach((element)=>{
                element.classList.add('lang_hidden');
            });
            keyboard.classList.add('eng');
            document.querySelectorAll('.keyboard__key.eng').forEach((element)=>{
                element.classList.remove('lang_hidden');
            })
        }else{
            keyboard.classList.remove('eng');
            document.querySelectorAll('.keyboard__key.eng').forEach((element)=>{
                element.classList.add('lang_hidden');
            })
            keyboard.classList.add('rus');
            document.querySelectorAll('.keyboard__key.rus').forEach((element)=>{
                element.classList.remove('lang_hidden');
            })
        }
    }

    //     document.querySelectorAll('.keyboard__key').forEach((element)=>{
            


    //        if(element.classList.contains('lang_hidden')){
    //         element.classList.remove('lang_hidden');
    //     }else{
    //         element.classList.add('lang_hidden');
    //     }
    // }
    // )
}

// document.addEventListener('keydown', function(e){
//     const elem = document.getElementsByClassName(e.code)[0];
// console.log(elem);
// console.log(keyboard)
// console.log(elem.textContent);

//     if((elem.textContent == 'Alt' && document.querySelector('.ShiftLeft').classList.contains('active'))) {
        
       
//             if(keyboard.classList.contains('rus')){
//                 keyboard.classList.remove('rus');
//                 keyboard.classList.add('eng');
//             }else{
//                 keyboard.classList.remove('eng');
//                 keyboard.classList.add('rus');
//             }

//         }

        


//         if(keyboard.classList.contains('rus')){
//             document.querySelectorAll('.keyboard__key.rus').forEach((element)=>{
//                 element.classList.add('lang_hidden');
//             })
//             document.querySelectorAll('.keyboard__key.eng').forEach((element)=>{
//                 element.classList.remove('lang_hidden');
//             })
//         }else{
//             document.querySelectorAll('.keyboard__key.eng').forEach((element)=>{
//                 element.classList.add('lang_hidden');
//             })
//             document.querySelectorAll('.keyboard__key.rus').forEach((element)=>{
//                 element.classList.remove('lang_hidden');
//             })
//         }}

// )
;

// включение/выключение капса
document.addEventListener('click', function (event){
    let target = event.target;
    
    // для англ клавиатуры
    if((document.querySelector('.keyboard').classList.contains('eng'))){
        
        if(document.querySelector('.CapsLock').classList.contains('capslock_active')){
//нижний регистр
            document.querySelectorAll('.eng_lower').forEach((element)=>{
                
                if(element.classList.contains('hidden')){
                    element.classList.remove('hidden');
                }else{
                   element.classList.add('hidden');
                }
            });
            //нижний регистр
            document.querySelectorAll('.eng_caps').forEach((element)=>{
                if(element.classList.contains('hidden')){
                    element.classList.remove('hidden');
                }else{
                   element.classList.add('hidden');
                }
            });
    }
    }
    // для рус клавиатуры
    if((document.querySelector('.keyboard').classList.contains('rus'))){
        
        if(document.querySelector('.CapsLock').classList.contains('capslock_active')){

            document.querySelectorAll('.rus_lower').forEach((element)=>{
                
                if(element.classList.contains('hidden')){
                    element.classList.remove('hidden');
                }else{
                   element.classList.add('hidden');
                }
            });
            //нижний регистр
            document.querySelectorAll('.rus_caps').forEach((element)=>{
                if(element.classList.contains('hidden')){
                    element.classList.remove('hidden');
                }else{
                   element.classList.add('hidden');
                }
            });
    }
    }
})

document.addEventListener('keydown', function(e){
    const elem = document.getElementsByClassName(e.code)[0];
    

})

// печать текста
function addText(event){
    let target = event.target;

    if(target.textContent != 'Backspace' && target.textContent !== 'CapsLock' && target.textContent !== 'Tab' && target.textContent !== 'Enter' && target.textContent !== 'Shift' && target.textContent !== 'Alt'&& target.textContent !== 'Ctrl' && target.textContent !== 'Del'){
        if(document.querySelector('.CapsLock').classList.contains('capslock_active')) {    

            textArea.value += target.textContent.toUpperCase();
        }else{
            textArea.value += target.textContent;
        }

    }else if(target.textContent === 'Backspace'){

        textArea.value = textArea.value.substring(0, textArea.value.length - 1);

    }else if(target.textContent === 'Shift'){
        
        if(target.classList.contains('shift_active')){

            target.classList.remove('shift_active') 

             }else{

                target.classList.add('shift_active')

             }        
    }else if(target.textContent === 'CapsLock'){

        if(target.classList.contains('capslock_active')){

            target.classList.remove('capslock_active')

        }else{

            target.classList.add('capslock_active')

        }
    }else if(target.textContent === 'Tab'){

        textArea.value += '    ';

    }else if(target.textContent === 'Enter'){

        textArea.value += '\n';

    }
    
};









document.addEventListener('keydown', function(e) {
    textArea.focus();
    const elem = document.getElementsByClassName(e.code)[0];
    
    elem.classList.add('active');
    

    if((elem.textContent == 'Alt' && document.querySelector('.ShiftLeft').classList.contains('active'))) {
        
       
        if(keyboard.classList.contains('rus')){
            
            keyboard.classList.remove('rus');
            document.querySelectorAll('.keyboard__key.rus').forEach((element)=>{
                element.classList.add('lang_hidden');
            })
            keyboard.classList.add('eng');
            document.querySelectorAll('.keyboard__key.eng').forEach((element)=>{
                element.classList.remove('lang_hidden');
            })
        }else{
            keyboard.classList.remove('eng');
            document.querySelectorAll('.keyboard__key.eng').forEach((element)=>{
                element.classList.add('lang_hidden');
            })
            keyboard.classList.add('rus');
            document.querySelectorAll('.keyboard__key.rus').forEach((element)=>{
                element.classList.remove('lang_hidden');
            })
        };

   }else if(e.code == 'CapsLock'){
    if(document.querySelector('.keyboard').classList.contains('eng')){ if(document.querySelector('.CapsLock').classList.contains('capslock_active')){

            document.querySelector('.CapsLock').classList.remove('capslock_active');

            document.querySelectorAll('.eng_caps').forEach((element)=>
            element.classList.add('hidden'));

            document.querySelectorAll('.eng_lower').forEach((element)=>
            element.classList.remove('hidden'))
        }else{
            document.querySelector('.CapsLock').classList.add('capslock_active');

            document.querySelectorAll('.eng_caps').forEach((element)=>
            element.classList.remove('hidden'))

            document.querySelectorAll('.eng_lower').forEach((element)=>
            element.classList.add('hidden'))

        }
    }else if(document.querySelector('.keyboard').classList.contains('rus')){ 
        if(document.querySelector('.CapsLock').classList.contains('capslock_active')){

        document.querySelector('.CapsLock').classList.remove('capslock_active');

        document.querySelectorAll('.rus_caps').forEach((element)=>
        element.classList.add('hidden'));

        document.querySelectorAll('.rus_lower').forEach((element)=>
        element.classList.remove('hidden'))
    }else{
        document.querySelector('.CapsLock').classList.add('capslock_active');

        document.querySelectorAll('.rus_caps').forEach((element)=>
        element.classList.remove('hidden'))

        document.querySelectorAll('.rus_lower').forEach((element)=>
        element.classList.add('hidden'))

    }
}

    elem.classList.add('active');
    }else if(e.code == 'ArrowLeft'){
        e.preventDefault();
        let focusPosition = textArea.selectionStart;
        textArea.selectionEnd = focusPosition - 1;
    }
    
})


    document.addEventListener('keyup', function(e) {
        const elem = document.getElementsByClassName(e.code)[0];
        elem.classList.remove('active');
        }
        )

        keyboardWrapper.addEventListener('mousedown', addText);
        document.addEventListener('click', langSwitch);
        document.addEventListener('mousedown', addActive);
        // document.addEventListener('click', capsSwitch);
        