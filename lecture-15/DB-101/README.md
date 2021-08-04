## Setting up MySQL Database and User

### Login

```shell
mysql -u root # For that idiots who didn't put a password
mysql -u root -p '<PASSWORD>' # If you've a password
```
<hr>

### Creating a User

```sql
create database <DB_NAME>;
create user <USERNAME> identified with mysql_native_password by '<PASSWORD>'; # Version > 8.0
grant all privileges on <DB_NAME>.* to <USERNAME>;
```

### Note:
```sql
flush privileges; # Ensures permission changes write on DB Successfully
```