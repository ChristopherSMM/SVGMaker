class shape{
    constructor(){
        this.color = ''
        setColor=(color);
    }
}
class circle extends shape{
    render(){
        return  `<circle cx="50" cy="50" r="50" height="100%" width="100%" fill="${this.color}"/>`;
    }
}
class square extends shape{
    render(){
        return `<rect width="100" height="100" fill="${this.color}"/>`;
    }
}
class triangle extends shape{
    render(){
        return  `<polygon points="50 15, 100 100, 0 100" height="50%" width="50%" fill="${this.color}"/>`;
    }
};