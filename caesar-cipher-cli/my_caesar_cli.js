/*
https://stackoverflow.com/questions/49169980/how-to-pipe-to-function-in-node-js 
1) js
2) filesystem -  fs
3) algorith - 
4) pipeline -> http || fs 
5) send parameters as arguments
*/

/* 
1)  прочитать параметры из строки консоли
2)  из прочитанного параметра input ты должна если возможно прочитать файл или если не удается прочитать то выкинуть ошибку и использовать строку параметрв для конвертирования 
3)  делем шифрование или дешифрование в зависимости от action - > (default-шифрование или просто скопировать из  инпута все в оутпут)
4)  все данные из стрима сохраняем в файл указаный в параметре оутпут, если параметр не указан пользователем, то выкидываем ошибку о том что не можем сохранить это в файл (делаем проверку
    на расширение файла -> распарсить строку раздилетелем "." и посмотреть последний элемент массива - метод  split('.')) и в консоли пишем результат и з 3 пункта
*/ 



const fs = require('fs');

const state =  {
    input: '',
    output: '',
    shift: '',
    action: ''
};


const readParams = () => {
    const args = process.argv.slice(2);
    args.forEach((item, index, arr) => {
        if((item === '-s' || item === '--shift') && arr[index + 1] !=='') {
            state['shift'] = arr[index+1];
        }
        if((item === '-i' || item === '--input') && arr[index + 1] !=='') {
            state['input'] = arr[index+1];
        }
        if((item === '-o' || item === '--output') && arr[index + 1] !=='') {
            state['output'] = arr[index+1];
        }
        if((item === '-a' || item === '--action') && arr[index + 1] !=='') {
            state['action'] = arr[index+1];
        }
    });
}

/* readParams();
console.log(state); */

if (fs.existsSync('./input.txt')) {
  console.log(true)
} else {
  console.log(false)
}
