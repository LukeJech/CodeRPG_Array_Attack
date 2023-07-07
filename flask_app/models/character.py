from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import session

class Character:
    db = "coderpg_db" #which database are you using for this project
    def __init__(self, data):
        self.id = data['id']
        self.user_id = data['user_id']
        self.xp = data['xp']
        self.gold = data['gold']
        # What changes need to be made above for this project?
        #What needs to be added her for class association?

# Create Characters Model
    @classmethod
    def create_character(cls, user_id):
        query = """
        INSERT INTO characters (user_id)
        VALUES (%(user_id)s)
        ;"""
        return connectToMySQL(cls.db).query_db(query, {"user_id":user_id})
    

# Update Characters Model
    @classmethod
    def update_character(cls, xp, gold):
        data = {
            'user_id': session['user_id'],
            'xp':xp,
            'gold': gold
        }
        query = """
        UPDATE characters
        SET xp = xp + %(xp)s, gold = gold + %(gold)s
        WHERE user_id = %(user_id)s
        ;"""

        return connectToMySQL(cls.db).query_db(query, data)
    
# Read Characters Model

