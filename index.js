const inquirer = require("inquire");
const { promptUser} = require('./lib/userInput');
const {circle, square, triangle} = require("./lib/shapes");
const {writeFile} = require('./lib/fileWriter');

async function generateLogo(){
    const {text, textColor, shape, shapeColor} = await promptUser();
    let shapeInstance

    switch (shape){
        case 'circle':
            shapeInstance = new circle()
            break;
            case 'triangle':
                shapeInstance = new triangle()
            break;
            case 'square':
                shapeInstance = new square()
            break;
            default:
                console.log('invalid shape.');
                return;
    }
    shapeInstance.setColor(shapeColor);
    
}
