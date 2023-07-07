
from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
import re
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
# The above is used when we do login registration, be sure to install flask-bcrypt: pipenv install flask-bcrypt


class User:
    db = "coderpg_db" #which database are you using for this project
    def __init__(self, data):
        self.id = data['id']
        self.username = data['username']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # What changes need to be made above for this project?
        #What needs to be added her for class association?



    # Create Users Models

    @classmethod
    def create_user(cls, user_data):
        if not cls.validate_user_data(user_data):
            return False
        user_data = user_data.copy()
        user_data['password'] = bcrypt.generate_password_hash(user_data['password'])
        user_data['email'] = user_data['email'].lower().strip()
        query = """
        INSERT INTO users (username, email, password)
        VALUES (%(username)s, %(email)s, %(password)s)
        ;"""
        user_id = connectToMySQL(cls.db).query_db(query, user_data)
        session['user_id'] = user_id
        session['username'] = user_data['username']
        return user_id
    



    # Read Users Models
    @classmethod
    def get_user_by_email(cls, email):
        data = {'email': email}
        query = """
        SELECT * FROM users
        WHERE email = %(email)s
        ;"""
        users_list = connectToMySQL(cls.db).query_db(query, data)
        if users_list:
            return cls(users_list[0])
        return False



    # Update Users Models



    # Delete Users Models

    #Validations
    @staticmethod
    def validate_user_data(data):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
        is_valid = True
        if len(data['username']) < 4:
            flash("Come up with a cool username, one that is more than 3 characters please.")
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash("Invalid email address. Please enter a valid email.")
            is_valid = False
        if User.get_user_by_email(data['email'].lower().strip()):
            is_valid = False
            flash('Nice try! That email is already in use...')
        if len(data['password']) < 8:
            flash('Your password must be at least 8 character')
            is_valid = False
        if data['password'] != data['confirm_password']:
            flash('Passwords did not match. No matchy no worky!')
            is_valid = False
        return is_valid
    
    @staticmethod
    def validate_login(user_data):
        this_user = User.get_user_by_email(user_data['email'].lower().strip())
        if this_user:
            if bcrypt.check_password_hash(this_user.password, user_data['password']):  
                session['user_id'] = this_user.id
                session['username'] = this_user.username
                return True
        flash('Invalid Login Credentials')
        return False