### Что такое DOM в JavaScript
DOM (Document Object Model) это API который представляет и взаимодействует со всеми HTML или XML документами. DOM это модель документа загруженная в браузер и представляющая документ как дерево, где каждый узел представляет часть документа (например элемент, строка текста, или комментарий).
Согласно объектной модели документа (сокращенно DOM), каждый HTML-тег является объектом. Вложенные теги являются «потомками» родительского элемента. Текст внутри тега также является object. Все эти объекты доступны с помощью JavaScript, мы можем использовать их для изменения страницы.


<span style="background-color:yellow; padding:5px">JavaScript</span>  может изменять все элементы HTML на странице.
<span style="background-color:yellow; padding:5px">JavaScript</span> может изменить все атрибуты HTML на странице.
<span style="background-color:yellow; padding:5px">JavaScript</span> может изменить все стили CSS на странице.
<span style="background-color:yellow; padding:5px">JavaScript</span> может удалять существующие элементы и атрибуты HTML.
<span style="background-color:yellow; padding:5px">JavaScript</span> может добавлять новые элементы и атрибуты HTML.
<span style="background-color:yellow; padding:5px">JavaScript</span>может реагировать на все существующие HTML-события на странице.
<span style="background-color:yellow; padding:5px">JavaScript</span> может запускать новые HTML-события на странице

Определение и использование. Метод <span style="background-color:yellow; padding:5px">querySelector()</span> возвращает первый дочерний элемент, соответствующий
указанные селекторы CSS элемента, метод 
<span style="background-color:yellow; padding:5px">querySelectorAll()</span> может использоваться для доступа ко всем элементам
которые соответствуют указанному селектору CSS.

    const rootEl = document.querySelector('#root')

<span style="background-color:yellow; padding:5px">innerHTML</span> - Это свойство предоставляет простой способ полностью
заменить элемент содержимого. Например, 

        Element.innerHTML="Hello"


Объект Style представляет собой
заявление индивидуального стиля.

    let rootEl = document.querySelector('#root')
    let h1 = document.createElement("h1")
    h1.style.color="red"
    rootEl.appendChild(h1)


### HTML-события…
HTML-событие может быть чем-то делает браузер или что-то делает пользователь.
Вот несколько примеров HTML-событий:
• Веб-страница в формате HTML завершила загрузку
• Поле ввода HTML было изменено
• Была нажата кнопка HTML

onclick



#### createElement()
Метод JavaScript document.createElement() позволяет создавать и возвращать
новый элемент (пустой узел элемента) с указанным именем тега.
1) createElement(elementName): создает элемент html, тег которого
передается как параметр. Возвращает созданный элемент



        let rootEl = document.querySelector('#root')
        let h1 = document.createElement("h1")
        h1.innerHTML="Hello guys"
        rootEl.appendChild(h1)


#### Элемент HTML DOM appendChild()

Метод <span style="background-color:yellow; padding:5px">appendChild()</span> добавляет узел (элемент) в конец
дочерний элемент элемента.
<span style="background-color:yellow; padding:5px">appendChild()</span>
 добавляет узел в конец списка дочерних элементов
указанный родительский узел. Если данный дочерний элемент является ссылкой на
существующий узел в документе, затем <span style="background-color:yellow; padding:5px">appendChild()</span>
функция перемещает его из текущей позиции в новую позицию


## classlist()

ClassList является геттером. Возвращаемый объект имеет несколько методов:
добавить( Строка [,Строка] )
Добавляет указанные классы к элементу
удалить( Строка [,Строка] )
Удаляет указанные классы из элемента
переключить (строка [, логическое значение])
Если у элемента нет класса, он добавляет его, иначе удаляет. Когда
false передается как второй параметр, он удаляет указанный
class, и если это правда, он добавляет его.
Если второй параметр не определен или является переменной с
typeof == 'undefined', поведение такое же, как при передаче только
первый параметр при вызове
