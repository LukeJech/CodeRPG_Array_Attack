from flask_app import app
from flask import render_template, redirect, request, session
from flask_app.models import code_game, user, character # import entire file, rather than class, to avoid circular imports

# Create Users Controller
@app.route('/', methods=['POST', 'GET'])
def user_login_registration():
    if request.method == 'GET': return render_template('login_reg.html', login_email = '', registration_info = '')
    if request.form['which_form'] == 'registration_form':
        user_id = user.User.create_user(request.form)
        if user_id:
            character.Character.create_character(user_id)
            return redirect('/game')
        return render_template('login_reg.html', registration_info = request.form['email'])
    if user.User.validate_login(request.form): return redirect('/game')
    return render_template('login_reg.html', login_email = request.form['email'], registration_info = '')


# Read Users Controller
@app.route('/user/profile/<int:user_id>')
def show_user_profile(user_id):
    if 'user_id' in session: 
        return render_template('profile.html', user_info = user.User.get_user_by_id_with_character(user_id))
    return redirect('/')


# Update Users Controller



# Delete Users Controller

# Logout
@app.route('/logout')
def user_logout():
    session.clear()
    return redirect('/')

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