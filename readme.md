# Структура проекта

## Папка src содержит:

1. pages: Страницы, которые соответствуют url. Иными словами компоненты, которые не вложены в другие компоненты.
2. pages/roles: Страницы, которые соответствуют url. Иными словами компоненты, которые не вложены в другие компоненты и соответствуют одной из пользовательских ролей в системе(работник или работодатель).
3. components: Компоненты, вложенные в компоненты из pages или другие компоненты из components.
4. components/[Название страницы из pages]: компоненты специфичные для определённой страницы.
5. assets: содержит шрифты в ./fonts и изображения в ./images
6. API: запросы к API
7. logic: бизнес-логика

# Разработка
## В папке pages созданы компоненты и папки:
- Welcome: приветственное окно
- Reg: окно с формой регистрации
- Auth: окно с формой аутентификации
### Созданы подкаталоги Employer и Worker, реализующие специфичные для пользовательских ролей страницы
## Содержание Employer:
1. Profile – профиль работодателя
2. PotentialWorkers – ранжированные списки, работников которые могут быть привлечены для работы на объектах
3. MapOfPartners – карта с отмеченными на ней организациями, которые могут стать источниками новых рабочих кадров
4. CRUDvacancies – страницы для создания, просмотра, обновления, удаления вакансий работодателем
5. CRUDobjects – аналогично вышесказанному, но для рабочих объектов заданного работодателя
6. BuilderObjects – строительные объекты, которыми занимается работодатель
7. BuilderObjects/CandidatesForObjects – всплывающее окно на странице BuilderObjects, которое позволяет назначать исполнителей на строительный проект
## Содержание Worker:
1. Profile – профиль работника
2. Tasks – окно с рабочими заявками, которые может принять работник
3. ProgressBar – страница с рейтингом работника
4. CurrentTasks – страница с рабочим процессом, который исполняет заданный работник