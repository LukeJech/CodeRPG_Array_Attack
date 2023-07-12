from flask_app import app
from flask_app.config.mysqlconnection import connectToMySQL
from flask import session
import math

class Character:
    db = "coderpg_db" #which database are you using for this project
    def __init__(self, data):
        if 'characters.id' in data:
            self.id = data['characters.id']
        else:
            self.id = data['id']
        self.user_id = data['user_id']
        self.xp = data['xp']
        self.gold = data['gold']
        self.kills = data['kills']
        self.level = 0
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
    def update_character(cls, xp, gold, kills):
        data = {
            'user_id': session['user_id'],
            'xp':xp,
            'gold': gold,
            'kills': kills
        }
        query = """
        UPDATE characters
        SET xp = xp + %(xp)s, gold = gold + %(gold)s, kills = kills + %(kills)s
        WHERE user_id = %(user_id)s
        ;"""

        return connectToMySQL(cls.db).query_db(query, data)
    
# Read Characters Model

#Character level calculator
    @classmethod
    def calculate_level(cls, character):
        return math.floor(character.xp ** (1/3))
