export default class ErrorRepository{
    constructor() {
        this.errorMap = new Map();
        this.setMap();
    }

    setMap() {
        //можно вынести в отдельный файл и считывать с него
        let errors = [
            'Уже есть такой персонаж в команде',
            'Параметр Имя не задан!!',
            'Имя должно содержать от 2 до 10 символов!',
            'We lost him',
        ]
        for (const [index, error] of errors.entries()) {
            this.errorMap.set(index+1, error)
        }
    }
    
    translate(code) {
        return this.errorMap.has(code) ? this.errorMap.get(code) : 'Unknown error';
    }
}
