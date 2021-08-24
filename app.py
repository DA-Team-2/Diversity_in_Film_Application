#import psycopg2
#import pandas as pd
from flask import Flask, render_template, redirect, request, url_for, make_response
import similarity

# Create an instance of Flask
app = Flask(__name__)

# Route to index.html template
@app.route("/")
def index():
  name = request.cookies.get('search')
  # Return index template
  return render_template("index.html", name=name)

# Get cookies
@app.route('/getcookie')
def getcookie():
  name = request.cookies.get('search')
  return name

# Set cookies
@app.route('/setcookie', methods = ['POST', 'GET'])
def setcookie():
  if request.method == 'POST':
    title = request.form['nm']
  resp = make_response(render_template('index.html'))
  resp.set_cookie('search', title)
  return resp

# Route to similarity.py and function for ML and filter
@app.route("/similarity_scores", methods=['POST'])
def similarity_scores():
  #name = request.cookies.get('search')
  name_of_movie = request.form['chosenTitle']
  similarity.similarity(name_of_movie)
  #results = filtered_similar.to_json(orient="records")
  return redirect("/")

# Route to female focused
@app.route("/femalefocused")
def femalefocused():
  # Direct to femalefocused.html
  return render_template("femalefocused.html")

# Route to international
@app.route("/international")
def international():
  # Direct to international.html
  return render_template("international.html")

# Route to low budget
@app.route("/lowbudget")
def lowbudget():
  # Direct to lowbudget.html
  return render_template("lowbudget.html")

if __name__ == "__main__":
  app.run(debug=True)