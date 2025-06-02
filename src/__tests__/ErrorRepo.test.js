import ErrorRepository from "../js/errorRepo";

describe('test Team.js', () => {

  let err;
  
  beforeEach(() => {
    err = new ErrorRepository();
  });

    const dataList = [
        [
            1, "Уже есть такой персонаж в команде"
        ],
        [
            2, "Параметр Имя не задан!!"
        ],
        [
            4, "We lost him"
        ],
        [
            45, "Unknown error"
        ],
    ]

    test.each(dataList)('character health', (data, expected) => {
        const result = err.translate(data);
        expect(result).toBe(expected);
    });

});
    