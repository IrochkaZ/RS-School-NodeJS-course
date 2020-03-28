## Task 1. Caesar cipher CLI tool

####[Task](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md)
### How to run the application:
1) Open CMD : [Windows](http://vindavoz.ru/poleznoe/218-komandnaya-stroka-i-ee-komandy.html), [macOS](https://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line)
2) Installing NPM modules  => Install npm (```npm install```)
3) Start application with command ```node index.js ``` with params:

#### CLI tool has 4 options (short alias and full name):
1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode


**Usage example:**
```bash
$ node index.js --action encode --shift 7 --input input.txt --output output.txt
```

```bash
$ node index.js -a encode -s 7 -i input.txt -o output.txt
```
**PS**: The application has default **input.txt** file where defined some sample text. You can edit this file on your own or you can create new file with **.txt** extension.

**Enviroment**
 Node.js version from v12.16.1
  

------------------------------------------------------------
## Score criteria
Каждый пункт - **10 баллов**

1. в корне репозитория создана папка с произвольным названием (например caesar-cipher-cli, task1 и т.п.), в которой расположены файлы с кодом программы **[DONE]**
2. в README.md должно быть описано, как можно запустить программу из командной строки, описаны аргументы, которые можно передать приложению **[DONE]**
3. если переданы все аргументы, приложение читает из файла и записывает в файл зашифрованный/расшифрованный текст, при этом предыдущие записи не удаляются **[DONE]**
4. если не переданы обязательные аргументы, приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0 **[DONE]**
5. если переданы аргументы с путями к файлам, но файлы отсутствуют (или к ним невозможен доступ), приложение передает соответствующее сообщение в process.stderr и прoцесс завершается с кодом, отличным от 0 **[DONE]**
6. если не передан аргумент с путем до файла на чтение, то чтение осуществляется из process.stdin **[DONE]**
7. если не передан аргумент с путем до файла на запись, то вывод осуществляется в process.stdout **[DONE]**
8. шифруются/дешифруются только латинские буквы, регистр сохраняется, остальные символы не изменяются **[DONE]**
9. если текст вводится из консоли, то программа не должна завершаться после выполнения шифровки/дешифровки введенного текста, т.е. должна быть возможность ввести еще текст **[DONE]**
10. кодовая база не находится в одном файле, а разделена не файлы в соответствии с выполняемымы задачами (например - функция, преобразующая строку, в отдельном файле, код, создающий transform стрим, в отдельном файле, функция для парсинга и валидации аргументов в отдельном файле и т.п.) **[DONE]**


