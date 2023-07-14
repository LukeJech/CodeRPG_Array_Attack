
from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash, session
import re
from flask_bcrypt import Bcrypt
bcrypt = Bcrypt(app)
# The above is used when we do login registration, be sure to install flask-bcrypt: pipenv install flask-bcrypt


class CodeGame:
    db = "coderpg_db" #which database are you using for this project
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.name = data['name']
        self.site = data['site']
        self.language = data['language']
        self.description = data['description']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        # What changes need to be made above for this project?
        #What needs to be added her for class association?



    # Create Code Games Models
    @classmethod
    def create_code_game(cls, data):
        data = data.copy()
        data['user_id'] = session['user_id']
        query = """
        INSERT INTO code_games (user_id, name, site, language, description)
        VALUES (%(user_id)s, %(name)s, %(site)s, %(language)s, %(description)s)
        ;"""
        return connectToMySQL(cls.db).query_db(query, data)


    # Read Code Games Models
    @classmethod
    def get_all_code_games(cls):
        query = """
        SELECT * FROM code_games
        ;"""
        db_rows = connectToMySQL(cls.db).query_db(query)
        all_code_games = []
        for row in db_rows:
            all_code_games.append(cls(row))
        return all_code_games
    
    @classmethod
    def get_code_game_by_id(cls, code_game_id ):
        query = """
        SELECT * FROM code_games
        WHERE id = %(code_game_id)s
        ;"""
        code_game_data = connectToMySQL(cls.db).query_db(query, {'code_game_id':code_game_id})
        return cls(code_game_data[0])

    @classmethod
    def get_code_game_users_id(cls, code_game_id):
        query = """
        SELECT user_id FROM code_games
        WHERE id = %(code_game_id)s
        ;"""
        result = connectToMySQL(cls.db).query_db(query, {'code_game_id': code_game_id})
        return result[0]['user_id']



    # Update Code Games Models
    @classmethod
    def update_code_game(cls, data):
        query = """
        UPDATE code_games
        SET name = %(name)s, site = %(site)s, language = %(language)s, description = %(description)s
        WHERE id = %(code_game_id)s
        ;"""
        return connectToMySQL(cls.db).query_db(query, data)


    # Delete Code Games Models
    @classmethod
    def delete_code_game(cls, code_game_id):
        if cls.get_code_game_users_id(code_game_id) != session['user_id']:
            return
        query = """
        DELETE FROM code_games 
        WHERE id = %(code_game_id)s
        ;"""
        return connectToMySQL(cls.db).query_db(query, {'code_game_id': code_game_id})