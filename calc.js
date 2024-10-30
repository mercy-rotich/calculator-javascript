(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        });
    });

    
    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
            screen.value = "Enter a value";
        } else {
            try {
                
                let answer = new Function('return ' + screen.value)();
                if(answer === Infinity || isNaN(answer)) {
                    screen.value = "Error";
                } else {
                    screen.value = answer;
                }
            } catch(error) {
                screen.value = "Error";
            }
        }
    });


    clear.addEventListener('click', function(e) {
        screen.value = "";
    });
})();