<h1>Тестовое задание</h1>
<h2>1. Верстка блока, mobile-first</h2>
<ul>
  <li>Есть мобильная и десктопная версии + верстка резиновая -> контект корректно отображается и на промежуточных вариантах.</li>
  <li>Верстка: flex.</li>
  <li>Если количество слотов отправления больше, чем помещвется в строку - появляется кнопка "ещё", по клику на которую можно увидеть скрытые слоты (js).</li>
</ul>

<h2>2.Таблица на странице</h2>
<p><i>В текст статьи на странице с адаптивной версткой менеджеры добавили таблицу. На десктопе таблицы выглядят хорошо, но на мобиле - появляется горизонтальный скролл, верстка едет. Что делать?</i></p>

<ol>
  <li>
    Подумать в каком еще виде можно отобразить данную информацию, сходить к менеджерам и предложить альтернативные варианты.
  </li>
  <li>Если не вышло — уменьшать таблицу.
    <ul>
  <li>Делать ее резиновой, чтобы она уменьшалась вместе с экраном. Вариант не очень, потому что в какой-то момент либо поплывет верстка от переполнения, либо информация станет нечитаемой.</li>
  <li>Сделать таблицу резиновой кликабельной картинкой с возможностью по тэпу переходить, например, в вид модального окна. Недостатки — нечитаемость в базовом варианте (если нам важнее показать пользователю информацию, чем ему ее увидеть — он и кликать не будет), большой вес картинки, если данных много и надо, чтоб все читались.</li>
  <li>В примере нет, но в жизни в таблице, скорее всего есть «ключевые» данные (обычно первый столбец) и дополнительные. Можно закрепить этот самый столбец с ключевыми данными {position: sticky; left: 0; background-color: lightgreen} и разрешить скроллиться остальным. Плюсы: позволяет все-таки системно воспринимать данные (а для чего еще таблица?). Минусы: все еще не очень красиво на мобильных экранах.</li>
  <li>Скрыть столбцы с дополнительными данными, поставить визуально понятные маркеры «кликать тут» рядом с основными. По клику на маркер выводить скрытые данные конкретной строки в модальном окне.</li></li></ol>
  <li>Посоветоваться с коллегами и выбрать оптимальный вариант (или придумать еще пару) </li>
</ol>
