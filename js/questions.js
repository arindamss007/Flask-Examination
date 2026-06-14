const questions = [

{
    id: 1,
    question: "What is Flask?",
    options: [
        "Python Web Framework",
        "Database",
        "Browser",
        "IDE"
    ],
    answer: "Python Web Framework"
},

{
    id: 2,
    question: "Flask is written in which programming language?",
    options: [
        "Java",
        "Python",
        "PHP",
        "C#"
    ],
    answer: "Python"
},

{
    id: 3,
    question: "Who created Flask?",
    options: [
        "Guido van Rossum",
        "Armin Ronacher",
        "Mark Zuckerberg",
        "Brendan Eich"
    ],
    answer: "Armin Ronacher"
},

{
    id: 4,
    question: "Flask is known as a ______ framework.",
    options: [
        "Full-Stack",
        "Micro",
        "Enterprise",
        "Desktop"
    ],
    answer: "Micro"
},

{
    id: 5,
    question: "Which command installs Flask?",
    options: [
        "pip install flask",
        "python install flask",
        "pip add flask",
        "install flask"
    ],
    answer: "pip install flask"
},

{
    id: 6,
    question: "Which module is imported to create a Flask application?",
    options: [
        "Flask",
        "App",
        "Web",
        "Framework"
    ],
    answer: "Flask"
},

{
    id: 7,
    question: "Which statement creates a Flask application object?",
    options: [
        "app = Flask(__name__)",
        "app = Flask()",
        "Flask.create()",
        "app = App()"
    ],
    answer: "app = Flask(__name__)"
},

{
    id: 8,
    question: "Which decorator is used to define routes in Flask?",
    options: [
        "@app.route()",
        "@app.url()",
        "@route()",
        "@flask.route()"
    ],
    answer: "@app.route()"
},

{
    id: 9,
    question: "What is a route in Flask?",
    options: [
        "Database Table",
        "URL Mapping",
        "Template",
        "Session"
    ],
    answer: "URL Mapping"
},

{
    id: 10,
    question: "Which method starts the Flask development server?",
    options: [
        "app.start()",
        "app.run()",
        "app.execute()",
        "app.launch()"
    ],
    answer: "app.run()"
},

{
    id: 11,
    question: "Which default port does Flask use?",
    options: [
        "8080",
        "3000",
        "5000",
        "8000"
    ],
    answer: "5000"
},

{
    id: 12,
    question: "Which object is used to access incoming request data?",
    options: [
        "request",
        "response",
        "session",
        "form"
    ],
    answer: "request"
},

{
    id: 13,
    question: "Which object is used to send responses to clients?",
    options: [
        "response",
        "request",
        "session",
        "config"
    ],
    answer: "response"
},

{
    id: 14,
    question: "Which template engine is used by Flask?",
    options: [
        "Blade",
        "Twig",
        "Jinja2",
        "Smarty"
    ],
    answer: "Jinja2"
},

{
    id: 15,
    question: "Where are Flask HTML templates stored by default?",
    options: [
        "static",
        "templates",
        "views",
        "html"
    ],
    answer: "templates"
},

{
    id: 16,
    question: "Where are CSS and JavaScript files stored by default?",
    options: [
        "templates",
        "assets",
        "static",
        "public"
    ],
    answer: "static"
},

{
    id: 17,
    question: "Which function renders HTML templates?",
    options: [
        "render_html()",
        "render_template()",
        "template_render()",
        "show_template()"
    ],
    answer: "render_template()"
},

{
    id: 18,
    question: "Which object stores session data in Flask?",
    options: [
        "request",
        "response",
        "session",
        "cookie"
    ],
    answer: "session"
},

{
    id: 19,
    question: "Which configuration key is required for sessions?",
    options: [
        "SECRET_KEY",
        "SESSION_ID",
        "APP_KEY",
        "TOKEN_KEY"
    ],
    answer: "SECRET_KEY"
},

{
    id: 20,
    question: "Which HTTP method is typically used to retrieve data?",
    options: [
        "POST",
        "PUT",
        "GET",
        "DELETE"
    ],
    answer: "GET"
},

{
    id: 21,
    question: "Which HTTP method is typically used to submit data?",
    options: [
        "GET",
        "POST",
        "HEAD",
        "OPTIONS"
    ],
    answer: "POST"
},

{
    id: 22,
    question: "Which Flask object contains form data submitted via POST?",
    options: [
        "request.form",
        "request.data",
        "request.args",
        "session.form"
    ],
    answer: "request.form"
},

{
    id: 23,
    question: "Which Flask object contains URL query parameters?",
    options: [
        "request.query",
        "request.form",
        "request.args",
        "request.params"
    ],
    answer: "request.args"
},

{
    id: 24,
    question: "Which Flask function redirects a user to another URL?",
    options: [
        "move()",
        "redirect()",
        "forward()",
        "goto()"
    ],
    answer: "redirect()"
},

{
    id: 25,
    question: "Which Flask function generates URLs dynamically?",
    options: [
        "create_url()",
        "route_url()",
        "url_for()",
        "generate_url()"
    ],
    answer: "url_for()"
},

{
    id: 26,
    question: "What is a Blueprint in Flask?",
    options: [
        "Database Model",
        "Way to Organize Application Components",
        "Template Engine",
        "Authentication System"
    ],
    answer: "Way to Organize Application Components"
},

{
    id: 27,
    question: "Which method registers a Blueprint with a Flask application?",
    options: [
        "app.add_blueprint()",
        "app.register_blueprint()",
        "app.attach_blueprint()",
        "app.load_blueprint()"
    ],
    answer: "app.register_blueprint()"
},

{
    id: 28,
    question: "What is the purpose of Flask's Application Factory pattern?",
    options: [
        "Create Multiple Application Instances",
        "Create Databases",
        "Handle Requests",
        "Manage Templates"
    ],
    answer: "Create Multiple Application Instances"
},

{
    id: 29,
    question: "Which extension is commonly used for database operations in Flask?",
    options: [
        "Flask-DB",
        "Flask-SQLAlchemy",
        "Flask-Database",
        "Flask-ORM"
    ],
    answer: "Flask-SQLAlchemy"
},

{
    id: 30,
    question: "Which ORM is commonly used with Flask-SQLAlchemy?",
    options: [
        "Hibernate",
        "Entity Framework",
        "SQLAlchemy",
        "Django ORM"
    ],
    answer: "SQLAlchemy"
},

{
    id: 31,
    question: "Which command initializes Flask-Migrate migrations?",
    options: [
        "flask db init",
        "flask migrate init",
        "flask migration create",
        "flask initdb"
    ],
    answer: "flask db init"
},

{
    id: 32,
    question: "Which command generates migration scripts in Flask-Migrate?",
    options: [
        "flask db update",
        "flask db create",
        "flask db migrate",
        "flask db sync"
    ],
    answer: "flask db migrate"
},

{
    id: 33,
    question: "Which command applies migrations to the database?",
    options: [
        "flask db upgrade",
        "flask db apply",
        "flask db migrate",
        "flask db commit"
    ],
    answer: "flask db upgrade"
},

{
    id: 34,
    question: "What is Flask-WTF primarily used for?",
    options: [
        "Authentication",
        "Form Handling and Validation",
        "Database Operations",
        "Caching"
    ],
    answer: "Form Handling and Validation"
},

{
    id: 35,
    question: "Which security feature is automatically provided by Flask-WTF?",
    options: [
        "XSS Protection",
        "CSRF Protection",
        "SQL Encryption",
        "JWT Authentication"
    ],
    answer: "CSRF Protection"
},

{
    id: 36,
    question: "Which function is used to display temporary messages to users?",
    options: [
        "message()",
        "notify()",
        "flash()",
        "alert()"
    ],
    answer: "flash()"
},

{
    id: 37,
    question: "Which function retrieves flashed messages?",
    options: [
        "get_messages()",
        "fetch_flash()",
        "get_flashed_messages()",
        "load_messages()"
    ],
    answer: "get_flashed_messages()"
},

{
    id: 38,
    question: "Which decorator is used to handle application errors?",
    options: [
        "@app.errorhandler",
        "@app.exception",
        "@app.catcherror",
        "@app.handle"
    ],
    answer: "@app.errorhandler"
},

{
    id: 39,
    question: "What is the purpose of Flask configuration classes?",
    options: [
        "Store Application Settings",
        "Create Templates",
        "Manage Routes",
        "Handle Sessions"
    ],
    answer: "Store Application Settings"
},

{
    id: 40,
    question: "Which configuration is typically used during development?",
    options: [
        "ProductionConfig",
        "TestingConfig",
        "DevelopmentConfig",
        "DeployConfig"
    ],
    answer: "DevelopmentConfig"
},

{
    id: 41,
    question: "Which Flask object stores application configuration values?",
    options: [
        "app.settings",
        "app.config",
        "app.options",
        "app.variables"
    ],
    answer: "app.config"
},

{
    id: 42,
    question: "Which method is used to return JSON data from a Flask route?",
    options: [
        "jsonify()",
        "to_json()",
        "json_response()",
        "response_json()"
    ],
    answer: "jsonify()"
},

{
    id: 43,
    question: "Which object contains JSON data sent in a request?",
    options: [
        "request.form",
        "request.args",
        "request.json",
        "request.cookies"
    ],
    answer: "request.json"
},

{
    id: 44,
    question: "Which HTTP status code indicates successful request processing?",
    options: [
        "200",
        "300",
        "404",
        "500"
    ],
    answer: "200"
},

{
    id: 45,
    question: "Which HTTP status code indicates a resource was not found?",
    options: [
        "200",
        "201",
        "404",
        "500"
    ],
    answer: "404"
},

{
    id: 46,
    question: "What is the purpose of Flask-CORS?",
    options: [
        "Database Management",
        "Cross-Origin Resource Sharing Support",
        "Template Rendering",
        "Session Management"
    ],
    answer: "Cross-Origin Resource Sharing Support"
},

{
    id: 47,
    question: "Which Flask extension is commonly used for user authentication?",
    options: [
        "Flask-Auth",
        "Flask-Login",
        "Flask-UserManager",
        "Flask-SecurityLogin"
    ],
    answer: "Flask-Login"
},

{
    id: 48,
    question: "Which Flask-Login function logs a user into the application?",
    options: [
        "authenticate_user()",
        "login_user()",
        "sign_in_user()",
        "session_login()"
    ],
    answer: "login_user()"
},

{
    id: 49,
    question: "Which decorator restricts access to authenticated users in Flask-Login?",
    options: [
        "@authenticated",
        "@login_required",
        "@secure_login",
        "@user_required"
    ],
    answer: "@login_required"
},

{
    id: 50,
    question: "What is the primary purpose of REST APIs in Flask?",
    options: [
        "Render HTML Pages",
        "Provide Data Through HTTP Endpoints",
        "Manage Templates",
        "Create Databases"
    ],
    answer: "Provide Data Through HTTP Endpoints"
},

{
    id: 51,
    question: "What is the purpose of SQLAlchemy relationships?",
    options: [
        "Connect HTML Pages",
        "Define Relationships Between Database Models",
        "Create Routes",
        "Handle Sessions"
    ],
    answer: "Define Relationships Between Database Models"
},

{
    id: 52,
    question: "Which relationship type represents one parent with many children?",
    options: [
        "One-to-One",
        "Many-to-Many",
        "One-to-Many",
        "Many-to-One"
    ],
    answer: "One-to-Many"
},

{
    id: 53,
    question: "What is a Flask request context?",
    options: [
        "Database Connection",
        "Information About Current Request",
        "Template Configuration",
        "Session Storage"
    ],
    answer: "Information About Current Request"
},

{
    id: 54,
    question: "Which object is available only during an active request?",
    options: [
        "request",
        "config",
        "Blueprint",
        "SQLAlchemy"
    ],
    answer: "request"
},

{
    id: 55,
    question: "What is an application context in Flask?",
    options: [
        "Database Query",
        "Application-Specific Data Container",
        "Template Engine",
        "Authentication Method"
    ],
    answer: "Application-Specific Data Container"
},

{
    id: 56,
    question: "Which object provides access to the current Flask application?",
    options: [
        "current_app",
        "active_app",
        "app_context",
        "flask_app"
    ],
    answer: "current_app"
},

{
    id: 57,
    question: "What is the purpose of Flask context processors?",
    options: [
        "Add Variables to All Templates",
        "Create Databases",
        "Manage Sessions",
        "Handle APIs"
    ],
    answer: "Add Variables to All Templates"
},

{
    id: 58,
    question: "Which decorator registers a context processor?",
    options: [
        "@app.processor",
        "@app.context_processor",
        "@app.template_context",
        "@app.context"
    ],
    answer: "@app.context_processor"
},

{
    id: 59,
    question: "What is a custom decorator commonly used for in Flask?",
    options: [
        "Route Protection and Reusable Logic",
        "Database Creation",
        "Template Rendering",
        "Session Storage"
    ],
    answer: "Route Protection and Reusable Logic"
},

{
    id: 60,
    question: "Which module is commonly used for logging in Flask applications?",
    options: [
        "logger",
        "logging",
        "flasklog",
        "debug"
    ],
    answer: "logging"
},

{
    id: 61,
    question: "What is the purpose of Flask testing?",
    options: [
        "Increase Database Size",
        "Verify Application Functionality",
        "Create Routes",
        "Generate Templates"
    ],
    answer: "Verify Application Functionality"
},

{
    id: 62,
    question: "Which Flask object is commonly used for unit testing routes?",
    options: [
        "test_client()",
        "route_tester()",
        "app_test()",
        "client_test()"
    ],
    answer: "test_client()"
},

{
    id: 63,
    question: "What does JWT stand for?",
    options: [
        "Java Web Token",
        "JSON Web Token",
        "JavaScript Web Token",
        "JSON Workflow Token"
    ],
    answer: "JSON Web Token"
},

{
    id: 64,
    question: "What is the primary purpose of JWT?",
    options: [
        "Template Rendering",
        "Authentication and Authorization",
        "Database Migration",
        "Caching"
    ],
    answer: "Authentication and Authorization"
},

{
    id: 65,
    question: "Which Flask extension is commonly used for JWT authentication?",
    options: [
        "Flask-JWT-Extended",
        "Flask-Token",
        "Flask-AuthJWT",
        "Flask-SecurityJWT"
    ],
    answer: "Flask-JWT-Extended"
},

{
    id: 66,
    question: "What is Marshmallow primarily used for?",
    options: [
        "Database Connections",
        "Serialization and Validation",
        "Template Rendering",
        "Session Management"
    ],
    answer: "Serialization and Validation"
},

{
    id: 67,
    question: "What is serialization?",
    options: [
        "Converting Objects to Transferable Formats",
        "Creating Routes",
        "Generating Templates",
        "Database Optimization"
    ],
    answer: "Converting Objects to Transferable Formats"
},

{
    id: 68,
    question: "What is API versioning used for?",
    options: [
        "Database Upgrades",
        "Managing API Changes Over Time",
        "Session Storage",
        "Template Management"
    ],
    answer: "Managing API Changes Over Time"
},

{
    id: 69,
    question: "Which URL pattern is commonly used for API versioning?",
    options: [
        "/api/v1/",
        "/version1/",
        "/app/v1/",
        "/flask/v1/"
    ],
    answer: "/api/v1/"
},

{
    id: 70,
    question: "What is Celery primarily used for in Flask applications?",
    options: [
        "Template Rendering",
        "Background Task Processing",
        "Database Migration",
        "Session Management"
    ],
    answer: "Background Task Processing"
},

{
    id: 71,
    question: "Which message broker is commonly used with Celery?",
    options: [
        "Redis",
        "SQLite",
        "Bootstrap",
        "Jinja2"
    ],
    answer: "Redis"
},

{
    id: 72,
    question: "Which security feature helps prevent Cross-Site Scripting (XSS)?",
    options: [
        "Template Auto-Escaping",
        "JWT",
        "Redis",
        "Blueprints"
    ],
    answer: "Template Auto-Escaping"
},

{
    id: 73,
    question: "What is the purpose of rate limiting in APIs?",
    options: [
        "Increase Response Size",
        "Prevent Abuse and Excessive Requests",
        "Create Sessions",
        "Generate Tokens"
    ],
    answer: "Prevent Abuse and Excessive Requests"
},

{
    id: 74,
    question: "Which Flask extension is commonly used for rate limiting?",
    options: [
        "Flask-Limiter",
        "Flask-Speed",
        "Flask-Control",
        "Flask-Guard"
    ],
    answer: "Flask-Limiter"
},

{
    id: 75,
    question: "What is a major benefit of using Blueprints in large Flask applications?",
    options: [
        "Automatic Database Creation",
        "Better Code Organization and Modularity",
        "Faster HTML Rendering",
        "Automatic Authentication"
    ],
    answer: "Better Code Organization and Modularity"
},

{
    id: 76,
    question: "What does WSGI stand for?",
    options: [
        "Web Server Gateway Interface",
        "Web Service Gateway Integration",
        "Web System Gateway Interface",
        "Web Server Global Interface"
    ],
    answer: "Web Server Gateway Interface"
},

{
    id: 77,
    question: "Which production server is commonly used to run Flask applications?",
    options: [
        "Gunicorn",
        "SQLite",
        "Jinja2",
        "Pytest"
    ],
    answer: "Gunicorn"
},

{
    id: 78,
    question: "What is the primary role of Nginx in a Flask deployment?",
    options: [
        "Database Server",
        "Reverse Proxy Server",
        "Python Interpreter",
        "Template Engine"
    ],
    answer: "Reverse Proxy Server"
},

{
    id: 79,
    question: "Which file is commonly used to define Docker container instructions?",
    options: [
        "docker-compose.yml",
        "Dockerfile",
        "requirements.txt",
        "config.py"
    ],
    answer: "Dockerfile"
},

{
    id: 80,
    question: "What is the purpose of Docker in Flask deployments?",
    options: [
        "Containerization",
        "Database Management",
        "Template Rendering",
        "API Versioning"
    ],
    answer: "Containerization"
},

{
    id: 81,
    question: "Which Flask extension is commonly used for OAuth authentication?",
    options: [
        "Flask-Dance",
        "Flask-OAuth",
        "Flask-Login",
        "Flask-Session"
    ],
    answer: "Flask-Dance"
},

{
    id: 82,
    question: "What is OAuth primarily used for?",
    options: [
        "Database Migration",
        "Third-Party Authentication",
        "Template Rendering",
        "Caching"
    ],
    answer: "Third-Party Authentication"
},

{
    id: 83,
    question: "What is the purpose of HTTPS in Flask applications?",
    options: [
        "Improve Database Performance",
        "Encrypt Communication Between Client and Server",
        "Create APIs",
        "Manage Sessions"
    ],
    answer: "Encrypt Communication Between Client and Server"
},

{
    id: 84,
    question: "Which HTTP header helps protect against clickjacking attacks?",
    options: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "Accept"
    ],
    answer: "X-Frame-Options"
},

{
    id: 85,
    question: "What is OpenAPI formerly known as?",
    options: [
        "API Blueprint",
        "Swagger Specification",
        "REST Definition",
        "API Contract"
    ],
    answer: "Swagger Specification"
},

{
    id: 86,
    question: "What is the purpose of Swagger/OpenAPI?",
    options: [
        "API Documentation and Testing",
        "Database Management",
        "Authentication",
        "Session Handling"
    ],
    answer: "API Documentation and Testing"
},

{
    id: 87,
    question: "Which SQLAlchemy feature ensures database operations succeed or fail together?",
    options: [
        "Relationships",
        "Transactions",
        "Serialization",
        "Indexing"
    ],
    answer: "Transactions"
},

{
    id: 88,
    question: "What is a database connection pool?",
    options: [
        "Collection of Cached Templates",
        "Reusable Database Connections",
        "List of Queries",
        "Group of APIs"
    ],
    answer: "Reusable Database Connections"
},

{
    id: 89,
    question: "What is the primary purpose of Redis in Flask applications?",
    options: [
        "Template Engine",
        "Caching and Fast Data Storage",
        "Route Management",
        "Authentication"
    ],
    answer: "Caching and Fast Data Storage"
},

{
    id: 90,
    question: "Which caching strategy stores frequently accessed data in memory?",
    options: [
        "File Caching",
        "Memory Caching",
        "Disk Caching",
        "Static Caching"
    ],
    answer: "Memory Caching"
},

{
    id: 91,
    question: "What is a microservice architecture?",
    options: [
        "Single Large Application",
        "Application Built from Small Independent Services",
        "Desktop Application",
        "Database Cluster"
    ],
    answer: "Application Built from Small Independent Services"
},

{
    id: 92,
    question: "What is a major advantage of microservices?",
    options: [
        "Reduced Scalability",
        "Independent Deployment and Scaling",
        "Single Point of Failure",
        "Less Flexibility"
    ],
    answer: "Independent Deployment and Scaling"
},

{
    id: 93,
    question: "Which tool is commonly used to monitor Flask applications?",
    options: [
        "Prometheus",
        "Jinja2",
        "SQLite",
        "WTForms"
    ],
    answer: "Prometheus"
},

{
    id: 94,
    question: "What is the purpose of application logging?",
    options: [
        "Store HTML Templates",
        "Track Events and Troubleshoot Issues",
        "Create Sessions",
        "Generate Routes"
    ],
    answer: "Track Events and Troubleshoot Issues"
},

{
    id: 95,
    question: "What does CI/CD stand for?",
    options: [
        "Continuous Integration / Continuous Deployment",
        "Code Integration / Code Delivery",
        "Continuous Inspection / Continuous Development",
        "Central Integration / Central Deployment"
    ],
    answer: "Continuous Integration / Continuous Deployment"
},

{
    id: 96,
    question: "Which platform is commonly used for CI/CD pipelines?",
    options: [
        "GitHub Actions",
        "SQLite",
        "Jinja2",
        "Flask-WTF"
    ],
    answer: "GitHub Actions"
},

{
    id: 97,
    question: "What is horizontal scaling?",
    options: [
        "Increasing Server RAM",
        "Adding More Application Instances",
        "Increasing CPU Speed",
        "Optimizing Database Queries"
    ],
    answer: "Adding More Application Instances"
},

{
    id: 98,
    question: "Which load balancer is commonly used with Flask deployments?",
    options: [
        "Nginx",
        "SQLite",
        "Celery",
        "Marshmallow"
    ],
    answer: "Nginx"
},

{
    id: 99,
    question: "What is the purpose of health check endpoints in production systems?",
    options: [
        "Render Templates",
        "Verify Application Availability",
        "Manage Sessions",
        "Create Models"
    ],
    answer: "Verify Application Availability"
},

{
    id: 100,
    question: "What is the primary advantage of Flask for enterprise web applications?",
    options: [
        "Flexibility and Extensibility",
        "Built-in ORM Only",
        "No Configuration Required",
        "Frontend Development Only"
    ],
    answer: "Flexibility and Extensibility"
}

];