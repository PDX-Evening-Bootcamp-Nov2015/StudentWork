# Basic Django Workflow

This outlines the basic steps in creating a new Django project, and making changes:

NOTE: commands wrapped in angle brackets: `<foo>` indicate user-defined names.

1. Create a new project with `django-admin startproject <project_name>.
2. Navigate into the new <project_name> directory (`cd <project_name>`) and run
`python manage.py runserver` (NOTE: at this stage, you will get a warning about unapplied migrations. This is not necessary to see the initial page running, but you can run `python manage.py migrate` to address it.)
3. Visit `localhost:8000` in your browser to see the Django default page
4. Create a new app within your project: `python manage.py <name_of_app>`
5. Optionally, add models to `models.py`
6. ...

create templates and static folders

create HTML templates

create views in `views.py` to render the templates

create URLs in `urls.py` to route to the views

Run `python manage.py migrate` (if you haven't already in the previous step


**Create a new project**

`django-admin startproject name_of_project`

```bash
django-admin startproject mysite

# creates project folder called 'mysite' containing basic Django files
```

Django creates a folder called `mysite` with a `manage.py` file and another folder called `mysite`:

```bash
mysite # base project folder
├── manage.py # a command-line helper file
└── mysite # site-wide folder
    ├── __init__.py
    ├── settings.py # project configuration
    ├── urls.py # define your site's URLs here
    └── wsgi.py # for web server communication/config

1 directory, 5 files
```

**From the project folder, create a new app**

Navigate inside the base project folder (the same folder as manage.py) and run the Django command to create a specific _application_ within the project. In this case, the name of our app is "blog":

```
python manage.py startapp blog
```

This will create another folder next to `mysite` called `blog`:

```bash
blog
├── admin.py
├── apps.py
├── __init__.py
├── migrations
│   └── __init__.py
├── models.py
├── tests.py
└── views.py

1 directory, 7 files
```
