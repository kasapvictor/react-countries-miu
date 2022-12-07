## React Countries
[Demo](https://kasapvictor.github.io/react-countries)

### FSD
![img_16.png](img_16.png)
![img_15.png](img_15.png)
![img.png](img.png)
![img_1.png](img_1.png)
![img_2.png](img_2.png)
![img_3.png](img_3.png)m
![img_4.png](img_4.png)
![img_5.png](img_5.png)
![img_6.png](img_6.png)
![img_7.png](img_7.png)
![img_8.png](img_8.png)
![img_9.png](img_9.png)
![img_10.png](img_10.png)
![img_11.png](img_11.png)
![img_12.png](img_12.png)
~~~
По уровню знания/ответственности
app > processes > pages > widgets > features > entities > shared
~~~
~~~
По уровню опасности изменений
shared > entities > features > widgets > pages > processes > app
~~~
~~~
└── src/
    ├── app/                    # Инициализирующая логика приложения
    ├── processes/              # (Опц.) Процессы приложения, протекающие над страницами
    ├── pages/                  # Страницы приложения
    ├── widgets/                # Самостоятельные и полноценные блоки для страниц
    ├── features/               # (Опц.) Обрабатываемые пользовательские сценарии
    ├── entities/               # (Опц.) Бизнес-сущности, которыми оперирует предметная область
    └── shared/                 # Переиспользуемые модули, без привязки к бизнес-логике
~~~
~~~
{layer}/
    ├── {slice}/
    |   ├── ui/                     # UI-логика (components, ui-widgets, ...)
    |   ├── model/                  # Бизнес-логика (store, actions, effects, reducers, ...)
    |   ├── lib/                    # Инфраструктурная логика (utils/helpers)
    |   ├── config*/                # Конфигурация (проекта / слайса)
    |   └── api*/                   # Логика запросов к API (api instances, requests, ...)
~~~
~~~
pages/
   ├── order/
   |    ├── cart/
   |    ├── checkout/
   |    |    ├── delivery/
   |    |    └── payment/
   |    ├── result/
   |    └── index.tsx
   ├── auth/
   |    ├── sign-in/
   |    └── sign-up/
   ├── home/
   ├── catalog/
~~~

Модуль имеет импорт из другого модуля со своего слоя
- Возможно, модуль был излишне раздроблен или имеет лишнюю ответственность.
- Следует объединить его с импортируемым модулем или вынести его (частично или целиком) на слой ниже или перенести логику связей в модули 
  на вышестоящих слоях.

Модуль импортируется многими модулями со своего слоя
- Возможно, модуль имеет лишнюю ответственность.
- Следует вынести его (частично или целиком) на слой ниже, либо перенести логику связей в модули на вышестоящих слоях.

Модуль имеет импорты из множества модулей со своего слоя
- Возможно, модуль принадлежит к другой области ответственности.
- Следует вынести его (частично или целиком) на слой выше.


### Links
 - [FSD-1 manual](https://feature-sliced.design/ru/docs/reference/units/decomposition)
 - [FSD-2 manual](https://feature-sliced.design/ru/docs/get-started/cheatsheet)
 - [Emotion](https://emotion.sh)
 - [React Select](https://react-select.com/home)
 - [React Icons](https://react-icons.github.io/react-icons)
 - [MUI Icons](https://mui.com/material-ui/material-icons)
 - [Countries API](https://restcountries.com)
 - [Open Street Map](https://react-leaflet.js.org/docs/start-installation)
 - [Lazy (React)](https://reactjs.org/docs/code-splitting.html)
 - [DATA GEO JSON](https://datahub.io/core/geo-countries#resource-geo-countries_zip)
 - [DATA GEO JSON Methods](https://leafletjs.com/reference.html#geojson)