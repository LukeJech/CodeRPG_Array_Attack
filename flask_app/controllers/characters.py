from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models import code_game, user, character # import entire file, rather than class, to avoid circular imports

# Create Characters Controller

# Read Characters Controller

@app.route('/game')
def play_game():
    if 'user_id' in session: return render_template('gameplay.html')
    return redirect('/')


# Update Characters Controller
@app.route('/game/endrun/<int:xp>/<int:gold>')
def end_game_run(xp, gold):
    character.Character.update_character(xp, gold)
    return redirect('/game')


# Delete Characters Controller


# Notes:
# 1 - Use meaningful names
# 2 - Do not overwrite function names
# 3 - No matchy, no worky
# 4 - Use consistent naming conventions 
# 5 - Keep it clean
# 6 - Test every little line before progressing
# 7 - READ ERROR MESSAGES!!!!!!
# 8 - Error messages are found in the browser and terminal




# How to use path variables:
# @app.route('/<int:id>')
# def index(id):
#     user_info = user.User.get_user_by_id(id)
#     return render_template('index.html', user_info)

# Converter -	Description
# string -	Accepts any text without a slash (the default).
# int -	Accepts integers.
# float -	Like int but for floating point values.
# path 	-Like string but accepts slashes.