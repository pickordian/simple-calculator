var math_string = "";
// [0] : is there a number on the left operand 
// [1] : is there an operator
// [2] : is there a number on the right operand 
// [3] : is there a result from the previous operation at the left operand 
var equa_complete = [false, false, false, false];
var backspace = "";
var right_oper_num = "";
function WriteScreen(button) {
    const screen_u = document.getElementById("upper-screen");
    const screen_l = document.getElementById("lower-screen");
    // case user enter an operator 
    if (isNaN(button) && button != '.') {
        // case user click an operator after a number 
        if (equa_complete[0] || equa_complete[1]) {
            // case math operation complete  a + b, and user click another operator 
            if (equa_complete[1]) {
                Equal(button);


            }
            // case user click an operator after the left operand 
            else {
                math_string += button;
                equa_complete[1] = true;
                screen_u.innerHTML = math_string;
            }
        }
    }
    // case user enter a number 
    else {

        equa_complete[0] = true;
        // case user enter right operand number 
        if (equa_complete[1]) {
            equa_complete[2] = true;
            math_string += button;
            right_oper_num += button;
            screen_l.innerHTML = right_oper_num;
        }
        // case user enter a new number after an operation 
        else {
            if (equa_complete[3])
            Clear();
            equa_complete[0] = true;
            math_string += button;
            screen_l.innerHTML = math_string;
        }

    }
}
function Equal(button) {
    const screen_l = document.getElementById("lower-screen");
    const screen_u = document.getElementById("upper-screen");
    if (math_string != "") {
       
        if (button == null) {
            screen_u.innerHTML = math_string + '=';
            screen_l.innerHTML = eval(math_string);
            math_string = '' + eval(math_string) + '';
            equa_complete = [true, false, false, true];

        }
        else {
            screen_u.innerHTML = eval(math_string) + button;
            math_string = '' + eval(math_string) + button + '';
        }
        right_oper_num = "";
    }
}
function Clear() {
    const screen_l = document.getElementById("lower-screen");
    const screen_u = document.getElementById("upper-screen");
    math_string = "";
    right_oper_num = "";
    equa_complete = [false, false, false, false];
    screen_u.innerHTML = "";
    screen_l.innerHTML = "";



}
function Back(){

}