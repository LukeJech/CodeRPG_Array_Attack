from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models import code_game, user # import entire file, rather than class, to avoid circular imports

# Create Code Games Controller
@app.route('/code_games/new', methods=['POST', 'GET'])
def create_code_game():
    if 'user_id' not in session: return redirect('/')
    if request.method == 'GET':
        return render_template('new_code_game.html')
    if code_game.CodeGame.create_code_game(request.form): return redirect('/code_games')
    return render_template('new_code_game.html')


# Read Code Games Controller
@app.route('/code_games')
def show_code_games():
    if 'user_id' not in session: return redirect('/')
    return render_template('show_code_games.html', code_games = code_game.CodeGame.get_all_code_games())



# Update Code Games Controller
@app.route('/code_games/edit/<int:code_game_id>', methods=['POST','GET'])
def update_code_game(code_game_id):
    if 'user_id' not in session: return redirect('/')
    if request.method == 'GET' and session['user_id'] == code_game.CodeGame.get_code_game_users_id(code_game_id):
        return render_template('edit_code_game.html', this_code_game = code_game.CodeGame.get_code_game_by_id(code_game_id))
    if code_game.CodeGame.update_code_game(request.form): return redirect('/code_games')
    return render_template('edit_code_game.html', this_code_game = code_game.CodeGame.get_code_game_by_id(code_game_id))



# Delete Code Games Controller
@app.route('/code_games/delete/<int:code_game_id>')
def delete_code_game(code_game_id):
    if 'user_id' not in session: return redirect('/')
    code_game.CodeGame.delete_code_game(code_game_id)
    return redirect('/code_games')

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