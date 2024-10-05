
Реализовать можно на любом языке программирования.
1) Создание приветствия.
Поприветствуйте пользователя в игре. Спросите у пользователя его имя и поприветствуйте его по имени:<br>
*Welcome to the Brain Games!<br>
May I have your name? <br>
Johnни:<br>
Hello, John!*
<br>Код, реализующий этот функционал, должен быть в отдельном файле src/cli.* относительно директории проекта, а в исполняемом файле bin/brain-games.* сделайте вызов. Для этого код нужно поместить в функцию и импортировать ее в исполняемый файл.<br>
3) Настройка линтера. (Доп.задание лучше сделать, описание приведено только для JS, если у вас другой язык, посмотрите, как это сделать)  1.Установите следующие пакеты: eslint, eslint-config-airbnb-base, eslint-plugin-import  2.Настройте правильно .eslintrc.yml. Документация: https://eslint.org/docs/user-guide/configuring. Сверяйтесь с nodejs-package  3.Создайте задачу make lint, которая должна запускать npx eslint .  4.Подключите eslint к своему редактору, убедитесь что все работает. Скорее всего, понадобится поставить eslint глобально  5.Исправьте все ошибки, которые выдает линтер. Отключите правила no-console (оно не актуально для nodejs разработки) и import/extensions (чтобы получить возможность указывать при импорте файлы с расширением)<br>
4) Игра **НОК**<br>
Необходимо реализовать игру "наименьшее общее кратное (НОК)". Суть игры в следующем: пользователю показывается три случайных числа, например, 5 7 15. Пользователь должен вычислить и ввести наименьшее общее кратное этих чисел.
Вывод должен получиться следующий:
brain-scm<br>
*Welcome to the Brain Games!<br>
May I have your name?<br>
Sam<br>
Hello, Sam!<br>
Find the smallest common multiple of given numbers.<br>
Question: 5 7 15<br>
Your answer: 105<br>
Correct!<br>
Question: 100 50 1<br>
Your answer: 100<br>
Correct!<br>
Question: 3 9 27<br>
Your answer: 27<br>
Correct!<br>
Congratulations, Sam!*<br>
В случае, если пользователь даст неверный ответ, необходимо вывести:<br>
*Question: 5 10 25<br>
Your answer: 15<br>
'15' is wrong answer ;(. Correct answer was '25'.<br>
Let's try again, Sam!*<br>
5) Игра **Геометическая прогрессия**
Показываем игроку ряд чисел, образующий геометрическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число. Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5 чисел. Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом).<br>
Пример:
brain-progression<br>
*Welcome to the Brain Games!<br>
May I have your name?<br>
Sam<br>
Hello, Sam!<br>
What number is missing in the progression?<br>
Question: 1 2 4 8  .. 32 64 128<br>
Your answer: 16<br>
Correct!<br>
Question: 1 3 9 27 ..<br>
Your answer: 81<br>
Correct!<br>
Question: 5 25 .. 625 3125<br>
Your answer: 125<br>
Correct!<br>
Congratulations, Sam!<br>
В случае, если пользователь даст неверный ответ, необходимо вывести:<br>
Question: 4 16 64 .. 1024 4096<br>
Your answer:  1<br>
'1' is wrong answer ;(. Correct answer was '256'.<br>
Let's try again, Sam!*<br>
<ol>Задачи:
  <li>Реализуйте необходимую логику для работы игры</li>
  <li>Проверьте работоспособность новой игры</li>
  <li>Добавьте в README.md аскинему с запуском и демонстрацией различных исходов игры (дополнительное задание за доп.баллы)</li>
  <li>Подключите к проекту сервис по проверке качества кода: www.CodeClimate.com</li>
  <li>На данном этапе можно заметить, что игры имеют общий порядок выполнения (задать вопрос, получить ответ, сравнить ответ и т.д.). Эту логику можно вынести в одно место и переиспользовать внутри конкретных игр для устранения дублирования кода.</li></ol>
<p style=”margin-left:20px;>С введением второй игры у вас появляется общая для всех игр логика (Эту логику можно поместить в отдельный файл). Главная задача этого шага – построить архитектуру запуска игр так, чтобы эта логика была в одном месте и управляла играми.
Правильная организация файловой структуры хорошо помогает понимать структуру проекта. Хорошим решением будет положить все игры (и только игры) в директорию games.</p>
Максимальное количество раундов одинаково для всех игр и должно быть равно трём.<br>
<p>Главное в этом задании выполнить рефакторинг, в результате которого общая логика будет находиться в одном файле, очень хорошо, если реализуете движок для игр, в который будете передавать функции, с уникальным кодом для каждой игры, запуская их в движке. Все функции с побочными эффектами лучше оставить в файлах с играми, и не писать их в движке.</p>
