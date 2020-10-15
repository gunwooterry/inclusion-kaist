# Inclusion@KAIST

> All KAISTians are created equal.

## How to deploy
### Requirements
Deployment of this project requires [Docker](https://www.docker.com) and [Docker Compose](https://docs.docker.com/compose/) to be installed on the server. If not installed, please follow the official documentation ([Docker](https://docs.docker.com/install/), [Docker Compose](https://docs.docker.com/compose/install/)) to install.

Following files are required to start build, but not included in the repository for security. Please contact the maintainer if you need them.
- `environments/secret.env`

### Scripts
- `./scripts/deploy.sh`: Build all images and run containers.
- `./scripts/shell_to_xxx.sh`: Connect to the selected container's shell.

### Steps
1. Run `./scripts/deploy.sh`. This may require `sudo`.
2. Type `docker container ls` to confirm that all four containers (`inclusion-api`, `inclusion-mysql`, `inclusion-web`, and `inclusion-nginx`) are running.
3. To test locally, add the following line to `/etc/hosts` (for Windows, `C:\Windows\System32\Drivers\etc\hosts`).
```
127.0.0.1    inclusion.kaist.ac.kr api.inclusion.kaist.ac.kr
```
4. Access `http://inclusion.kaist.ac.kr` and `http://api.inclusion.kaist.ac.kr/admin/`. Voila!

## Create an admin account
You need an admin account to access the admin page. Follow the steps below to create one.

```
$ ./scripts/shell_to_django.sh
/code # source ../venv/bin/activate
(venv) /code # python manage.py createsuperuser
```

## Debugging
If something goes wrong, check container logs by typing `docker logs CONTAINER_NAME`. Container names are like `inclusion-xxx`.

## When you modify database schema
If you modify any `models.py` files, you need to create migration files and apply them. Follow the steps below.

```
$ ./scripts/shell_to_django.sh
/code # source ../venv/bin/activate
(venv) /code # python manage.py makemigrations
(venv) /code # python manage.py migrate
```

Don't forget to add migration files to Git.

## Contributors
- Gunwoo Kim - [gunwooterry](https://github.com/gunwooterry)
- Youngkyu Hong - [grayhong](https://github.com/grayhong)
- Jooyoung Lee - [leenoix](https://github.com/leenoix)
